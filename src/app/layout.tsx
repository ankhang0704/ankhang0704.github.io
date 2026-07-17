import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./style.css";
import "aos/dist/aos.css";

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
  title: "An Khang | Portfolio",
  description: "Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark transition-colors duration-500 font-sans relative overflow-x-hidden ${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
