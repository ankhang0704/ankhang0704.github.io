import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "../style.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["600", "700"],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "An Khang | Backend & Flutter Developer",
  description:
    "An Khang — Backend & Flutter Developer with an IT Infrastructure background. Building offline-first mobile applications and reliable business systems.",
  metadataBase: new URL("https://ankhang0704.vercel.app"),
  openGraph: {
    title: "An Khang | Backend & Flutter Developer",
    description:
      "Backend & Flutter Developer with an IT Infrastructure background. Building offline-first mobile applications and reliable business systems.",
    url: "https://ankhang0704.vercel.app",
    siteName: "An Khang Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Khang | Backend & Flutter Developer",
    description:
      "Backend & Flutter Developer with an IT Infrastructure background.",
  },
};

import { GSAPInit } from "@/components/GSAPInit";
import { AmbientGlow } from "@/components/AmbientGlow";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function LocalizedLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const currentLang = lang === "vi" ? "vi" : "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "An Khang",
    jobTitle: "Software Developer",
    knowsAbout: ["Backend Development", "Flutter", "Django", "IT Infrastructure"],
    email: "mailto:ankhang.nguyen0704@gmail.com",
    url: "https://ankhang0704.vercel.app",
    sameAs: [
      "https://github.com/ankhang0704",
      "https://www.linkedin.com/in/ankhang0704/",
    ],
  };

  return (
    <html lang={currentLang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark transition-colors duration-500 font-sans relative overflow-x-hidden ${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
        <GSAPInit />
        <AmbientGlow />
        {children}
      </body>
    </html>
  );
}
