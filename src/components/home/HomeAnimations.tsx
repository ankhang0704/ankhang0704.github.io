"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export function HomeAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Hero Entrance Timeline
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTl
        .fromTo(
          ".hero-badge",
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, delay: 0.1 }
        )
        .fromTo(
          ".hero-title-line",
          { y: 45, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.12 },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { y: 25, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta-btn",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        );

      // 2. Generic GSAP Scroll Reveals
      const revealItems = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
      revealItems.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
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

      // 4. Project Showcase Cards (Split Reveal: Image Left + Content Right)
      const projectCards = gsap.utils.toArray<HTMLElement>(".gsap-project-item");
      projectCards.forEach((card) => {
        const img = card.querySelector(".project-img-box");
        const info = card.querySelector(".project-info-box");

        if (img) {
          gsap.fromTo(
            img,
            { x: -35, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                once: true,
              },
            }
          );
        }

        if (info) {
          gsap.fromTo(
            info,
            { x: 35, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      });

      // 5. Career Timeline Active Line Drawing on Scroll
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

      // 6. Career Timeline Items Stagger
      const timelineItems = gsap.utils.toArray<HTMLElement>(".gsap-timeline-row");
      timelineItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
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
