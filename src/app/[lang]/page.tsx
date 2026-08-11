import React from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollSpyInit } from "@/components/ScrollSpyInit";
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

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center relative overflow-x-hidden pt-20"
        >
          <div
            className="container mx-auto px-6 md:px-8 relative z-10"
            data-aos="fade-up"
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-6 border-b border-black dark:border-white inline-block pb-2">
              Portfolio 2026
            </p>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-tight mb-6">
              <span>{locale === "vi" ? "Xin chào," : "Hello,"}</span>
              <br />
              <span>{locale === "vi" ? "tôi là" : "I am"}</span>
              <span className="font-serif italic text-6xl md:text-9xl ml-2 tracking-normal">
                An Khang
              </span>
              .
            </h1>
            <p className="text-xl font-light max-w-2xl mb-12 opacity-80 leading-relaxed">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#projects"
                className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center w-full sm:w-auto group/btn1"
              >
                <span>{dict.hero.viewProjects}</span>
                <span className="ml-3 group-hover/btn1:translate-x-2 transition-transform duration-300">→</span>
              </a>
              <a
                href="/my_cv.pdf"
                download="Nguyen-An-Khang-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-all flex items-center justify-center w-full sm:w-auto group/btn2"
              >
                <span>{dict.hero.downloadCV}</span>
                <span className="ml-3 group-hover/btn2:translate-y-1 transition-transform duration-300">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="py-32 md:py-40 bg-cardLight dark:bg-cardDark border-y border-black/5 dark:border-white/5 relative overflow-x-hidden"
        >
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <h2 className="font-display text-5xl font-bold mb-10">
                {dict.about.title}
              </h2>
              <p className="font-light text-xl mb-6 opacity-80 leading-relaxed text-justify">
                {dict.about.p1}
              </p>
              <p className="font-light text-xl mb-6 opacity-80 leading-relaxed text-justify">
                {dict.about.p2}
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="py-32 md:py-40 overflow-x-hidden relative"
        >
          <div className="container mx-auto px-6 md:px-8">
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-16 text-center"
              data-aos="fade-up"
            >
              {dict.skills.title}
            </h2>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10 border-t border-black/10 dark:border-white/10 group" data-aos="fade-up">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">01 / Development</h3>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{dict.skills.devTitle}</h4>
                  <p className="font-light opacity-80 text-lg leading-relaxed mb-6">
                    {dict.skills.devDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Django", "Flutter", "Next.js", "React", "C#", "Java", "PHP"].map((tech) => (
                      <span key={tech} className="border border-black/10 dark:border-white/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:border-black dark:hover:border-white transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10 border-t border-black/10 dark:border-white/10 group" data-aos="fade-up" data-aos-delay="100">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">02 / Ecosystem</h3>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{dict.skills.cloudTitle}</h4>
                  <p className="font-light opacity-80 text-lg leading-relaxed mb-6">
                    {dict.skills.cloudDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "Firebase", "REST APIs", "Vercel", "Tailwind CSS", "Git"].map((tech) => (
                      <span key={tech} className="border border-black/10 dark:border-white/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:border-black dark:hover:border-white transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10 border-t border-b border-black/10 dark:border-white/10 group" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">03 / Infrastructure</h3>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{dict.skills.infraTitle}</h4>
                  <p className="font-light opacity-80 text-lg leading-relaxed mb-6">
                    {dict.skills.infraDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["IT Support", "Cisco CCNA", "WordPress", "Hardware", "Linux"].map((tech) => (
                      <span key={tech} className="border border-black/10 dark:border-white/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:border-black dark:hover:border-white transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
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
            <h2
              className="font-display text-5xl font-bold mb-20 text-center"
              data-aos="fade-up"
            >
              {dict.projects.title}
            </h2>

            <div className="space-y-32 md:space-y-40">
              {/* Project 1: FM Dictionary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group">
                <div
                  className="lg:col-span-7 overflow-hidden relative aspect-[16/10] border border-black/10 dark:border-white/10"
                  data-aos="fade-right"
                >
                  <Image
                    src="/fm-dictionary-cover.webp"
                    alt="FM Dictionary"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-6 left-6 mix-blend-difference z-20">
                    <span className="font-serif italic text-4xl opacity-50 text-white">01</span>
                  </div>
                </div>
                
                <div className="lg:col-span-5" data-aos="fade-left">
                  <div className="mb-4 flex items-center space-x-4">
                    <span className="h-[1px] w-12 bg-black dark:bg-white opacity-30"></span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">{dict.projects.p1Category}</span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    {dict.projects.p1Title}
                  </h3>
                  
                  <p className="font-light opacity-80 mb-8 text-xl leading-relaxed text-justify">
                    {dict.projects.p1Desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {["Production", "Flutter", "Firebase", "Cloudflare Workers", "iOS Live"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60 group-hover:border-black dark:group-hover:border-white group-hover:opacity-100 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/${lang}/fm-dictionary/`}
                      className="border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center group/btn"
                    >
                      <span>{dict.projects.p1CaseStudy}</span>
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                    <a
                      href="https://apps.apple.com/us/app/fm-dictionary/id6774868353"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-black/30 dark:border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-all flex items-center justify-center"
                    >
                      <span>App Store ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2: Hotel Management System & AI Chatbot */}
              <div className="border-t border-black/10 dark:border-white/10 pt-32 md:pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group">
                  <div
                    className="lg:col-span-7 overflow-hidden relative aspect-[16/10] border border-black/10 dark:border-white/10"
                    data-aos="fade-right"
                  >
                    <Image
                      src="/hotel-management-cover.webp"
                      alt="Hotel Management System & AI Chatbot"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-6 left-6 mix-blend-difference z-20">
                      <span className="font-serif italic text-4xl opacity-50 text-white">02</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5" data-aos="fade-left">
                    <div className="mb-4 flex items-center space-x-4">
                      <span className="h-[1px] w-12 bg-black dark:bg-white opacity-30"></span>
                      <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">{dict.projects.p2Category}</span>
                    </div>
                    
                    <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
                      {dict.projects.p2Title}
                    </h3>
                    
                    <p className="font-light opacity-80 mb-8 text-xl leading-relaxed text-justify">
                      {dict.projects.p2Desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {["Academic Case Study", "Django", "Python", "PostgreSQL", "REST APIs", "OpenAI"].map((tag) => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60 group-hover:border-black dark:group-hover:border-white group-hover:opacity-100 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/${lang}/hotel-management/`}
                        className="border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center group/btn"
                      >
                        <span>{dict.projects.p1CaseStudy}</span>
                        <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                      <a
                        href="https://github.com/ankhang0704/QuanLyKhachSan_AI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-black/30 dark:border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-all flex items-center justify-center"
                      >
                        <span>GitHub ↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3: IT Operations & System Reliability */}
              <div className="border-t border-black/10 dark:border-white/10 pt-32 md:pt-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group">
                <div
                  className="lg:col-span-7 overflow-hidden relative aspect-[16/10] border border-black/10 dark:border-white/10"
                  data-aos="fade-right"
                >
                  <Image
                    src="/it-infrastructure-cover.webp"
                    alt="IT System Reliability & Infrastructure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-6 left-6 mix-blend-difference z-20">
                    <span className="font-serif italic text-4xl opacity-50 text-white">03</span>
                  </div>
                </div>
                
                <div className="lg:col-span-5" data-aos="fade-left">
                  <div className="mb-4 flex items-center space-x-4">
                    <span className="h-[1px] w-12 bg-black dark:bg-white opacity-30"></span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">{dict.projects.p3Category}</span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    {dict.projects.p3Title}
                  </h3>
                  
                  <p className="font-light opacity-80 mb-8 text-xl leading-relaxed text-justify">
                    {dict.projects.p3Desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {["IT Operations", "Linux", "Cisco CCNA", "PostgreSQL", "PowerShell", "Server Backup"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60 group-hover:border-black dark:group-hover:border-white group-hover:opacity-100 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/${lang}/it-infrastructure/`}
                      className="border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center group/btn"
                    >
                      <span>{dict.projects.p1CaseStudy}</span>
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section
          id="experience"
          className="py-32 md:py-40 relative overflow-x-hidden"
        >
          <div className="container mx-auto px-6 md:px-8">
            <h2
              className="font-display text-5xl font-bold mb-20"
              data-aos="fade-up"
            >
              {dict.timeline.title}
            </h2>

            <div className="flex flex-col gap-12 md:gap-20 max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 group" data-aos="fade-up">
                <div className="font-display text-xl md:text-2xl font-bold opacity-50 border-b border-black/10 dark:border-white/10 md:border-none pb-2 md:pb-0 group-hover:opacity-100 transition-opacity duration-500">
                  04/2026 — Present
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {dict.timeline.t1Role}
                  </h4>
                  <p className="font-light opacity-80 text-lg leading-relaxed max-w-[65ch]">
                    {dict.timeline.t1Desc}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 group" data-aos="fade-up" data-aos-delay="100">
                <div className="font-display text-xl md:text-2xl font-bold opacity-50 border-b border-black/10 dark:border-white/10 md:border-none pb-2 md:pb-0 group-hover:opacity-100 transition-opacity duration-500">
                  03/2026
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {dict.timeline.t2Role}
                  </h4>
                  <p className="font-light opacity-80 text-lg leading-relaxed max-w-[65ch]">
                    {dict.timeline.t2Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="main" />
    </>
  );
}
