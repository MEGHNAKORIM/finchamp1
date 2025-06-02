
"use server";

import db from "@/db/drizzle";
import { achievements, userAchievements, userProgress } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const checkAndAwardAchievements = async (type: string, value: number) => {
    const { userId } = await auth();
    
    if (!userId) {
        throw new Error("Unauthorized");
    }

    // Get user's current achievements
    const userEarnedAchievements = await db.query.userAchievements.findMany({
        where: eq(userAchievements.userId, userId),
    });

    const earnedAchievementIds = userEarnedAchievements.map(ua => ua.achievementId);

    // Get achievements that user hasn't earned yet for this category
    const availableAchievements = await db.query.achievements.findMany({
        where: and(
            eq(achievements.category, type),
        ),
    });

    const unearned = availableAchievements.filter(a => !earnedAchievementIds.includes(a.id));

    // Check which achievements the user has now qualified for
    const newlyEarned = unearned.filter(achievement => {
        return value >= achievement.requirement;
    });

    // Award new achievements
    for (const achievement of newlyEarned) {
        await db.insert(userAchievements).values({
            userId,
            achievementId: achievement.id,
            earnedAt: new Date().toISOString(),
        });

        // Award points for the achievement
        const currentUser = await db.query.userProgress.findFirst({
            where: eq(userProgress.userId, userId),
        });

        if (currentUser) {
            await db.update(userProgress).set({
                points: currentUser.points + achievement.points,
            }).where(eq(userProgress.userId, userId));
        }
    }

    if (newlyEarned.length > 0) {
        revalidatePath("/learn");
        revalidatePath("/shop");
        revalidatePath("/leaderboard");
    }

    return newlyEarned;
};

export const getUserAchievements = async () => {
    const { userId } = await auth();
    
    if (!userId) {
        return [];
    }

    const userEarnedAchievements = await db.query.userAchievements.findMany({
        where: eq(userAchievements.userId, userId),
        with: {
            achievement: true,
        },
    });

    return userEarnedAchievements;
};

export const getAllAchievements = async () => {
    const allAchievements = await db.query.achievements.findMany();
    return allAchievements;
};
