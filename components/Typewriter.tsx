"use client";

import React, { useState, useEffect } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeed?: number;
  pauseBetweenWords?: number;
  onFinish?: () => void;
};

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 150,
  pauseBetweenWords = 2000,
  onFinish,
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        const updatedLines = [...displayedLines];
        if (!updatedLines[currentWordIndex])
          updatedLines[currentWordIndex] = "";
        updatedLines[currentWordIndex] = currentWord.substring(
          0,
          charIndex + 1
        );
        setDisplayedLines(updatedLines);
        setCharIndex(charIndex + 1);
      } else {
        if (currentWordIndex + 1 < words.length) {
          setCurrentWordIndex(currentWordIndex + 1);
          setCharIndex(0);
        } else if (onFinish) {
          onFinish();
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    words,
    currentWordIndex,
    charIndex,
    typingSpeed,
    displayedLines,
    onFinish,
  ]);

  return (
    <div className="typewriter text-inherit">
      {displayedLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Typewriter;
