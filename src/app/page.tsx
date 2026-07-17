"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Icons } from "../components/Icons";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    AOS.refresh();

    // ScrollSpy logic
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
    <>
      <div className="ambient-glow top-glow max-w-full"></div>
      <div className="ambient-glow bottom-glow max-w-full"></div>

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
            <p
              className="text-sm tracking-[0.3em] uppercase mb-6 border-b border-black dark:border-white inline-block pb-2"
              data-vi="Portfolio 2026"
              data-en="Portfolio 2026"
            >
              Portfolio 2026
            </p>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-tight mb-6">
              <span data-vi="Xin chào," data-en="Hello,">
                Hello,
              </span>
              <br />
              <span data-vi="tôi là" data-en="I am">
                I am
              </span>
              <span className="font-serif italic text-6xl md:text-9xl ml-2 tracking-normal">
                An Khang
              </span>
              .
            </h1>
            <p
              className="text-xl font-light max-w-2xl mb-12 opacity-80"
              data-vi="Một Software Developer tập trung vào các giải pháp thực tế. Kết hợp giữa hệ tầng mạng và lập trình đa nền tảng."
              data-en="A Software Developer focused on practical solutions. Blending network systems and cross-platform programming."
            >
              A Software Developer focused on practical solutions. Blending network systems
              and cross-platform programming.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#projects"
                className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center w-full sm:w-auto group/btn1"
              >
                <span data-vi="Xem Dự Án Chọn Lọc" data-en="View Selected Works">View Selected Works</span>
                <span className="ml-3 group-hover/btn1:translate-x-2 transition-transform duration-300">→</span>
              </a>
              <a
                href="/my_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-all flex items-center justify-center w-full sm:w-auto group/btn2"
              >
                <span data-vi="Tải Xuống CV" data-en="Download CV">Download CV</span>
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
              <h2
                className="font-display text-5xl font-bold mb-10"
                data-vi="Tóm tắt"
                data-en="Summary"
              >
                Summary
              </h2>
              <p
                className="font-light text-xl mb-6 opacity-80 leading-relaxed text-justify"
                data-vi="Tôi là một lập trình viên có nền tảng xuất phát từ <strong class='font-semibold'>Hệ tầng mạng & IT Support</strong>. Điều này giúp tôi không chỉ viết code mà còn hiểu rõ cách ứng dụng vận hành trên máy chủ và internet."
                data-en="I am a developer with a background in <strong class='font-semibold'>Network Infrastructure & IT Support</strong>. This helps me not only write code but also deeply understand how applications operate on servers and the internet."
              >
                I am a developer with a background in{" "}
                <strong className="font-semibold">
                  Network Infrastructure & IT Support
                </strong>
                . This helps me not only write code but also deeply understand how
                applications operate on servers and the internet.
              </p>
              <p
                className="font-light text-xl mb-6 opacity-80 leading-relaxed text-justify"
                data-vi="Hiện tại, tôi đam mê sâu sắc với lập trình web backend và mobile app. Triết lý làm việc của tôi là giải quyết vấn đề cốt lõi của doanh nghiệp bằng những công cụ phù hợp nhất, thay vì chạy theo xu hướng."
                data-en="Currently, I am deeply passionate about backend web and mobile app development. My working philosophy is to solve core business problems with the most appropriate tools, rather than chasing trends."
              >
                Currently, I am deeply passionate about backend web and mobile app
                development. My working philosophy is to solve core business problems with
                the most appropriate tools, rather than chasing trends.
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
              data-vi="Năng Lực Chuyên Môn"
              data-en="Technical Expertise"
            >
              Technical Expertise
            </h2>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-10 border-t border-black/10 dark:border-white/10 group" data-aos="fade-up">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">01 / Development</h3>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">Software & Mobile</h4>
                  <p
                    className="font-light opacity-80 text-lg leading-relaxed mb-6"
                    data-vi="Xây dựng hệ thống Backend vững chắc, phát triển ứng dụng di động và thiết kế các giải pháp phần mềm toàn diện."
                    data-en="Building robust backend systems, developing mobile apps, and architecting comprehensive software solutions."
                  >
                    Building robust backend systems, developing mobile apps, and architecting comprehensive software solutions.
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
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">Cloud & Databases</h4>
                  <p
                    className="font-light opacity-80 text-lg leading-relaxed mb-6"
                    data-vi="Thiết kế API an toàn, quản lý cơ sở dữ liệu thời gian thực và triển khai các dịch vụ web mở rộng."
                    data-en="Architecting secure APIs, managing real-time data, and deploying scalable web services."
                  >
                    Architecting secure APIs, managing real-time data, and deploying scalable web services.
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
                  <h4 className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">Network & IT Ops</h4>
                  <p
                    className="font-light opacity-80 text-lg leading-relaxed mb-6"
                    data-vi="Nền tảng vững chắc về phần cứng, quản trị mạng cơ bản, CMS và vận hành máy chủ đảm bảo độ tin cậy của hệ thống."
                    data-en="Deep understanding of hardware, basic network administration, CMS, and server operations to ensure reliability."
                  >
                    Deep understanding of hardware, basic network administration, CMS, and server operations to ensure reliability.
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
              data-vi="Dự Án Chọn Lọc"
              data-en="Selected Works"
            >
              Selected Works
            </h2>

            <div className="space-y-40">
              {/* Project 1: FM Dictionary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group">
                <div
                  className="lg:col-span-7 overflow-hidden relative aspect-[16/10]"
                  data-aos="fade-right"
                >
                  <Image
                    src="/fm-dictionary-cover.webp"
                    alt="FM Dictionary"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute top-6 left-6 mix-blend-difference z-20">
                    <span className="font-serif italic text-4xl opacity-50 text-white">01</span>
                  </div>
                </div>
                
                <div className="lg:col-span-5" data-aos="fade-left">
                  <div className="mb-4 flex items-center space-x-4">
                    <span className="h-[1px] w-12 bg-black dark:bg-white opacity-30"></span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">Mobile Application</span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">
                    FM Dictionary
                  </h3>
                  
                  <p
                    className="font-light opacity-80 mb-8 text-xl leading-relaxed text-justify"
                    data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất làm chủ hơn 1.800 thuật ngữ FM chuyên ngành — được xây dựng bằng Flutter cho iOS & Android."
                    data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community master 1,800+ specialized FM terms — built with Flutter for iOS & Android."
                  >
                    FM Dictionary is a premium vocabulary app helping the Facilities
                    Management community master 1,800+ specialized FM terms — built with
                    Flutter for iOS & Android.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {["Flutter", "Dart", "Firebase"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60 group-hover:border-black dark:group-hover:border-white group-hover:opacity-100 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex">
                    <a
                      href="/fm-dictionary/"
                      className="w-full sm:w-auto border border-black dark:border-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center group/btn"
                      data-vi="Xem chi tiết dự án →"
                      data-en="View Project Detail →"
                    >
                      <span data-vi="Xem chi tiết dự án" data-en="View Project Detail">View Project Detail</span>
                      <span className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                    </a>
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
              data-vi="Lộ Trình"
              data-en="Timeline"
            >
              Timeline
            </h2>

            <div className="flex flex-col gap-12 md:gap-20 max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 group" data-aos="fade-up">
                <div className="font-display text-xl md:text-2xl font-bold opacity-50 border-b border-black/10 dark:border-white/10 md:border-none pb-2 md:pb-0 group-hover:opacity-100 transition-opacity duration-500">
                  2026 - Present
                </div>
                <div>
                  <h4
                    className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500"
                    data-vi="IT Helpdesk"
                    data-en="IT Helpdesk"
                  >
                    IT Helpdesk
                  </h4>
                  <p
                    className="font-light opacity-80 text-lg leading-relaxed max-w-[65ch]"
                    data-vi="Làm việc tại Bệnh Viện Mắt Bình Thuận, chịu trách nhiệm vận hành và hỗ trợ hệ thống CNTT."
                    data-en="Working at Binh Thuan Eye Hospital, responsible for operating and supporting IT systems."
                  >
                    Working at Binh Thuan Eye Hospital, responsible for operating and
                    supporting IT systems.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12 group" data-aos="fade-up" data-aos-delay="100">
                <div className="font-display text-xl md:text-2xl font-bold opacity-50 border-b border-black/10 dark:border-white/10 md:border-none pb-2 md:pb-0 group-hover:opacity-100 transition-opacity duration-500">
                  2022 - 2026
                </div>
                <div>
                  <h4
                    className="font-display text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500"
                    data-vi="Cử nhân Công nghệ Thông tin"
                    data-en="Bachelor of Information Technology"
                  >
                    Bachelor of Information Technology
                  </h4>
                  <p
                    className="font-light opacity-80 text-lg leading-relaxed max-w-[65ch]"
                    data-vi="Hoàn thành chương trình Đại học, chuyên ngành Công nghệ thông tin với định hướng phát triển phần mềm."
                    data-en="Completed University program, majoring in Information Technology with a software development focus."
                  >
                    Completed University program, majoring in Information Technology with
                    a software development focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
