"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TechBadgeButton } from "@/components/home/TechBadgeButton";
import { SummaryInteractiveView } from "@/components/home/SummaryInteractiveView";
import { TimelineInteractiveView } from "@/components/home/TimelineInteractiveView";
import { ProjectIndexShowcase, ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { DecryptedText } from "@/components/DecryptedText";
import { SpotlightCard } from "@/components/SpotlightCard";
import { MagneticButton } from "@/components/MagneticButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CountUp } from "@/components/CountUp";
import { TechMarquee } from "@/components/TechMarquee";
import { GridPattern } from "@/components/GridPattern";

export default function Home() {
  const { lang, dict, isVi } = useLanguage();

  return (
    <>
      <Header />

      <main id="main-content">
        <section id="hero" className="min-h-[100dvh] flex items-center relative overflow-x-hidden pt-20">
          <GridPattern />
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.1] mb-6">
              <span className="block overflow-hidden pb-2">
                <span className="hero-title-line block">
                  <DecryptedText text="Software" speed={35} maxIterations={12} animateOn="mount" />
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="hero-title-line block">
                  <DecryptedText text="Developer" speed={35} maxIterations={12} animateOn="mount" />
                  <span className="font-light text-4xl sm:text-5xl md:text-7xl ml-3 tracking-tight opacity-80 inline-block">· An Khang</span>
                </span>
              </span>
            </h1>
            <p className="hero-subtitle text-xl font-light max-w-2xl mb-12 opacity-80 leading-relaxed">
              {dict.hero.subtitle}
            </p>

            <div>
              <MagneticButton strength={0.16}>
                <a
                  href="#projects"
                  className="hero-cta-btn border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 inline-flex items-center justify-center w-full sm:w-auto group/btn1"
                >
                  <span>{dict.hero.viewProjects}</span>
                  <Icons.ArrowRight size={16} aria-hidden="true" className="ml-3 transition-transform duration-300 group-hover/btn1:translate-x-2" />
                </a>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* React Bits: Infinite Tech Velocity Ticker */}
        <TechMarquee />

        {/* React Bits: Engineering Metrics Counter */}
        <section className="border-b border-black/10 dark:border-white/10 bg-bgLight dark:bg-bgDark py-12">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <RevealOnScroll delay={50} className="border-l border-black/15 dark:border-white/15 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
                  <CountUp to={1847} duration={2} separator="," />
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest opacity-60">
                  {isVi ? "Thuật ngữ FM đã số hóa" : "FM Domain Terms"}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={120} className="border-l border-black/15 dark:border-white/15 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
                  <CountUp to={3} duration={1.5} suffix="+" />
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest opacity-60">
                  {isVi ? "Kiến trúc hoàn thiện" : "Core Architectures"}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={190} className="border-l border-black/15 dark:border-white/15 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
                  <CountUp to={100} duration={1.8} suffix="%" />
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest opacity-60">
                  {isVi ? "Xuất HTML tĩnh & bảo mật" : "Static HTML Export"}
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={260} className="border-l border-black/15 dark:border-white/15 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono tracking-tight text-black dark:text-white">
                  <CountUp to={0} duration={1} suffix="ms" />
                </div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest opacity-60">
                  {isVi ? "Độ trễ chuyển ngữ client" : "Language Toggle Latency"}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-32 md:py-40 bg-cardLight dark:bg-cardDark border-y border-black/5 dark:border-white/5 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <RevealOnScroll direction="up" delay={50} className="max-w-3xl mb-12">
              <h2 className="font-display text-4xl md:text-6xl font-bold">{dict.about.title}</h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={120}>
              <SummaryInteractiveView dict={dict.about} />
            </RevealOnScroll>
          </div>
        </section>

        <ProjectsShowcase
          lang={lang}
          projectsDict={dict.projects}
          home
        />

        <section id="skills" className="scroll-mt-24 py-32 md:py-40 overflow-x-hidden relative">
          <div className="container mx-auto px-6 md:px-8">
            <RevealOnScroll direction="up" delay={50} className="max-w-3xl mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold">{dict.skills.title}</h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
              {/* Column 1: Software & Applications */}
              <RevealOnScroll direction="up" delay={80}>
                <SpotlightCard className="h-full p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark flex flex-col justify-between hover:border-black dark:hover:border-white transition-[border-color] duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1.5 opacity-80 font-medium">Primary</span>
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">{dict.skills.devTitle}</h3>
                    <p className="font-light opacity-85 text-lg leading-relaxed mb-8">{dict.skills.devDesc}</p>
                  </div>
                  <div className="pt-6 border-t border-black/5 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3.5 font-bold">{dict.skills.stackLabel}</div>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        { name: "Django", target: "project-hotel-management" },
                        { name: "Flutter", target: "project-fm-dictionary" },
                        { name: "Python", target: "project-python-ip-checker" },
                        { name: "Dart", target: "project-fm-dictionary" },
                        { name: "WordPress", target: "project-koi-phan-thiet" },
                        { name: "JavaScript" },
                      ].map((item) => (
                        <TechBadgeButton key={item.name} tech={item.name} targetId={item.target} isVi={isVi} />
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>

              {/* Column 2: Architecture & Data */}
              <RevealOnScroll direction="up" delay={160}>
                <SpotlightCard className="h-full p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark flex flex-col justify-between hover:border-black dark:hover:border-white transition-[border-color] duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1.5 opacity-80 font-medium">Practical</span>
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">{dict.skills.cloudTitle}</h3>
                    <p className="font-light opacity-85 text-lg leading-relaxed mb-8">{dict.skills.cloudDesc}</p>
                  </div>
                  <div className="pt-6 border-t border-black/5 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3.5 font-bold">{isVi ? "Dữ liệu & tự động hóa" : "Data & automation"}</div>
                    <div className="flex flex-wrap gap-2.5">
                      {["Firebase", "Hive", "Cloudflare Workers", "FAISS", "HuggingFace", "Git"].map((tech) => (
                        <TechBadgeButton key={tech} tech={tech} isVi={isVi} />
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>

              {/* Column 3: Systems & Operations */}
              <RevealOnScroll direction="up" delay={240}>
                <SpotlightCard className="h-full p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark flex flex-col justify-between hover:border-black dark:hover:border-white transition-[border-color] duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1.5 opacity-80 font-medium">{dict.skills.supportLabel}</span>
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">{dict.skills.infraTitle}</h3>
                    <p className="font-light opacity-85 text-lg leading-relaxed mb-8">{dict.skills.infraDesc}</p>
                  </div>
                  <div className="pt-6 border-t border-black/5 dark:border-white/5">
                    <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-3.5 font-bold">{isVi ? "Vận hành & Hỗ trợ" : "Operations & Support"}</div>
                    <div className="flex flex-wrap gap-2.5">
                      {["IT Helpdesk", "Hardware Support", "Network Troubleshooting", "User Support", "Documentation"].map((tech) => (
                        <TechBadgeButton key={tech} tech={tech} isVi={isVi} />
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-32 md:py-40 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <RevealOnScroll direction="up" delay={50} className="max-w-3xl mb-20">
              <h2 className="font-display text-4xl md:text-6xl font-bold">{dict.timeline.title}</h2>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={120}>
              <TimelineInteractiveView isVi={isVi} dict={dict.timeline} />
            </RevealOnScroll>
          </div>
        </section>

        <RevealOnScroll direction="up" delay={80}>
          <ProjectIndexShowcase lang={lang} dict={dict.allProjects} />
        </RevealOnScroll>
      </main>

      <Footer variant="main" />
    </>
  );
}
