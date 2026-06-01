"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Theme init
    const isDarkInit =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkInit);
    if (isDarkInit) document.documentElement.classList.add("dark");

    // Lang init
    const langInit = localStorage.getItem("lang") || "en";
    setLang(langInit);
    updateLangDOM(langInit);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      el.innerHTML =
        currentLang === "vi"
          ? el.getAttribute("data-vi")!
          : el.getAttribute("data-en")!;
    });
  };

  return (
    <>
      {/* Navbar */}
      <header
        id="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto w-full px-6 md:px-8 flex justify-between items-center">
          <a href="#hero" className="font-display text-3xl font-bold tracking-tighter">
            KHANG
          </a>

          <div className="flex items-center space-x-6 md:space-x-10">
            <nav className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
              <a href="#about" className="nav-link hover-underline" data-vi="Tóm tắt" data-en="Summary">
                Summary
              </a>
              <a href="#skills" className="nav-link hover-underline" data-vi="Kỹ năng" data-en="Skills">
                Skills
              </a>
              <a href="#projects" className="nav-link hover-underline" data-vi="Dự án" data-en="Projects">
                Projects
              </a>
              <a href="#experience" className="nav-link hover-underline" data-vi="Lộ trình" data-en="Timeline">
                Timeline
              </a>
            </nav>

            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={toggleLang}
                  className="text-sm font-bold tracking-widest hover:opacity-50 transition-opacity"
                >
                  {lang.toUpperCase()}
                </button>
                <button
                  onClick={toggleTheme}
                  className="text-xl hover:rotate-180 transition-transform duration-500"
                >
                  {isDark ? (
                    <i className="fas fa-sun block"></i>
                  ) : (
                    <i className="fas fa-moon block"></i>
                  )}
                </button>
              </div>
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden text-2xl p-2 ${isMobileMenuOpen ? "hidden" : ""}`}
              >
                <i className="fas fa-bars"></i>
              </button>
              {/* Mobile Menu Close */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`md:hidden text-3xl p-2 ${isMobileMenuOpen ? "" : "hidden"}`}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-bgLight/98 dark:bg-bgDark/98 z-[60] flex flex-col items-center justify-start pt-32 pb-12 space-y-12 text-2xl font-display uppercase tracking-widest transition-all duration-500 overflow-y-auto w-full h-full ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-10">
          <a
            href="#about"
            className="mobile-nav-link"
            data-vi="Tóm tắt"
            data-en="Summary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Summary
          </a>
          <a
            href="#skills"
            className="mobile-nav-link"
            data-vi="Kỹ năng"
            data-en="Skills"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="mobile-nav-link"
            data-vi="Dự án"
            data-en="Projects"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="mobile-nav-link"
            data-vi="Lộ trình"
            data-en="Timeline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Timeline
          </a>
        </nav>

        <div className="flex items-center space-x-12 pt-12 border-t border-black/10 dark:border-white/10 w-2/3 justify-center">
          <button
            onClick={toggleLang}
            className="text-lg font-bold tracking-widest"
          >
            {lang.toUpperCase()}
          </button>
          <button onClick={toggleTheme} className="text-3xl">
            {isDark ? (
              <i className="fas fa-sun block"></i>
            ) : (
              <i className="fas fa-moon block"></i>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
