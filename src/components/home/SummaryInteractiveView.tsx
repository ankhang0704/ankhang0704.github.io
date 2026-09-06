"use client";

interface SummaryInteractiveViewProps {
  dict: {
    lead: string;
    p1: string;
    p2: string;
    hospital: string;
    hospitalRole: string;
    degree: string;
    degreeRole: string;
    fm: string;
    fmRole: string;
    tag1: string;
    tag2: string;
  };
}

export function SummaryInteractiveView({ dict }: SummaryInteractiveViewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      <div className="lg:col-span-4 space-y-8">
        <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-5 font-mono opacity-90">
          {[
            [dict.hospital, dict.hospitalRole],
            [dict.degree, dict.degreeRole],
            [dict.fm, dict.fmRole],
          ].map(([title, subtitle]) => (
            <div key={title} className="flex items-start gap-3.5">
              <span className="w-2 h-2 bg-black dark:bg-white mt-2 flex-shrink-0" />
              <div>
                <span className="text-base sm:text-lg font-bold block leading-snug">{title}</span>
                <span className="opacity-70 text-xs sm:text-sm block mt-0.5">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 pt-2">
          {[dict.tag1, dict.tag2].map((tag) => (
            <span
              key={tag}
              className="border border-black/20 dark:border-white/20 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider opacity-80 bg-bgLight dark:bg-bgDark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="lg:col-span-8 space-y-10 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-12">
        <p className="font-display text-3xl sm:text-4xl font-light leading-relaxed text-justify tracking-tight">
          {dict.lead}
        </p>
        <div className="space-y-6 text-xl md:text-2xl font-light opacity-85 leading-relaxed text-justify border-t border-black/10 dark:border-white/10 pt-8">
          <p>{dict.p1}</p>
          <p>{dict.p2}</p>
        </div>
      </div>
    </div>
  );
}
