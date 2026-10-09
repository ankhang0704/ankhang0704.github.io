"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/components/Icons";
import { localizedPath } from "@/lib/locale-path";

interface HeaderProps {
  variant?: "main" | "fm";
}

function subscribeToTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  const handleMediaChange = (e: MediaQueryListEvent) => {
    try {
      if (!localStorage.getItem("theme")) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    } catch {}
    onStoreChange();
  };

  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === "theme") {
      try {
        const isDark = e.newValue === "dark" || (!e.newValue && mediaQuery.matches);
        document.documentElement.classList.toggle("dark", isDark);
      } catch {}
      onStoreChange();
    }
  };

  mediaQuery.addEventListener("change", handleMediaChange);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    observer.disconnect();
    mediaQuery.removeEventListener("change", handleMediaChange);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

export default function Header({ variant = "main" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const wasMobileMenuOpen = useRef(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const router = useRouter();

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const lang = pathname.startsWith("/vi") ? "vi" : "en";
  const isVi = lang === "vi";
  const localePrefix = lang === "vi" ? "/vi" : "";
  const isMainPortfolioHome = pathname === `${localePrefix}` || pathname === `${localePrefix}/` || pathname === "/";
  const isFmDictionaryHome = pathname === `${localePrefix}/fm-dictionary` || pathname === `${localePrefix}/fm-dictionary/`;
  const isProjectsPage = [
    `${localePrefix}/projects`,
    `${localePrefix}/projects/`,
    `${localePrefix}/hotel-management`,
    `${localePrefix}/hotel-management/`,
    `${localePrefix}/github-vault-relay`,
    `${localePrefix}/github-vault-relay/`,
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

    return () => {
      document.body.classList.remove("body-lock");
      mql.removeEventListener("change", handleMediaChange);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      if (wasMobileMenuOpen.current) {
        const activeEl = document.activeElement;
        const isFocusInMenu =
          activeEl &&
          (mobileMenuRef.current?.contains(activeEl) ||
            activeEl === closeMenuButtonRef.current ||
            activeEl === document.body);
        if (isFocusInMenu) {
          mobileMenuButtonRef.current?.focus();
        }
      }
      wasMobileMenuOpen.current = false;
      return;
    }

    wasMobileMenuOpen.current = true;
    const focusFrame = window.requestAnimationFrame(() => firstMobileMenuLinkRef.current?.focus());

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) return;
      const menuFocusable = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      );
      const focusable = [closeMenuButtonRef.current, ...menuFocusable].filter(
        (el): el is HTMLElement => Boolean(el)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!focusable.includes(document.activeElement as HTMLElement)) {
        event.preventDefault();
        if (event.shiftKey) {
          last.focus();
        } else {
          first.focus();
        }
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    try {
      const savedScrollY = sessionStorage.getItem("saved_scroll_y");
      if (savedScrollY === null) return;
      sessionStorage.removeItem("saved_scroll_y");
      const y = parseInt(savedScrollY, 10);
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: y, behavior: "instant" });
        requestAnimationFrame(() => window.scrollTo({ top: y, behavior: "instant" }));
      }
    } catch {}
  }, [pathname]);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextDark = !isCurrentlyDark;
    document.documentElement.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {}
  };

  const changeLang = (targetLang: "en" | "vi") => {
    setIsMobileMenuOpen(false);
    if (targetLang === lang) return;

    const canonicalPath = pathname.startsWith("/vi")
      ? pathname.replace(/^\/vi/, "") || "/"
      : pathname.startsWith("/en")
        ? pathname.replace(/^\/en/, "") || "/"
        : pathname;
    const targetPath = localizedPath(targetLang, canonicalPath);

    try {
      sessionStorage.setItem("saved_scroll_y", window.scrollY.toString());
    } catch {}
    router.push(`${targetPath}${window.location.search}${window.location.hash}`, { scroll: false });
  };

  const rememberHomeSection = (section: string) => {
    const isTargetingOtherHome =
      (variant === "main" && !isMainPortfolioHome && section !== "projects-index") ||
      (variant === "fm" && !isFmDictionaryHome);
    if (isTargetingOtherHome) {
      try {
        sessionStorage.setItem("pending_section", section);
      } catch {}
    }
  };

  const mainLinks = [
    { section: "about", href: isMainPortfolioHome ? "#about" : localizedPath(lang, "/"), label: isVi ? "Tóm tắt" : "Summary" },
    { section: "projects", href: isMainPortfolioHome ? "#projects" : localizedPath(lang, "/"), label: isVi ? "Nổi bật" : "Work" },
    { section: "skills", href: isMainPortfolioHome ? "#skills" : localizedPath(lang, "/"), label: isVi ? "Kỹ năng" : "Skills" },
    { section: "experience", href: isMainPortfolioHome ? "#experience" : localizedPath(lang, "/"), label: isVi ? "Kinh nghiệm" : "Experience" },
    { section: "projects-index", href: localizedPath(lang, "/projects/"), label: isVi ? "Dự án" : "Projects" },
  ];
  const fmLinks = [
    { section: "features", href: isFmDictionaryHome ? "#features" : localizedPath(lang, "/fm-dictionary/#features"), label: isVi ? "Tính năng" : "Features" },
    { section: "tech", href: isFmDictionaryHome ? "#tech" : localizedPath(lang, "/fm-dictionary/#tech"), label: isVi ? "Công nghệ" : "Tech Stack" },
    { section: "gallery", href: isFmDictionaryHome ? "#gallery" : localizedPath(lang, "/fm-dictionary/#gallery"), label: isVi ? "Màn hình" : "Gallery" },
    { section: "download", href: isFmDictionaryHome ? "#download" : localizedPath(lang, "/fm-dictionary/#download"), label: isVi ? "Tải xuống" : "Download" },
  ];
  const links = variant === "main" ? mainLinks : fmLinks;

  return (
    <>
      <header id="navbar" className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${isScrolled ? "glass-nav py-2" : "py-4"}`}>
        <div className="container mx-auto flex w-full min-w-0 items-center gap-4 px-6 md:px-8">
          <Link href={variant === "main" ? localizedPath(lang, "/") : localizedPath(lang, "/fm-dictionary/")} onClick={() => setIsMobileMenuOpen(false)} className={`min-w-0 flex-1 truncate font-display font-bold tracking-tighter whitespace-nowrap ${variant === "fm" ? "text-2xl md:text-3xl" : "text-3xl"}`}>
            {variant === "main" ? "KHANG" : "FM DICTIONARY"}
          </Link>

          <div className="ml-auto flex shrink-0 items-center space-x-6 md:space-x-10">
            <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase">
              {links.map((link) => {
                const isActive = variant === "main" && isProjectsPage && link.section === "projects-index";
                return <Link key={`${link.section}-${link.href}`} href={link.href} data-section={link.section} onClick={() => rememberHomeSection(link.section)} className={`nav-link hover-underline ${isActive ? "active" : ""}`} aria-current={isActive ? "page" : undefined}>{link.label}</Link>;
              })}
            </nav>

            <div className="flex shrink-0 items-center space-x-4 md:space-x-6">
              <div className="hidden md:flex items-center space-x-6">
                <button type="button" onClick={() => changeLang(lang === "en" ? "vi" : "en")} className="flex min-h-11 min-w-11 items-center justify-center text-sm font-bold tracking-widest hover:opacity-50 transition-opacity" aria-label={lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}>
                  {lang === "en" ? "VI" : "EN"}
                </button>
                <button type="button" onClick={toggleTheme} className="flex min-h-11 min-w-11 items-center justify-center text-xl hover:rotate-180 transition-transform duration-500" aria-label={isDark ? (isVi ? "Chuyển sang chế độ sáng" : "Switch to light mode") : (isVi ? "Chuyển sang chế độ tối" : "Switch to dark mode")}>
                  {isDark ? <Icons.Sun className="block" aria-hidden="true" /> : <Icons.Moon className="block" aria-hidden="true" />}
                </button>
              </div>
              <button ref={mobileMenuButtonRef} type="button" onClick={() => setIsMobileMenuOpen(true)} className={`md:hidden text-black dark:text-white text-2xl p-2 flex min-h-11 min-w-11 items-center justify-center ${isMobileMenuOpen ? "hidden" : ""}`} aria-label={isVi ? "Mở menu điều hướng" : "Open navigation menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
                <Icons.Menu size={24} aria-hidden="true" />
              </button>
              <button ref={closeMenuButtonRef} type="button" onClick={() => setIsMobileMenuOpen(false)} className={`md:hidden text-black dark:text-white text-3xl p-2 flex min-h-11 min-w-11 items-center justify-center ${isMobileMenuOpen ? "" : "hidden"}`} aria-label={isVi ? "Đóng menu điều hướng" : "Close navigation menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu">
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
            <Link ref={index === 0 ? firstMobileMenuLinkRef : undefined} key={`${link.section}-${link.href}`} href={link.href} className="mobile-nav-link" onClick={() => { rememberHomeSection(link.section); setIsMobileMenuOpen(false); }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-12 pt-12 border-t border-black/10 dark:border-white/10 w-2/3 justify-center">
          <button type="button" onClick={() => changeLang(lang === "en" ? "vi" : "en")} className="flex min-h-11 min-w-11 items-center justify-center text-lg font-bold tracking-widest" aria-label={lang === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}>
            {lang === "en" ? "VI" : "EN"}
          </button>
          <button type="button" onClick={toggleTheme} className="flex min-h-11 min-w-11 items-center justify-center text-3xl hover:rotate-180 transition-transform duration-500" aria-label={isDark ? (isVi ? "Chuyển sang chế độ sáng" : "Switch to light mode") : (isVi ? "Chuyển sang chế độ tối" : "Switch to dark mode")}>
            {isDark ? <Icons.Sun className="block" aria-hidden="true" /> : <Icons.Moon className="block" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </>
  );
}
