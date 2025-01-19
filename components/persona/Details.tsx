import StatItem from "../ui/StatItem";
import { StatItemType } from "../ui/StatItem";
import { personas } from "@/data/personaData";
import Heading from "@/components/ui/Heading";

const PersonaDetails = ({ persona }: { persona: string }) => {

  const personaData = personas.find(p => p.name === persona);

  if(!personaData) {
    return null;
  }

  const { name, profession, introMessage, stats } = personaData;

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="flex-1 space-y-2 text-white">
        <Heading className="border-none">{name}</Heading>
        <p className="text-2xl md:text-3xl text-danger">{profession}</p>
        <p className="text-xl md:text-2xl text-purple">{introMessage}</p>
      </div>
      <div className="flex-1 space-y-4">
        <p className="text-3xl md:text-4xl text-white">Stats:</p>
        <ul className="space-y-2">
          {Object.entries(stats).map(([key, value]) => (
            <StatItem key={key} statName={key as StatItemType} statValue={value as number}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonaDetails;
