"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Icons } from "@/components/Icons";

interface HeaderProps {
  variant?: "main" | "fm";
}

export default function Header({ variant = "main" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isScrolledRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname.startsWith("/vi") ? "vi" : "en";
  const isVi = lang === "vi";
  const isMainPortfolioHome = pathname === `/${lang}` || pathname === `/${lang}/` || pathname === "/";
  const isFmDictionaryHome = pathname === `/${lang}/fm-dictionary` || pathname === `/${lang}/fm-dictionary/`;

  useGSAP(
    () => {
      if (!progressBarRef.current) return;
      gsap.fromTo(
        progressBarRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15,
          },
        },
      );
    },
    { dependencies: [pathname] },
  );

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const savedTheme = localStorage.getItem("theme");
    const isDarkInit = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTimeout(() => setIsDark(isDarkInit), 0);
    document.documentElement.classList.toggle("dark", isDarkInit);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("body-lock", isMobileMenuOpen);
    return () => document.body.classList.remove("body-lock");
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem("saved_scroll_y");
    if (savedScrollY === null) return;
    sessionStorage.removeItem("saved_scroll_y");
    const y = parseInt(savedScrollY, 10);
    if (!Number.isNaN(y)) {
      window.scrollTo({ top: y, behavior: "instant" });
      requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" }));
    }
  }, [pathname]);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const toggleLang = () => {
    const targetLang = lang === "en" ? "vi" : "en";
    let targetPath = pathname;
    if (pathname.startsWith("/vi")) targetPath = pathname.replace(/^\/vi/, "/en");
    else if (pathname.startsWith("/en")) targetPath = pathname.replace(/^\/en/, "/vi");
    else targetPath = `/${targetLang}${pathname === "/" ? "" : pathname}`;

    sessionStorage.setItem("saved_scroll_y", window.scrollY.toString());
    router.push(`${targetPath}${window.location.search}${window.location.hash}`, { scroll: false });
  };

  const mainLinks = [
    { href: isMainPortfolioHome ? "#about" : `/${lang}/#about`, label: isVi ? "Tóm tắt" : "Summary" },
    { href: isMainPortfolioHome ? "#skills" : `/${lang}/#skills`, label: isVi ? "Kỹ năng" : "Skills" },
    { href: isMainPortfolioHome ? "#projects" : `/${lang}/#projects`, label: isVi ? "Nổi bật" : "Work" },
    { href: isMainPortfolioHome ? "#experience" : `/${lang}/#experience`, label: isVi ? "Kinh nghiệm" : "Experience" },
    { href: `/${lang}/projects/`, label: isVi ? "Dự án" : "Projects" },
  ];
  const fmLinks = [
    { href: isFmDictionaryHome ? "#features" : `/${lang}/fm-dictionary/#features`, label: isVi ? "Tính năng" : "Features" },
    { href: isFmDictionaryHome ? "#gallery" : `/${lang}/fm-dictionary/#gallery`, label: isVi ? "Màn hình" : "Gallery" },
    { href: isFmDictionaryHome ? "#tech" : `/${lang}/fm-dictionary/#tech`, label: isVi ? "Công nghệ" : "Tech Stack" },
    { href: isFmDictionaryHome ? "#download" : `/${lang}/fm-dictionary/#download`, label: isVi ? "Tải xuống" : "Download" },
  ];
  const links = variant === "main" ? mainLinks : fmLinks;

  return (
    <>
      <header id="navbar" className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-2" : "py-4"}`}>
        <div className="container mx-auto w-full px-6 md:px-8 flex justify-between items-center">
          <Link href={variant === "main" ? `/${lang}/` : `/${lang}/fm-dictionary/`} className="font-display text-3xl font-bold tracking-tighter">
            {variant === "main" ? "AN KHANG" : "FM DICTIONARY"}
          </Link>

          <div className="flex items-center space-x-6 md:space-x-10">
            <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link hover-underline">{link.label}</Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <button onClick={toggleLang} className="text-sm font-bold tracking-widest hover:opacity-50 transition-opacity" aria-label="Toggle language (English / Tiếng Việt)">
                  {lang.toUpperCase()}
                </button>
                <button onClick={toggleTheme} className="text-xl hover:rotate-180 transition-transform duration-500" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
                  {isDark ? <Icons.Sun className="block" /> : <Icons.Moon className="block" />}
                </button>
              </div>
              <button onClick={() => setIsMobileMenuOpen(true)} className={`md:hidden text-2xl p-2 flex items-center justify-center ${isMobileMenuOpen ? "hidden" : ""}`} aria-label="Open navigation menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
                <Icons.Menu size={24} />
              </button>
              <button onClick={() => setIsMobileMenuOpen(false)} className={`md:hidden text-3xl p-2 flex items-center justify-center ${isMobileMenuOpen ? "" : "hidden"}`} aria-label="Close navigation menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
                <Icons.Close size={30} />
              </button>
            </div>
          </div>
        </div>

        <div ref={progressBarRef} className="absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white scale-x-0 origin-left pointer-events-none opacity-80" />
      </header>

      <div id="mobile-menu" className={`fixed inset-0 bg-bgLight/98 dark:bg-bgDark/98 z-[60] flex flex-col items-center justify-start pt-32 pb-12 space-y-12 text-2xl font-display uppercase tracking-widest transition-all duration-500 w-full h-full ${isMobileMenuOpen ? "active opacity-100 pointer-events-auto overflow-y-auto" : "opacity-0 pointer-events-none overflow-hidden"}`}>
        <nav className="flex flex-col items-center space-y-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-12 pt-12 border-t border-black/10 dark:border-white/10 w-2/3 justify-center">
          <button onClick={toggleLang} className="text-lg font-bold tracking-widest" aria-label="Toggle language (English / Tiếng Việt)">{lang.toUpperCase()}</button>
          <button onClick={toggleTheme} className="text-3xl hover:rotate-180 transition-transform duration-500 flex items-center justify-center" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            {isDark ? <Icons.Sun className="block" /> : <Icons.Moon className="block" />}
          </button>
        </div>
      </div>
    </>
  );
}
