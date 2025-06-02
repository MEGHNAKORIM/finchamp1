import { boolean, integer, pgEnum, pgTable, real, serial, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const courses = pgTable("courses", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
});

export const coursesRelations = relations(courses, ({ many }) => ({
    userProgress: many(userProgress),
    units: many(units),
}));

export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(), // unit 1
    description: text("description").notNull(), // learn the basics
    courseId: integer("course_id").references(() => courses.id, { onDelete: "cascade" }).notNull(),
    order: integer("order").notNull(),
});

export const unitsRelations = relations(units, ({ many, one }) => ({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id],
    }),
    lessons: many(lessons),
}));

export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    unitId: integer("unit_id").references(() => units.id, { onDelete: "cascade" }).notNull(),
    order: integer("order").notNull(),
});

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id],
    }),
    challenges: many(challenges),
}));

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST", "VIDEO"]);

export const challenges = pgTable("challenges", {
    id: serial("id").primaryKey(),
    lessonId: integer("lesson_id").references(() => lessons.id, { onDelete: "cascade" }).notNull(),
    type: challengesEnum("type").notNull(),
    question: text("question"),
    order: integer("order").notNull(),
    videoSrc: text("video_src"),
});

export const challengesRelations = relations(challenges, ({ one, many }) => ({
    lesson: one(lessons, {
        fields: [challenges.lessonId],
        references: [lessons.id],
    }),
    challengeOptions: many(challengeOptions),
    challengeProgress: many(challengeProgress),
}));

export const challengeOptions = pgTable("challenge-options", {
    id: serial("id").primaryKey(),
    challengeId: integer("challenge_id").references(() => challenges.id, { onDelete: "cascade" }).notNull(),
    text: text("text").notNull(),
    correct: boolean("correct").notNull(),
    imageSrc: text("image_src"),
    audioSrc: text("audio_src"),
});

export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeOptions.challengeId],
        references: [challenges.id],
    }),
}));

export const challengeProgress = pgTable("challenge-progress", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    challengeId: integer("challenge_id").references(() => challenges.id, { onDelete: "cascade" }).notNull(),
    completed: boolean("completed").notNull().default(false),
});

export const challengeProgressRelations = relations(challengeProgress, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeProgress.challengeId],
        references: [challenges.id],
    }),
}));

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(),
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/icon.png"),
    activeCourseId: integer("active_course_id").references(() => courses.id, { onDelete: "cascade" }),
    hearts: integer("hearts").notNull().default(10),
    points: integer("points").notNull().default(0),
});

export const userProgressRelations = relations(userProgress, ({ one, many }) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id],
    }),
    userAchievements: many(userAchievements),
}));

export const achievements = pgTable("achievements", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    icon: text("icon").notNull(),
    category: text("category").notNull(), // "quiz", "course", "streak", "points"
    requirement: integer("requirement").notNull(), // points needed, streak days, etc.
    points: integer("points").notNull().default(0), // points awarded for earning this badge
});

export const achievementsRelations = relations(achievements, ({ many }) => ({
    userAchievements: many(userAchievements),
}));

export const userAchievements = pgTable("user_achievements", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    achievementId: integer("achievement_id").references(() => achievements.id, { onDelete: "cascade" }).notNull(),
    earnedAt: text("earned_at").notNull(),
});

export const userAchievementsRelations = relations(userAchievements, ({ one }) => ({
    achievement: one(achievements, {
        fields: [userAchievements.achievementId],
        references: [achievements.id],
    }),
    user: one(userProgress, {
        fields: [userAchievements.userId],
        references: [userProgress.userId],
    }),
}));




// Financial Goals tables
export const goalCategories = pgTable("goal_categories", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    icon: text("icon").notNull(),
});

export const financialGoals = pgTable("financial_goals", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    categoryId: integer("category_id").references(() => goalCategories.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    description: text("description"),
    targetAmount: real("target_amount").notNull(),
    currentAmount: real("current_amount").default(0),
    targetDate: timestamp("target_date"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    completedAt: timestamp("completed_at"),
    isActive: boolean("is_active").default(true),
});

export const goalProgress = pgTable("goal_progress", {
    id: serial("id").primaryKey(),
    goalId: integer("goal_id").references(() => financialGoals.id, { onDelete: "cascade" }),
    amount: real("amount").notNull(),
    note: text("note"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const goalCategoriesRelations = relations(goalCategories, ({ many }) => ({
    goals: many(financialGoals),
}));

export const financialGoalsRelations = relations(financialGoals, ({ one, many }) => ({
    category: one(goalCategories, {
        fields: [financialGoals.categoryId],
        references: [goalCategories.id],
    }),
    progressEntries: many(goalProgress),
}));

export const goalProgressRelations = relations(goalProgress, ({ one }) => ({
    goal: one(financialGoals, {
        fields: [goalProgress.goalId],
        references: [financialGoals.id],
    }),
}));
