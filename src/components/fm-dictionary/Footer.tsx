"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function FMFooter() {
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
        className="py-20 text-center relative border-t border-black/10 dark:border-white/10 overflow-x-hidden"
      >
        <div className="container mx-auto px-6 md:px-8 relative z-10" data-aos="zoom-in">
          <h2 className="font-display text-5xl font-bold mb-8 uppercase tracking-tighter">
            FM Dictionary.
          </h2>
          <div className="flex justify-center space-x-8 mb-12 text-xl">
            <a
              href="mailto:ankhang.nguyen0704@gmail.com"
              className="hover:-translate-y-2 transition-transform"
            >
              <i className="fas fa-envelope text-black dark:text-white"></i>
            </a>
            <a
              href="https://github.com/ankhang0704"
              className="hover:-translate-y-2 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github text-black dark:text-white"></i>
            </a>
          </div>

          <div className="flex justify-center space-x-6 text-[10px] uppercase tracking-widest mb-12 opacity-60">
            <Link href="/fm-dictionary/support" className="hover-underline" data-vi="Trung tâm Hỗ trợ" data-en="Support Center">
              Support Center
            </Link>
            <Link href="/fm-dictionary/privacy-policy" className="hover-underline" data-vi="Chính sách Bảo mật" data-en="Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="/fm-dictionary/terms-of-service" className="hover-underline" data-vi="Điều khoản Dịch vụ" data-en="Terms of Service">
              Terms of Service
            </Link>
          </div>

          <div className="flex flex-col items-center space-y-4">
              <p
                className="text-[10px] font-medium opacity-50 uppercase tracking-[0.3em]"
                data-vi="© 2026 FM Dictionary · Bảo lưu mọi quyền"
                data-en="© 2026 FM Dictionary · All rights reserved"
              >
                © 2026 FM Dictionary · All rights reserved
              </p>
              
              <Link 
                href="/" 
                target="_blank" 
                className="text-[12px] opacity-40 hover:opacity-100 transition-opacity duration-300 font-light tracking-widest uppercase"
              >
                By An Khang Studio
              </Link>
          </div>
        </div>
      </footer>

      <button
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-all duration-500 z-50 hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}
