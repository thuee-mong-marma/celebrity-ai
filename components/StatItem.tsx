import Image from "next/image";
import { cn } from "@/lib/utils";

export type StatItemType = keyof typeof statData;

interface StatItemProps {
  statName: StatItemType;
  statValue: number;
}

const statData = {
  chill: {
    imagePath: "/images/svg/pixel-weed.svg",
    color: "bg-green",
  },
  love: {
    imagePath: "/images/svg/pixel-heart.svg",
    color: "bg-red",
  },
  bold: {
    imagePath: "/images/svg/pixel-bomb.svg",
    color: "bg-violet"
  },
  fun: {
    imagePath: "/images/svg/pixel-haha-emoji.svg",
    color: "bg-yellow"
  },
};

const StatItem = ({statName, statValue}: StatItemProps) => {
  return (
    <li className="flex items-center justify-between gap-4">
      <p className="text-2xl text-purple capitalize">{statName}</p>
      <Image
        src={statData[statName].imagePath}
        width={40}
        height={40}
        alt={statName}
      />
      <div className="w-[70%] h-5 border border-purple rounded-xl">
        <div className={cn("h-full rounded-xl transition-all", statData[statName].color)} style={{width: `${statValue}%`}}/>
      </div>
    </li>
  );
};

export default StatItem;
