
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { achievements, userAchievements } from "@/db/schema";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    achievements: (typeof userAchievements.$inferSelect & {
        achievement: typeof achievements.$inferSelect;
    })[];
    allAchievements: typeof achievements.$inferSelect[];
};

export const AchievementsModal = ({
    isOpen,
    onClose,
    achievements: userAchievements,
    allAchievements,
}: Props) => {
    const earnedIds = userAchievements.map(ua => ua.achievementId);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center w-full justify-center mb-5">
                        <Image src="/point.png" alt="Achievements" height={100} width={100} />
                    </div>
                    <DialogTitle className="text-center font-bold text-indigo-950 text-2xl">
                        Your Achievements
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Keep learning to unlock more badges!
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 max-h-60 overflow-y-auto">
                    {allAchievements.map((achievement) => {
                        const isEarned = earnedIds.includes(achievement.id);
                        return (
                            <div key={achievement.id} className={`flex flex-col items-center p-3 rounded-lg border ${isEarned ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                                <div className={`text-2xl mb-2 ${isEarned ? '' : 'grayscale opacity-50'}`}>
                                    {achievement.icon}
                                </div>
                                <h3 className={`text-xs font-semibold text-center ${isEarned ? 'text-green-700' : 'text-gray-500'}`}>
                                    {achievement.name}
                                </h3>
                                <p className={`text-xs text-center mt-1 ${isEarned ? 'text-green-600' : 'text-gray-400'}`}>
                                    {achievement.description}
                                </p>
                                {isEarned && (
                                    <div className="text-xs text-green-600 font-bold mt-1">
                                        +{achievement.points} pts
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center w-full">
                    <Button
                        className="w-full"
                        size="lg"
                        variant="primary"
                        onClick={onClose}
                    >
                        Continue Learning
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
