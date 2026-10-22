"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";
import enDict from "@/dictionaries/en.json";
import viDict from "@/dictionaries/vi.json";

export type Language = "vi" | "en";
export type Dictionary = typeof enDict;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (viText: string, enText: string) => string;
  dict: Dictionary;
  isVi: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (_viText, enText) => enText,
  dict: enDict,
  isVi: false,
});

let isClientMounted = false;

function subscribe(callback: () => void) {
  isClientMounted = true;
  window.addEventListener("storage", callback);
  window.addEventListener("user_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("user_lang_change", callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === "undefined" || !isClientMounted) return "en";
  try {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    if (queryLang === "vi" || queryLang === "en") return queryLang;

    if (window.location.pathname.startsWith("/vi")) return "vi";

    const saved = localStorage.getItem("user-lang-choice") || localStorage.getItem("fm_lang");
    return saved === "vi" ? "vi" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Language {
  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((newLang: Language) => {
    try {
      localStorage.setItem("user-lang-choice", newLang);
      localStorage.setItem("fm_lang", newLang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }
    } catch {}
    window.dispatchEvent(new Event("user_lang_change"));
  }, []);

  const toggleLang = useCallback(() => {
    const next = lang === "vi" ? "en" : "vi";
    setLang(next);
  }, [lang, setLang]);

  const t = useCallback(
    (viText: string, enText: string) => {
      return lang === "vi" ? viText : enText;
    },
    [lang]
  );

  const dict = (lang === "vi" ? viDict : enDict) as Dictionary;
  const isVi = lang === "vi";

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, dict, isVi }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
