"use client";

import React, { useRef, useCallback } from "react";

interface GridPatternProps {
  className?: string;
  size?: number; // grid cell size in px
}

/**
 * GridPattern Component (React Bits inspired)
 * Blueprint engineering grid background with subtle mouse tracking highlight.
 * Lightweight SVG pattern with GPU radial mask on mousemove.
 * Zero React re-renders via direct DOM ref manipulation.
 */
export const GridPattern: React.FC<GridPatternProps> = ({
  className = "",
  size = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !glowRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.opacity = "1";
    glowRef.current.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(125, 125, 125, 0.08), transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Precision Blueprint Grid Lines */}
      <svg
        className="absolute inset-0 h-full w-full stroke-black/[0.04] dark:stroke-white/[0.04]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="blueprint-grid-pattern"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M.5 ${size}V.5H${size}`}
              fill="none"
              strokeDasharray="2 4"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#blueprint-grid-pattern)"
        />
      </svg>

      {/* Interactive Cursor Spotlight Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
      />
    </div>
  );
};
