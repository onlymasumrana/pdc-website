"use client";
import React, { useState, useEffect } from "react";

interface LetterGlitchProps {
  text: string;
  className?: string;
  glitchProbability?: number;
  glitchInterval?: number;
}

export const LetterGlitch = ({
  text,
  className = "",
  glitchProbability = 0.1,
  glitchInterval = 100,
}: LetterGlitchProps) => {
  const [renderedText, setRenderedText] = useState(text);
  
  const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const randomizeTextChar = (textToAugment: string): string => {
    const charToReplaceIndex = Math.floor(Math.random() * textToAugment.length);
    const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    
    const textArray = textToAugment.split("");
    textArray[charToReplaceIndex] = randomChar;
    return textArray.join("");
  };

  useEffect(() => {
    const glitchIntervalId = setInterval(() => {
      if (Math.random() < glitchProbability) {
        setRenderedText(randomizeTextChar(text));
        // Reset back to original text after a short delay
        setTimeout(() => {
          setRenderedText(text);
        }, 50);
      }
    }, glitchInterval);

    return () => clearInterval(glitchIntervalId);
  }, [text, glitchProbability, glitchInterval]);

  return (
    <span 
      className={`font-mono tracking-wider ${className}`}
      style={{
        textShadow: `
          0 0 5px rgba(255, 0, 0, 0.5),
          0 0 10px rgba(0, 255, 0, 0.3),
          0 0 15px rgba(0, 0, 255, 0.2)
        `,
        animation: "glitch-flicker 0.15s infinite linear alternate-reverse"
      }}
    >
      {renderedText}
    </span>
  );
};
