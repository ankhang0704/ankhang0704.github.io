"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
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
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* EYEBROW 2/2 ALLOWED */}
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-8" data-vi="Sẵn sàng hợp tác" data-en="Available for projects">Available for projects</p>
            
            <h2
              className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter"
              data-vi="Bắt đầu."
              data-en="Let's build."
            >
              Let's build.
            </h2>

            <a
              href="mailto:ankhang.nguyen0704@gmail.com"
              className="text-xl md:text-3xl font-serif italic border-b border-black/20 dark:border-white/20 pb-1 hover:border-black dark:hover:border-white transition-all break-all"
            >
              ankhang.nguyen0704@gmail.com
            </a>

            <div className="flex justify-center space-x-10 mt-20">
              <a
                href="https://github.com/ankhang0704"
                className="opacity-40 hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={28} weight="bold" />
              </a>
              <a
                href="https://www.linkedin.com/in/khang-nguyen-0855893a7/"
                className="opacity-40 hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinLogo size={28} weight="bold" />
              </a>
              <a
                href="https://www.facebook.com/ankhang0704"
                className="opacity-40 hover:opacity-100 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookLogo size={28} weight="bold" />
              </a>
            </div>

            <div className="mt-32 pt-10 border-t border-black/[0.03] dark:border-white/[0.03] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] font-bold uppercase tracking-[0.2em] opacity-30">
              <p>© 2026 An Khang.</p>
              <p data-vi="Sản xuất bởi An Khang" data-en="Crafted by An Khang">Crafted by An Khang</p>
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
