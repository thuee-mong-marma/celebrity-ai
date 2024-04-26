'use client';

import { personas } from '@/data/personaData';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/Carousel';
import { useAdvice } from '@/hooks/useAdvice';
import { usePersona } from '@/hooks/usePersona';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Persona from './Persona';

export const Personas = () => {
  const { currentPersona, setPersona } = usePersona();
  const { advice, setAdvice } = useAdvice();

  return (
    <div className="bg-persona-background bg-full bg-no-repeat px-5 py-10 md:p-10 space-y-8">
      <Carousel className="w-full border-b-4 border-[#424256] pb-10">
        <CarouselContent className="px-24 -ml-24">
          {Object.values(personas).map((persona, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div
                className={cn(
                  'p-1 flex items-center justify-center cursor-pointer opacity-40 transition-all',
                  currentPersona === persona.name ? 'opacity-100 scale-125' : ''
                )}
                onClick={() => {
                  if (advice) {
                    setAdvice('');
                  }
                  setPersona(persona.name);
                }}
              >
                <Image
                  src={persona.imagePath}
                  alt={persona.name}
                  width={296}
                  height={245}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Persona persona={personas[currentPersona]} />
    </div>
  );
};
