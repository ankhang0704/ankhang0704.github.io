"use client";

import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/Icons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

interface FooterProps {
  variant?: "main";
}

export default function Footer({ variant = "main" }: FooterProps = {}) {
  void variant;
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();
  const lang = pathname.startsWith("/vi") ? "vi" : "en";
  const isVi = lang === "vi";
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const footerTl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            once: true,
          },
        });

        footerTl
          .fromTo(
            ".footer-content",
            { scale: 0.96, autoAlpha: 0, y: 30 },
            { scale: 1, autoAlpha: 1, y: 0, duration: 0.9, ease: "power2.out" }
          )
          .fromTo(
            ".footer-social-icon",
            { y: 15, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
          );
      }

      // Back to top scroll listener via ScrollTrigger without window event listener jank
      ScrollTrigger.create({
        start: "500px top",
        onEnter: () => setShowBackToTop(true),
        onLeaveBack: () => setShowBackToTop(false),
      });
    },
    { scope: footerRef, dependencies: [pathname], revertOnUpdate: true }
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <>
      <footer
        id="contact"
        ref={footerRef}
        data-nav-section="contact"
        className="py-24 md:py-32 border-t border-black/10 dark:border-white/10 text-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-8 max-w-4xl footer-content">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-75">
            {isVi ? "Liên hệ" : "Get in touch"}
          </p>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-12 tracking-tight">
            {isVi ? "Cùng tạo nên điều đặc biệt." : "Let's build something."}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:ankhang.nguyen0704@gmail.com"
              className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <span>{isVi ? "Gửi Email Trực Tiếp" : "Send an Email"}</span>
              <Icons.ArrowRight size={16} aria-hidden="true" className="ml-3" />
            </a>

            <CopyEmailButton
              email="ankhang.nguyen0704@gmail.com"
              isVi={isVi}
            />
          </div>

          <div className="flex justify-center space-x-6 sm:space-x-8 text-2xl">
            <a
              href="https://github.com/ankhang0704"
              className="footer-social-icon inline-flex min-h-11 min-w-11 items-center justify-center hover:opacity-50 transition-opacity duration-300"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Icons.Github className="text-black dark:text-white" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankhang0704/"
              className="footer-social-icon inline-flex min-h-11 min-w-11 items-center justify-center hover:opacity-50 transition-opacity duration-300"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Icons.LinkedIn className="text-black dark:text-white" aria-hidden="true" />
            </a>
            <a
              href="mailto:ankhang.nguyen0704@gmail.com"
              className="footer-social-icon inline-flex min-h-11 min-w-11 items-center justify-center hover:opacity-50 transition-opacity duration-300"
              aria-label="Email"
            >
              <Icons.Mail className="text-black dark:text-white" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="/my_cv.pdf"
              download="Nguyen-An-Khang-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
            >
              <span>{isVi ? "Tải xuống CV" : "Download CV"}</span>
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
              © 2026 An Khang
            </p>
            <p className="text-xs font-medium opacity-80 uppercase tracking-widest">
              {isVi ? "Cập nhật · Tháng 10, 2026" : "Updated · October 2026"}
            </p>
          </div>
        </div>
      </footer>

      {/* Sharp Architectural Back to Top Button */}
      <button
        type="button"
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black flex items-center justify-center transition-[opacity,transform] duration-300 z-50 hover:opacity-80 active:scale-95 ${
          showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        aria-label={isVi ? "Cuộn lên đầu trang" : "Back to top"}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <Icons.ArrowUp size={20} aria-hidden="true" />
      </button>
    </>
  );
}
