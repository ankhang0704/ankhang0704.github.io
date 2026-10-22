"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localizedPath } from "@/lib/locale-path";
import { Icons } from "@/components/Icons";

export default function NotFound() {
  const pathname = usePathname() || "";
  const isVi = pathname.startsWith("/vi");
  const lang = isVi ? "vi" : "en";

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[85dvh] flex items-center justify-center relative overflow-hidden pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-3xl">
          {/* Status code anchor line */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] opacity-75">
              {isVi ? "Mã Lỗi 404 · Không Tìm Thấy Trang" : "Error 404 · Page Not Found"}
            </span>
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
          </div>

          {/* Architectural Monumental Display */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none mb-6">
            404<span className="font-light text-6xl sm:text-7xl md:text-8xl ml-3 opacity-60">.</span>
          </h1>

          <p className="font-display text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
            {isVi ? "Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển." : "The architectural route you requested does not exist."}
          </p>

          <p className="font-light text-base sm:text-lg opacity-80 leading-relaxed mb-12 max-w-xl mx-auto">
            {isVi
              ? "Đường dẫn có thể đã thay đổi, trang đã được cập nhật sang kiến trúc mới hoặc đường link bạn vừa truy cập bị nhầm lẫn."
              : "The URL may have moved during recent system canonicalization, or the link typed was incorrect. You can safely return to the home terminal or review documented engineering work."}
          </p>

          {/* Minimalist Inverted Navigation Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={localizedPath(lang, "/")}
              className="border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <Icons.ArrowRight size={16} aria-hidden="true" className="mr-3 rotate-180" />
              <span>{isVi ? "Quay về trang chủ" : "Return to terminal"}</span>
            </Link>

            <Link
              href={localizedPath(lang, "/projects/")}
              className="border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <span>{isVi ? "Xem các dự án" : "Explore selected work"}</span>
              <Icons.ArrowRight size={16} aria-hidden="true" className="ml-3" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
