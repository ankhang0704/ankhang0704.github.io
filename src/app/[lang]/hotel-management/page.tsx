import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";
import { HotelQueryInspector } from "@/components/case-study/HotelQueryInspector";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function HotelManagementCaseStudy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isVi = lang === "vi";

  return (
    <>
      <Header variant="main" />

      <CaseStudyAnimations>
        <main className="pt-32 pb-20 relative overflow-x-hidden">
          {/* Case Study Header */}
          <section className="container mx-auto px-6 md:px-8 mb-20">
            <div className="cs-breadcrumb flex items-center space-x-4 mb-6">
              <Link
                href={`/${lang}/`}
                className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              >
                ← {isVi ? "Về Trang Chủ" : "Back to Home"}
              </Link>
              <span className="h-[1px] w-8 bg-black dark:bg-white opacity-30"></span>
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                {isVi ? "Đồ Án Nghiên Cứu · Backend & AI" : "Academic Case Study · Backend & AI"}
              </span>
            </div>

            <h1 className="cs-title font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
              Hotel Management <br />
              <span className="font-serif italic text-6xl md:text-8xl tracking-normal">
                &amp; AI Chatbot
              </span>
            </h1>

            <p className="cs-desc text-xl font-light max-w-3xl opacity-80 leading-relaxed text-justify">
              {isVi
                ? "Báo cáo chuyên sâu về đồ án nghiên cứu phát triển hệ thống quản lý khách sạn bằng Django REST Framework, kỹ thuật tối ưu hóa truy vấn cơ sở dữ liệu PostgreSQL và tích hợp trợ lý AI phản hồi dưới 1,5 giây."
                : "In-depth case study of a university backend project built with Django REST Framework, PostgreSQL query optimization, and OpenAI API integration delivering AI responses in under 1.5 seconds."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Django", "Python", "PostgreSQL", "REST APIs", "OpenAI API", "Academic Project"].map((tag) => (
                <span
                  key={tag}
                  className="cs-tag text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Architecture Diagram Section */}
          <section className="cs-diagram-section py-16 bg-cardLight dark:bg-cardDark border-y border-black/10 dark:border-white/10 mb-20">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="font-display text-3xl font-bold mb-10 text-center uppercase tracking-wider">
                {isVi ? "Sơ Đồ Kiến Trúc Hệ Thống" : "System Architecture Diagram"}
              </h2>

              <div className="max-w-4xl mx-auto border border-black/10 dark:border-white/10 p-8 md:p-12 bg-bgLight dark:bg-bgDark">
                <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto opacity-90 space-y-6">
                  <div className="cs-diagram-node text-center p-4 border border-black/20 dark:border-white/20">
                    <span className="font-bold block">[ Client Application Layer ]</span>
                    <span className="opacity-70 text-xs">Web Front-end &amp; Mobile Clients (JSON Payload / HTTPS)</span>
                  </div>

                  <div className="cs-diagram-node text-center font-bold">↓ REST APIs (JWT Authentication)</div>

                  <div className="cs-diagram-node text-center p-4 border border-black/20 dark:border-white/20">
                    <span className="font-bold block">[ Django REST Framework Engine ]</span>
                    <span className="opacity-70 text-xs">Business Logic · ORM Models · Serialization · Rate Limiting</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                      <span className="font-bold block text-xs md:text-sm">← ORM Indexing &amp; Query Tuning →</span>
                      <span className="font-bold block mt-2">[ PostgreSQL Database ]</span>
                      <span className="opacity-70 text-xs">Reservations · Rooms · User Accounts</span>
                    </div>

                    <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                      <span className="font-bold block text-xs md:text-sm">← Async Prompt Pipeline →</span>
                      <span className="font-bold block mt-2">[ OpenAI API Worker ]</span>
                      <span className="opacity-70 text-xs">Sub-1.5s Response · Context Caching</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Breakdown Grid */}
          <section className="container mx-auto px-6 md:px-8 max-w-5xl space-y-16 mb-20">
            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">01 / Problem &amp; Scope</h3>
              <p className="font-light text-lg leading-relaxed text-justify opacity-80">
                {isVi
                  ? "Thử nghiệm xây dựng một nền tảng quản lý khách sạn giúp đơn giản hóa quy trình đặt phòng, kiểm tra trạng thái phòng trống theo thời gian thực và cung cấp trợ lý tư vấn tự động cho khách hàng mà không tốn chi phí vận hành nhân sự cao."
                  : "Explored building a hotel management platform to streamline room reservation workflows, real-time availability checks, and automated customer support without high operational overhead."}
              </p>
            </div>

            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">02 / Key Decisions &amp; Latency</h3>
              <div className="font-light text-lg leading-relaxed opacity-80 space-y-4">
                <p>
                  {isVi
                    ? "• Xây dựng chỉ mục (database indexes) trên các trường ngày đặt và mã phòng giúp giảm thời gian truy vấn danh sách phòng trống."
                    : "• Built targeted database indexes on reservation date ranges and room IDs to eliminate full table scans during availability checks."}
                </p>
                <p>
                  {isVi
                    ? "• Xử lý triệt để lỗi N+1 Query trong Django ORM bằng `select_related` và `prefetch_related`."
                    : "• Resolved N+1 ORM query issues in Django by utilizing `select_related` and `prefetch_related` for nested model serialization."}
                </p>
                <p>
                  {isVi
                    ? "• Đặt cấu trúc Prompt tối ưu ngữ cảnh giúp giảm số lượng token và đạt thời gian phản hồi AI dưới 1,5 giây."
                    : "• Engineered concise prompt contexts for the OpenAI API endpoint to minimize token overhead and achieve sub-1.5s query response times."}
                </p>

                {/* Interactive Query Latency Inspector */}
                <HotelQueryInspector isVi={isVi} />
              </div>
            </div>

            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-b border-black/10 dark:border-white/10 py-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">03 / GitHub Source Code</h3>
              <div>
                <p className="font-light text-lg leading-relaxed opacity-80 mb-6">
                  {isVi
                    ? "Mã nguồn đồ án và các API endpoint được công khai trên GitHub để tham khảo."
                    : "The complete project source code and API endpoints are public on GitHub for review."}
                </p>
                <a
                  href="https://github.com/ankhang0704/QuanLyKhachSan_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                >
                  <span>{isVi ? "Xem Repository GitHub" : "View GitHub Repository"}</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </CaseStudyAnimations>

      <Footer variant="main" />
    </>
  );
}
