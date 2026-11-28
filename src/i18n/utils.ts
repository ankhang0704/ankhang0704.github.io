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
