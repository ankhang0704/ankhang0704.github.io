"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/Icons";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { localizedPath } from "@/lib/locale-path";

interface FooterProps {
  variant?: "main" | "fm";
}

export default function Footer({ variant = "main" }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();
  const lang = pathname.startsWith("/vi") ? "vi" : "en";
  const isVi = lang === "vi";
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.fromTo(
          ".footer-content",
          { scale: 0.96, autoAlpha: 0, y: 30 },
          {
            scale: 1,
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".footer-social-icon",
          { y: 15, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              once: true,
            },
          }
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        ref={footerRef}
        id="contact"
        className={`py-20 text-center min-h-[50vh] flex flex-col justify-center relative overflow-x-hidden ${
          variant === "main"
            ? "bg-cardLight dark:bg-cardDark border-t border-black/5 dark:border-white/5"
            : "border-t border-black/10 dark:border-white/10"
        }`}
      >
        <div className="footer-content container mx-auto px-6 md:px-8 relative z-10">
          {variant === "main" ? (
            <>
              <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 uppercase tracking-tighter">
                {isVi ? "Bắt Đầu." : "Let's Talk."}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:ankhang.nguyen0704@gmail.com"
                  className="text-xl sm:text-2xl border-b-2 border-black dark:border-white pb-1 hover:opacity-50 transition-opacity break-all"
                >
                  ankhang.nguyen0704@gmail.com
                </a>
                <CopyEmailButton email="ankhang.nguyen0704@gmail.com" isVi={isVi} />
              </div>

              <div className="flex justify-center space-x-8 mt-16 text-2xl">
                <a
                  href="https://github.com/ankhang0704"
                  aria-label="GitHub Profile"
                  className="footer-social-icon hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.Github className="text-black dark:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ankhang0704/"
                  aria-label="LinkedIn Profile"
                  className="footer-social-icon hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.LinkedIn className="text-black dark:text-white" />
                </a>
                <a
                  href="https://www.facebook.com/ankhang0704"
                  aria-label="Facebook Profile"
                  className="footer-social-icon hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.Facebook className="text-black dark:text-white" />
                </a>
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href="/my_cv.pdf"
                  download="Nguyen-An-Khang-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <span>{isVi ? "Tải xuống CV" : "Download CV"}</span>
                </a>
              </div>

              <div className="mt-16 flex flex-col items-center gap-2">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  © 2026 An Khang
                </p>
                <p className="text-xs font-medium opacity-80 uppercase tracking-widest">
                  {isVi ? "Cập nhật · Tháng 9, 2026" : "Updated · September 2026"}
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-display text-5xl font-bold mb-8 uppercase tracking-tighter">
                FM Dictionary.
              </h2>
              <div className="flex justify-center space-x-8 mb-12 text-3xl">
                <a
                  href="mailto:ankhang.nguyen0704@gmail.com"
                  className="footer-social-icon hover:opacity-50 transition-opacity duration-500"
                  aria-label="Email"
                >
                  <Icons.Mail className="text-black dark:text-white" />
                </a>
                <a
                  href="https://github.com/ankhang0704"
                  className="footer-social-icon hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Icons.Github className="text-black dark:text-white" />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] uppercase tracking-widest mb-12 opacity-60">
                <Link href={localizedPath(lang, "/fm-dictionary/support/")} className="hover-underline">
                  {isVi ? "Trung tâm Hỗ trợ" : "Support Center"}
                </Link>
                <Link href={localizedPath(lang, "/fm-dictionary/privacy-policy/")} className="hover-underline">
                  {isVi ? "Chính sách Bảo mật" : "Privacy Policy"}
                </Link>
                <Link href={localizedPath(lang, "/fm-dictionary/terms-of-service/")} className="hover-underline">
                  {isVi ? "Điều khoản Dịch vụ" : "Terms of Service"}
                </Link>
                <Link href={localizedPath(lang, "/fm-dictionary/delete-account/")} className="hover-underline">
                  {isVi ? "Xóa Tài khoản" : "Delete Account"}
                </Link>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <p className="text-[10px] font-medium opacity-80 uppercase tracking-[0.3em]">
                  {isVi ? "© 2026 FM Dictionary · Bảo lưu mọi quyền" : "© 2026 FM Dictionary · All rights reserved"}
                </p>
                
                <Link 
                  href={localizedPath(lang, "/")}
                  className="text-[12px] opacity-80 hover:opacity-100 transition-opacity duration-300 font-medium tracking-widest uppercase"
                >
                  By An Khang Studio
                </Link>
              </div>
            </>
          )}
        </div>
      </footer>

      {/* Sharp Architectural Back to Top Button */}
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black flex items-center justify-center transition-all duration-500 z-50 hover:opacity-80 active:scale-95 ${
          showBackToTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <Icons.ArrowUp size={20} />
      </button>
    </>
  );
}
