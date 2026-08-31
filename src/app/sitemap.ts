import { MetadataRoute } from "next";

const BASE_URL = "https://ankhang0704.vercel.app";

const ROUTES = [
  "",
  "/fm-dictionary",
  "/hotel-management",
  "/it-infrastructure",
  "/fm-dictionary/support",
  "/fm-dictionary/privacy-policy",
  "/fm-dictionary/terms-of-service",
  "/fm-dictionary/delete-account",
];

const LOCALES = ["en", "vi"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  ROUTES.forEach((route) => {
    LOCALES.forEach((locale) => {
      const url = `${BASE_URL}/${locale}${route}${route ? "/" : ""}`;
      const isPriority = route === "" || route === "/fm-dictionary";

      sitemapEntries.push({
        url,
        lastModified: new Date("2026-08-31"),
        changeFrequency: isPriority ? "daily" : "monthly",
        priority: isPriority ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${route}${route ? "/" : ""}`,
            vi: `${BASE_URL}/vi${route}${route ? "/" : ""}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
