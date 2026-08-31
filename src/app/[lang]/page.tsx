import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollSpyInit } from "@/components/ScrollSpyInit";
import { HomeAnimations } from "@/components/home/HomeAnimations";
import { TechBadgeButton } from "@/components/home/TechBadgeButton";
import { SummaryInteractiveView } from "@/components/home/SummaryInteractiveView";
import { TimelineInteractiveView } from "@/components/home/TimelineInteractiveView";
import { ProjectsInteractiveView } from "@/components/home/ProjectsInteractiveView";
import { getDictionary, Locale } from "@/dictionaries/get-dictionary";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "vi" ? "vi" : "en") as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <ScrollSpyInit />
      <Header />

      <HomeAnimations>
        <main>
          {/* Hero Section */}
          <section
            id="hero"
            className="min-h-screen flex items-center relative overflow-x-hidden pt-20"
          >
            <div className="container mx-auto px-6 md:px-8 relative z-10">
              <p className="hero-badge text-sm tracking-[0.3em] uppercase mb-6 border-b border-black dark:border-white inline-block pb-2">
                Portfolio 2026
              </p>
              <h1 className="font-display text-5xl md:text-8xl font-bold leading-tight mb-6">
                <span className="hero-title-line block">{locale === "vi" ? "Xin chào," : "Hello,"}</span>
                <span className="hero-title-line block">
                  <span>{locale === "vi" ? "tôi là" : "I am"}</span>
                  <span className="font-serif italic text-6xl md:text-9xl ml-2 tracking-normal">
                    An Khang
                  </span>
                  .
                </span>
              </h1>
              <p className="hero-subtitle text-xl font-light max-w-2xl mb-12 opacity-80 leading-relaxed">
                {dict.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="#projects"
                  className="hero-cta-btn border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center w-full sm:w-auto group/btn1"
                >
                  <span>{dict.hero.viewProjects}</span>
                  <span className="ml-3 group-hover/btn1:translate-x-2 transition-transform duration-300">→</span>
                </a>
                <a
                  href="/my_cv.pdf"
                  download="Nguyen-An-Khang-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-btn bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-all flex items-center justify-center w-full sm:w-auto group/btn2"
                >
                  <span>{dict.hero.downloadCV}</span>
                  <span className="ml-3 group-hover/btn2:translate-y-1 transition-transform duration-300">↓</span>
                </a>
              </div>
            </div>
          </section>

          {/* ABOUT / SUMMARY SECTION */}
          <section
            id="about"
            className="py-32 md:py-40 bg-cardLight dark:bg-cardDark border-y border-black/5 dark:border-white/5 relative overflow-x-hidden"
          >
            <div className="container mx-auto px-6 md:px-8 relative z-10">
              <div className="max-w-3xl mb-12 gsap-reveal">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">
                  {locale === "vi" ? "Giới thiệu" : "Introduction"}
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">
                  {dict.about.title}
                </h2>
              </div>

              <SummaryInteractiveView
                isVi={locale === "vi"}
                dict={dict.about}
              />
            </div>
          </section>

          {/* TECHNICAL EXPERTISE BENTO MATRIX */}
          <section
            id="skills"
            className="py-32 md:py-40 overflow-x-hidden relative"
          >
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-3xl mb-16 gsap-reveal">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">
                  Capabilities &amp; Stack
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">
                  {dict.skills.title}
                </h2>
              </div>

              <div className="gsap-bento-grid grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl">
                {/* Bento Card 1: Core Software & Mobile Engineering (Col-Span 7) */}
                <div className="gsap-bento-card lg:col-span-7 p-8 sm:p-10 md:p-14 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark flex flex-col justify-between relative overflow-hidden group hover:border-black dark:hover:border-white transition-colors duration-500">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">
                        01 / Core Development
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1.5 opacity-80 font-medium">
                        Primary Stack
                      </span>
                    </div>

                    <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {dict.skills.devTitle}
                    </h3>
                    
                    <p className="font-light opacity-85 text-xl leading-relaxed mb-8 max-w-xl">
                      {dict.skills.devDesc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-black/5 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3.5 font-bold">
                      {locale === "vi" ? "Công nghệ & Frameworks (Bấm để xem dự án áp dụng)" : "Technologies & Frameworks (Click to view applied works)"}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { name: "Django", target: "project-hotel-management" },
                        { name: "Flutter", target: "project-fm-dictionary" },
                        { name: "Python", target: "project-hotel-management" },
                        { name: "Dart", target: "project-fm-dictionary" },
                        { name: "Next.js" },
                        { name: "React" },
                        { name: "C#" },
                        { name: "Java" },
                      ].map((item) => (
                        <TechBadgeButton
                          key={item.name}
                          tech={item.name}
                          targetId={item.target}
                          isVi={locale === "vi"}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Watermarked Number */}
                  <div className="absolute -bottom-6 -right-2 font-serif italic text-9xl opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none">
                    01
                  </div>
                </div>

                {/* Bento Card 2: Cloud & Data Ecosystem (Col-Span 5) */}
                <div className="gsap-bento-card lg:col-span-5 p-8 sm:p-10 md:p-14 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark flex flex-col justify-between relative overflow-hidden group hover:border-black dark:hover:border-white transition-colors duration-500">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">
                        02 / Cloud &amp; Data
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1.5 opacity-80 font-medium">
                        Data Layer
                      </span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {dict.skills.cloudTitle}
                    </h3>
                    
                    <p className="font-light opacity-85 text-xl leading-relaxed mb-8">
                      {dict.skills.cloudDesc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-black/5 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3.5 font-bold">
                      {locale === "vi" ? "Cơ sở dữ liệu & Đám mây" : "Databases & Cloud"}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { name: "PostgreSQL", target: "project-hotel-management" },
                        { name: "Firebase", target: "project-fm-dictionary" },
                        { name: "Hive DB", target: "project-fm-dictionary" },
                        { name: "REST APIs", target: "project-hotel-management" },
                        { name: "Cloudflare", target: "project-fm-dictionary" },
                        { name: "Git" },
                      ].map((item) => (
                        <TechBadgeButton
                          key={item.name}
                          tech={item.name}
                          targetId={item.target}
                          isVi={locale === "vi"}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Watermarked Number */}
                  <div className="absolute -bottom-6 -right-2 font-serif italic text-9xl opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none">
                    02
                  </div>
                </div>

                {/* Bento Card 3: IT Infrastructure & Reliability (Col-Span 12) */}
                <div className="gsap-bento-card lg:col-span-12 p-8 sm:p-10 md:p-14 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark relative overflow-hidden group hover:border-black dark:hover:border-white transition-colors duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                    <div className="lg:col-span-5">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] opacity-70">
                          03 / Infrastructure &amp; Reliability
                        </span>
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                        {dict.skills.infraTitle}
                      </h3>
                      <div className="inline-flex items-center gap-2.5 border border-black/10 dark:border-white/10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider opacity-90 bg-bgLight dark:bg-bgDark">
                        <span>99.8% Uptime Focus</span>
                      </div>
                    </div>

                    <div className="lg:col-span-7 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-12">
                      <p className="font-light opacity-85 text-xl leading-relaxed mb-8">
                        {dict.skills.infraDesc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {[
                          { name: "IT Operations", target: "project-it-infrastructure" },
                          { name: "Linux", target: "project-it-infrastructure" },
                          { name: "Cisco CCNA", target: "project-it-infrastructure" },
                          { name: "PowerShell", target: "project-it-infrastructure" },
                          { name: "Backup Automation", target: "project-it-infrastructure" },
                          { name: "System Monitoring", target: "project-it-infrastructure" },
                          { name: "Hardware Support" },
                        ].map((item) => (
                          <TechBadgeButton
                            key={item.name}
                            tech={item.name}
                            targetId={item.target}
                            isVi={locale === "vi"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Watermarked Number */}
                  <div className="absolute -bottom-6 -right-2 font-serif italic text-9xl opacity-[0.03] dark:opacity-[0.05] select-none pointer-events-none">
                    03
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section
            id="projects"
            className="py-32 md:py-40 bg-cardLight dark:bg-cardDark border-y border-black/5 dark:border-white/5 relative overflow-x-hidden"
          >
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-3xl mb-20 gsap-reveal">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">
                  {locale === "vi" ? "Sản phẩm thực tế" : "Selected Works"}
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">
                  {dict.projects.title}
                </h2>
              </div>

              <ProjectsInteractiveView
                lang={lang}
                isVi={locale === "vi"}
                dict={dict.projects}
              />
            </div>
          </section>

          {/* TIMELINE SECTION */}
          <section
            id="experience"
            className="py-32 md:py-40 relative overflow-x-hidden"
          >
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-3xl mb-20 gsap-reveal">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">
                  {locale === "vi" ? "Hành trình nghề nghiệp" : "Career Path"}
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">
                  {dict.timeline.title}
                </h2>
              </div>

              <TimelineInteractiveView isVi={locale === "vi"} />
            </div>
          </section>
        </main>
      </HomeAnimations>

      <Footer variant="main" />
    </>
  );
}
