
"use server";

import db from "@/db/drizzle";
import { challengeProgress, userProgress, lessons, units } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, and, gte, sql } from "drizzle-orm";

export const getLearningAnalytics = async () => {
    const { userId } = await auth();
    
    if (!userId) {
        throw new Error("Unauthorized");
    }

    // Get quiz performance by topic
    const quizStats = await db
        .select({
            unitTitle: units.title,
            totalQuestions: sql<number>`count(${challengeProgress.id})`,
            correctAnswers: sql<number>`count(case when ${challengeProgress.completed} = true then 1 end)`,
            accuracy: sql<number>`round(count(case when ${challengeProgress.completed} = true then 1 end) * 100.0 / count(${challengeProgress.id}), 2)`,
        })
        .from(challengeProgress)
        .innerJoin(lessons, eq(challengeProgress.challengeId, lessons.id))
        .innerJoin(units, eq(lessons.unitId, units.id))
        .where(eq(challengeProgress.userId, userId))
        .groupBy(units.id, units.title);

    // Get learning streak data
    const streakData = await db.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
    });

    // Get recent activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentActivity = await db
        .select({
            date: sql<string>`date(${challengeProgress.completedAt})`,
            questionsCompleted: sql<number>`count(*)`,
        })
        .from(challengeProgress)
        .where(
            and(
                eq(challengeProgress.userId, userId),
                gte(challengeProgress.completedAt, sevenDaysAgo.toISOString())
            )
        )
        .groupBy(sql`date(${challengeProgress.completedAt})`)
        .orderBy(sql`date(${challengeProgress.completedAt})`);

    return {
        quizStats,
        streakData,
        recentActivity,
    };
};

export const getPersonalizedRecommendations = async () => {
    const { userId } = await auth();
    
    if (!userId) {
        throw new Error("Unauthorized");
    }

    const analytics = await getLearningAnalytics();
    const recommendations = [];

    // Analyze weak areas
    const weakAreas = analytics.quizStats.filter(stat => stat.accuracy < 70);
    
    if (weakAreas.length > 0) {
        recommendations.push({
            type: "improvement",
            title: "Focus on Weak Areas",
            description: `Consider reviewing ${weakAreas.map(area => area.unitTitle).join(", ")}`,
            priority: "high",
        });
    }

    // Check learning consistency
    if (analytics.recentActivity.length < 3) {
        recommendations.push({
            type: "consistency",
            title: "Build Learning Habit",
            description: "Try to learn something new every day to build momentum",
            priority: "medium",
        });
    }

    // Suggest next topics based on performance
    const strongAreas = analytics.quizStats.filter(stat => stat.accuracy >= 85);
    if (strongAreas.length > 0) {
        recommendations.push({
            type: "advancement",
            title: "Advance Your Knowledge",
            description: "You're doing great! Consider exploring advanced topics",
            priority: "low",
        });
    }

    return recommendations;
};
