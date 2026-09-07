import Image from "next/image";
import Link from "next/link";
import { ProjectDefinition, SELECTED_PROJECTS } from "@/content/projects";
import { Icons } from "@/components/Icons";
import { localizedPath } from "@/lib/locale-path";

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
  lang: string;
  dict: ProjectsDictionary;
  projects?: ProjectDefinition[];
  variant?: ProjectPresentation;
}

function ProjectActions({ project, dict, lang }: { project: ProjectDefinition; dict: ProjectsDictionary; lang: string }) {
  const caseStudyHref = project.href
    ? project.href.startsWith("/")
      ? localizedPath(lang, project.href)
      : project.href
    : undefined;
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

function ProjectImage({ project, title, className = "", number }: { project: ProjectDefinition; title: string; className?: string; number?: number }) {
  return (
    <div className={`relative overflow-hidden border border-black/10 bg-bgLight dark:border-white/10 dark:bg-bgDark ${className}`}>
      {project.image ? (
        <Image src={project.image} alt={title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="scale-105 object-cover grayscale transition-all duration-1000 group-hover:scale-100 group-hover:grayscale-0" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.25em] opacity-60">
          <span className="text-5xl font-serif italic">{project.code}</span>
          <span>Repository project</span>
        </div>
      )}
      {project.image && number && (
        <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-4 font-display text-5xl font-bold leading-none tracking-tighter text-white opacity-70 mix-blend-difference sm:bottom-5 sm:left-6 sm:text-7xl">
          {String(number).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}

function FeaturePresentation({ lang, dict, projects }: ProjectsInteractiveViewProps & { projects: ProjectDefinition[] }) {
  return (
    <div className="space-y-16 md:space-y-24">
      {projects.map((project, index) => {
        const copy = dict.items[project.contentKey];
        return (
          <article key={project.id} className="group grid grid-cols-1 gap-8 border-t border-black/15 pt-8 dark:border-white/15 lg:grid-cols-12 lg:gap-12">
            <ProjectImage project={project} title={copy.title} number={index + 1} className="aspect-[16/10] lg:col-span-7" />
            <div className="flex flex-col justify-center space-y-5 lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest opacity-50">{project.code} / {copy.category}</span>
              <h3 className="font-display text-3xl font-bold md:text-5xl">{copy.title}</h3>
              <p className="text-xl font-light leading-relaxed opacity-85">{copy.desc}</p>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => <span key={tag} className="border border-black/15 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider opacity-70 dark:border-white/15">{tag}</span>)}
              </div>
              <ProjectActions project={project} dict={dict} lang={lang} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

function GridPresentation({ lang, dict, projects }: ProjectsInteractiveViewProps & { projects: ProjectDefinition[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
      {projects.map((project, index) => {
        const copy = dict.items[project.contentKey];
        const width = projects.length === 3
          ? index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12"
          : index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4";
        return (
          <article key={project.id} className={`${width} group border border-black/10 bg-cardLight dark:border-white/10 dark:bg-cardDark`}>
            <ProjectImage project={project} title={copy.title} number={index + 1} className={`aspect-[16/10] ${index === 2 && projects.length === 3 ? "md:aspect-[2.4/1]" : ""}`} />
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-50">{project.code} / {copy.category}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{copy.title}</h3>
                </div>
                <Icons.ArrowRight size={20} aria-hidden="true" className="opacity-45 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-4 max-w-[65ch] text-base font-light leading-relaxed opacity-75">{copy.desc}</p>
              <ProjectActions project={project} dict={dict} lang={lang} />
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ProjectsInteractiveView({ lang, dict, projects = SELECTED_PROJECTS, variant = "feature" }: ProjectsInteractiveViewProps) {
  return variant === "grid"
    ? <GridPresentation lang={lang} dict={dict} projects={projects} />
    : <FeaturePresentation lang={lang} dict={dict} projects={projects} />;
}
