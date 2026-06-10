"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import FMHeader from "../../components/fm-dictionary/Header";
import FMFooter from "../../components/fm-dictionary/Footer";
import { 
  Terminal, 
  DeviceMobile, 
  Globe, 
  Network, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Trophy,
  Translate,
  MicrophoneStage,
  Layout,
  DownloadSimple,
  AppleLogo,
  GooglePlayLogo,
  CaretLeft,
  CaretRight,
  Plus
} from "@phosphor-icons/react";

const APP_SCREENS = [
  { icon: <Layout />, label: "Home", img: "/images/fm-dictionary/fm_dictionary_0001.webp" },
  { icon: <Network />, label: "Roadmap", img: "/images/fm-dictionary/fm_dictionary_0002.webp" },
  { icon: <Terminal />, label: "Quiz", img: "/images/fm-dictionary/fm_dictionary_0003.webp" },
  { icon: <MicrophoneStage />, label: "Pronunciation", img: "/images/fm-dictionary/fm_dictionary_0004.webp" },
  { icon: <Trophy />, label: "Badges", img: "/images/fm-dictionary/fm_dictionary_0005.webp" },
  { icon: <ShieldCheck />, label: "Dictionary", img: "/images/fm-dictionary/fm_dictionary_0006.webp" },
];

