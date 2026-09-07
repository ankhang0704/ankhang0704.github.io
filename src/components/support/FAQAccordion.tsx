"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Icons } from "@/components/Icons";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function FAQItem({ question, children, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set(contentRef.current, { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 });
        if (iconRef.current) gsap.set(iconRef.current, { rotation: isOpen ? 180 : 0 });
        return;
      }

      if (isOpen) {
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          }
        );
        if (iconRef.current) {
          gsap.to(iconRef.current, { rotation: 180, duration: 0.3, ease: "power2.out" });
        }
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.inOut",
        });
        if (iconRef.current) {
          gsap.to(iconRef.current, { rotation: 0, duration: 0.3, ease: "power2.out" });
        }
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className="border border-black/10 dark:border-white/10 overflow-hidden transition-colors hover:border-black/30 dark:hover:border-white/30">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center gap-4 group focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black dark:focus-visible:outline-white"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-lg md:text-xl group-hover:opacity-80 transition-opacity">
          {question}
        </span>
        <span
          ref={iconRef}
          className="flex-shrink-0 text-black dark:text-white opacity-60 group-hover:opacity-100 transition-opacity"
        >
          <Icons.ChevronDown size={20} />
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ height: defaultOpen ? "auto" : 0, opacity: defaultOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 font-light text-base md:text-lg leading-relaxed opacity-80 border-t border-black/5 dark:border-white/5 mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}
