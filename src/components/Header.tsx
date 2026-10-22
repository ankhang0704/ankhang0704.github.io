"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  variant?: "main";
}

export default function Header({ variant = "main" }: HeaderProps = {}) {
  void variant;
  const { lang, toggleLang, isVi } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const isMainPortfolioHome = pathname === "/" || pathname === "/vi" || pathname === "/vi/";
  const isProjectsPage = [
    "/projects",
    "/projects/",
    "/vi/projects",
    "/vi/projects/",
    "/hotel-management",
    "/hotel-management/",
    "/vi/hotel-management",
    "/vi/hotel-management/",
    "/github-vault-relay",
    "/github-vault-relay/",
    "/vi/github-vault-relay",
    "/vi/github-vault-relay/",
    "/fm-dictionary",
    "/fm-dictionary/",
    "/vi/fm-dictionary",
    "/vi/fm-dictionary/",
  ].includes(pathname);

  useGSAP(
    () => {
      if (!progressBarRef.current) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(progressBarRef.current, { scaleX: 1 });
      } else {
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
      }

      setIsScrolled(window.scrollY > 50);
      ScrollTrigger.create({
        start: "50px top",
        onEnter: () => setIsScrolled(true),
        onLeaveBack: () => setIsScrolled(false),
      });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  useEffect(() => {
    document.body.classList.toggle("body-lock", isMobileMenuOpen);
    if (!isMobileMenuOpen) return;

    const mql = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMobileMenuOpen(false);
      }
    };
    mql.addEventListener("change", handleMediaChange);

    const focusFrame = window.requestAnimationFrame(() => {
      firstMobileMenuLinkRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) return;

      const focusableEls = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusableEls.length === 0) return;

      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      mql.removeEventListener("change", handleMediaChange);
    };
  }, [isMobileMenuOpen]);

  const rememberHomeSection = (section: string) => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("pending_section", section);
      } catch {}
    }
  };

  const links = [
    { section: "about", href: isMainPortfolioHome ? "#about" : "/#about", label: isVi ? "Tóm tắt" : "Summary" },
    { section: "projects", href: isMainPortfolioHome ? "#projects" : "/#projects", label: isVi ? "Nổi bật" : "Work" },
    { section: "skills", href: isMainPortfolioHome ? "#skills" : "/#skills", label: isVi ? "Kỹ năng" : "Skills" },
    { section: "experience", href: isMainPortfolioHome ? "#experience" : "/#experience", label: isVi ? "Kinh nghiệm" : "Experience" },
    { section: "projects-index", href: "/projects/", label: isVi ? "Dự án" : "Projects" },
  ];

  return (
    <>
      <header id="navbar" className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${isScrolled ? "glass-nav py-2" : "py-4"}`}>
        <div className="container mx-auto flex w-full min-w-0 items-center gap-4 px-6 md:px-8">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="min-w-0 flex-1 truncate font-display font-bold tracking-tighter whitespace-nowrap text-3xl">
            KHANG
          </Link>

          <div className="ml-auto flex shrink-0 items-center space-x-6 md:space-x-10">
            <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
              {links.map((link) => {
                const isActive = isProjectsPage && link.section === "projects-index";
                return (
                  <Link
                    key={`${link.section}-${link.href}`}
                    href={link.href}
                    data-section={link.section}
                    onClick={() => rememberHomeSection(link.section)}
                    className={`nav-link hover-underline ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center space-x-4 md:space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <button
                  type="button"
                  onClick={toggleLang}
                  className="flex min-h-11 min-w-11 items-center justify-center text-sm font-bold tracking-widest hover:opacity-50 transition-opacity font-mono"
                  aria-label={lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
                >
                  {lang === "en" ? "VI" : "EN"}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex min-h-11 min-w-11 items-center justify-center text-xl hover:rotate-180 transition-transform duration-500"
                  aria-label={isDark ? (isVi ? "Chuyển sang chế độ sáng" : "Switch to light mode") : (isVi ? "Chuyển sang chế độ tối" : "Switch to dark mode")}
                >
                  {isDark ? <Icons.Sun className="block" aria-hidden="true" /> : <Icons.Moon className="block" aria-hidden="true" />}
                </button>
              </div>
              <button
                ref={mobileMenuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden text-black dark:text-white text-2xl p-2 flex min-h-11 min-w-11 items-center justify-center ${isMobileMenuOpen ? "hidden" : ""}`}
                aria-label={isVi ? "Mở menu điều hướng" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Icons.Menu size={24} aria-hidden="true" />
              </button>
              <button
                ref={closeMenuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`md:hidden text-black dark:text-white text-3xl p-2 flex min-h-11 min-w-11 items-center justify-center ${isMobileMenuOpen ? "" : "hidden"}`}
                aria-label={isVi ? "Đóng menu điều hướng" : "Close navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Icons.Close size={30} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div ref={progressBarRef} className="scroll-progress absolute bottom-0 left-0 right-0 h-[2px] bg-black dark:bg-white scale-x-0 origin-left pointer-events-none opacity-80" />
      </header>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={isVi ? "Menu điều hướng" : "Navigation menu"}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        onClick={(e) => {
          if (e.target === mobileMenuRef.current) {
            setIsMobileMenuOpen(false);
          }
        }}
        className={`fixed inset-0 md:hidden bg-bgLight/98 dark:bg-bgDark/98 z-[60] flex flex-col items-center justify-start pt-32 pb-12 space-y-12 text-2xl font-display uppercase tracking-widest transition-opacity duration-300 w-full h-full ${isMobileMenuOpen ? "active opacity-100 pointer-events-auto overflow-y-auto overscroll-contain" : "opacity-0 pointer-events-none overflow-hidden"}`}
      >
        <nav className="flex flex-col items-center space-y-10">
          {links.map((link, index) => (
            <Link
              ref={index === 0 ? firstMobileMenuLinkRef : undefined}
              key={`${link.section}-${link.href}`}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => {
                rememberHomeSection(link.section);
                setIsMobileMenuOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-12 pt-12 border-t border-black/10 dark:border-white/10 w-2/3 justify-center">
          <button
            type="button"
            onClick={toggleLang}
            className="flex min-h-11 min-w-11 items-center justify-center text-lg font-bold tracking-widest font-mono"
            aria-label={lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
          >
            {lang === "en" ? "VI" : "EN"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="flex min-h-11 min-w-11 items-center justify-center text-3xl hover:rotate-180 transition-transform duration-500"
            aria-label={isDark ? (isVi ? "Chuyển sang chế độ sáng" : "Switch to light mode") : (isVi ? "Chuyển sang chế độ tối" : "Switch to dark mode")}
          >
            {isDark ? <Icons.Sun className="block" aria-hidden="true" /> : <Icons.Moon className="block" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </>
  );
}
