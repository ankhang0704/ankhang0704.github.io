"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from "aos";
import { Icons } from "@/components/Icons";

export default function FMHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const updateLangDOM = (currentLang: string) => {
    document.querySelectorAll("[data-vi]").forEach((el) => {
      const vi = el.getAttribute("data-vi");
      const en = el.getAttribute("data-en");
      if (vi || en) {
          el.innerHTML = currentLang === "vi" ? (vi || "") : (en || "");
      }
    });
  };

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
    setTimeout(() => setIsDark(isDarkInit), 0);
    if (isDarkInit) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    const savedLang = localStorage.getItem("lang") || "en";
    setTimeout(() => setLang(savedLang), 0);

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

  const isMainPage = pathname === "/fm-dictionary" || pathname === "/fm-dictionary/";

  return (
    <>
      {/* Navbar */}
      <header
        id="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto w-full px-6 md:px-8 flex justify-between items-center">
          <Link href="/fm-dictionary/" className="font-display text-3xl font-bold tracking-tighter">
            FM DICTIONARY
          </Link>

          <div className="flex items-center space-x-6 md:space-x-10">
            <nav className="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
              <Link href={isMainPage ? "#features" : "/fm-dictionary/#features"} className="nav-link hover-underline" data-vi="Tính năng" data-en="Features">
                Features
              </Link>
              <Link href={isMainPage ? "#gallery" : "/fm-dictionary/#gallery"} className="nav-link hover-underline" data-vi="Màn hình" data-en="Gallery">
                Gallery
              </Link>
              <Link href={isMainPage ? "#tech" : "/fm-dictionary/#tech"} className="nav-link hover-underline" data-vi="Công nghệ" data-en="Tech Stack">
                Tech Stack
              </Link>
              <Link href={isMainPage ? "#download" : "/fm-dictionary/#download"} className="nav-link hover-underline" data-vi="Tải xuống" data-en="Download">
                Download
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
                    <Icons.Sun className="block" />
                  ) : (
                    <Icons.Moon className="block" />
                  )}
                </button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden text-2xl p-2 flex items-center justify-center ${isMobileMenuOpen ? "hidden" : ""}`}
              >
                <Icons.Menu size={24} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`md:hidden text-3xl p-2 flex items-center justify-center ${isMobileMenuOpen ? "" : "hidden"}`}
              >
                <Icons.Close size={30} />
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
            href={isMainPage ? "#gallery" : "/fm-dictionary/#gallery"}
            className="mobile-nav-link"
            data-vi="Màn hình"
            data-en="Gallery"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
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
            href={isMainPage ? "#download" : "/fm-dictionary/#download"}
            className="mobile-nav-link"
            data-vi="Tải xuống"
            data-en="Download"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download
          </Link>
        </nav>

        <div className="flex items-center space-x-12 pt-12 border-t border-black/10 dark:border-white/10 w-2/3 justify-center">
          <button
            onClick={toggleLang}
            className="text-lg font-bold tracking-widest"
          >
            {lang.toUpperCase()}
          </button>
          <button onClick={toggleTheme} className="text-3xl hover:rotate-180 transition-transform duration-500 flex items-center justify-center" aria-label="Toggle Theme">
            {isDark ? (
              <Icons.Sun className="block" />
            ) : (
              <Icons.Moon className="block" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
