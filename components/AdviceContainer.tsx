"use client";

import Image from "next/image";
import { usePersona } from "@/hooks/usePersona";
import { personas } from "@/data/personaData";

const AdviceContainer = () => {
  const { currentPersona } = usePersona();

  return (
    <div className="min-h-[400px] w-full p-10 max-h-fit bg-persona-background bg-full bg-no-repeat">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={personas[currentPersona].iconPath}
          alt={personas[currentPersona].name}
          width={64}
          height={64}
        />
        <div>
          <h2 className="text-2xl md:text-3xl text-white">
            {personas[currentPersona].name}
          </h2>
          <p className="text-red">
            {personas[currentPersona].profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdviceContainer;
