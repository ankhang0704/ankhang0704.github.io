"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { GithubLogo, LinkedinLogo, FacebookLogo, ArrowUp } from "@phosphor-icons/react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 500);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        id="contact"
        className="py-32 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000')] bg-cover bg-center opacity-[0.02] dark:opacity-[0.01] grayscale pointer-events-none blur-[4px]"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-40 mb-8" data-vi="Sẵn sàng hợp tác" data-en="Available for projects">Available for projects</p>
            <h2
              className="font-display text-5xl md:text-8xl font-bold mb-12 tracking-tighter"
              data-vi="Bắt đầu."
              data-en="Let's build."
            >
              Let's build.
            </h2>
            <a
              href="mailto:ankhang.nguyen0704@gmail.com"
              className="text-2xl md:text-4xl font-serif italic border-b-2 border-black dark:border-white pb-2 hover:opacity-50 transition-all break-all"
            >
              ankhang.nguyen0704@gmail.com
            </a>

            <div className="flex justify-center space-x-12 mt-20">
              <a
                href="https://github.com/ankhang0704"
                className="opacity-50 hover:opacity-100 hover:-translate-y-1 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={32} weight="bold" />
              </a>
              <a
                href="https://www.linkedin.com/in/khang-nguyen-0855893a7/"
                className="opacity-50 hover:opacity-100 hover:-translate-y-1 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo size={32} weight="bold" />
              </a>
              <a
                href="https://www.facebook.com/ankhang0704"
                className="opacity-50 hover:opacity-100 hover:-translate-y-1 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookLogo size={32} weight="bold" />
              </a>
            </div>

            <div className="mt-32 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
                © 2026 An Khang.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30" data-vi="Sản xuất bởi An Khang" data-en="Crafted by An Khang">
                Crafted by An Khang
              </p>
            </div>
          </motion.div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-all duration-700 z-50 shadow-2xl hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        }`}
      >
        <ArrowUp size={24} weight="bold" />
      </button>
    </>
  );
}
