"use client";

import { useEffect } from "react";

export function ScrollSpyInit() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link[data-section]"));
    let frame = 0;

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
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    };

    const setActive = (sectionId: string | null) => {
      links.forEach((link) => {
        const active = link.dataset.section === sectionId;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else if (link.getAttribute("aria-current") === "location") link.removeAttribute("aria-current");
      });
    };

    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.25;
      const current = sections.reduce<HTMLElement | null>((match, section) => {
        if (section.offsetTop <= marker) return section;
        return match;
      }, null);
      setActive(current?.dataset.navSection ?? current?.id ?? null);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();

    const pendingSection = sessionStorage.getItem("pending_section");
    const pendingTarget = pendingSection ? document.getElementById(pendingSection) : null;
    if (pendingTarget) {
      sessionStorage.removeItem("pending_section");
      window.requestAnimationFrame(() => pendingTarget.scrollIntoView({ behavior: "auto", block: "start" }));
    }

    document.addEventListener("click", onHashLinkClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      document.removeEventListener("click", onHashLinkClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
