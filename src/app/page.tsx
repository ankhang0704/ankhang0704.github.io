"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

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
          className="snap-start min-h-screen flex items-center relative overflow-x-hidden pt-20"
        >
          <div className="absolute -left-32 bottom-0 w-2/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000')] bg-cover bg-center opacity-[0.05] dark:opacity-[0.02] grayscale pointer-events-none rounded-tr-full blur-[2px]"></div>
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
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="snap-start min-h-screen flex items-center py-20 relative overflow-x-hidden"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000')] bg-cover bg-center opacity-10 dark:opacity-[0.03] grayscale pointer-events-none rounded-l-full blur-[1px]"></div>

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
          className="snap-start min-h-screen flex items-center py-20 bg-cardLight dark:bg-cardDark overflow-x-hidden relative"
        >
          <div className="absolute -left-20 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.02] grayscale pointer-events-none rounded-br-full blur-[2px]"></div>
          <div className="container mx-auto px-6 md:px-8">
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-16 text-center"
              data-aos="fade-up"
              data-vi="Năng Lực Chuyên Môn"
              data-en="Technical Expertise"
            >
              Technical Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div
                className="p-8 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors relative group"
                data-aos="fade-up"
              >
                <div
                  className="absolute -top-4 left-6 bg-cardLight dark:bg-cardDark px-2 text-sm font-bold uppercase tracking-widest"
                  data-vi="Thế Mạnh Cốt Lõi"
                  data-en="Core Strengths"
                >
                  Core Strengths
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl font-display font-bold mb-2">Django</h3>
                  <p
                    className="text-sm opacity-70 mb-2 italic"
                    data-vi="*Dự án tốt nghiệp trọng điểm"
                    data-en="*Core graduation project"
                  >
                    *Core graduation project
                  </p>
                  <p
                    className="font-light opacity-80 text-sm"
                    data-vi="Xây dựng hệ thống Backend vững chắc, xử lý logic phức tạp, API an toàn."
                    data-en="Building robust Backend systems, handling complex logic, secure APIs."
                  >
                    Building robust Backend systems, handling complex logic, secure APIs.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">Flutter</h3>
                  <p
                    className="text-sm opacity-70 mb-2 italic"
                    data-vi="*Dự án đang phát triển"
                    data-en="*Current development"
                  >
                    *Current development
                  </p>
                  <p
                    className="font-light opacity-80 text-sm"
                    data-vi="Thiết kế ứng dụng Mobile mượt mà, giao diện hiện đại đa nền tảng (iOS/Android)."
                    data-en="Designing smooth Mobile apps, modern cross-platform UI (iOS/Android)."
                  >
                    Designing smooth Mobile apps, modern cross-platform UI (iOS/Android).
                  </p>
                </div>
              </div>

              <div
                className="p-8 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className="absolute -top-4 left-6 bg-cardLight dark:bg-cardDark px-2 text-sm font-bold uppercase tracking-widest"
                  data-vi="Ngôn Ngữ & Web"
                  data-en="Languages & Web"
                >
                  Languages & Web
                </div>
                <ul className="space-y-4 font-light text-lg mt-4">
                  <li className="flex items-center">
                    <i className="fas fa-check text-black dark:text-white text-xs mr-3 opacity-50"></i>{" "}
                    HTML, CSS, JS
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-black dark:text-white text-xs mr-3 opacity-50"></i>{" "}
                    C# & Java
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-black dark:text-white text-xs mr-3 opacity-50"></i>{" "}
                    PHP & Kotlin
                  </li>
                </ul>
              </div>

              <div
                className="p-8 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div
                  className="absolute -top-4 left-6 bg-cardLight dark:bg-cardDark px-2 text-sm font-bold uppercase tracking-widest"
                  data-vi="Hạ Tầng & CMS"
                  data-en="Infrastructure & CMS"
                >
                  Infrastructure & CMS
                </div>
                <ul className="space-y-4 font-light text-lg mt-4">
                  <li className="flex items-center">
                    <i className="fas fa-server text-black dark:text-white text-xs mr-3 opacity-50"></i>{" "}
                    <span
                      data-vi="IT Support (Phần cứng/Mạng)"
                      data-en="IT Support (Hardware/Network)"
                    >
                      IT Support (Hardware/Network)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-network-wired text-black dark:text-white text-xs mr-3 opacity-50"></i>{" "}
                    <span
                      data-vi="Quản trị mạng cơ bản"
                      data-en="Basic Network Admin"
                    >
                      Basic Network Admin
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fab fa-wordpress text-black dark:text-white text-xs mr-3 opacity-50"></i>{" "}
                    <span
                      data-vi="WordPress (Triển khai/Tối ưu)"
                      data-en="WordPress (Deploy/Optimize)"
                    >
                      WordPress (Deploy/Optimize)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="snap-start min-h-screen flex items-center py-20 relative overflow-x-hidden"
        >
          <div className="absolute -right-32 bottom-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000')] bg-cover bg-center opacity-[0.06] dark:opacity-[0.02] grayscale pointer-events-none rounded-tl-full blur-[2px]"></div>
          <div className="container mx-auto px-6 md:px-8">
            <h2
              className="font-display text-5xl font-bold mb-20 text-center"
              data-aos="fade-up"
              data-vi="Dự Án Chọn Lọc"
              data-en="Selected Works"
            >
              Selected Works
            </h2>

            <div className="space-y-32">
              {/* Project 1: FM Dictionary */}
              <div className="flex flex-col md:flex-row items-center gap-12 group">
                <div
                  className="w-full md:w-3/5 overflow-hidden relative aspect-video"
                  data-aos="fade-right"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                    alt="FM Dictionary"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="w-full md:w-2/5" data-aos="fade-left">
                  <h3 className="font-display text-3xl font-bold mb-4">
                    FM Dictionary
                  </h3>
                  <p
                    className="font-light opacity-70 mb-6 text-lg"
                    data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất làm chủ hơn 1.800 thuật ngữ FM chuyên ngành — được xây dựng bằng Flutter cho iOS & Android."
                    data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community master 1,800+ specialized FM terms — built with Flutter for iOS & Android."
                  >
                    FM Dictionary is a premium vocabulary app helping the Facilities
                    Management community master 1,800+ specialized FM terms — built with
                    Flutter for iOS & Android.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs border border-black dark:border-white px-3 py-1">
                      Flutter
                    </span>
                    <span className="text-xs border border-black dark:border-white px-3 py-1">
                      Dart
                    </span>
                    <span className="text-xs border border-black dark:border-white px-3 py-1">
                      Firebase
                    </span>
                  </div>
                  <div className="flex space-x-6 text-xl">
                    <a
                      href="/fm-dictionary/"
                      className="hover:opacity-50 transition-opacity flex items-center text-sm font-bold uppercase"
                      data-vi="Chi tiết"
                      data-en="Detail"
                    >
                      <i className="fas fa-info-circle text-black dark:text-white mr-2 text-lg"></i>{" "}
                      Detail
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
          className="snap-start min-h-screen flex items-center py-20 bg-cardLight dark:bg-cardDark relative overflow-x-hidden"
        >
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-1/2 h-2/3 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000')] bg-cover bg-center opacity-[0.05] dark:opacity-[0.02] grayscale pointer-events-none rounded-r-full blur-[2px]"></div>
          <div className="container mx-auto px-6 md:px-8">
            <h2
              className="font-display text-5xl font-bold mb-20 text-center"
              data-aos="fade-up"
              data-vi="Lộ Trình"
              data-en="Timeline"
            >
              Timeline
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="timeline-container">
                <div className="timeline-item" data-aos="fade-up">
                  <div className="font-display text-xl font-bold">2026 - Present</div>
                  <h4
                    className="text-2xl font-bold mt-2 mb-2"
                    data-vi="IT Helpdesk"
                    data-en="IT Helpdesk"
                  >
                    IT Helpdesk
                  </h4>
                  <p
                    className="font-light opacity-80"
                    data-vi="Làm việc tại Bệnh Viện Mắt Bình Thuận, chịu trách nhiệm vận hành và hỗ trợ hệ thống CNTT."
                    data-en="Working at Binh Thuan Eye Hospital, responsible for operating and supporting IT systems."
                  >
                    Working at Binh Thuan Eye Hospital, responsible for operating and
                    supporting IT systems.
                  </p>
                </div>

                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="font-display text-xl font-bold">2022 - 2026</div>
                  <h4
                    className="text-2xl font-bold mt-2 mb-2"
                    data-vi="Cử nhân Công nghệ Thông tin"
                    data-en="Bachelor of Information Technology"
                  >
                    Bachelor of Information Technology
                  </h4>
                  <p
                    className="font-light opacity-80"
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
