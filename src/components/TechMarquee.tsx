"use client";

import React from "react";

const TECH_ITEMS = [
  "FLUTTER",
  "DJANGO",
  "PYTHON",
  "DART",
  "TYPESCRIPT",
  "NEXT.JS",
  "POSTGRESQL",
  "DOCKER",
  "REDIS",
  "HIVE DB",
  "TAILWIND CSS",
  "LINUX",
  "CLOUDFLARE WORKERS",
  "SQLITE",
  "REST API",
  "GIT",
];

interface TechMarqueeProps {
  items?: string[];
  speedSeconds?: number;
  className?: string;
}

/**
 * TechMarquee Component (React Bits inspired)
 * Infinite velocity horizontal ticker for engineering competencies.
 * Pauses on hover, smooth 60fps GPU translate, 0px minimalist architecture.
 */
export const TechMarquee: React.FC<TechMarqueeProps> = ({
  items = TECH_ITEMS,
  speedSeconds = 35,
  className = "",
}) => {
  // Duplicate array to achieve seamless infinite looping
  const duplicated = [...items, ...items];

  return (
    <div
      className={`group relative overflow-hidden border-y border-black/10 bg-cardLight/60 py-4 dark:border-white/10 dark:bg-cardDark/60 select-none ${className}`}
      aria-label="Technologies and competencies ticker"
    >
      <div
        className="flex w-max motion-reduce:transform-none animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        {duplicated.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="flex items-center space-x-6 px-6 font-mono text-xs uppercase tracking-[0.25em] text-black/70 dark:text-white/70"
          >
            <span className="font-semibold transition-colors duration-200 group-hover:text-black dark:group-hover:text-white">
              {tech}
            </span>
            <span className="inline-block h-1.5 w-1.5 bg-black/30 dark:bg-white/30" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
