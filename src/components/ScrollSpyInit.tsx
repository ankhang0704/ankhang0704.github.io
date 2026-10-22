"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollSpyInit() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Accessible smooth hash link clicks
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

    // 2. Pending cross-page hash / section restoration
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

    // 3. Native IntersectionObserver ScrollSpy
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) {
      return () => {
        document.removeEventListener("click", onHashLinkClick, true);
      };
    }

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".nav-link[data-section]")
    );

    const setActive = (activeSectionId: string | null) => {
      links.forEach((link) => {
        const active = Boolean(activeSectionId && link.dataset.section === activeSectionId);
        link.classList.toggle("active", active);
        if (active) {
          link.setAttribute("aria-current", "location");
        } else if (link.getAttribute("aria-current") === "location") {
          link.removeAttribute("aria-current");
        }
      });
    };

    const visibleSections = new Map<HTMLElement, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            visibleSections.set(el, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(el);
          }
        });

        if (visibleSections.size > 0) {
          let topEl: HTMLElement | null = null;
          let minTop = Infinity;
          visibleSections.forEach((top, el) => {
            const currentTop = el.getBoundingClientRect().top;
            if (Math.abs(currentTop) < minTop) {
              minTop = Math.abs(currentTop);
              topEl = el;
            }
          });
          if (topEl) {
            const sectionId = (topEl as HTMLElement).dataset.navSection || (topEl as HTMLElement).id;
            setActive(sectionId);
          }
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      document.removeEventListener("click", onHashLinkClick, true);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
