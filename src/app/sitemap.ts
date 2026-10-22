import { MetadataRoute } from "next";

const BASE_URL = "https://ankhang0704.vercel.app";

const ROUTES = [
  "",
  "/projects",
  "/fm-dictionary/case-study",
  "/hotel-management",
  "/github-vault-relay",
];

const LOCALES = ["en", "vi"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  ROUTES.forEach((route) => {
    LOCALES.forEach((locale) => {
      const prefix = locale === "vi" ? "/vi" : "";
      const url = `${BASE_URL}${prefix}${route}${route ? "/" : "/"}`;
      const isPriority = route === "" || route === "/projects";

      sitemapEntries.push({
        url,
        lastModified: new Date("2026-10-22"),
        changeFrequency: isPriority ? "daily" : "monthly",
        priority: isPriority ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}${route}${route ? "/" : "/"}`,
            vi: `${BASE_URL}/vi${route}${route ? "/" : "/"}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
