import { Header } from "./header";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { getUserAchievements, getAllAchievements } from "@/actions/achievements";
import { ClientLearnPage } from "./client";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userAchievementsData = getUserAchievements();
    const allAchievementsData = getAllAchievements();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userAchievements,
        allAchievements
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userAchievementsData,
        allAchievementsData
    ]);

    if (!userProgress || !units || !courseProgress) {
        return redirect("/learn");
    }

    return (
        <ClientLearnPage
            userProgress={userProgress}
            units={units}
            courseProgress={courseProgress}
            lessonPercentage={lessonPercentage}
            userAchievements={userAchievements}
            allAchievements={allAchievements}
        />
    );
};

export default LearnPage;