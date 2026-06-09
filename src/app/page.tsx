"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Code, 
  DeviceMobile, 
  Globe, 
  Terminal, 
  Cpu, 
  Network, 
  ArrowRight,
  GraduationCap,
  Briefcase
} from "@phosphor-icons/react";

/**
 * tasteskill: Anti-Slop Frontend Skill applied
 * Reading this as: Personal developer portfolio for An Khang, with an editorial language, 
 * leaning toward Tailwind + Framer Motion + high-end minimalist aesthetics.
 * 
 * DIALS:
 * DESIGN_VARIANCE: 7
 * MOTION_INTENSITY: 6
 * VISUAL_DENSITY: 3
 */

export default function Home() {
  const scrollRef = useRef(null);
  
  useEffect(() => {
    // ScrollSpy logic - keeping it for the Header active state
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);

          if (activeLink) {
            document
              .querySelectorAll('.nav-link[href^="#"]')
              .forEach((link) => link.classList.remove("active"));
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
    <div className="text-black dark:text-white transition-colors duration-500 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="noise-overlay"></div>
      <div className="ambient-glow top-glow max-w-full opacity-60 dark:opacity-20"></div>
      <div className="ambient-glow bottom-glow max-w-full opacity-60 dark:opacity-10"></div>

      <Header />

      <main ref={scrollRef} className="relative overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-[100dvh] flex items-center relative pt-24 pb-12 overflow-hidden"
        >
          {/* Offset Background Asset - DESIGN_VARIANCE: 7 */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.08, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -right-32 top-1/4 w-2/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000')] bg-cover bg-center grayscale pointer-events-none rounded-tl-[200px] blur-[1px] opacity-10 dark:opacity-100"
          />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="h-[1px] w-12 bg-black dark:bg-white/30"></span>
                <p
                  className="text-[11px] uppercase tracking-[0.2em] font-mono opacity-60"
                  data-vi="Danh mục đầu tư 2026"
                  data-en="Portfolio 2026"
                >
                  Portfolio 2026
                </p>
              </div>
              
              <h1 className="font-display text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8">
                <span data-vi="Xin chào," data-en="Hello,">Hello,</span>
                <br />
                <span data-vi="tôi là" data-en="I am">I am</span>
                <span className="font-serif italic ml-4 leading-[1.1] pb-2 inline-block">
                  An Khang
                </span>
                .
              </h1>
              
              <p
                className="text-xl md:text-2xl font-light max-w-2xl mb-12 opacity-80 dark:opacity-70 leading-relaxed"
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
                  className="inline-flex items-center space-x-3 text-sm font-bold uppercase tracking-widest border-b border-black dark:border-white pb-2 hover:opacity-50 transition-opacity"
                  data-vi="Xem dự án"
                  data-en="Explore Work"
                >
                  <span data-vi="Xem dự án" data-en="Explore Work">Explore Work</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION - Asymmetric Layout */}
        <section
          id="about"
          className="min-h-screen flex items-center py-32 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2
                  className="font-display text-4xl md:text-6xl font-bold mb-12 tracking-tight"
                  data-vi="Tóm tắt"
                  data-en="Summary"
                >
                  Summary
                </h2>
                <div className="space-y-8 font-light text-xl md:text-2xl opacity-90 dark:opacity-80 leading-relaxed">
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
                    data-vi="Hiện tại, tôi đam mê sâu sắc với lập trình web backend và mobile app. Triết lý làm việc của tôi là giải quyết vấn đề cốt lõi của doanh nghiệp bằng những công cụ phù hợp nhất, thay vì chạy theo xu hướng."
                    data-en="Currently, I am deeply passionate about backend web and mobile app development. My working philosophy is to solve core business problems with the most appropriate tools, rather than chasing trends."
                  >
                    Currently, I am deeply passionate about backend web and mobile app
                    development. My working philosophy is to solve core business problems with
                    the most appropriate tools, rather than chasing trends.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-5 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000" 
                    alt="Work Environment" 
                    className="w-full h-full object-cover opacity-80 dark:opacity-30"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION - BENTO GRID - ANTI-SLOP RULE 9.C */}
        <section
          id="skills"
          className="py-32 bg-zinc-100 dark:bg-zinc-900/30 border-y border-black/[0.05] dark:border-white/[0.02] relative"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center lg:text-left"
            >
              <h2
                className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4"
                data-vi="Năng Lực Chuyên Môn"
                data-en="Technical Expertise"
              >
                Technical Expertise
              </h2>
              <div className="h-1 w-20 bg-black dark:bg-white mx-auto lg:mx-0"></div>
            </motion.div>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Primary Skill: Django */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 lg:col-span-3 premium-card p-10 rounded-[40px] flex flex-col justify-between group transition-all duration-500"
              >
                <div>
                  <div className="mb-8 w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500">
                    <Terminal className="group-hover:text-white dark:group-hover:text-black transition-colors" size={28} weight="bold" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Django</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-6" data-vi="*Dự án tốt nghiệp trọng điểm" data-en="*Core graduation project">*Core graduation project</p>
                  <p className="font-light text-xl opacity-80 dark:opacity-70 leading-relaxed" data-vi="Xây dựng hệ thống Backend vững chắc, xử lý logic phức tạp, API an toàn." data-en="Building robust Backend systems, handling complex logic, secure APIs.">
                    Building robust Backend systems, handling complex logic, secure APIs.
                  </p>
                </div>
                <div className="mt-16 flex space-x-3">
                  <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60">Python</span>
                  <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60">REST API</span>
                </div>
              </motion.div>

              {/* Secondary Skill: Flutter */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 lg:col-span-3 premium-card p-10 rounded-[40px] flex flex-col justify-between group transition-all duration-500"
              >
                <div>
                  <div className="mb-8 w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500">
                    <DeviceMobile className="group-hover:text-white dark:group-hover:text-black transition-colors" size={28} weight="bold" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Flutter</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-6" data-vi="*Dự án đang phát triển" data-en="*Current development">*Current development</p>
                  <p className="font-light text-xl opacity-80 dark:opacity-70 leading-relaxed" data-vi="Thiết kế ứng dụng Mobile mượt mà, giao diện hiện đại đa nền tảng (iOS/Android)." data-en="Designing smooth Mobile apps, modern cross-platform UI (iOS/Android).">
                    Designing smooth Mobile apps, modern cross-platform UI (iOS/Android).
                  </p>
                </div>
                <div className="mt-16 flex space-x-3">
                  <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60">Dart</span>
                  <span className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60">iOS / Android</span>
                </div>
              </motion.div>

              {/* Languages & Web */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 premium-card p-10 rounded-[40px] transition-all duration-500"
              >
                <div className="mb-8 w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <Globe size={24} weight="bold" />
                </div>
                <h4 className="text-xl font-bold mb-8" data-vi="Ngôn Ngữ & Web" data-en="Languages & Web">Languages & Web</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JS", "C#", "Java", "PHP", "Kotlin"].map(item => (
                    <span key={item} className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl text-xs font-semibold opacity-70 border border-black/[0.03] dark:border-none">{item}</span>
                  ))}
                </div>
              </motion.div>

              {/* Infrastructure */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-black dark:bg-white p-10 rounded-[40px] text-white dark:text-black shadow-2xl transition-all duration-500"
              >
                <div className="mb-8 w-12 h-12 rounded-xl bg-white/10 dark:bg-black/10 flex items-center justify-center text-white dark:text-black">
                  <Network size={24} weight="bold" />
                </div>
                <h4 className="text-xl font-bold mb-6" data-vi="Hạ Tầng" data-en="Infrastructure">Infrastructure</h4>
                <ul className="space-y-4 text-sm opacity-90 font-light">
                  <li data-vi="IT Support (Phần cứng/Mạng)" data-en="IT Support (Hardware/Network)">IT Support (Hardware/Network)</li>
                  <li data-vi="Quản trị mạng cơ bản" data-en="Basic Network Admin">Basic Network Admin</li>
                  <li data-vi="WordPress (Triển khai)" data-en="WordPress (Deploy)">WordPress (Deploy)</li>
                </ul>
              </motion.div>

              {/* Other Skills / Small Bento Cell */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-4 lg:col-span-2 bg-zinc-200/50 dark:bg-zinc-800 p-10 rounded-[40px] flex items-center justify-center text-center transition-all duration-500"
              >
                <div>
                  <Cpu size={40} className="mx-auto mb-4 opacity-20" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">Problem Solving Mindset</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="py-48 relative overflow-hidden"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2
              className="font-display text-4xl md:text-6xl font-bold mb-40 tracking-tight text-center lg:text-left"
              data-vi="Dự Án Chọn Lọc"
              data-en="Selected Works"
            >
              Selected Works
            </h2>

            <div className="space-y-72">
              {/* Project 1: FM Dictionary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 relative aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                    alt="FM Dictionary"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute top-10 left-10 mix-blend-difference z-20">
                    <span className="font-serif italic text-7xl opacity-30 text-white">01</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="lg:col-span-5"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-8 flex items-center space-x-4">
                    <span className="h-[1px] w-16 bg-black dark:bg-white opacity-20"></span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-40">Mobile Solution</span>
                  </div>
                  
                  <h3 className="font-display text-5xl md:text-6xl font-bold mb-10 tracking-tighter">
                    FM Dictionary
                  </h3>
                  
                  <p
                    className="font-light opacity-80 dark:opacity-70 mb-12 text-xl md:text-2xl leading-relaxed"
                    data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất làm chủ hơn 1.800 thuật ngữ FM chuyên ngành - được xây dựng bằng Flutter cho iOS & Android."
                    data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community master 1,800+ specialized FM terms - built with Flutter for iOS & Android."
                  >
                    FM Dictionary is a premium vocabulary app helping the Facilities
                    Management community master 1,800+ specialized FM terms - built with
                    Flutter for iOS & Android.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-16">
                    {["Flutter", "Firebase", "Design System"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.3em] border border-black/10 dark:border-white/10 px-5 py-3 opacity-40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/fm-dictionary/"
                    className="group/btn inline-flex items-center space-x-5 bg-black dark:bg-white text-white dark:text-black px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-500 shadow-xl"
                  >
                    <span data-vi="Xem chi tiết" data-en="View Project">View Project</span>
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" weight="bold" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section
          id="experience"
          className="py-48 bg-zinc-100 dark:bg-zinc-900/30 border-y border-black/[0.03] dark:border-white/[0.02] relative"
        >
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2
              className="font-display text-4xl md:text-6xl font-bold mb-40 tracking-tight text-center"
              data-vi="Lộ Trình"
              data-en="Timeline"
            >
              Timeline
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                className="premium-card p-12 rounded-[50px] transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-12 right-12 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                  <Briefcase size={100} weight="fill" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">2026 - Present</div>
                <h4 className="text-3xl font-bold mb-8 tracking-tight" data-vi="IT Helpdesk" data-en="IT Helpdesk">IT Helpdesk</h4>
                <div className="h-[1px] w-16 bg-black dark:bg-white opacity-20 mb-8"></div>
                <p className="font-light text-xl opacity-70 leading-relaxed" data-vi="Làm việc tại Bệnh Viện Mắt Bình Thuận, chịu trách nhiệm vận hành và hỗ trợ hệ thống CNTT." data-en="Working at Binh Thuan Eye Hospital, responsible for operating and supporting IT systems.">
                  Working at Binh Thuan Eye Hospital, responsible for operating and supporting IT systems.
                </p>
              </motion.div>

              <motion.div 
                className="premium-card p-12 rounded-[50px] transition-all duration-500 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute top-12 right-12 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap size={100} weight="fill" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">2022 - 2026</div>
                <h4 className="text-3xl font-bold mb-8 tracking-tight" data-vi="Cử nhân CNTT" data-en="Bachelor of IT">Bachelor of IT</h4>
                <div className="h-[1px] w-16 bg-black dark:bg-white opacity-20 mb-8"></div>
                <p className="font-light text-xl opacity-70 leading-relaxed" data-vi="Hoàn thành chương trình Đại học, chuyên ngành Công nghệ thông tin với định hướng phát triển phần mềm." data-en="Completed University program, majoring in Information Technology với định hướng phát triển phần mềm.">
                  Completed University program, majoring in Information Technology with a software development focus.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}