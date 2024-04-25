import StatItem from "./StatItem";
import { StatItemType } from "./StatItem";

const Persona = ({ persona }: { persona: any }) => {
  const {
    name,
    profession,
    introMessage,
    stats,
  } = persona;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="flex-1 space-y-2 text-white">
        <p className="text-5xl">{name}</p>
        <p className="text-xl text-danger">{profession}</p>
        <p className="text-2xl text-purple">{introMessage}</p>
      </div>
      <div className="flex-1 space-y-4">
        <p className="text-3xl text-white">Stats:</p>
        <ul className="space-y-2">
          {Object.entries(stats).map(([key, value]) => (
            <StatItem key={key} statName={key as StatItemType} statValue={value as number}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Persona;
