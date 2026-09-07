import Link from "next/link";
import { ProjectDefinition, SELECTED_PROJECTS } from "@/content/projects";
import { ProjectsInteractiveView } from "@/components/home/ProjectsInteractiveView";
import { localizedPath } from "@/lib/locale-path";

type ProjectCopy = {
  type: string;
  status: string;
  category: string;
  title: string;
  desc: string;
};

type ProjectsDictionary = {
  label: string;
  title: string;
  viewCaseStudy: string;
  viewSource: string;
  items: Record<ProjectDefinition["contentKey"], ProjectCopy>;
};

type IndexDictionary = {
  label: string;
  title: string;
  desc: string;
  cta: string;
};

interface ProjectsShowcaseProps {
  lang: string;
  projectsDict: ProjectsDictionary;
  projects?: ProjectDefinition[];
  home?: boolean;
}

export function ProjectsShowcase({ lang, projectsDict, projects = SELECTED_PROJECTS, home = false }: ProjectsShowcaseProps) {
  if (!home) {
    return <ProjectsInteractiveView lang={lang} dict={projectsDict} projects={projects} variant="feature" />;
  }

  return (
    <section id="projects" data-nav-section="projects" className="relative overflow-x-hidden border-y border-black/5 bg-cardLight py-32 dark:border-white/5 dark:bg-cardDark md:py-40">
      <div className="container mx-auto px-6 md:px-8">
        <div className="gsap-reveal mb-12 max-w-3xl md:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{projectsDict.label}</p>
          <h2 className="font-display text-4xl font-bold md:text-6xl">{projectsDict.title}</h2>
        </div>
        <ProjectsInteractiveView lang={lang} dict={projectsDict} projects={projects} variant="grid" />
      </div>
    </section>
  );
}

export function ProjectIndexShowcase({ lang, dict }: { lang: string; dict: IndexDictionary }) {
  return (
    <section id="all-projects" data-nav-section="projects-index" className="py-24 md:py-32 bg-cardLight dark:bg-cardDark border-y border-black/5 dark:border-white/5 relative overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
        <div className="lg:col-span-7 gsap-reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-black dark:bg-white" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">{dict.label}</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">{dict.title}</h2>
          <p className="font-light text-xl leading-relaxed opacity-85 max-w-2xl">{dict.desc}</p>
        </div>
        <div className="lg:col-span-5 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-10">
          <Link href={localizedPath(lang, "/projects/")} className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all inline-flex items-center justify-between gap-3 w-full">
            {dict.cta}<span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
