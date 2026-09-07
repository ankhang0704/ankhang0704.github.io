import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
