import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./style.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { GSAPInit } from "@/components/GSAPInit";
import { AmbientGlow } from "@/components/AmbientGlow";
import { ScrollSpyInit } from "@/components/ScrollSpyInit";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "An Khang | Software Developer",
  description: "An Khang — Software Developer building web, mobile, and automation tools with hands-on IT support experience.",
  metadataBase: new URL("https://ankhang0704.vercel.app"),
  openGraph: {
    title: "An Khang | Software Developer",
    description: "Software Developer building web, mobile, and automation tools with hands-on IT support experience.",
    url: "https://ankhang0704.vercel.app",
    siteName: "An Khang Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Khang | Software Developer",
    description: "Web, mobile, and automation software with hands-on IT support experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "An Khang",
    jobTitle: "Software Developer",
    knowsAbout: ["Web Development", "Mobile Development", "Automation", "IT Support", "Django", "Flutter"],
    email: "mailto:ankhang.nguyen0704@gmail.com",
    url: "https://ankhang0704.vercel.app",
    sameAs: [
      "https://github.com/ankhang0704",
      "https://www.linkedin.com/in/ankhang0704/",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark font-sans relative overflow-x-hidden ${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <LanguageProvider>
            <GSAPInit />
            <ScrollSpyInit />
            <AmbientGlow />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[200] focus:border focus:border-black focus:bg-bgLight focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest dark:focus:border-white dark:focus:bg-bgDark"
            >
              Skip to content
            </a>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
