"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectDefinition, SELECTED_PROJECTS } from "@/content/projects";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/SpotlightCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TiltedCard } from "@/components/TiltedCard";

export type ProjectPresentation = "feature" | "grid";

type ProjectCopy = {
  type: string;
  status: string;
  category: string;
  title: string;
  desc: string;
};

type ProjectsDictionary = {
  viewCaseStudy: string;
  viewSource: string;
  items: Record<ProjectDefinition["contentKey"], ProjectCopy>;
};

interface ProjectsInteractiveViewProps {
  lang?: string;
  dict?: ProjectsDictionary;
  projects?: ProjectDefinition[];
  variant?: ProjectPresentation;
}

function ProjectActions({ project, dict, lang }: { project: ProjectDefinition; dict: ProjectsDictionary; lang: string }) {
  const caseStudyHref = project.href;
  const externalLabel = lang === "vi" ? project.externalLabelVi ?? project.externalLabel : project.externalLabel;
  const secondaryExternalLabel = lang === "vi"
    ? project.secondaryExternalLabelVi ?? project.secondaryExternalLabel
    : project.secondaryExternalLabel;

  return (
    <div className="flex flex-wrap gap-3 pt-4">
      {caseStudyHref && (
        <Link href={caseStudyHref} className="inline-flex items-center gap-3 border border-black px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
          {dict.viewCaseStudy}<Icons.ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
      {project.externalHref && (
        <a href={project.externalHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-black/30 px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:border-black dark:border-white/30 dark:hover:border-white">
          {externalLabel ?? dict.viewSource}
        </a>
      )}
      {project.secondaryExternalHref && (
        <a href={project.secondaryExternalHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-black/20 px-5 py-3 text-xs font-bold uppercase tracking-widest opacity-80 transition-all hover:border-black hover:opacity-100 dark:border-white/20 dark:hover:border-white">
          {secondaryExternalLabel ?? dict.viewSource}
        </a>
      )}
    </div>
  );
}

function ProjectImage({
  project,
  title,
  className = "",
  lang,
}: {
  project: ProjectDefinition;
  title: string;
  className?: string;
  lang?: string;
}) {
  const isVi = lang === "vi";
  const statusLabel = project.statusBadge ? (isVi ? project.statusBadge.vi : project.statusBadge.en) : null;

  return (
    <TiltedCard maxTilt={5} className={className}>
      <div className="relative overflow-hidden border border-black/10 bg-bgLight dark:border-white/10 dark:bg-bgDark flex flex-col h-full w-full">
        {/* Precision Engineering Viewport Header */}
        <div className="flex items-center justify-between px-3.5 py-2 border-b border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark z-10 text-[10px] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black dark:bg-white inline-block" />
            <span className="opacity-90 font-bold">{project.code}</span>
          </div>
          {statusLabel && (
            <span className="opacity-75 tracking-widest">{statusLabel}</span>
          )}
        </div>

        {/* Viewport Image Area */}
        <div className="relative flex-1 w-full min-h-[220px] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.25em] opacity-60">
              <span className="text-3xl font-mono font-bold tracking-tight opacity-75">{project.code}</span>
              <span>Documented Repository</span>
            </div>
          )}

          {/* Real Engineering Specs Badge Overlay */}
          {project.specs && project.specs.length > 0 && (
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
              {project.specs.map((spec) => (
                <span
                  key={spec}
                  className="bg-black/80 dark:bg-white/90 text-white dark:text-black text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 border border-white/20 dark:border-black/20 backdrop-blur-sm font-semibold"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </TiltedCard>
  );
}

function FeaturePresentation({ lang, dict, projects }: { lang: string; dict: ProjectsDictionary; projects: ProjectDefinition[] }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {projects.map((project, index) => {
        const copy = dict.items[project.contentKey];
        return (
          <RevealOnScroll key={project.id} delay={index * 100}>
            <article id={project.id} className="group grid grid-cols-1 gap-8 border-t border-black/15 pt-8 dark:border-white/15 lg:grid-cols-12 lg:gap-12 scroll-mt-24">
              <ProjectImage project={project} title={copy.title} lang={lang} className="aspect-[16/10] lg:col-span-7" />
              <div className="flex flex-col justify-center space-y-5 lg:col-span-5">
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">{project.code} / {copy.category}</span>
                <h3 className="font-display text-3xl font-bold md:text-5xl">{copy.title}</h3>
                <p className="text-xl font-light leading-relaxed opacity-85">{copy.desc}</p>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => <span key={tag} className="border border-black/15 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider opacity-75 dark:border-white/15">{tag}</span>)}
                </div>
                <ProjectActions project={project} dict={dict} lang={lang} />
              </div>
            </article>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}

function GridPresentation({ lang, dict, projects }: { lang: string; dict: ProjectsDictionary; projects: ProjectDefinition[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
      {projects.map((project, index) => {
        const copy = dict.items[project.contentKey];
        const width = projects.length === 3
          ? index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12"
          : index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4";
        return (
          <RevealOnScroll key={project.id} className={width} delay={index * 100}>
            <SpotlightCard className="h-full group border border-black/10 bg-cardLight dark:border-white/10 dark:bg-cardDark scroll-mt-24 flex flex-col justify-between hover:border-black dark:hover:border-white transition-colors duration-300">
              <article id={project.id} className="flex flex-col h-full justify-between">
                <div>
                  <ProjectImage project={project} title={copy.title} lang={lang} className={`aspect-[16/10] ${index === 2 && projects.length === 3 ? "md:aspect-[2.4/1]" : ""}`} />
                  <div className="p-5 md:p-6 flex flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-widest opacity-60">{project.code} / {copy.category}</span>
                        <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{copy.title}</h3>
                      </div>
                      <Icons.ArrowRight size={20} aria-hidden="true" className="opacity-50 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                    <p className="mt-4 max-w-[65ch] text-base font-light leading-relaxed opacity-80">{copy.desc}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 pt-0">
                  <ProjectActions project={project} dict={dict} lang={lang} />
                </div>
              </article>
            </SpotlightCard>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}

export function ProjectsInteractiveView({
  lang: propLang,
  dict: propDict,
  projects = SELECTED_PROJECTS,
  variant = "feature",
}: ProjectsInteractiveViewProps) {
  const { lang: contextLang, dict: contextDict } = useLanguage();
  const lang = propLang ?? contextLang;
  const dict = propDict ?? contextDict.projects;

  return variant === "grid"
    ? <GridPresentation lang={lang} dict={dict} projects={projects} />
    : <FeaturePresentation lang={lang} dict={dict} projects={projects} />;
}
