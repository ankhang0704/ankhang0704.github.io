"use client";

import React, { useRef, useCallback } from "react";

interface TiltedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  glareOpacity?: number;
}

/**
 * TiltedCard Component (React Bits inspired)
 * 3D perspective tilt interaction on mouse move with subtle specular glare.
 * Optimized via direct DOM ref updates for 0 React re-renders.
 * Respects prefers-reduced-motion.
 */
export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  maxTilt = 8,
  glareOpacity = 0.15,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      if (!cardRef.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * -maxTilt;
      const tiltY = (x - 0.5) * maxTilt;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;

      if (glareRef.current) {
        glareRef.current.style.opacity = `${glareOpacity}`;
        glareRef.current.style.background = `radial-gradient(circle at ${(x * 100).toFixed(1)}% ${(y * 100).toFixed(1)}%, rgba(255, 255, 255, 0.22), transparent 70%)`;
      }
    },
    [maxTilt, glareOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;

    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    cardRef.current.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";

    if (glareRef.current) {
      glareRef.current.style.opacity = "0";
      glareRef.current.style.transition = "opacity 0.5s ease-out";
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transition = "transform 0.1s ease-out";
    if (glareRef.current) {
      glareRef.current.style.transition = "opacity 0.2s ease-out";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative [perspective:1000px] ${className}`}
      {...props}
    >
      <div
        ref={cardRef}
        className="relative h-full w-full will-change-transform [transform-style:preserve-3d]"
      >
        {children}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