export default function FMDictionaryPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % APP_SCREENS.length;
        scrollToSlide(next);
        return next;
      });
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHoveringGallery) startAutoplay();
    else stopAutoplay();
    return stopAutoplay;
  }, [isHoveringGallery]);

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

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white origin-left z-[60]" style={{ scaleX }} />
      <div className="noise-overlay" />
      <div className="ambient-glow top-glow opacity-30 dark:opacity-10" />
      <div className="ambient-glow bottom-glow opacity-30 dark:opacity-5" />

      <FMHeader />

      <main className="relative overflow-x-hidden">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[100dvh] flex items-center relative pt-32 pb-20 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -left-20 bottom-0 w-[120%] md:w-2/3 h-1/2 md:h-2/3 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000')] bg-cover bg-center grayscale pointer-events-none rounded-tr-[120px] dark:opacity-20"
          />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <span className="h-[1px] w-8 bg-black dark:bg-white opacity-30"></span>
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50">An Khang Studio · 2026</p>
              </div>
              
              <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tighter mb-12">
                <span data-vi="Làm chủ" data-en="Master">Master</span> <span className="text-black dark:text-white">FM</span>
                <br />
                <span data-vi="theo cách" data-en="The">The</span> <span className="font-serif italic text-accent dark:text-accentDark">Smart</span> <span data-vi="thông minh." data-en="Way.">Way.</span>
              </h1>
              
              <p className="text-lg md:text-xl font-light max-w-2xl mb-12 opacity-70 leading-relaxed" data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất làm chủ hơn 1.800 thuật ngữ FM chuyên ngành — xây dựng bằng Flutter cho iOS & Android." data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community master 1,800+ specialized FM terms — built with Flutter for iOS & Android.">
                FM Dictionary is a premium vocabulary app helping the Facilities Management community master 1,800+ specialized FM terms — built with Flutter for iOS & Android.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#download" className="group inline-flex items-center justify-center space-x-4 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:opacity-80">
                  <DownloadSimple size={18} weight="bold" />
                  <span data-vi="Tải ứng dụng" data-en="Download App">Download App</span>
                </a>
                <a href="#features" className="group inline-flex items-center justify-center space-x-4 border border-black/10 dark:border-white/10 px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  <span data-vi="Khám phá" data-en="Explore">Explore</span>
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 border-y border-black/[0.03] dark:border-white/[0.03]">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { val: "2", unit: "+", label: "Platforms", labelVi: "Nền tảng" },
                { val: "1800", unit: "+", label: "Terms", labelVi: "Thuật ngữ" },
                { val: "30", unit: "", label: "Badges", labelVi: "Huy hiệu" },
                { val: "100", unit: "%", label: "Offline", labelVi: "Ngoại tuyến" },
              ].map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">{s.val}<span className="text-lg ml-1 opacity-30 font-light">{s.unit}</span></div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40" data-vi={s.labelVi} data-en={s.label}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES - ASYMMETRIC REDESIGN */}
        <section id="features" className="py-24 md:py-48 bg-zinc-50 dark:bg-zinc-900/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mb-24 md:mb-32">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8" data-vi="Trải nghiệm<br>vượt giới hạn" data-en="Infinite<br>Experience">Infinite<br />Experience</h2>
              <p className="text-xl font-light opacity-50 leading-relaxed" data-vi="Mọi tính năng được thiết kế để bạn tập trung hoàn toàn vào việc làm chủ kiến thức." data-en="Every feature is designed to keep you focused on mastering professional knowledge.">Every feature is designed to keep you focused on mastering professional knowledge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 premium-card p-10 md:p-16 rounded-[40px] flex flex-col justify-between group"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-12 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500">
                  <Network size={32} className="group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight" data-vi="Lộ trình học tập" data-en="Roadmap Learning">Roadmap Learning</h3>
                  <p className="text-lg font-light opacity-60 leading-relaxed max-w-xl" data-vi="Hệ thống chương hồi khoa học giúp bạn theo dõi hành trình từ người mới đến chuyên gia FM." data-en="Scientific chapter system helping you track your journey from beginner to FM expert.">Scientific chapter system helping you track your journey from beginner to FM expert.</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-black dark:bg-white text-white dark:text-black p-10 md:p-12 rounded-[40px] flex flex-col justify-between"
              >
                <MicrophoneStage size={48} weight="thin" className="opacity-40 mb-12 md:mb-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight" data-vi="Phát âm AI" data-en="AI Pronunciation">AI Pronunciation</h3>
                  <p className="text-base font-light opacity-70 leading-relaxed" data-vi="Phân tích giọng nói thời gian thực với độ chính xác cao." data-en="Real-time voice analysis with high precision.">Real-time voice analysis with high precision.</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 glass-card p-10 rounded-[40px] gradient-border"
              >
                <Trophy size={32} className="mb-8" />
                <h3 className="text-xl font-bold mb-4" data-vi="Huy hiệu" data-en="Badges">Badges</h3>
                <p className="text-sm font-light opacity-60 leading-relaxed" data-vi="Hệ thống vinh danh với 30 cấp bậc huy hiệu độc đáo." data-en="Achievement system with 30 unique badge levels.">Achievement system with 30 unique badge levels.</p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-8 premium-card p-10 md:p-12 rounded-[40px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              >
                <div className="max-w-md">
                  <h3 className="text-2xl font-bold mb-4" data-vi="Đa ngôn ngữ" data-en="Multilingual">Multilingual</h3>
                  <p className="text-base font-light opacity-60" data-vi="Hỗ trợ hoàn hảo cho cả tiếng Anh và tiếng Việt." data-en="Perfect support for both English and Vietnamese.">Perfect support for both English and Vietnamese.</p>
                </div>
                <Translate size={64} weight="thin" className="opacity-10 self-end md:self-auto" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="tech" className="py-24 md:py-48 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8" data-vi="Sức mạnh<br>từ Flutter" data-en="Powered by<br>Flutter">Powered by<br />Flutter</h2>
                <p className="text-lg font-light opacity-60 leading-relaxed mb-12" data-vi="Được xây dựng với kiến trúc Clean Architecture, đảm bảo ứng dụng luôn mượt mà và ổn định." data-en="Built with Clean Architecture, ensuring the app remains smooth and stable at all times.">Built with Clean Architecture, ensuring the app remains smooth and stable at all times.</p>
                <div className="grid grid-cols-2 gap-6">
                  {["Dart", "Firebase", "Hive", "Provider"].map(t => (
                    <div key={t} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 relative">
                <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-[40px] md:rounded-[80px] flex items-center justify-center p-8 md:p-20 relative overflow-hidden">
                  <Cpu size={240} weight="thin" className="opacity-[0.03] dark:opacity-[0.05] absolute scale-75 md:scale-100" />
                  <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10 w-full">
                    {["Architecture", "Security", "Offline", "Performance"].map((s, i) => (
                      <div key={s} className="bg-white dark:bg-black p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-black/[0.03] dark:border-white/[0.05]">
                        <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] opacity-30 mb-1 md:mb-2">0{i+1}</p>
                        <p className="text-sm md:text-lg font-bold">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APP SCREENS GALLERY */}
        <section className="py-24 md:py-48 bg-bgLight dark:bg-bgDark relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter" data-vi="Giao diện<br>tinh tế" data-en="Refined<br>UI/UX">Refined<br />UI/UX</h2>
            <div className="flex items-center gap-6 md:gap-12 w-full md:w-auto justify-between">
              <div className="flex gap-2 md:gap-4">
                {APP_SCREENS.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => { scrollToSlide(i); stopAutoplay(); }}
                    className={`h-1 transition-all duration-500 ${i === currentSlide ? "w-8 md:w-12 bg-black dark:bg-white" : "w-2 md:w-4 bg-black/10 dark:bg-white/10"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => { scroll("left"); stopAutoplay(); }} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><CaretLeft size={18} /></button>
                <button onClick={() => { scroll("right"); stopAutoplay(); }} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"><CaretRight size={18} /></button>
              </div>
            </div>
          </div>

          <div className="relative" onMouseEnter={() => setIsHoveringGallery(true)} onMouseLeave={() => setIsHoveringGallery(false)}>
            <div ref={scrollRef} className="flex gap-6 md:gap-8 overflow-x-auto pb-24 px-[10%] md:px-[25%] scrollbar-hide snap-x snap-mandatory scroll-smooth">
              {APP_SCREENS.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedImg(item.img)}
                  className={`screen-card flex-none w-[260px] md:w-[320px] aspect-[9/19] rounded-[32px] md:rounded-[48px] overflow-hidden relative group cursor-zoom-in snap-center transition-all duration-700 ${index === currentSlide ? "scale-100 opacity-100 shadow-[0_40px_80px_rgba(0,0,0,0.1)]" : "scale-90 opacity-40 blur-[2px]"}`}
                >
                  <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 md:p-10 pt-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <div className="flex items-center space-x-3 text-white mb-2 text-xs md:text-sm">
                      <span className="opacity-50">{item.icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                    </div>
                  </div>
                  {index === currentSlide && (
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Plus size={20} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD SECTION */}
        <section id="download" className="py-24 md:py-48 bg-zinc-900 text-white rounded-[40px] md:rounded-[120px] mx-4 md:mx-10 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center opacity-10 grayscale pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <div className="max-w-3xl text-center md:text-left">
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-12" data-vi="Sẵn sàng<br>trên túi của bạn" data-en="Ready<br>In Your Pocket">Ready<br />In Your Pocket</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <a href="https://apps.apple.com/us/app/fm-dictionary/id6774868353" target="_blank" rel="noreferrer" className="flex items-center justify-center md:justify-start space-x-6 p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group">
                  <AppleLogo size={40} weight="fill" />
                  <div className="text-left">
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">App Store</p>
                    <p className="text-lg md:text-xl font-bold">Download for iOS</p>
                  </div>
                </a>
                <div className="flex items-center justify-center md:justify-start space-x-6 p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10 opacity-30 cursor-not-allowed">
                  <GooglePlayLogo size={40} weight="fill" />
                  <div className="text-left">
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-40">Google Play</p>
                    <p className="text-lg md:text-xl font-bold" data-vi="Sắp ra mắt" data-en="Coming Soon">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERMISSIONS & ABOUT */}
        <section id="permissions" className="py-24 md:py-48">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-bold tracking-tighter mb-12 md:mb-16 text-center md:text-left" data-vi="Quyền hạn & Bảo mật" data-en="Permissions & Security">Permissions & Security</h2>
                <div className="space-y-10 md:space-y-12">
                  {[
                    { icon: MicrophoneStage, title: "Microphone", titleVi: "Micro", desc: "Used exclusively for pronunciation practice. No audio is ever stored or transmitted.", descVi: "Chỉ sử dụng cho tính năng luyện phát âm. Tuyệt đối không lưu trữ hay truyền tải âm thanh." },
                    { icon: Globe, title: "Internet", titleVi: "Internet", desc: "Used for syncing progress and content updates. Core features work 100% offline.", descVi: "Đồng bộ tiến trình và cập nhật nội dung. Các tính năng cốt lõi hoạt động ngoại tuyến 100%." }
                  ].map((p, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                      <div className="text-black/20 dark:text-white/20">
                        <p.icon size={40} weight="thin" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2" data-vi={p.titleVi} data-en={p.title}>{p.title}</h4>
                        <p className="text-lg font-light opacity-60 leading-relaxed" data-vi={p.descVi} data-en={p.desc}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-[32px] md:rounded-[40px] border border-black/[0.03] dark:border-white/[0.05]">
                <h3 className="text-2xl font-bold mb-8 text-center md:text-left" data-vi="Liên kết pháp lý" data-en="Legal Links">Legal Links</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { label: "Support & Contact", labelVi: "Hỗ trợ & Liên hệ", href: "/fm-dictionary/support" },
                    { label: "Privacy Policy", labelVi: "Chính sách bảo mật", href: "/fm-dictionary/privacy-policy" },
                    { label: "Terms of Service", labelVi: "Điều khoản dịch vụ", href: "/fm-dictionary/terms-of-service" }
                  ].map(l => (
                    <Link key={l.href} href={l.href} className="flex justify-between items-center p-4 md:p-5 rounded-xl md:rounded-2xl bg-white dark:bg-black border border-black/[0.03] dark:border-white/[0.05] hover:border-black dark:hover:border-white transition-all group">
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100" data-vi={l.labelVi} data-en={l.label}>{l.label}</span>
                      <ArrowRight size={16} className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FMFooter />

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-6 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-md aspect-[9/19]"
            >
              <Image src={selectedImg} alt="Screenshot" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
