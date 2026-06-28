"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        id="contact"
        className="py-20 text-center min-h-[50vh] flex flex-col justify-center relative overflow-x-hidden"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.01] grayscale pointer-events-none blur-[4px] max-w-full"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10" data-aos="zoom-in">
          <h2
            className="font-display text-5xl md:text-8xl font-bold mb-8 uppercase tracking-tighter"
            data-vi="Bắt Đầu."
            data-en="Let's Talk."
          >
            Let's Talk.
          </h2>
          <a
            href="mailto:ankhang.nguyen0704@gmail.com"
            className="text-xl sm:text-2xl border-b-2 border-black dark:border-white pb-1 hover:opacity-50 transition-opacity break-all"
          >
            ankhang.nguyen0704@gmail.com
          </a>

          <div className="flex justify-center space-x-8 mt-16 text-2xl">
            <a
              href="https://github.com/ankhang0704"
              className="hover:opacity-50 transition-opacity duration-500"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.Github className="text-black dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/khang-nguyen-0855893a7/"
              className="hover:opacity-50 transition-opacity duration-500"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.LinkedIn className="text-black dark:text-white" />
            </a>
            <a
              href="https://www.facebook.com/ankhang0704"
              className="hover:opacity-50 transition-opacity duration-500"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.Facebook className="text-black dark:text-white" />
            </a>
          </div>

          <p className="mt-16 text-sm font-light opacity-50 uppercase tracking-widest">
            © 2026 An Khang.{" "}
            <span data-vi="Portfolio Tối Giản." data-en="Portfolio.">
              Portfolio.
            </span>
          </p>
        </div>
      </footer>

      <button
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-all duration-500 z-50 hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Icons.ArrowUp />
      </button>
    </>
  );
}
