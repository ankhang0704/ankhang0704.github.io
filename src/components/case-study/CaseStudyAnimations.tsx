"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export function CaseStudyAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // 1. Header Entrance Timeline
      const headerTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      headerTl
        .fromTo(
          ".cs-breadcrumb",
          { y: 15 },
          { y: 0, duration: 0.7, delay: 0.1 }
        )
        .fromTo(
          ".cs-title",
          { y: 35 },
          { y: 0, duration: 0.9 },
          "-=0.4"
        )
        .fromTo(
          ".cs-desc",
          { y: 20 },
          { y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".cs-tag",
          { scale: 0.95 },
          { scale: 1, duration: 0.5, stagger: 0.05 },
          "-=0.4"
        );

      // 2. Architecture Diagram Stagger
      gsap.fromTo(
        ".cs-diagram-node",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cs-diagram-section",
            start: "top 80%",
            once: true,
          },
        }
      );

      // 3. Breakdown Sections Stagger
      const breakdownRows = gsap.utils.toArray<HTMLElement>(".cs-breakdown-row");
      breakdownRows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
