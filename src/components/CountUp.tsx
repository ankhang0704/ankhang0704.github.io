"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // in seconds
  delay?: number; // in milliseconds
  separator?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * CountUp Component (React Bits inspired)
 * GPU-friendly number tween using requestAnimationFrame and easeOutExpo.
 * Triggers once when scrolled into view via IntersectionObserver.
 * Fully supports prefers-reduced-motion.
 */
export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  separator = ",",
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const [displayValue, setDisplayValue] = useState<string>(
    `${prefix}${from.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).replace(/,/g, separator)}${suffix}`
  );
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const formatted = to
        .toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
        .replace(/,/g, separator);
      const frame = window.requestAnimationFrame(() => {
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const element = containerRef.current;
    if (!element) return;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const startAnimation = () => {
      let startTime: number | null = null;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutExpo(progress);

        const currentValue = from + (to - from) * easedProgress;
        const formatted = currentValue
          .toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
          .replace(/,/g, separator);

        setDisplayValue(`${prefix}${formatted}${suffix}`);

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          const finalFormatted = to
            .toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
            .replace(/,/g, separator);
          setDisplayValue(`${prefix}${finalFormatted}${suffix}`);
        }
      };

      if (delay > 0) {
        const timeoutId = window.setTimeout(() => {
          animationFrameId = window.requestAnimationFrame(step);
        }, delay);
        return () => {
          window.clearTimeout(timeoutId);
          window.cancelAnimationFrame(animationFrameId);
        };
      } else {
        animationFrameId = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(animationFrameId);
      }
    };

    let cleanupAnimation: (() => void) | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          cleanupAnimation = startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (cleanupAnimation) cleanupAnimation();
    };
  }, [to, from, duration, delay, separator, decimals, prefix, suffix]);

  return (
    <span ref={containerRef} className={`inline-block font-mono ${className}`}>
      {displayValue}
    </span>
  );
};
