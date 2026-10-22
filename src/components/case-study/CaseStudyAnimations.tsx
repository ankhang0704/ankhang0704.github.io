"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        const headerTl = gsap.timeline({ defaults: { ease: "power4.out" } });
        headerTl
          .fromTo(
            ".cs-breadcrumb",
            { y: 15, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.5, clearProps: "transform,opacity" }
          )
          .fromTo(
            ".cs-title",
            { y: 30, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.8, clearProps: "transform,opacity" },
            "-=0.3"
          )
          .fromTo(
            ".cs-desc",
            { y: 18, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", clearProps: "transform,opacity" },
            "-=0.45"
          )
          .fromTo(
            ".cs-tag",
            { scale: 0.94, autoAlpha: 0, immediateRender: true },
            { scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.05, ease: "power2.out", clearProps: "transform,opacity" },
            "-=0.35"
          );
      }

      // 2. Cover image parallax scroll
      const coverImg = containerRef.current?.querySelector(".cs-cover-img");
      if (coverImg) {
        gsap.fromTo(
          coverImg,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: coverImg.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.25,
            },
          }
        );
      }

      // 3. Architecture Diagram & Metric Nodes Stagger
      const diagramNodes = gsap.utils.toArray<HTMLElement>(".cs-diagram-node");
      if (diagramNodes.length > 0) {
        gsap.fromTo(
          diagramNodes,
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".cs-diagram-section",
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // 4. Breakdown Sections Stagger
      const breakdownRows = gsap.utils.toArray<HTMLElement>(".cs-breakdown-row");
      breakdownRows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power3.out",
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
