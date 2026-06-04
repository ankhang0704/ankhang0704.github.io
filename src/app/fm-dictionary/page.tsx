"use client";

import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";
import FMHeader from "../../components/fm-dictionary/Header";
import FMFooter from "../../components/fm-dictionary/Footer";

const APP_SCREENS = [
  { icon: "fa-house", label: "Home", img: "/images/fm-dictionary/fm_dictionary_0001.webp" },
  { icon: "fa-map-location-dot", label: "Roadmap", img: "/images/fm-dictionary/fm_dictionary_0002.webp" },
  { icon: "fa-pen-to-square", label: "Quiz", img: "/images/fm-dictionary/fm_dictionary_0003.webp" },
  { icon: "fa-microphone-lines", label: "Pronunciation", img: "/images/fm-dictionary/fm_dictionary_0004.webp" },
  { icon: "fa-trophy", label: "Badges", img: "/images/fm-dictionary/fm_dictionary_0005.webp" },
  { icon: "fa-book-bookmark", label: "Dictionary", img: "/images/fm-dictionary/fm_dictionary_0006.webp" },
];

export default function FMDictionaryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const [galleryRevealed, setGalleryRevealed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll<HTMLElement>(".screen-card");
    if (cards[index]) {
      const cardLeft = cards[index].offsetLeft;
      const containerWidth = container.clientWidth;
      const cardWidth = cards[index].offsetWidth;
      container.scrollTo({
        left: cardLeft - containerWidth / 2 + cardWidth / 2,
        behavior: "smooth",
      });
    }
    setCurrentSlide(index);
  };

  const scroll = (direction: "left" | "right") => {
    const next =
      direction === "right"
        ? (currentSlide + 1) % APP_SCREENS.length
        : (currentSlide - 1 + APP_SCREENS.length) % APP_SCREENS.length;
    scrollToSlide(next);
  };

  // Autoplay
  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % APP_SCREENS.length;
        if (scrollRef.current) {
          const container = scrollRef.current;
          const cards = container.querySelectorAll<HTMLElement>(".screen-card");
          if (cards[next]) {
            const cardLeft = cards[next].offsetLeft;
            const containerWidth = container.clientWidth;
            const cardWidth = cards[next].offsetWidth;
            container.scrollTo({
              left: cardLeft - containerWidth / 2 + cardWidth / 2,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    AOS.refresh();

    // Close on ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Start autoplay on mount, pause when hovering gallery
  useEffect(() => {
    if (!isHoveringGallery) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return stopAutoplay;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHoveringGallery]);

  // Scroll-triggered reveal for gallery cards
  useEffect(() => {
    if (!galleryRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient-glow top-glow max-w-full"></div>
      <div className="ambient-glow bottom-glow max-w-full"></div>

      <FMHeader />

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center relative overflow-x-hidden pt-32 pb-20 md:pt-20 md:pb-0"
        >
          <div className="absolute -left-32 bottom-0 w-2/3 h-2/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000')] bg-cover bg-center opacity-[0.05] dark:opacity-[0.02] grayscale pointer-events-none rounded-tr-full blur-[2px]"></div>
          <div
            className="container mx-auto px-6 md:px-8 relative z-10"
            data-aos="fade-up"
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-6 border-b border-black dark:border-white inline-block pb-2">
              An Khang Studio · 2026
            </p>
            <h1
              className="font-display text-5xl md:text-8xl font-bold leading-tight mb-6 md:mb-12"
              data-vi="Làm chủ từ vựng FM.<br>Theo cách thông minh."
              data-en="Master FM Vocab.<br>The Smart Way."
            >
              Master FM Vocab.
              <br />
              <span className="font-serif italic text-6xl md:text-9xl tracking-normal">
                The Smart Way
              </span>
              .
            </h1>
            <p
              className="text-xl font-light max-w-2xl mb-12 opacity-80"
              data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất và bất kỳ ai quan tâm đến lĩnh vực này làm chủ hơn 1.800 thuật ngữ FM chuyên ngành — được xây dựng bằng Flutter cho iOS & Android."
              data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community and anyone interested in the field master 1,800+ specialized FM terms — built with Flutter for iOS & Android."
            >
              FM Dictionary is a premium vocabulary app helping the Facilities Management
              community and anyone interested in the field master 1,800+ specialized FM
              terms — built with Flutter for iOS & Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#features"
                className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-center"
                data-vi="Khám phá tính năng ↓"
                data-en="Explore Features ↓"
              >
                Explore Features ↓
              </a>
              <Link
                href="/fm-dictionary/privacy-policy"
                className="px-8 py-4 text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity text-center"
                data-vi="Chính sách bảo mật →"
                data-en="Privacy Policy →"
              >
                Privacy Policy →
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 border-y border-black/10 dark:border-white/10 overflow-x-hidden relative">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="0">
                <div className="font-display text-4xl font-bold mb-1">
                  2<span className="text-sm align-top">+</span>
                </div>
                <div
                  className="text-[11px] md:text-[10px] uppercase tracking-widest opacity-50"
                  data-vi="Nền tảng · iOS & Android"
                  data-en="Platforms · iOS & Android"
                >
                  Platforms · iOS & Android
                </div>
              </div>
              <div
                className="text-center md:text-left"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="font-display text-4xl font-bold mb-1">30</div>
                <div
                  className="text-[11px] md:text-[10px] uppercase tracking-widest opacity-50"
                  data-vi="Huy hiệu thành tựu"
                  data-en="Achievement Badges"
                >
                  Achievement Badges
                </div>
              </div>
              <div
                className="text-center md:text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="font-display text-4xl font-bold mb-1">2</div>
                <div
                  className="text-[11px] md:text-[10px] uppercase tracking-widest opacity-50"
                  data-vi="Ngôn ngữ · VI & EN"
                  data-en="Languages · VI & EN"
                >
                  Languages · VI & EN
                </div>
              </div>
              <div
                className="text-center md:text-left"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="font-display text-4xl font-bold mb-1">100%</div>
                <div
                  className="text-[11px] md:text-[10px] uppercase tracking-widest opacity-50"
                  data-vi="Lõi ngoại tuyến"
                  data-en="Offline-capable Core"
                >
                  Offline-capable Core
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 bg-cardLight dark:bg-cardDark relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-20" data-aos="fade-right">
              <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-50" data-vi="Tính năng chính" data-en="Core Features">
                Core Features
              </p>
              <h2
                className="font-display text-4xl md:text-6xl font-bold mb-6"
                data-vi="Mọi thứ bạn cần<br>để làm chủ từ vựng"
                data-en="Everything you need<br>to master vocabulary"
              >
                Everything you need
                <br />
                to master vocabulary
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div className="p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors" data-aos="fade-up">
                <div className="text-3xl mb-6 text-black dark:text-white">
                  <i className="fas fa-map-location-dot"></i>
                </div>
                <h3 className="font-display text-xl font-bold mb-4" data-vi="Lộ trình học tập" data-en="Roadmap Learning">
                  Roadmap Learning
                </h3>
                <p
                  className="font-light opacity-70 leading-relaxed"
                  data-vi="Lộ trình học tập có cấu trúc với các chương, giai đoạn và độ khó tăng dần. Theo dõi hành trình của bạn từ người mới bắt đầu đến nâng cao."
                  data-en="Structured learning path with chapters, stages, and progressive difficulty. Track your journey from beginner to advanced."
                >
                  Structured learning path with chapters, stages, and progressive difficulty. Track your journey from beginner to advanced.
                </p>
              </div>
              <div className="p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl mb-6 text-black dark:text-white">
                  <i className="fas fa-microphone-lines"></i>
                </div>
                <h3 className="font-display text-xl font-bold mb-4" data-vi="Luyện phát âm AI" data-en="AI Pronunciation">
                  AI Pronunciation
                </h3>
                <p
                  className="font-light opacity-70 leading-relaxed"
                  data-vi="Kiểm tra phát âm thời gian thực với AI. Âm thanh được xử lý bảo mật qua Cloudflare Workers và xóa ngay sau đó để bảo vệ quyền riêng tư."
                  data-en="Real-time pronunciation checking with AI. Audio is processed securely via Cloudflare Workers and deleted immediately to ensure privacy."
                >
                  Real-time pronunciation checking with AI. Audio is processed securely via Cloudflare Workers and deleted immediately to ensure privacy.
                </p>
              </div>
              <div className="p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl mb-6 text-black dark:text-white">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="font-display text-xl font-bold mb-4" data-vi="Hệ thống huy hiệu" data-en="Achievement System">
                  Achievement System
                </h3>
                <p
                  className="font-light opacity-70 leading-relaxed"
                  data-vi="8 huy hiệu thành tựu độc đáo và chuỗi ngày học tập giúp duy trì động lực. Toàn bộ tiến trình được đồng bộ an toàn qua Firebase."
                  data-en="8 unique achievement badges and daily streaks to keep you motivated. All progress is securely synced via Firebase."
                >
                  8 unique achievement badges and daily streaks to keep you motivated. All progress is securely synced via Firebase.
                </p>
              </div>
              <div className="p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors" data-aos="fade-up">
                <div className="text-3xl mb-6 text-black dark:text-white">
                  <i className="fas fa-users-rectangle"></i>
                </div>
                <h3 className="font-display text-xl font-bold mb-4" data-vi="Nhóm học tập" data-en="Social Learning">
                  Social Learning
                </h3>
                <p
                  className="font-light opacity-70 leading-relaxed"
                  data-vi="Tham gia các nhóm học tập riêng tư để thi đua bảng xếp hạng cùng bạn bè và đồng nghiệp, thúc đẩy tinh thần học tập chuyên ngành."
                  data-en="Join private study groups to compete on leaderboards with friends and colleagues, boosting professional learning motivation."
                >
                  Join private study groups to compete on leaderboards with friends and colleagues, boosting professional learning motivation.
                </p>
              </div>
              <div className="p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl mb-6 text-black dark:text-white">
                  <i className="fas fa-book-bookmark"></i>
                </div>
                <h3 className="font-display text-xl font-bold mb-4" data-vi="Từ điển chuyên ngành" data-en="FM Dictionary">
                  FM Dictionary
                </h3>
                <p
                  className="font-light opacity-70 leading-relaxed"
                  data-vi="Tra cứu hơn 1.800 thuật ngữ Quản lý cơ sở vật chất với định nghĩa chi tiết, ví dụ thực tế và khả năng hoạt động ngoại tuyến hoàn toàn."
                  data-en="Look up 1,800+ Facility Management terms with detailed definitions, real-world examples, and full offline capability."
                >
                  Look up 1,800+ Facility Management terms with detailed definitions, real-world examples, and full offline capability.
                </p>
              </div>
              <div className="p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl mb-6 text-black dark:text-white">
                  <i className="fas fa-language"></i>
                </div>
                <h3 className="font-display text-xl font-bold mb-4" data-vi="Giao diện đa ngôn ngữ" data-en="Multilingual UI">
                  Multilingual UI
                </h3>
                <p
                  className="font-light opacity-70 leading-relaxed"
                  data-vi="Bản địa hóa toàn bộ giao diện sang tiếng Việt và tiếng Anh thông qua easy_localization — bao gồm huy hiệu, nhãn và tất cả văn bản hệ thống."
                  data-en="Full interface localization in Vietnamese and English via easy_localization — including badges, labels, and all system text."
                >
                  Full interface localization in Vietnamese and English via easy_localization — including badges, labels, and all system text.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-32 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl" data-aos="fade-right">
                <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-50" data-vi="Công nghệ" data-en="Tech Stack">
                  Tech Stack
                </p>
                <h2
                  className="font-display text-4xl md:text-5xl font-bold"
                  data-vi="Xây dựng với công cụ hiện đại,<br>bền bỉ theo thời gian"
                  data-en="Built with modern tools,<br>designed to last"
                >
                  Built with modern tools,
                  <br />
                  designed to last
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Flutter", subVi: "Khung giao diện", subEn: "UI Framework" },
                { label: "Dart", subVi: "Ngôn ngữ", subEn: "Language" },
                { label: "Provider", subVi: "Quản lý trạng thái", subEn: "State Management" },
                { label: "Hive", subVi: "Lưu trữ ngoại tuyến", subEn: "Offline Storage" },
                { label: "Firebase", subVi: "Xác thực + CS dữ liệu", subEn: "Auth + Database" },
                { label: "GetIt", subVi: "Tiêm phụ thuộc", subEn: "Dependency Injection" },
                { label: "easy_localization", subVi: "Đa ngôn ngữ / VI + EN", subEn: "i18n / VI + EN" },
                { label: "SSO", subVi: "Google / Apple", subEn: "Google / Apple" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 border border-black/10 dark:border-white/10 flex items-center gap-4 group hover:border-black dark:hover:border-white transition-colors"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white"></div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-tight">{item.label}</div>
                    <div className="text-[10px] opacity-50 uppercase" data-vi={item.subVi} data-en={item.subEn}>
                      {item.subEn}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Screens */}
        <section
          ref={galleryRef}
          className={`py-32 bg-cardLight dark:bg-cardDark relative overflow-x-hidden${galleryRevealed ? " gallery-revealed" : ""}`}
        >
          <div className="container mx-auto px-6 md:px-8 mb-16 relative flex flex-col md:flex-row justify-between items-center gap-8">
            <h2
              className="font-display text-4xl font-bold text-center md:text-left"
              data-aos="fade-up"
              data-vi="Thiết kế tập trung, tối ưu quy trình"
              data-en="Designed for focus, built for flow"
            >
              Designed for focus, built for flow
            </h2>

            {/* Controls: dots + arrows */}
            <div className="flex items-center gap-6">
              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {APP_SCREENS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { scrollToSlide(i); stopAutoplay(); }}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === currentSlide
                        ? "w-6 h-2 bg-black dark:bg-white"
                        : "w-2 h-2 bg-black/20 dark:bg-white/20 hover:bg-black/50 dark:hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => { scroll("left"); stopAutoplay(); }}
                  className="w-10 h-10 border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-black dark:hover:border-white transition-all rounded-full text-sm"
                  aria-label="Previous"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => { scroll("right"); stopAutoplay(); }}
                  className="w-10 h-10 border border-black/10 dark:border-white/10 flex items-center justify-center hover:border-black dark:hover:border-white transition-all rounded-full text-sm"
                  aria-label="Next"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsHoveringGallery(true)}
            onMouseLeave={() => setIsHoveringGallery(false)}
          >
            {/* Gradient Mask for sides */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cardLight dark:from-cardDark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cardLight dark:from-cardDark to-transparent z-10 pointer-events-none"></div>

            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 overflow-x-auto pb-12 px-16 md:px-32 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {APP_SCREENS.map((item, index) => (
                <div
                  key={index}
                  className={`screen-card flex-none w-64 md:w-72 aspect-[9/19] bg-bgLight dark:bg-bgDark border rounded-[2.5rem] overflow-hidden relative group cursor-zoom-in transition-all duration-500 snap-center ${
                    index === currentSlide
                      ? "border-black dark:border-white scale-[1.03] shadow-xl"
                      : "border-black/10 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40"
                  }`}
                  onClick={() => setSelectedImg(item.img)}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Active slide pulse ring */}
                  {index === currentSlide && (
                    <div className="absolute inset-0 rounded-[2.5rem] ring-2 ring-black dark:ring-white ring-offset-2 ring-offset-cardLight dark:ring-offset-cardDark pointer-events-none" />
                  )}
                  {/* Overlay label */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 pt-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white">
                      <div className="text-[10px] mb-2 opacity-60 uppercase tracking-[0.2em] flex items-center">
                        <i className={`fas ${item.icon} mr-2`}></i>
                        UI Screen
                      </div>
                      <div
                        className="font-display font-bold text-lg uppercase tracking-widest"
                        data-vi={item.label}
                        data-en={item.label}
                      >
                        {item.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Autoplay progress bar */}
            {!isHoveringGallery && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/5 dark:bg-white/5 overflow-hidden">
                <div
                  key={currentSlide}
                  className="h-full bg-black dark:bg-white"
                  style={{
                    animation: "slideProgress 3s linear forwards",
                  }}
                />
              </div>
            )}
          </div>
        </section>

        {/* Permissions */}
        <section id="permissions" className="py-32 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16" data-aos="fade-right">
              <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-50" data-vi="Quyền truy cập ứng dụng" data-en="App Permissions">
                App Permissions
              </p>
              <h2
                className="font-display text-4xl md:text-5xl font-bold"
                data-vi="Ứng dụng truy cập những gì<br>và lý do chính xác"
                data-en="What the app accesses<br>and exactly why"
              >
                What the app accesses
                <br />
                and exactly why
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "fa-microphone-lines",
                  titleVi: "Micro",
                  titleEn: "Microphone",
                  descVi: "Được sử dụng độc quyền cho tính năng luyện phát âm. Âm thanh được xử lý trên thiết bị theo thời gian thực để so sánh với âm thanh tham chiếu. Không có bản ghi nào được lưu trữ, truyền tải hoặc giữ lại sau khi phiên kết thúc.",
                  descEn: "Used exclusively for the pronunciation practice feature. Audio is processed on-device in real-time for comparison with reference audio. No recording is stored, transmitted, or retained after the session ends.",
                  tagVi: "Bắt buộc cho tính năng",
                  tagEn: "Required for feature",
                },
                {
                  icon: "fa-globe",
                  titleVi: "Truy cập Internet",
                  titleEn: "Internet Access",
                  descVi: "Đồng bộ hóa tiến trình học tập với Firebase, cho phép đăng nhập Google / Apple và tải các bản cập nhật nội dung. Trải nghiệm học tập cốt lõi hoạt động hoàn toàn ngoại tuyến sau khi nội dung được tải xuống.",
                  descEn: "Syncs learning progress to Firebase, enables Google / Apple sign-in, and fetches content updates. The core learning experience works fully offline once content is downloaded.",
                  tagVi: "Bắt buộc để đồng bộ",
                  tagEn: "Required for sync",
                },
                {
                  icon: "fa-bell",
                  titleVi: "Thông báo đẩy",
                  titleEn: "Push Notifications",
                  descVi: "Gửi các lời nhắc học tập hàng ngày tùy chọn và cảnh báo chuỗi ngày để giúp bạn đi đúng hướng. Có thể tắt bất cứ lúc nào trong Cài đặt thiết bị của bạn mà không ảnh hưởng đến bất kỳ chức năng nào của Ứng dụng.",
                  descEn: "Sends optional daily learning reminders and streak alerts to keep you on track. Can be disabled at any time in your device Settings without affecting any App functionality.",
                  tagVi: "Tùy chọn",
                  tagEn: "Optional",
                  optional: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 md:p-8 border border-black/10 dark:border-white/10 flex flex-col md:flex-row gap-8 items-start group hover:border-black dark:hover:border-white transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-3xl text-black dark:text-white">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-xl font-bold mb-2" data-vi={item.titleVi} data-en={item.titleEn}>
                      {item.titleEn}
                    </h4>
                    <p className="font-light opacity-70 leading-relaxed mb-4" data-vi={item.descVi} data-en={item.descEn}>
                      {item.descEn}
                    </p>
                    <span
                      className={`text-[10px] border px-2 py-1 uppercase font-bold tracking-widest ${
                        item.optional
                          ? "border-black/20 dark:border-white/20 opacity-50"
                          : "border-black dark:border-white"
                      }`}
                      data-vi={item.tagVi}
                      data-en={item.tagEn}
                    >
                      {item.tagEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-cardLight dark:bg-cardDark relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div data-aos="fade-right">
                <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-50" data-vi="Về dự án" data-en="About the Project">
                  About the Project
                </p>
                <h2
                  className="font-display text-4xl md:text-5xl font-bold mb-8"
                  data-vi="Xóa bỏ rào cản ngôn ngữ<br>trong ngành FM Việt Nam"
                  data-en="Removing language barriers<br>in Vietnam's FM industry"
                >
                  Removing language barriers
                  <br />
                  in Vietnam's FM industry
                </h2>
                <p
                  className="font-light text-lg opacity-70 mb-6 text-justify"
                  data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất và bất kỳ ai quan tâm đến lĩnh vực này làm chủ hơn 1.800 thuật ngữ FM chuyên ngành — được xây dựng bằng Flutter cho iOS & Android."
                  data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community and anyone interested in the field master 1,800+ specialized FM terms — built with Flutter for iOS & Android."
                >
                  FM Dictionary is a premium vocabulary app helping the Facilities Management
                  community and anyone interested in the field master 1,800+ specialized FM
                  terms — built with Flutter for iOS & Android.
                </p>
                <p
                  className="font-light text-lg opacity-70 mb-6 text-justify"
                  data-vi="Ứng dụng được thiết kế và phát triển bởi An Khang Studio, đại diện cho một dự án Flutter hoàn chỉnh: kiến trúc sạch, thiết kế ưu tiên ngoại tuyến và hệ thống học tập trò chơi hóa hiện đại."
                  data-en="The app was designed and developed by An Khang Studio, representing a complete production-grade Flutter project: clean architecture, offline-first design, and modern gamified learning mechanics."
                >
                  The app was designed and developed by An Khang Studio, representing a
                  complete production-grade Flutter project: clean architecture,
                  offline-first design, and modern gamified learning mechanics.
                </p>
                <p
                  className="text-xs opacity-80 font-medium uppercase tracking-widest"
                  data-vi="Nội dung © Thủy Tạ · Ứng dụng © An Khang Studio"
                  data-en="Content © Thuy Ta · Application © An Khang Studio"
                >
                  Content © Thuy Ta · Application © An Khang Studio
                </p>
              </div>
              <div className="p-8 md:p-12 border border-black dark:border-white relative" data-aos="fade-left">
                <div
                  className="absolute -top-4 left-6 bg-cardLight dark:bg-cardDark px-2 text-xs font-bold uppercase tracking-widest"
                  data-vi="Khám phá thêm"
                  data-en="Explore More"
                >
                  Explore More
                </div>
                <h3 className="font-display text-2xl font-bold mb-4" data-vi="Dữ liệu & Liên hệ" data-en="Data & Contact">
                  Data & Contact
                </h3>
                <p className="font-light opacity-70 mb-8" data-vi="Tìm hiểu về các quy định dữ liệu hoặc liên hệ về dự án." data-en="Learn about data practices or get in touch about the project.">
                  Learn about data practices or get in touch about the project.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/fm-dictionary/support"
                    className="flex justify-between items-center p-4 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group"
                  >
                    <span className="flex items-center text-sm font-bold uppercase tracking-widest">
                      <i className="fas fa-headset mr-3 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors"></i>
                      <span data-vi="Hỗ trợ & Liên hệ" data-en="Support & Contact">
                        Support & Contact
                      </span>
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                  <Link
                    href="/fm-dictionary/privacy-policy"
                    className="flex justify-between items-center p-4 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all group"
                  >
                    <span className="flex items-center text-sm font-bold uppercase tracking-widest">
                      <i className="fas fa-shield-halved mr-3 text-black dark:text-white"></i>
                      <span data-vi="Chính sách bảo mật" data-en="Privacy Policy">
                        Privacy Policy
                      </span>
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                  <Link
                    href="/fm-dictionary/terms-of-service"
                    className="flex justify-between items-center p-4 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all group"
                  >
                    <span className="flex items-center text-sm font-bold uppercase tracking-widest">
                      <i className="fas fa-file-contract mr-3 text-black dark:text-white"></i>
                      <span data-vi="Điều khoản dịch vụ" data-en="Terms of Service">
                        Terms of Service
                      </span>
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FMFooter />

      {/* Lightbox / Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-sm aspect-[9/19] animate-in zoom-in-95 duration-300">
            <Image
              src={selectedImg}
              alt="Zoomed Screenshot"
              fill
              className="object-contain rounded-2xl shadow-2xl"
            />
          </div>
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-3xl p-2"
            onClick={() => setSelectedImg(null)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
}
