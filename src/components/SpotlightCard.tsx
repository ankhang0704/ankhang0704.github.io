"use client";

import React, { useRef, useCallback } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * SpotlightCard component (React Bits inspired).
 * Tracks cursor position and creates an interactive radial illumination highlight.
 * Optimized with direct DOM manipulation to prevent re-rendering child component trees on every mousemove.
 * Supports light and dark modes with monochromatic palette.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !spotlightRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const color =
        spotlightColor || "rgba(125, 125, 125, 0.12)";
      spotlightRef.current.style.background = `radial-gradient(450px circle at ${x}px ${y}px, ${color}, transparent 70%)`;
    },
    [spotlightColor]
  );

  const handleMouseEnter = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "1";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(450px circle at 0px 0px, ${
            spotlightColor || "rgba(125, 125, 125, 0.12)"
          }, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};
