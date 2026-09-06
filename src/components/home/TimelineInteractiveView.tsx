"use client";

import { EXPERIENCE } from "@/content/experience";

type ExperienceCopy = {
  role: string;
  desc: string;
};

export function TimelineInteractiveView({
  isVi,
  dict,
}: {
  isVi: boolean;
  dict: { items: Record<(typeof EXPERIENCE)[number]["contentKey"], ExperienceCopy> };
}) {
  return (
    <div className="timeline-wrapper relative max-w-5xl pl-6 sm:pl-8 md:pl-12 border-l border-black/10 dark:border-white/10 border-b border-b-black/10 dark:border-b-white/10">
      <div className="timeline-line-active absolute top-0 left-[-1px] w-[2px] h-full bg-black dark:bg-white scale-y-0 origin-top pointer-events-none" />

      {EXPERIENCE.map((item) => {
        const copy = dict.items[item.contentKey];

        return (
          <div
            key={item.index}
            className="gsap-timeline-row group relative border-t border-black/10 dark:border-white/10 py-12 md:py-16 transition-all duration-300 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] px-2 sm:px-4 md:px-6"
          >
            <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[55px] top-14 w-4 h-4 bg-bgLight dark:bg-bgDark border-2 border-black dark:border-white group-hover:scale-125 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
              <div className="lg:col-span-4 space-y-3.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm opacity-50 font-bold">{item.index} /</span>
                  <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1 opacity-80 font-medium">
                    {isVi ? item.badgeVi : item.badgeEn}
                  </span>
                </div>

                <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  {isVi ? item.timeVi : item.timeEn}
                </div>

                {item.isActive ? (
                  <div className="inline-flex items-center gap-2.5 border border-black dark:border-white px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black">
                    <span className="w-2 h-2 bg-white dark:bg-black animate-pulse inline-block" />
                    <span>{isVi ? item.statusVi : item.statusEn}</span>
                  </div>
                ) : (
                  <span className="text-xs font-mono uppercase tracking-widest opacity-50 block font-medium">
                    {isVi ? item.statusVi : item.statusEn}
                  </span>
                )}
              </div>

              <div className="lg:col-span-8 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-10 space-y-5">
                <h4 className="font-display text-3xl md:text-4xl font-bold group-hover:translate-x-2 transition-transform duration-300 flex items-center justify-between">
                  <span>{copy.role}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xl">→</span>
                </h4>

                <p className="font-light opacity-85 text-xl leading-relaxed text-justify max-w-[65ch]">{copy.desc}</p>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/15 dark:border-white/15 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity bg-bgLight dark:bg-bgDark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
