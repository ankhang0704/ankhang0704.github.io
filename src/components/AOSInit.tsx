"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-color-scheme: reduce)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: prefersReducedMotion,
    });
  }, []);

  useEffect(() => {
    // Refresh AOS on every page navigation
    AOS.refresh();
    
    // Fallback refresh for dynamic content or slow hydration
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
