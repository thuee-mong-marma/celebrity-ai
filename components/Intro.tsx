"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Personas from "@/components/Personas";
import { usePersona } from "@/hooks/usePersona";

const strings = [
  "Feeling trapped in a monotonous routine?",
  "Why not seek guidance from your beloved celebrities?",
  "Though not certified, their advice is surely more entertaining than venting to your cat.",
];

const Intro = () => {
  const { currentPersona } = usePersona();
  const [isFinished, setIsFinished] = useState(false);
  const personaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(isFinished) {
      personaRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, [isFinished]);

  return (
    <section>
      <div className="flex flex-col items-center md:flex-row gap-6">
        <Image
          src="/images/images/questioned-cat.png"
          alt="cat"
          width={96}
          height={96}
          className="w-24 h-24 min-w-24 min-h-24"
        />
        <div className="text-white text-xl md:text-2xl leading-7">
          <Typewriter
            words={strings}
            typingSpeed={70}
            onFinish={() => {
              setIsFinished(true);
            }}
          />
        </div>
      </div>
      {isFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          ref={personaRef}
        >
          <Personas />
        </motion.div>
      )}
    </section>
  );
};

export default Intro;
