"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Module-level timestamp to prevent double-execution during React StrictMode,
// client-side hydration, or Next.js route reconciliation.
let lastCaseStudyAnimationTime = 0;

export function CaseStudyAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const now = Date.now();
      const isRecentEntrance = now - lastCaseStudyAnimationTime < 2500;

      // 1. Header Entrance Timeline (crisp, zero initial delay, strictly single-invocation)
      if (isRecentEntrance) {
        gsap.set([".cs-breadcrumb", ".cs-title", ".cs-desc", ".cs-tag"], {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          clearProps: "transform,opacity",
        });
      } else {
        lastCaseStudyAnimationTime = now;
        const headerTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        headerTl
          .fromTo(
            ".cs-breadcrumb",
            { y: 15, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.5, clearProps: "transform,opacity" }
          )
          .fromTo(
            ".cs-title",
            { y: 25, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.7, clearProps: "transform,opacity" },
            "-=0.3"
          )
          .fromTo(
            ".cs-desc",
            { y: 15, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.6, clearProps: "transform,opacity" },
            "-=0.4"
          )
          .fromTo(
            ".cs-tag",
            { scale: 0.95, autoAlpha: 0, immediateRender: true },
            { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.04, clearProps: "transform,opacity" },
            "-=0.3"
          );
      }

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
    { scope: containerRef, dependencies: [] }
  );

  return <div ref={containerRef}>{children}</div>;
}
