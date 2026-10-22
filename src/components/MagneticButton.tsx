"use client";

import React, { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  maxDistance?: number;
}

/**
 * MagneticButton component (React Bits inspired).
 * Tactile cursor pull with spring damping on pointer hover.
 * Optimized with direct DOM transform manipulation for zero re-render overhead.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  strength = 0.2,
  maxDistance = 6,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (
        typeof window === "undefined" ||
        !window.matchMedia("(pointer: fine)").matches ||
        !buttonRef.current
      ) {
        return;
      }

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
      const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

      buttonRef.current.style.transition = "transform 0.1s ease-out";
      buttonRef.current.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
    },
    [strength, maxDistance]
  );

  const handleMouseLeave = useCallback(() => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transition = "transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)";
    buttonRef.current.style.transform = "translate3d(0px, 0px, 0px)";
  }, []);

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
};
