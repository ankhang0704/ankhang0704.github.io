import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://ankhang0704.pages.dev";

const ROUTES = [
  "",
  "/projects",
  "/fm-dictionary",
  "/hotel-management",
  "/github-vault-relay",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => {
    const url = `${BASE_URL}${route}${route ? "/" : "/"}`;
    const isPriority = route === "" || route === "/projects";

    return {
      url,
      lastModified: new Date("2026-11-07"),
      changeFrequency: isPriority ? "daily" : "monthly",
      priority: isPriority ? 1.0 : 0.8,
    };
  });
}
