import enDict from "../dictionaries/en.json";
import viDict from "../dictionaries/vi.json";

export const languages = {
  en: "English",
  vi: "Tiếng Việt",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const dictionaries = {
  en: enDict,
  vi: viDict,
} as const;

export function getLangFromUrl(url: URL): "en" | "vi" {
  const [, lang] = url.pathname.split("/");
  if (lang === "vi") return "vi";
  return "en";
}

export function useTranslations(lang: "en" | "vi") {
  const dict = dictionaries[lang] || dictionaries[defaultLang];
  const fallbackDict = dictionaries[defaultLang];

  return function t(key: string): string {
    const keys = key.split(".");
    let current: any = dict;
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        current = undefined;
        break;
      }
    }

    if (current !== undefined && typeof current === "string") {
      return current;
    }

    // Fallback to default language dictionary
    let fallback: any = fallbackDict;
    for (const k of keys) {
      if (fallback && typeof fallback === "object" && k in fallback) {
        fallback = fallback[k];
      } else {
        fallback = undefined;
        break;
      }
    }

    if (fallback !== undefined && typeof fallback === "string") {
      return fallback;
    }

    return key;
  };
}

export function getDictionary(lang: "en" | "vi") {
  return dictionaries[lang] || dictionaries[defaultLang];
}

export function getLocalizedPath(
  currentPath: string,
  targetLang: "en" | "vi"
): string {
  let pathname = currentPath || "/";
  let hash = "";
  let search = "";

  if (pathname.includes("#")) {
    const parts = pathname.split("#");
    pathname = parts[0];
    hash = `#${parts[1]}`;
  }
  if (pathname.includes("?")) {
    const parts = pathname.split("?");
    pathname = parts[0];
    search = `?${parts[1]}`;
  }

  // Normalize leading slash
  if (!pathname.startsWith("/")) {
    pathname = `/${pathname}`;
  }

  // Strip leading /vi or /vi/
  let barePath = pathname.replace(/^\/vi(\/|$)/, "/");
  if (!barePath.startsWith("/")) {
    barePath = `/${barePath}`;
  }

  // Ensure trailing slash for static routes (except empty /)
  if (!barePath.endsWith("/")) {
    barePath = `${barePath}/`;
  }

  let result = "";
  if (targetLang === "vi") {
    result = barePath === "/" ? "/vi/" : `/vi${barePath}`;
  } else {
    result = barePath;
  }

  return `${result}${search}${hash}`;
}
