"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { personas } from "@/data/personaData";
import { usePersona } from "@/hooks/usePersona";
import { cn } from "@/lib/utils";

const PersonaCarousel = () => {
  const { setPersona } = usePersona();

  return (
    <div className="bg-full bg-no-repeat">
      <Swiper
        spaceBetween={10}
        updateOnWindowResize={true}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        initialSlide={0}
        onClick={(swiper) => {
          //console.log("index", swiper.clickedIndex);
          swiper.slideTo(swiper.clickedIndex);
        }}
        onSlideChange={(swiper) => {
          setPersona(personas[swiper.activeIndex].name);
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
        {personas.map((persona, index) => (
          <SwiperSlide key={index}>
            <PersonaSlide persona={persona} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const PersonaSlide = ({ persona }: { persona: any }) => {
  const { currentPersona, setPersona } = usePersona();

  return (
    <div
      className={cn(
        "p-1 flex items-center justify-center cursor-pointer opacity-40 transition-all",
        currentPersona === persona.name ? "opacity-100 scale-110" : ""
      )}
      onClick={() => {
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
  );
};

export default PersonaCarousel;
