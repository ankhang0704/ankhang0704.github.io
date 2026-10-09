"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/components/Icons";

interface TechBadgeButtonProps {
  tech: string;
  targetId?: string;
  isVi?: boolean;
}

export function TechBadgeButton({
  tech,
  targetId,
  isVi = false,
}: TechBadgeButtonProps) {
  const router = useRouter();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const highlightedElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (highlightedElRef.current) {
        highlightedElRef.current.classList.remove("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!targetId) return;
    e.preventDefault();

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center",
      });

      // Clear previous target highlight if active
      if (highlightedElRef.current && highlightedElRef.current !== targetEl) {
        highlightedElRef.current.classList.remove("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
      }

      // Add temporary highlight ring
      highlightedElRef.current = targetEl;
      targetEl.classList.add("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        targetEl.classList.remove("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
        highlightedElRef.current = null;
      }, 2000);
    } else {
      try {
        sessionStorage.setItem("pending_section", targetId);
      } catch {}
      router.push(`${isVi ? "/vi" : ""}/projects/#${targetId}`);
    }
  };

  const accessibleLabel = targetId
    ? isVi
      ? `Xem dự án áp dụng: ${tech}`
      : `View project utilizing: ${tech}`
    : undefined;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      className="border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider opacity-70 hover:opacity-100 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-150 cursor-pointer bg-bgLight dark:bg-bgDark text-left"
    >
      {tech}
      {targetId && <Icons.ChevronDown size={12} aria-hidden="true" className="ml-1.5 opacity-40" />}
    </button>
  );
}
