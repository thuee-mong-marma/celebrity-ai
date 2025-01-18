"use client";

import "swiper/css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { personas } from "@/data/personaData";
import { useAdvice } from "@/hooks/useAdvice";
import { usePersona } from "@/hooks/usePersona";
import { cn } from "@/lib/utils";
import Persona from "@/components/Persona";
import NumberedHeader from "@/components/NumberedHeader";

const Personas = () => {
  const { currentPersona, setPersona } = usePersona();
  const { advice, setAdvice } = useAdvice();

  return (
    <section className="py-5 md:py-10 space-y-4">
      <NumberedHeader>Select your therapist</NumberedHeader>
      <div className="bg-full bg-no-repeat py-4 md:py-8 space-y-8">
        <Swiper
          spaceBetween={10}
          updateOnWindowResize={true}
          grabCursor={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          initialSlide={0}
          onClick={(swiper) => {
            console.log("index", swiper.clickedIndex);
            swiper.slideTo(swiper.clickedIndex);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            480: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
          }}
        >
          {Object.values(personas).map((persona, index) => (
            <SwiperSlide key={index}>
              <div
                className={cn(
                  "p-1 flex items-center justify-center cursor-pointer opacity-40 transition-all",
                  currentPersona === persona.name ? "opacity-100 scale-110" : ""
                )}
                onClick={() => {
                  if (advice) {
                    setAdvice([]);
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
            </SwiperSlide>
          ))}
        </Swiper>
        <Link href="/chat" className="block">
          <Button className="block w-[250px] mx-auto bg-violet text-white text-xl h-[unset] p-3">
            Choose {personas[currentPersona].name}
          </Button>
        </Link>
        <Persona persona={personas[currentPersona]} />
      </div>
    </section>
  );
};

export default Personas;
