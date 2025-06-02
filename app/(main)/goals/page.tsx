
import { GoalsDashboard } from "@/components/goals-dashboard";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const GoalsPage = async () => {
    const userProgress = await getUserProgress();

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                />
            </StickyWrapper>
            <div className="flex-1">
                <GoalsDashboard />
            </div>
        </div>
    );
};

export default GoalsPage;
