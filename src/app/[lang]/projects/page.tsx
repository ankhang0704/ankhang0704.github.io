import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectsInteractiveView } from "@/components/home/ProjectsInteractiveView";
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
      <main className="pt-32 pb-24 relative overflow-x-hidden">
        <section className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-50">
              {dict.projects.label}
            </p>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-tight mb-8">
              {dict.allProjects.title}
            </h1>
            <p className="font-light text-xl md:text-2xl leading-relaxed max-w-3xl opacity-85">
              {dict.allProjects.desc}
            </p>
          </div>

          <ProjectsInteractiveView lang={lang} dict={dict.projects} projects={PROJECTS} />
        </section>
      </main>
      <Footer variant="main" />
    </>
  );
}
