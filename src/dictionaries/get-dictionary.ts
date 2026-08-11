const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  vi: () => import("./vi.json").then((module) => module.default),
};

export type Locale = "en" | "vi";

export const getDictionary = async (locale: Locale) => {
  const normalizedLocale = locale === "vi" ? "vi" : "en";
  return dictionaries[normalizedLocale]();
};
