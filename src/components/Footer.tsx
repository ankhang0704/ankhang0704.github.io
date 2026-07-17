"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/Icons";

interface FooterProps {
  variant?: "main" | "fm";
}

export default function Footer({ variant = "main" }: FooterProps) {
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
        className={`py-20 text-center min-h-[50vh] flex flex-col justify-center relative overflow-x-hidden ${
          variant === "main"
            ? "bg-cardLight dark:bg-cardDark border-t border-black/5 dark:border-white/5"
            : "border-t border-black/10 dark:border-white/10"
        }`}
      >
        <div className="container mx-auto px-6 md:px-8 relative z-10" data-aos="zoom-in">
          {variant === "main" ? (
            <>
              <h2
                className="font-display text-5xl md:text-8xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="Bắt Đầu."
                data-en="Let&apos;s Talk."
              >
                Let&apos;s Talk.
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
                  aria-label="GitHub Profile"
                  className="hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.Github className="text-black dark:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khang-nguyen-0855893a7/"
                  aria-label="LinkedIn Profile"
                  className="hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.LinkedIn className="text-black dark:text-white" />
                </a>
                <a
                  href="https://www.facebook.com/ankhang0704"
                  aria-label="Facebook Profile"
                  className="hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.Facebook className="text-black dark:text-white" />
                </a>
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href="/my_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <span data-vi="Tải xuống CV" data-en="Download CV">Download CV</span>
                </a>
              </div>

              <div className="mt-16 flex flex-col items-center gap-2">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  © 2026 An Khang
                </p>
                <p 
                  className="text-xs font-medium opacity-80 uppercase tracking-widest"
                  data-vi="Cập nhật &middot; Tháng 7, 2026"
                  data-en="Updated &middot; July 2026"
                >
                  Updated &middot; July 2026
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
                  className="hover:opacity-50 transition-opacity duration-500"
                  aria-label="Email"
                >
                  <Icons.Mail className="text-black dark:text-white" />
                </a>
                <a
                  href="https://github.com/ankhang0704"
                  className="hover:opacity-50 transition-opacity duration-500"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Icons.Github className="text-black dark:text-white" />
                </a>
              </div>

              <div className="flex justify-center space-x-6 text-[10px] uppercase tracking-widest mb-12 opacity-60">
                <Link href="/fm-dictionary/support/" className="hover-underline" data-vi="Trung tâm Hỗ trợ" data-en="Support Center">
                  Support Center
                </Link>
                <Link href="/fm-dictionary/privacy-policy/" className="hover-underline" data-vi="Chính sách Bảo mật" data-en="Privacy Policy">
                  Privacy Policy
                </Link>
                <Link href="/fm-dictionary/terms-of-service/" className="hover-underline" data-vi="Điều khoản Dịch vụ" data-en="Terms of Service">
                  Terms of Service
                </Link>
                <Link href="/fm-dictionary/delete-account/" className="hover-underline" data-vi="Xóa Tài khoản" data-en="Delete Account">
                  Delete Account
                </Link>
              </div>

              <div className="flex flex-col items-center space-y-4">
                  <p
                    className="text-[10px] font-medium opacity-80 uppercase tracking-[0.3em]"
                    data-vi="© 2026 FM Dictionary · Bảo lưu mọi quyền"
                    data-en="© 2026 FM Dictionary · All rights reserved"
                  >
                    © 2026 FM Dictionary · All rights reserved
                  </p>
                  
                  <Link 
                    href="/" 
                    target="_blank" 
                    className="text-[12px] opacity-80 hover:opacity-100 transition-opacity duration-300 font-medium tracking-widest uppercase"
                  >
                    By An Khang Studio
                  </Link>
              </div>
            </>
          )}
        </div>
      </footer>

      <button
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-all duration-500 z-50 hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        aria-label="Back to top"
      >
        <Icons.ArrowUp />
      </button>
    </>
  );
}
