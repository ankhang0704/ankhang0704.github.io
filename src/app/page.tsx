"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Terminal, 
  DeviceMobile, 
  Globe, 
  Network, 
  Cpu, 
  ArrowRight,
  GraduationCap,
  Briefcase
} from "@phosphor-icons/react";

/**
 * tasteskill: Anti-Slop Frontend Skill applied
 * Reading this as: Developer portfolio for An Khang, with a minimalist technical language, 
 * leaning toward Tailwind + Geist + restrained motion.
 * 
 * DIALS:
 * DESIGN_VARIANCE: 6
 * MOTION_INTENSITY: 5
 * VISUAL_DENSITY: 4
 */

export default function Home() {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

          if (activeLink) {
            navLinks.forEach((link) => link.classList.remove("active"));
            activeLink.classList.add("active");
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="noise-overlay"></div>
      <div className="ambient-glow top-glow opacity-40 dark:opacity-10"></div>
      <div className="ambient-glow bottom-glow opacity-40 dark:opacity-5"></div>

      <Header />

      <main ref={scrollRef} className="relative overflow-x-hidden">
        {/* HERO SECTION - ANTI-SLOP: HERO MUST FIT VIEWPORT */}
        <section
          id="hero"
          className="min-h-[100dvh] flex items-center relative pt-20 pb-12 overflow-hidden"
        >
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: "var(--hero-img-opacity)", x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-10 top-1/4 w-[50%] h-2/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000')] bg-cover bg-center grayscale-[0.4] pointer-events-none rounded-2xl"
          />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* EYEBROW 1/2 ALLOWED */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="h-[1px] w-8 bg-black dark:bg-white/30"></span>
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-mono opacity-50"
                  data-vi="Danh mục đầu tư 2026"
                  data-en="Portfolio 2026"
                >
                  Portfolio 2026
                </p>
              </div>
              
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter mb-8">
                <span data-vi="Xin chào," data-en="Hello,">Hello,</span>
                <br />
                <span data-vi="tôi là" data-en="I am">I am</span>
                <span className="font-serif italic ml-4 leading-[1.1] pb-1 inline-block text-accent dark:text-accentDark">
                  An Khang
                </span>
              </h1>
              
              <p
                className="text-lg md:text-xl font-normal max-w-xl mb-10 opacity-70 leading-relaxed"
                data-vi="Một Software Developer tập trung vào các giải pháp thực tế. Kết hợp giữa hệ tầng mạng và lập trình đa nền tảng."
                data-en="A Software Developer focused on practical solutions. Blending network systems and cross-platform programming."
              >
                A Software Developer focused on practical solutions. Blending network systems
                and cross-platform programming.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <a 
                  href="#projects"
                  className="group inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black/20 dark:border-white/20 pb-2 hover:border-black dark:hover:border-white transition-all"
                >
                  <span data-vi="Xem dự án" data-en="Explore Work">Explore Work</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION - LEFT-ALIGNED ASYMMETRY */}
        <section
          id="about"
          className="py-32 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <motion.div 
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  className="text-3xl md:text-5xl font-bold mb-10 tracking-tight"
                  data-vi="Tóm tắt"
                  data-en="Summary"
                >
                  Summary
                </h2>
                <div className="space-y-6 text-lg md:text-xl opacity-80 leading-relaxed">
                  <p
                    data-vi="Tôi là một lập trình viên có nền tảng xuất phát từ <strong class='font-semibold'>Hệ tầng mạng & IT Support</strong>. Điều này giúp tôi không chỉ viết code mà còn hiểu rõ cách ứng dụng vận hành trên máy chủ và internet."
                    data-en="I am a developer with a background in <strong class='font-semibold'>Network Infrastructure & IT Support</strong>. This helps me not only write code but also deeply understand how applications operate on servers and the internet."
                  >
                    I am a developer with a background in{" "}
                    <strong className="font-semibold text-black dark:text-white">
                      Network Infrastructure & IT Support
                    </strong>
                    . This helps me not only write code but also deeply understand how
                    applications operate on servers and the internet.
                  </p>
                  <p
                    data-vi="Hiện tại, tôi đam mê sâu sắc với lập trình web backend và mobile app. Triết lý làm việc của tôi là giải quyết vấn đề cốt lõi của doanh nghiệp bằng những công cụ phù hợp nhất."
                    data-en="Currently, I am deeply passionate about backend web and mobile app development. My working philosophy is to solve core business problems with the most appropriate tools."
                  >
                    Currently, I am deeply passionate about backend web and mobile app
                    development. My working philosophy is to solve core business problems with
                    the most appropriate tools.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000" 
                    alt="Work Environment" 
                    className="w-full h-full object-cover opacity-90 dark:opacity-40"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION - ASYMMETRIC CLUSTER - HIGH-END REDESIGN */}
        <section
          id="skills"
          className="py-48 relative"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-4xl md:text-7xl font-bold tracking-tighter mb-4"
                  data-vi="Năng Lực"
                  data-en="Expertise"
                >
                  Expertise
                </h2>
                <p className="text-lg opacity-50 max-w-md font-light" data-vi="Sự kết hợp giữa tư duy hệ thống mạng và khả năng thực thi phần mềm." data-en="A fusion of network systems thinking and software execution.">
                  A fusion of network systems thinking and software execution.
                </p>
              </motion.div>
              <div className="hidden lg:block h-[1px] flex-grow mx-12 bg-black/5 dark:bg-white/5 mb-4"></div>
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[10px] font-bold">2026</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
              {/* Primary: Django - Kinetic Tile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="md:col-span-8 lg:col-span-7 group relative overflow-hidden rounded-[32px] bg-zinc-900 text-white p-12 lg:p-16"
              >
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal size={120} weight="thin" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-8">Backend System</span>
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Django Architecture</h3>
                    <p className="text-xl md:text-2xl font-light opacity-70 leading-relaxed max-w-xl">
                      Building robust server-side applications with Python. Focused on scalability, 
                      security, and clean API design.
                    </p>
                  </div>
                  <div className="mt-16 flex flex-wrap gap-3">
                    {["Python", "PostgreSQL", "Redis", "Celery", "REST"].map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest opacity-50">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Secondary: Flutter - Glass Tile */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="md:col-span-4 lg:col-span-5 premium-card rounded-[32px] p-12 flex flex-col justify-between border-black/5 dark:border-white/10"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-10">
                    <DeviceMobile size={28} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">Flutter Development</h3>
                  <p className="text-lg font-light opacity-60 leading-relaxed">
                    Crafting beautiful, native cross-platform experiences for iOS and Android 
                    from a single codebase.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Cross-Platform UI</span>
                  <ArrowRight size={20} className="opacity-20" />
                </div>
              </motion.div>

              {/* Tertiary Cluster */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-6 lg:col-span-4 glass-card rounded-[32px] p-10 gradient-border"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black">
                    <Network size={20} weight="bold" />
                  </div>
                  <h4 className="text-xl font-bold tracking-tight">Infrastructure</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "IT Support & Hardware Optimization",
                    "Network Administration (Cisco/Mikrotik)",
                    "Server Deployment & Maintenance",
                    "WordPress CMS Management"
                  ].map(s => (
                    <li key={s} className="flex items-center text-sm font-light opacity-70">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 mr-4"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-6 lg:col-span-4 premium-card rounded-[32px] p-10 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold mb-8 tracking-tight" data-vi="Ngôn ngữ bổ trợ" data-en="Supporting Tech">Supporting Tech</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JS", "Kotlin", "Java", "PHP", "C#"].map(item => (
                      <span key={item} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl text-[10px] font-bold tracking-widest opacity-60">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-center opacity-10">
                  <Cpu size={48} weight="thin" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-12 lg:col-span-4 bg-zinc-100 dark:bg-zinc-900 rounded-[32px] p-10 flex items-center justify-between"
              >
                <div className="max-w-[180px]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-2">Strategy</p>
                  <p className="text-lg font-light leading-snug">Solving business problems through code.</p>
                </div>
                <div className="w-16 h-16 rounded-full border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700">
                  <ArrowRight size={24} className="-rotate-45 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - HIGH-END REDESIGN RESTORED */}
        <section
          id="projects"
          className="py-48 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex items-center space-x-6 mb-32">
              <h2
                className="text-4xl md:text-7xl font-bold tracking-tighter"
                data-vi="Dự Án"
                data-en="Selected Works"
              >
                Selected Works
              </h2>
              <div className="h-[1px] flex-grow bg-black/5 dark:bg-white/5"></div>
            </div>

            <div className="space-y-48 md:space-y-72">
              {/* Project 1: FM Dictionary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 relative aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                    alt="FM Dictionary"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-90 dark:opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute top-10 left-10 mix-blend-difference z-20">
                    <span className="font-serif italic text-6xl opacity-20 text-white">01</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="lg:col-span-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <div className="mb-8 flex items-center space-x-4">
                    <span className="h-[1px] w-12 bg-black dark:bg-white opacity-20"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Mobile Solution</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                    FM Dictionary
                  </h3>
                  
                  <p
                    className="font-light opacity-60 mb-10 text-lg md:text-xl leading-relaxed"
                    data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất làm chủ hơn 1.800 thuật ngữ FM chuyên ngành."
                    data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community master 1,800+ specialized FM terms."
                  >
                    FM Dictionary is a premium vocabulary app helping the Facilities
                    Management community master 1,800+ specialized FM terms.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-12">
                    {["Flutter", "Firebase", "Design System"].map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.2em] border border-black/10 dark:border-white/10 px-4 py-2 opacity-40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/fm-dictionary/"
                    className="group/btn inline-flex items-center space-x-6 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:-translate-y-1"
                  >
                    <span data-vi="Xem chi tiết" data-en="View Project">View Project</span>
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" weight="bold" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION - KINETIC TRACK - FIXED ALIGNMENT */}
        <section
          id="experience"
          className="py-48 bg-zinc-50 dark:bg-zinc-900/10 relative overflow-hidden"
        >
          {/* Decorative background number */}
          <div className="absolute -left-20 top-0 text-[30rem] font-bold opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none">
            26
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="text-center mb-32">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-6"
                data-vi="Hành trình nghề nghiệp"
                data-en="Career Journey"
              >
                Career Journey
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-7xl font-bold tracking-tighter"
                data-vi="Lộ Trình"
                data-en="Timeline"
              >
                Timeline
              </motion.h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5 dark:bg-white/5 hidden md:block"></div>

                <div className="space-y-24 md:space-y-48">
                  {/* Item 1 - IT Helpdesk */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                    <div className="md:text-right">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold tracking-widest mb-6">2026 — PRESENT</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" data-vi="IT Helpdesk" data-en="IT Helpdesk">IT Helpdesk</h3>
                        <p className="text-lg opacity-40 font-medium mb-6">Binh Thuan Eye Hospital</p>
                      </motion.div>
                    </div>
                    {/* FIXED: Absolute centering on the vertical line */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center bg-bgLight dark:bg-bgDark z-20"
                      >
                        <Briefcase size={24} weight="thin" />
                      </motion.div>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="max-w-md"
                    >
                      <p className="text-lg font-light opacity-60 leading-relaxed" data-vi="Chịu trách nhiệm vận hành, hỗ trợ kỹ thuật và đảm bảo tính ổn định cho toàn bộ hệ thống CNTT tại bệnh viện." data-en="Responsible for operating, technical support, and ensuring stability for the entire IT system at the hospital.">
                        Responsible for operating, technical support, and ensuring stability for the entire IT system at the hospital.
                      </p>
                    </motion.div>
                  </div>

                  {/* Item 2 - Bachelor of IT */}
                  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                    <div className="order-2 md:order-1 flex justify-end">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="max-w-md md:text-right"
                      >
                        <p className="text-lg font-light opacity-60 leading-relaxed" data-vi="Chuyên ngành Công nghệ thông tin với định hướng phát triển phần mềm toàn diện." data-en="Majoring in Information Technology with a comprehensive software development focus.">
                          Majoring in Information Technology with a comprehensive software development focus.
                        </p>
                      </motion.div>
                    </div>
                    <div className="order-1 md:order-2">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[10px] font-bold tracking-widest mb-6">2022 — 2026</span>
                        <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight" data-vi="Cử nhân CNTT" data-en="Bachelor of IT">Bachelor of IT</h3>
                        <p className="text-lg opacity-40 font-medium mb-6">University Program</p>
                      </motion.div>
                    </div>
                    {/* FIXED: Absolute centering on the vertical line */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center bg-bgLight dark:bg-bgDark z-20"
                      >
                        <GraduationCap size={24} weight="thin" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}