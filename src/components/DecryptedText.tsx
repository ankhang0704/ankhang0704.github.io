"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: "view" | "mount" | "hover";
}

const DEFAULT_CHARS = "0123456789ABCDEF!@#$%&*+/?~";

/**
 * DecryptedText component (React Bits inspired).
 * Scrambles and smoothly resolves characters into the target text.
 * Strictly adheres to React 19 / ESLint hooks rules, prefers-reduced-motion, and viewport triggers.
 */
export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  maxIterations = 10,
  characters = DEFAULT_CHARS,
  className = "",
  parentClassName = "",
  animateOn = "mount",
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [prevText, setPrevText] = useState<string>(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  // Sync state during render when prop changes (React recommended pattern)
  if (text !== prevText) {
    setPrevText(text);
    setDisplayText(text);
  }

  const startAnimation = useCallback(() => {
    // Check reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (!text || text.length === 0) {
      return;
    }

    let iteration = 0;
    isAnimatingRef.current = true;

    intervalRef.current = setInterval(() => {
      iteration += 1;
      const progress = iteration / maxIterations;
      const revealedCount = Math.floor(progress * text.length);

      if (iteration >= maxIterations) {
        setDisplayText(text);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        isAnimatingRef.current = false;
        return;
      }

      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < revealedCount) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );
    }, speed);
  }, [text, speed, maxIterations, characters]);

  useEffect(() => {
    // If reduced motion is requested, do not run scramble animation
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (animateOn === "mount") {
      startAnimation();
    } else if (animateOn === "view" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, animateOn, startAnimation]);

  const handleMouseEnter = () => {
    if (animateOn === "hover" && !isAnimatingRef.current) {
      startAnimation();
    }
  };

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};
