import type { Metadata } from "next";
import Script from "next/script";
import "./style.css";

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
    <html lang="en" className="scroll-smooth md:snap-y md:snap-proximity">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Space+Grotesk:wght@500;700&family=Playfair+Display:ital,wght@1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <Script id="tailwind-config" strategy="beforeInteractive">
          {`
            tailwind.config = {
              darkMode: 'class',
              theme: {
                  extend: {
                      fontFamily: {
                          sans: ['Inter', 'sans-serif'],
                          display: ['Space Grotesk', 'sans-serif'],
                          serif: ['Playfair Display', 'serif'],
                      },
                      colors: {
                          bgLight: '#fafafa', textLight: '#111111',
                          bgDark: '#0a0a0a', textDark: '#ededed',
                          cardLight: '#ffffff', cardDark: '#121212',
                      }
                  }
              }
            }
          `}
        </Script>
      </head>
      <body className="bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark transition-colors duration-500 font-sans relative overflow-x-hidden">
        {children}
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
