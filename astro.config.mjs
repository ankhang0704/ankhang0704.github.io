import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ankhang0704.pages.dev",
  output: "static",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
