import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/en/it-infrastructure",
        destination: "/projects/",
        permanent: true,
      },
      {
        source: "/vi/it-infrastructure",
        destination: "/vi/projects/",
        permanent: true,
      },
      // Legacy FM Dictionary case-study URL consolidation -> canonical /fm-dictionary/
      {
        source: "/fm-dictionary/case-study",
        destination: "/fm-dictionary/",
        permanent: true,
      },
      {
        source: "/en/fm-dictionary/case-study",
        destination: "/fm-dictionary/",
        permanent: true,
      },
      {
        source: "/vi/fm-dictionary/case-study",
        destination: "/vi/fm-dictionary/",
        permanent: true,
      },
      {
        source: "/fm-dictionary/privacy-policy",
        destination: "https://fm-dictionary.pages.dev/privacy/",
        permanent: true,
      },
      {
        source: "/en/fm-dictionary/privacy-policy",
        destination: "https://fm-dictionary.pages.dev/privacy/",
        permanent: true,
      },
      {
        source: "/vi/fm-dictionary/privacy-policy",
        destination: "https://fm-dictionary.pages.dev/privacy/",
        permanent: true,
      },
      {
        source: "/fm-dictionary/terms-of-service",
        destination: "https://fm-dictionary.pages.dev/terms/",
        permanent: true,
      },
      {
        source: "/en/fm-dictionary/terms-of-service",
        destination: "https://fm-dictionary.pages.dev/terms/",
        permanent: true,
      },
      {
        source: "/vi/fm-dictionary/terms-of-service",
        destination: "https://fm-dictionary.pages.dev/terms/",
        permanent: true,
      },
      {
        source: "/fm-dictionary/support",
        destination: "https://fm-dictionary.pages.dev/",
        permanent: true,
      },
      {
        source: "/en/fm-dictionary/support",
        destination: "https://fm-dictionary.pages.dev/",
        permanent: true,
      },
      {
        source: "/vi/fm-dictionary/support",
        destination: "https://fm-dictionary.pages.dev/",
        permanent: true,
      },
      {
        source: "/fm-dictionary/delete-account",
        destination: "https://fm-dictionary.pages.dev/",
        permanent: true,
      },
      {
        source: "/en/fm-dictionary/delete-account",
        destination: "https://fm-dictionary.pages.dev/",
        permanent: true,
      },
      {
        source: "/vi/fm-dictionary/delete-account",
        destination: "https://fm-dictionary.pages.dev/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
