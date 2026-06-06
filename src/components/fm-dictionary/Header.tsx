"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from "aos";

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

    // Disable snap scroll on HTML for FM Dictionary pages
    document.documentElement.classList.remove("md:snap-y", "md:snap-proximity");

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update Lang DOM when pathname or lang changes
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    
    const runUpdate = () => {
        updateLangDOM(savedLang);
        // Important: Refresh AOS after content changes to ensure elements are visible
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    };

    // Run multiple times to ensure hydration is complete and DOM is stable
    runUpdate();
    const timer1 = setTimeout(runUpdate, 100);
    const timer2 = setTimeout(runUpdate, 500);

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
    };
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
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("langChange"));
    }
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
          {/* Bên trái: Logo */}
          <Link href="/fm-dictionary/" className="font-display text-2xl md:text-3xl font-bold tracking-tighter flex-shrink-0">
            FM DICTIONARY
          </Link>

          {/* Ở giữa: Navigation */}
          <nav className="hidden md:flex space-x-10 text-sm tracking-widest uppercase items-center">
            <Link href={isMainPage ? "#features" : "/fm-dictionary/#features"} className="nav-link hover-underline" data-vi="Tính năng" data-en="Features">
              Features
            </Link>
            <Link href={isMainPage ? "#tech" : "/fm-dictionary/#tech"} className="nav-link hover-underline" data-vi="Công nghệ" data-en="Tech Stack">
              Tech Stack
            </Link>
            
            {/* Dropdown Resources */}
            <div className="relative group py-2 -my-2">
              <button className="nav-link hover-underline flex items-center gap-1 text-sm tracking-widest uppercase" data-vi="Tài nguyên ▾" data-en="Resources ▾">
                Resources ▾
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-bgLight dark:bg-bgDark border border-black/10 dark:border-white/10 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 flex flex-col py-2">
                <Link
                  href="/fm-dictionary/support/"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left"
                  data-vi="Hỗ trợ"
                  data-en="Support"
                >
                  Support
                </Link>
                <Link
                  href="/fm-dictionary/privacy-policy/"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left"
                  data-vi="Chính sách bảo mật"
                  data-en="Privacy Policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/fm-dictionary/terms-of-service/"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left"
                  data-vi="Điều khoản dịch vụ"
                  data-en="Terms of Service"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/fm-dictionary/delete-account/"
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 transition-colors text-left flex items-center gap-2 border-t border-black/5 dark:border-white/5"
                  data-vi="Xóa tài khoản"
                  data-en="Delete Account"
                >
                  <i className="fas fa-triangle-exclamation text-[10px]"></i>
                  Delete Account
                </Link>
              </div>
            </div>
          </nav>

          {/* Bên phải: Cụm tiện ích & Chuyển đổi */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Desktop Toggles and Download CTA */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={toggleTheme}
                className="text-xl hover:rotate-180 transition-transform duration-500"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <i className="fas fa-sun block"></i>
                ) : (
                  <i className="fas fa-moon block"></i>
                )}
              </button>
              <button
                onClick={toggleLang}
                className="text-sm font-bold tracking-widest hover:opacity-50 transition-opacity"
              >
                {lang.toUpperCase()}
              </button>
              <Link
                href={isMainPage ? "#download" : "/fm-dictionary/#download"}
                className="border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                data-vi="Tải xuống"
                data-en="Download"
              >
                Download
              </Link>
            </div>

            {/* Mobile Toggles & Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="text-xl hover:rotate-180 transition-transform duration-500"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <i className="fas fa-sun block"></i>
                ) : (
                  <i className="fas fa-moon block"></i>
                )}
              </button>
              <button
                onClick={toggleLang}
                className="text-sm font-bold tracking-widest hover:opacity-50 transition-opacity"
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`text-2xl p-2 ${isMobileMenuOpen ? "hidden" : ""}`}
                aria-label="Open Menu"
              >
                <i className="fas fa-bars"></i>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl p-2 ${isMobileMenuOpen ? "" : "hidden"}`}
                aria-label="Close Menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-bgLight/98 dark:bg-bgDark/98 z-[60] flex flex-col items-center justify-start pt-32 pb-12 space-y-12 text-2xl font-display uppercase tracking-widest transition-all duration-500 w-full h-full ${
          isMobileMenuOpen
            ? "active opacity-100 pointer-events-auto overflow-y-auto"
            : "opacity-0 pointer-events-none overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          <Link
            href={isMainPage ? "#features" : "/fm-dictionary/#features"}
            className="mobile-nav-link text-xl"
            data-vi="Tính năng"
            data-en="Features"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href={isMainPage ? "#tech" : "/fm-dictionary/#tech"}
            className="mobile-nav-link text-xl"
            data-vi="Công nghệ"
            data-en="Tech Stack"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tech Stack
          </Link>

          {/* Mobile Resources Section */}
          <div className="flex flex-col items-center pt-4 border-t border-black/10 dark:border-white/10 w-48 text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-1" data-vi="Tài nguyên" data-en="Resources">
              Resources
            </span>
            <Link
              href="/fm-dictionary/support/"
              className="mobile-nav-link text-sm font-bold opacity-70 hover:opacity-100"
              data-vi="Hỗ trợ"
              data-en="Support"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              href="/fm-dictionary/privacy-policy/"
              className="mobile-nav-link text-sm font-bold opacity-70 hover:opacity-100"
              data-vi="Chính sách bảo mật"
              data-en="Privacy Policy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/fm-dictionary/terms-of-service/"
              className="mobile-nav-link text-sm font-bold opacity-70 hover:opacity-100"
              data-vi="Điều khoản dịch vụ"
              data-en="Terms of Service"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <Link
              href="/fm-dictionary/delete-account/"
              className="mobile-nav-link text-sm font-bold text-red-500 dark:text-red-400 flex items-center justify-center gap-2"
              data-vi="Xóa tài khoản"
              data-en="Delete Account"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-triangle-exclamation text-[9px]"></i>
              Delete Account
            </Link>
          </div>

          <Link
            href={isMainPage ? "#download" : "/fm-dictionary/#download"}
            className="border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white transition-all duration-300 text-center w-48 mt-6"
            data-vi="Tải xuống"
            data-en="Download"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download
          </Link>
        </nav>
      </div>
    </>
  );
}
