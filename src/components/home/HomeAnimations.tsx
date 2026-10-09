"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".timeline-line-active", { scaleY: 1 });
        return;
      }

      // 1. Hero Entrance Timeline (crisp, zero initial delay)
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTl
        .fromTo(
          ".hero-badge",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 }
        )
        .fromTo(
          ".hero-title-line",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          "-=0.45"
        )
        .fromTo(
          ".hero-cta-btn",
          { y: 15, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          "-=0.4"
        );

      // 2. Generic GSAP Scroll Reveals (batched for performance)
      ScrollTrigger.batch(".gsap-reveal", {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 40, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.15, ease: "power2.out" }
          ),
        start: "top 88%",
        once: true,
      });

      // 3. Technical Expertise Bento Cards Stagger
      const bentoCards = gsap.utils.toArray<HTMLElement>(".gsap-bento-card");
      if (bentoCards.length > 0) {
        gsap.fromTo(
          bentoCards,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".gsap-bento-grid",
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // 4. Career Timeline Active Line Drawing on Scroll
      gsap.fromTo(
        ".timeline-line-active",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top 75%",
            end: "bottom 75%",
            scrub: 0.2,
          },
        }
      );

      // 5. Career Timeline Items Stagger (batched for performance)
      ScrollTrigger.batch(".gsap-timeline-row", {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
          ),
        start: "top 85%",
        once: true,
      });
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
