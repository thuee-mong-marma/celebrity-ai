import Image from "next/image";
import { cn } from "@/lib/utils";
import { statData } from "@/data/personaData";

export type StatItemType = keyof typeof statData;

interface StatItemProps {
  statName: StatItemType;
  statValue: number;
}

const StatItem = ({statName, statValue}: StatItemProps) => {
  return (
    <li className="flex items-center justify-between text-white gap-4">
      <p className="text-xl md:text-2xl capitalize">{statName}</p>
      <Image
        src={statData[statName].imagePath}
        width={40}
        height={40}
        alt={statName}
        className="w-8 h-8 md:w-10 md:h-10"
      />
      <div className="w-[70%] h-4 md:h-5 border rounded-xl">
        <div className={cn("h-full rounded-xl transition-all bg-green-600 bg-red-600 bg-violet-900 bg-yellow-300", `${statData[statName].color}`)} style={{width: `${statValue}%`}}/>
      </div>
    </li>
  );
};

export default StatItem;
