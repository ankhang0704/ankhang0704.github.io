"use client";

import React from "react";

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
  const handleClick = (e: React.MouseEvent) => {
    if (!targetId) return;
    e.preventDefault();

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });

      // Add temporary highlight ring
      targetEl.classList.add("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
      setTimeout(() => {
        targetEl.classList.remove("ring-2", "ring-black", "dark:ring-white", "ring-offset-8", "ring-offset-bgLight", "dark:ring-offset-bgDark");
      }, 2000);
    }
  };

  return (
    <button
      onClick={handleClick}
      title={
        targetId
          ? isVi
            ? `Xem dự án áp dụng: ${tech}`
            : `View project utilizing: ${tech}`
          : undefined
      }
      className={`border border-black/10 dark:border-white/10 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-wider opacity-70 hover:opacity-100 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer bg-bgLight dark:bg-bgDark text-left`}
    >
      {tech}
      {targetId && <span className="opacity-40 ml-1.5 text-[9px]">↓</span>}
    </button>
  );
}
