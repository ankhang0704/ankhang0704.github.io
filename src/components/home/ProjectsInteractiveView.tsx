"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectDefinition, SELECTED_PROJECTS } from "@/content/projects";

type ProjectCopy = {
  type: string;
  status: string;
  category: string;
  title: string;
  desc: string;
};

interface ProjectsInteractiveViewProps {
  lang: string;
  dict: {
    viewCaseStudy: string;
    viewSource: string;
    items: Record<ProjectDefinition["contentKey"], ProjectCopy>;
  };
  projects?: ProjectDefinition[];
}

export function ProjectsInteractiveView({
  lang,
  dict,
  projects = SELECTED_PROJECTS,
}: ProjectsInteractiveViewProps) {
  return (
    <div className="space-y-24 md:space-y-36">
      {projects.map((project, index) => {
        const copy = dict.items[project.contentKey];
        const caseStudyHref = project.href
          ? project.href.startsWith("/")
            ? `/${lang}${project.href}`
            : project.href
          : undefined;
        const externalLabel = lang === "vi" ? project.externalLabelVi ?? project.externalLabel : project.externalLabel;
        const secondaryExternalLabel = lang === "vi"
          ? project.secondaryExternalLabelVi ?? project.secondaryExternalLabel
          : project.secondaryExternalLabel;

        return (
          <div
            key={project.id}
            id={project.id}
            className="gsap-project-item border border-black/15 dark:border-white/15 bg-cardLight dark:bg-cardDark relative overflow-hidden group scroll-mt-24 shadow-sm hover:border-black dark:hover:border-white transition-all duration-500"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 md:px-10 py-5 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 font-mono text-sm">
              <div className="flex items-center gap-4">
                <span className="font-bold tracking-widest text-base">{project.code}</span>
                <span className="opacity-30">|</span>
                <span className="opacity-75 tracking-wider">{copy.type}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-black dark:bg-white inline-block" />
                <span className="font-bold tracking-wider">{copy.status}</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="project-img-box lg:col-span-7 overflow-hidden relative aspect-[16/10] border border-black/10 dark:border-white/10 bg-bgLight dark:bg-bgDark">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={copy.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.25em] opacity-60">
                    <span className="text-5xl font-serif italic">{String(index + 1).padStart(2, "0")}</span>
                    <span>Repository project</span>
                  </div>
                )}
                <div className="absolute top-5 left-5 bg-black/80 text-white dark:bg-white/90 dark:text-black font-mono text-xs px-3 py-1.5 tracking-widest uppercase font-bold">
                  SPEC // {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="project-info-box lg:col-span-5 space-y-6">
                <div>
                  <span className="text-sm font-mono uppercase tracking-[0.25em] opacity-60 block mb-2 font-bold">
                    {copy.category}{project.year ? ` · ${project.year}` : ""}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold">{copy.title}</h3>
                </div>

                <p className="font-light opacity-85 text-xl leading-relaxed text-justify">{copy.desc}</p>

                <div className="flex flex-wrap gap-2.5 border-t border-black/10 dark:border-white/10 pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-3.5 py-1.5 opacity-70 group-hover:border-black dark:group-hover:border-white group-hover:opacity-100 transition-all bg-bgLight dark:bg-bgDark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-3">
                  {caseStudyHref && (
                    <Link
                      href={caseStudyHref}
                      className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center group/btn"
                    >
                      <span>{dict.viewCaseStudy}</span>
                      <span className="ml-3 group-hover/btn:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  )}
                  {project.externalHref && (
                    <a
                      href={project.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black/30 dark:border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-all flex items-center"
                    >
                      {externalLabel ?? dict.viewSource}
                    </a>
                  )}
                  {project.secondaryExternalHref && (
                    <a
                      href={project.secondaryExternalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black/20 dark:border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-widest opacity-80 hover:border-black dark:hover:border-white hover:opacity-100 transition-all flex items-center"
                    >
                      {secondaryExternalLabel ?? dict.viewSource}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
