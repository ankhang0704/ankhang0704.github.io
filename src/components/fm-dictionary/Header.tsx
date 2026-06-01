"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FMHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
    const timer = setTimeout(() => {
        updateLangDOM(savedLang);
    }, 100);

    return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
    };
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
      const vi = el.getAttribute("data-vi");
      const en = el.getAttribute("data-en");
      if (vi || en) {
          el.innerHTML = currentLang === "vi" ? (vi || "") : (en || "");
      }
    });
  };

  const isMainPage = pathname === "/fm-dictionary" || pathname === "/fm-dictionary/";

  return (
    <>
      <header
        id="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto w-full px-6 md:px-8 flex justify-between items-center">
          <Link href="/fm-dictionary" className="font-display text-2xl md:text-3xl font-bold tracking-tighter">
            FM DICTIONARY
          </Link>

          <div className="flex items-center space-x-6 md:space-x-10">
            <nav className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
              <Link href={isMainPage ? "#features" : "/fm-dictionary/#features"} className="nav-link hover-underline" data-vi="Tính năng" data-en="Features">
                Features
              </Link>
              <Link href={isMainPage ? "#tech" : "/fm-dictionary/#tech"} className="nav-link hover-underline" data-vi="Công nghệ" data-en="Tech Stack">
                Tech Stack
              </Link>
              <Link href="/fm-dictionary/support" className={`nav-link hover-underline ${pathname === '/fm-dictionary/support' ? 'active' : ''}`} data-vi="Hỗ trợ" data-en="Support">
                Support
              </Link>
              <Link href="/fm-dictionary/privacy-policy" className={`nav-link hover-underline ${pathname === '/fm-dictionary/privacy-policy' ? 'active' : ''}`} data-vi="Bảo mật" data-en="Privacy">
                Privacy
              </Link>
              <Link href="/fm-dictionary/terms-of-service" className={`nav-link hover-underline ${pathname === '/fm-dictionary/terms-of-service' ? 'active' : ''}`} data-vi="Điều khoản" data-en="Terms">
                Terms
              </Link>
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
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden text-2xl p-2 ${isMobileMenuOpen ? "hidden" : ""}`}
              >
                <i className="fas fa-bars"></i>
              </button>
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
          <Link
            href={isMainPage ? "#features" : "/fm-dictionary/#features"}
            className="mobile-nav-link"
            data-vi="Tính năng"
            data-en="Features"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href={isMainPage ? "#tech" : "/fm-dictionary/#tech"}
            className="mobile-nav-link"
            data-vi="Công nghệ"
            data-en="Tech Stack"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tech Stack
          </Link>
          <Link
            href="/fm-dictionary/support"
            className="mobile-nav-link"
            data-vi="Hỗ trợ"
            data-en="Support"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support
          </Link>
          <Link
            href="/fm-dictionary/privacy-policy"
            className="mobile-nav-link"
            data-vi="Bảo mật"
            data-en="Privacy"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link
            href="/fm-dictionary/terms-of-service"
            className="mobile-nav-link"
            data-vi="Điều khoản"
            data-en="Terms"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Terms
          </Link>
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
