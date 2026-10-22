"use client";

import React, { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  delay?: number; // base delay in ms
  staggerMs?: number; // delay between words in ms
  className?: string;
  animateBy?: "words" | "chars";
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * BlurText Component (React Bits inspired)
 * Editorial typographic reveal transition from soft blur to razor-sharp typography.
 * GPU-accelerated filter & transform, triggers on scroll via IntersectionObserver.
 * Safe for prefers-reduced-motion.
 */
export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  staggerMs = 70,
  className = "",
  animateBy = "words",
  as: Component = "span",
}) => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setInView(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    // @ts-expect-error dynamic component type
    <Component ref={containerRef} className={`inline-block ${className}`}>
      {elements.map((item, index) => {
        const itemDelay = delay + index * staggerMs;

        return (
          <span
            key={index}
            style={{
              transitionDelay: `${itemDelay}ms`,
            }}
            className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.2,0.65,0.3,0.9)] ${
              inView
                ? "blur-0 opacity-100 translate-y-0"
                : "blur-[8px] opacity-0 translate-y-3"
            }`}
          >
            {item}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </Component>
  );
};
