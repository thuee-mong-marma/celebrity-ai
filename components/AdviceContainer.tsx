'use client';

import { personas } from '@/data/personaData';
import { useAdvice } from '@/hooks/useAdvice';
import { usePersona } from '@/hooks/usePersona';
import Image from 'next/image';
import Loader from './Loader';

const AdviceContainer = () => {
  const { currentPersona } = usePersona();
  const { advice, isAdviceGenerating } = useAdvice();

  return (
    <div className="advice-container min-h-[400px] w-full p-10 max-h-fit bg-persona-background bg-full bg-no-repeat space-y-4">
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
          <p className="text-red">{personas[currentPersona].profession}</p>
        </div>
      </div>
      {isAdviceGenerating && <Loader />}
      <div className="text-white text-xl md:text-2xl text-center">{advice}</div>
    </div>
  );
};

export default AdviceContainer;
