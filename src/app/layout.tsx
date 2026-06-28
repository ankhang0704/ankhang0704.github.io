import type { Metadata } from "next";
import "./style.css";
import "aos/dist/aos.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@500;700&family=Playfair+Display:ital,wght@1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark transition-colors duration-500 font-sans relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
