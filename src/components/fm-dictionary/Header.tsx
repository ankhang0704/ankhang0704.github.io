"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Sun, Moon, List, X, AppleLogo, GooglePlayLogo } from "@phosphor-icons/react";

export default function FMHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkInit =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkInit);
    if (isDarkInit) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    const runUpdate = () => {
        updateLangDOM(savedLang);
    };
    runUpdate();
    const timer = setTimeout(runUpdate, 100);
    return () => clearTimeout(timer);
  }, [pathname, lang]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleLang = () => {
    const newLang = lang === "en" ? "vi" : "en";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    updateLangDOM(newLang);
  };

  const updateLangDOM = (currentLang: string) => {
    document.querySelectorAll("[data-vi]").forEach((el) => {
      const vi = el.getAttribute("data-vi");
      const en = el.getAttribute("data-en");
      if (vi || en) {
          el.innerHTML = currentLang === "vi" ? (vi || "") : (en || "");
      }
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-nav py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <Link href="/fm-dictionary" className="font-sans text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-lg text-xs">FM</div>
            <span>DICTIONARY.</span>
          </Link>

          <div className="flex items-center space-x-8 md:space-x-12">
            <nav className="hidden md:flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
              <Link href="/fm-dictionary#features" className="nav-link hover-underline" data-vi="Tính năng" data-en="Features">Features</Link>
              <Link href="/fm-dictionary#tech" className="nav-link hover-underline" data-vi="Công nghệ" data-en="Tech">Tech</Link>
              <Link href="/fm-dictionary#download" className="nav-link hover-underline" data-vi="Tải về" data-en="Download">Download</Link>
              <Link href="/fm-dictionary#permissions" className="nav-link hover-underline" data-vi="Quyền hạn" data-en="Permissions">Permissions</Link>
            </nav>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={toggleLang} className="text-[11px] font-bold tracking-widest hover:opacity-50 transition-opacity">
                  {lang.toUpperCase()}
                </button>
                <button onClick={toggleTheme} className="hover:opacity-50 transition-opacity">
                  {isDark ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
                </button>
              </div>
              
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
                {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 z-[40] md:hidden flex flex-col items-center justify-center space-y-8 text-2xl font-display uppercase tracking-widest transition-all ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          {["features", "tech", "download", "permissions"].map((id) => (
            <Link
              key={id}
              href={`/fm-dictionary#${id}`}
              className="hover:opacity-50 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
              data-vi={id === "features" ? "Tính năng" : id === "tech" ? "Công nghệ" : id === "download" ? "Tải về" : "Quyền hạn"}
              data-en={id.charAt(0).toUpperCase() + id.slice(1)}
            >
              {id}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-12 pt-12 border-t border-black/5 dark:border-white/5 w-2/3 justify-center">
          <button onClick={toggleLang} className="text-lg font-bold tracking-widest">
            {lang.toUpperCase()}
          </button>
          <button onClick={toggleTheme}>
            {isDark ? <Sun size={28} weight="bold" /> : <Moon size={28} weight="bold" />}
          </button>
        </div>
      </motion.div>
    </>
  );
}
