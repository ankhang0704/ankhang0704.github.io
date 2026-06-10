"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GithubLogo, LinkedinLogo, FacebookLogo, ArrowUp } from "@phosphor-icons/react";

export default function FMFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="py-24 border-t border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="font-sans text-xl font-bold tracking-tighter mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-lg text-xs">FM</div>
                <span>DICTIONARY.</span>
              </div>
              <p className="text-sm opacity-50 font-light leading-relaxed max-w-xs mb-8" data-vi="Công cụ tra cứu từ vựng Quản lý Cơ sở vật chất chuyên nghiệp, giúp nâng tầm kiến thức cộng đồng FM Việt Nam." data-en="Professional Facilities Management vocabulary lookup tool, empowering the Vietnam FM community knowledge.">
                Professional Facilities Management vocabulary lookup tool, empowering the Vietnam FM community knowledge.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-30">Legal</h4>
              <ul className="space-y-4 text-sm font-medium opacity-60">
                <li><a href="/fm-dictionary/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy</a></li>
                <li><a href="/fm-dictionary/terms-of-service" className="hover:opacity-100 transition-opacity">Terms</a></li>
                <li><a href="/fm-dictionary/support" className="hover:opacity-100 transition-opacity">Support</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-30">Social</h4>
              <div className="flex space-x-6">
                <a href="https://github.com/ankhang0704" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                  <GithubLogo size={24} weight="bold" />
                </a>
                <a href="https://www.linkedin.com/in/khang-nguyen-0855893a7/" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                  <LinkedinLogo size={24} weight="bold" />
                </a>
              </div>
            </div>

            {/* Credits */}
            <div className="md:col-span-4 md:text-right">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 opacity-30">Credits</h4>
              <p className="text-sm font-medium mb-2" data-vi="Nội dung © Thủy Tạ" data-en="Content © Thuy Ta">Content © Thuy Ta</p>
              <p className="text-sm font-medium opacity-40" data-vi="Ứng dụng © An Khang Studio" data-en="Application © An Khang Studio">Application © An Khang Studio</p>
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-black/[0.03] dark:border-white/[0.03] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] font-bold uppercase tracking-[0.2em] opacity-30">
            <p>© 2026 An Khang Studio.</p>
            <p data-vi="Dành riêng cho cộng đồng FM Việt Nam" data-en="Dedicated to Vietnam FM Community">Dedicated to Vietnam FM Community</p>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 z-[60] w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        }`}
      >
        <ArrowUp size={24} weight="bold" />
      </button>
    </>
  );
}
