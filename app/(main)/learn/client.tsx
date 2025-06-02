"use client";

import { useState } from "react";
import { Unit } from "./unit";
import { Promo } from "@/components/promo";
import { AchievementsModal } from "@/components/achievements-modal";
import Chatbot from "@/app/ChatBot";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Header } from "./header";

interface Lesson {
    id: number;
    title: string;
    order: number;
    unitId: number;
    completed: boolean;
}

interface Unit {
    id: number;
    order: number;
    title: string;
    description: string;
    lessons: Lesson[];
}

interface ClientLearnPageProps {
    userProgress: {
        hearts: number;
        points: number;
        activeCourse: any;
    };
    units: Unit[];
    courseProgress: any;
    lessonPercentage: number;
    userAchievements: any[];
    allAchievements: any[];
}

export const ClientLearnPage = ({
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userAchievements,
    allAchievements,
}: ClientLearnPageProps) => {
    const [isAchievementsModalOpen, setIsAchievementsModalOpen] = useState(false);

    return (
        <div className="flex gap-[48px] px-6">
            <FeedWrapper>
                <Header title={userProgress.activeCourse?.title || "Learn"} />
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            title={unit.title}
                            description={unit.description}
                            lessons={unit.lessons}
                            activeLesson={courseProgress?.activeLesson}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
            <StickyWrapper>
                <UserProgress
                    activeCourse={courseProgress}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
                <Promo />
                <button 
                    onClick={() => setIsAchievementsModalOpen(true)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Achievements
                </button>
                <AchievementsModal 
                    isOpen={isAchievementsModalOpen}
                    onClose={() => setIsAchievementsModalOpen(false)}
                    achievements={userAchievements}
                    allAchievements={allAchievements}
                />
                <Chatbot />
            </StickyWrapper>
        </div>
    );
};
