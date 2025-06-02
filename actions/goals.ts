
"use server";

import db from "@/db/drizzle";
import { financialGoals, goalProgress, goalCategories } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq, and, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { checkAndAwardAchievements } from "./achievements";

export const createGoal = async (
    title: string,
    description: string,
    targetAmount: number,
    targetDate: string,
    categoryId: number
) => {
    const { userId } = await auth();
    
    if (!userId) {
        throw new Error("Unauthorized");
    }

    const goal = await db.insert(financialGoals).values({
        userId,
        title,
        description,
        targetAmount,
        targetDate: new Date(targetDate),
        categoryId,
    }).returning();

    // Check for goal creation achievements
    const userGoals = await db.query.financialGoals.findMany({
        where: eq(financialGoals.userId, userId),
    });

    await checkAndAwardAchievements("goals", userGoals.length);

    revalidatePath("/goals");
    return goal[0];
};

export const updateGoalProgress = async (goalId: number, amount: number, note?: string) => {
    const { userId } = await auth();
    
    if (!userId) {
        throw new Error("Unauthorized");
    }

    // Verify goal belongs to user
    const goal = await db.query.financialGoals.findFirst({
        where: and(
            eq(financialGoals.id, goalId),
            eq(financialGoals.userId, userId)
        ),
    });

    if (!goal) {
        throw new Error("Goal not found");
    }

    // Add progress entry
    await db.insert(goalProgress).values({
        goalId,
        amount,
        note,
    });

    // Update current amount
    const newCurrentAmount = goal.currentAmount + amount;
    await db.update(financialGoals).set({
        currentAmount: newCurrentAmount,
        completedAt: newCurrentAmount >= goal.targetAmount ? new Date() : null,
    }).where(eq(financialGoals.id, goalId));

    // Check for milestone achievements
    const progressPercentage = (newCurrentAmount / goal.targetAmount) * 100;
    if (progressPercentage >= 100) {
        await checkAndAwardAchievements("goal_completion", 1);
    }

    revalidatePath("/goals");
};

export const getUserGoals = async () => {
    const { userId } = await auth();
    
    if (!userId) {
        return [];
    }

    const goals = await db.query.financialGoals.findMany({
        where: eq(financialGoals.userId, userId),
        with: {
            category: true,
            progressEntries: {
                orderBy: [desc(goalProgress.createdAt)],
                limit: 5,
            },
        },
        orderBy: [desc(financialGoals.createdAt)],
    });

    return goals;
};

export const getGoalCategories = async () => {
    return await db.query.goalCategories.findMany();
};
