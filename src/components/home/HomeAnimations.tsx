"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Module-level timestamp to prevent double-execution during React StrictMode,
// client-side hydration, or Next.js route reconciliation.
let lastHeroAnimationTime = 0;

export function HomeAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".timeline-line-active", { scaleY: 1 });
        return;
      }

      const now = Date.now();
      const isRecentEntrance = now - lastHeroAnimationTime < 2500;

      // 1. Hero Entrance Timeline (Architectural curtain reveal)
      if (isRecentEntrance) {
        gsap.set([".hero-title-line", ".hero-subtitle", ".hero-cta-btn"], {
          y: 0,
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          clearProps: "transform,opacity",
        });
      } else {
        lastHeroAnimationTime = now;
        const heroTl = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        heroTl
          .fromTo(
            ".hero-title-line",
            { yPercent: 110, autoAlpha: 0, immediateRender: true },
            { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.12, clearProps: "transform,opacity" }
          )
          .fromTo(
            ".hero-subtitle",
            { y: 16, autoAlpha: 0, immediateRender: true },
            { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", clearProps: "transform,opacity" },
            "-=0.45"
          )
          .fromTo(
            ".hero-cta-btn",
            { scale: 0.94, autoAlpha: 0, immediateRender: true },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              clearProps: "transform,opacity",
            },
            "-=0.35"
          );
      }

      // 2. Section Headers (Crisp, light upward glide)
      ScrollTrigger.batch(".gsap-reveal", {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 28, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.1, ease: "power3.out" }
          ),
        start: "top 88%",
        once: true,
      });

      // 3. About Section: Dual-Axis Compositional Reveal
      const aboutContainer = containerRef.current?.querySelector(".summary-container");
      if (aboutContainer) {
        const credentials = aboutContainer.querySelector(".summary-credentials");
        const narrative = aboutContainer.querySelector(".summary-narrative");

        if (credentials && narrative) {
          gsap.fromTo(
            credentials,
            { x: -24, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: aboutContainer,
                start: "top 82%",
                once: true,
              },
            }
          );
          gsap.fromTo(
            narrative,
            { y: 30, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: aboutContainer,
                start: "top 82%",
                once: true,
              },
            }
          );
        }
      }

      // 4. Projects Showcase Cards Stagger + Parallax on Images
      const projectCards = gsap.utils.toArray<HTMLElement>(".gsap-project-card");
      if (projectCards.length > 0) {
        gsap.fromTo(
          projectCards,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-projects-grid",
              start: "top 82%",
              once: true,
            },
          }
        );

        // Tactile scroll parallax on project image frames
        projectCards.forEach((card) => {
          const img = card.querySelector(".gsap-project-img");
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: -4 },
              {
                yPercent: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.25,
                },
              }
            );
          }
        });
      }

      // 5. Technical Capability Matrix (Skills 3-Column Stagger)
      const capabilityCards = gsap.utils.toArray<HTMLElement>(".gsap-bento-card");
      if (capabilityCards.length > 0) {
        gsap.fromTo(
          capabilityCards,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".gsap-bento-grid",
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      // 6. Career Timeline Active Line Drawing on Scroll
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
            scrub: 0.25,
          },
        }
      );

      // 7. Career Timeline Items Stagger (Horizontal glide from milestone indicator)
      ScrollTrigger.batch(".gsap-timeline-row", {
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { x: -18, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.75, stagger: 0.1, ease: "power2.out" }
          ),
        start: "top 85%",
        once: true,
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return <div ref={containerRef}>{children}</div>;
}
