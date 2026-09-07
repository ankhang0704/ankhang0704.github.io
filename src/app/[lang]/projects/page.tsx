import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { PROJECTS } from "@/content/projects";
import { getDictionary, Locale } from "@/dictionaries/get-dictionary";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "vi" ? "vi" : "en") as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header variant="main" />
      <main id="main-content" className="w-full min-w-0 pt-32 pb-24 relative overflow-x-hidden">
        <section className="container mx-auto w-full min-w-0 px-6 md:px-8">
          <div className="w-full max-w-4xl min-w-0 mb-20">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-black dark:bg-white" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-50">
                {dict.projects.label}
              </p>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold leading-tight mb-8 break-words">
              {dict.allProjects.title}
            </h1>
            <p className="w-full max-w-full font-light text-xl md:text-2xl leading-relaxed md:max-w-3xl opacity-85 break-words">
              {dict.allProjects.desc}
            </p>
          </div>

          <ProjectsShowcase
            lang={lang}
            projectsDict={dict.projects}
            projects={PROJECTS}
          />
        </section>
      </main>
      <Footer variant="main" />
    </>
  );
}
