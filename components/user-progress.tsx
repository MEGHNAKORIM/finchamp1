import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon, Trophy } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect; 
    hearts: number;
    points: number;
    hasProSubscription?: boolean;
    onAchievementsClick?: () => void;
};

export const UserProgress = ({
    activeCourse,
    points,
    hearts,
    hasProSubscription,
    onAchievementsClick,
}: Props) => {
    return (
        <div className="flex items-bottom justify-between gap-x-2 w-full">
            <Link href="/courses">
                <Button variant="ghost">
                    <Image
                        src={activeCourse.imageSrc}
                        alt={activeCourse.title}
                        className="rounded-md border"
                        width={34}
                        height={34}
                    />
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-orange-500">
                    <Image src="/point.png" height={28} width={28} alt="Points" className="mr-2" />
                    {points}
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    <Image src="/heart.png" height={28} width={28} alt="Hearts" className="mr-2" />
                    {hasProSubscription ? <InfinityIcon className="h-4 w-4 stroke-3" /> : hearts}
                </Button>
            </Link>
            {onAchievementsClick && (
                <Button variant="ghost" className="text-purple-500" onClick={onAchievementsClick}>
                    <Trophy className="h-6 w-6" />
                </Button>
            )}
        </div>
    )
}