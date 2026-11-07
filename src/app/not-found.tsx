"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { DecryptedText } from "@/components/DecryptedText";
import { MagneticButton } from "@/components/MagneticButton";
import { GridPattern } from "@/components/GridPattern";

export default function RootNotFound() {
  const { isVi } = useLanguage();

  return (
    <>
      <title>
        {isVi
          ? "404 · Không tìm thấy trang | An Khang"
          : "404 · Page Not Found | An Khang"}
      </title>
      <meta name="robots" content="noindex" />

      <Header />

      <main
        id="main-content"
        className="min-h-[85dvh] flex items-center justify-center relative overflow-hidden pt-32 pb-24 px-6 md:px-8"
      >
        <GridPattern />
        <div className="text-center max-w-2xl relative z-10 mx-auto">
          {/* Engineering Metadata Anchor */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] opacity-70">
              <DecryptedText
                text={
                  isVi
                    ? "LỖI 404 // KHÔNG TÌM THẤY TRANG"
                    : "ERROR 404 // ROUTE_NOT_FOUND"
                }
                speed={35}
                maxIterations={10}
                animateOn="mount"
              />
            </span>
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
          </div>

          {/* Stark Architectural Heading */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none mb-6">
            404<span className="font-light italic ml-2 opacity-50">.</span>
          </h1>

          <p className="font-display text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
            {isVi
              ? "Trang bạn yêu cầu không tồn tại."
              : "The route you requested does not exist."}
          </p>

          <p className="font-light text-base sm:text-lg opacity-80 leading-relaxed mb-12 max-w-xl mx-auto">
            {isVi
              ? "Địa chỉ URL có thể đã thay đổi hoặc đường dẫn truy cập không chính xác. Bạn có thể quay về trang chủ hoặc khám phá các dự án đã thực hiện."
              : "The URL may have moved, or the address entered was invalid. You can safely return to the home terminal or explore selected engineering works."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton strength={0.15}>
              <Link
                href="/"
                className="border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-85 transition-opacity duration-200 flex items-center justify-center w-full sm:w-auto"
              >
                <span>{isVi ? "Về trang chủ" : "Return to terminal"}</span>
                <Icons.ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="ml-3"
                />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <Link
                href="/projects/"
                className="border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 flex items-center justify-center w-full sm:w-auto"
              >
                <span>{isVi ? "Khám phá dự án" : "Explore selected work"}</span>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
