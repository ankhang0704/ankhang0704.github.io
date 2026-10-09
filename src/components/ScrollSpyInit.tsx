"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollSpyInit() {
  const pathname = usePathname();

  useEffect(() => {
    const onHashLinkClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
        : null;
      const href = anchor?.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
      if (href === "#main-content" || !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    document.addEventListener("click", onHashLinkClick, true);

    try {
      const hash = window.location.hash ? window.location.hash.slice(1) : null;
      const targetId = sessionStorage.getItem("pending_section") || hash;
      if (targetId) {
        const pendingTarget = document.getElementById(targetId);
        if (pendingTarget) {
          sessionStorage.removeItem("pending_section");
          window.requestAnimationFrame(() => {
            pendingTarget.scrollIntoView({ behavior: "auto", block: "start" });
            if (!pendingTarget.hasAttribute("tabindex")) {
              pendingTarget.setAttribute("tabindex", "-1");
              pendingTarget.focus({ preventScroll: true });
            }
            if (targetId.startsWith("project-")) {
              pendingTarget.classList.add("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
              setTimeout(() => {
                pendingTarget.classList.remove("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
              }, 2000);
            }
          });
        }
      }
    } catch {}

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) {
      return () => {
        document.removeEventListener("click", onHashLinkClick, true);
      };
    }

    const targetSectionIds = new Set(
      sections.map((section) => section.dataset.navSection || section.id)
    );
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-link[data-section]")
    ).filter((link) => {
      const section = link.dataset.section;
      return section && targetSectionIds.has(section);
    });

    let frame = 0;
    let needsMeasure = false;
    let cachedOffsets: Array<{ id: string; navSection: string | null; top: number }> = [];

    const measureOffsets = () => {
      cachedOffsets = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          return {
            id: section.id,
            navSection: section.dataset.navSection ?? null,
            top: rect.top + window.scrollY,
          };
        })
        .sort((a, b) => a.top - b.top);
    };

    const setActive = (sectionId: string | null) => {
      links.forEach((link) => {
        const active = Boolean(sectionId && link.dataset.section === sectionId);
        link.classList.toggle("active", active);
        if (active) {
          link.setAttribute("aria-current", "location");
        } else if (link.getAttribute("aria-current") === "location") {
          link.removeAttribute("aria-current");
        }
      });
    };

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.25;
      let currentSectionId: string | null = null;
      for (let i = 0; i < cachedOffsets.length; i++) {
        const item = cachedOffsets[i];
        if (item.top <= marker) {
          currentSectionId = item.navSection ?? item.id;
        }
      }

      const atBottom = window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 50);
      if (atBottom && cachedOffsets.length > 0) {
        const last = cachedOffsets[cachedOffsets.length - 1];
        currentSectionId = last.navSection ?? last.id;
      }

      setActive(currentSectionId);
    };

    const scheduleUpdate = (measure = false) => {
      if (measure) needsMeasure = true;
      if (!frame) {
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          if (needsMeasure) {
            measureOffsets();
            needsMeasure = false;
          }
          update();
        });
      }
    };

    const onScroll = () => {
      scheduleUpdate(false);
    };

    const onResize = () => {
      scheduleUpdate(true);
    };

    // Initial measurement without reading offsetTop in scroll handler
    measureOffsets();
    update();

    // Re-measure when layout changes (fonts, images, dynamic DOM changes)
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        scheduleUpdate(true);
      });
      resizeObserver.observe(document.body);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("click", onHashLinkClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      resizeObserver?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
