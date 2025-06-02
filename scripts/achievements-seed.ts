
import { achievements } from "@/db/schema";
import db from "@/db/drizzle";

const achievementsData = [
    // Points-based achievements
    { name: "First Steps", description: "Earn your first 10 points", icon: "🌱", category: "points", requirement: 10, points: 5 },
    { name: "Point Collector", description: "Earn 100 points", icon: "💰", category: "points", requirement: 100, points: 10 },
    { name: "Point Master", description: "Earn 500 points", icon: "💎", category: "points", requirement: 500, points: 25 },
    { name: "Point Legend", description: "Earn 1000 points", icon: "👑", category: "points", requirement: 1000, points: 50 },
    
    // Quiz-based achievements
    { name: "Quiz Starter", description: "Complete 1 quiz question", icon: "📝", category: "quiz", requirement: 1, points: 5 },
    { name: "Quiz Explorer", description: "Complete 10 quiz questions", icon: "🔍", category: "quiz", requirement: 10, points: 15 },
    { name: "Quiz Expert", description: "Complete 25 quiz questions", icon: "🎓", category: "quiz", requirement: 25, points: 30 },
    { name: "Quiz Master", description: "Complete 50 quiz questions", icon: "🏆", category: "quiz", requirement: 50, points: 50 },
    { name: "Quiz Legend", description: "Complete 100 quiz questions", icon: "⭐", category: "quiz", requirement: 100, points: 100 },
    
    // Learning streak achievements
    { name: "Consistent Learner", description: "Learn for 3 days in a row", icon: "🔥", category: "streak", requirement: 3, points: 15 },
    { name: "Dedicated Student", description: "Learn for 7 days in a row", icon: "⚡", category: "streak", requirement: 7, points: 35 },
    { name: "Learning Machine", description: "Learn for 14 days in a row", icon: "🚀", category: "streak", requirement: 14, points: 75 },
    { name: "Unstoppable", description: "Learn for 30 days in a row", icon: "💪", category: "streak", requirement: 30, points: 150 },
    
    // Goal-based achievements
    { name: "Goal Setter", description: "Create your first financial goal", icon: "🎯", category: "goals", requirement: 1, points: 25 },
    { name: "Goal Oriented", description: "Create 3 financial goals", icon: "📊", category: "goals", requirement: 3, points: 50 },
    { name: "Goal Master", description: "Create 5 financial goals", icon: "🏆", category: "goals", requirement: 5, points: 100 },
    
    // Goal completion achievements
    { name: "First Victory", description: "Complete your first financial goal", icon: "🥇", category: "goal_completion", requirement: 1, points: 75 },
    { name: "Goal Achiever", description: "Complete 3 financial goals", icon: "🌟", category: "goal_completion", requirement: 3, points: 150 },
    { name: "Financial Champion", description: "Complete 5 financial goals", icon: "👑", category: "goal_completion", requirement: 5, points: 250 },
    
    // Course completion achievements
    { name: "Course Explorer", description: "Complete your first course", icon: "📚", category: "course", requirement: 1, points: 50 },
    { name: "Multi-Learner", description: "Complete 3 courses", icon: "📖", category: "course", requirement: 3, points: 100 },
    { name: "Course Master", description: "Complete 5 courses", icon: "🎯", category: "course", requirement: 5, points: 200 },
];

async function seedAchievements() {
    try {
        console.log("Seeding achievements...");
        
        for (const achievementData of achievementsData) {
            await db.insert(achievements).values(achievementData);
        }
        
        console.log("Achievements seeded successfully!");
    } catch (error) {
        console.error("Error seeding achievements:", error);
    }
}

seedAchievements();
