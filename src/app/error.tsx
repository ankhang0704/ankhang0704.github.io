"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname() || "";
  const isVi = pathname.startsWith("/vi");

  useEffect(() => {
    // Log unexpected runtime exception for diagnostic monitoring
    console.error("Runtime exception captured by ErrorBoundary:", error);
  }, [error]);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[85dvh] flex items-center justify-center relative overflow-hidden pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] opacity-75">
              {isVi ? "Mã Lỗi 500 · Sự Cố Hệ Thống" : "Error 500 · System Exception"}
            </span>
            <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
          </div>

          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none mb-6">
            500<span className="font-light text-6xl sm:text-7xl md:text-8xl ml-3 opacity-60">!</span>
          </h1>

          <p className="font-display text-2xl sm:text-3xl font-bold mb-6 tracking-tight">
            {isVi ? "Đã xảy ra sự cố trong quá trình kết xuất giao diện." : "An unexpected execution anomaly was encountered."}
          </p>

          <p className="font-light text-base sm:text-lg opacity-80 leading-relaxed mb-12 max-w-xl mx-auto">
            {isVi
              ? "Ứng dụng gặp gián đoạn tạm thời khi xử lý trạng thái trang. Bạn có thể thử kết nối lại hoặc quay về trang chủ an toàn."
              : "The interface boundary intercepted an unhandled runtime error. You can attempt to re-execute the layout pipeline or return to the main index."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <Icons.Refresh size={16} aria-hidden="true" className="mr-3" />
              <span>{isVi ? "Thử kết nối lại" : "Retry execution"}</span>
            </button>

            <Link
              href="/"
              className="border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200 flex items-center justify-center w-full sm:w-auto"
            >
              <span>{isVi ? "Quay về trang chủ" : "Return to terminal"}</span>
              <Icons.ArrowRight size={16} aria-hidden="true" className="ml-3" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
