import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./style.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "An Khang | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark transition-colors duration-500 font-sans relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
