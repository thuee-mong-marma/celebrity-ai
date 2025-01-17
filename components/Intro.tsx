"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import Personas from "@/components/Personas";
import { usePersona } from "@/hooks/usePersona";
import { Button } from "./Button";
import { personas } from "@/data/personaData";
import Link from "next/link";

const strings = [
  "Feeling trapped in a monotonous routine?",
  "Why not seek guidance from your beloved celebrities?",
  "Though not certified, their advice is surely more entertaining than venting to your cat.",
];

const Intro = () => {
  const { currentPersona } = usePersona();
  const [isFinished, setIsFinished] = useState(false);

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
        >
          <Personas />
          <Link href="/chat">
            <Button className="block w-[250px] mx-auto bg-violet text-white text-xl h-[unset] p-3">Choose {personas[currentPersona].name}</Button>
          </Link>
        </motion.div>
      )}
    </section>
  );
};

export default Intro;
