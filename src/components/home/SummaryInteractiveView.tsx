"use client";

import React from "react";

interface SummaryInteractiveViewProps {
  isVi: boolean;
  dict: {
    title: string;
    p1: string;
    p2: string;
  };
}

export function SummaryInteractiveView({
  isVi,
  dict,
}: SummaryInteractiveViewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {/* Left Column (Span 4): Technical Career Anchors & Editorial Index */}
      <div className="lg:col-span-4 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] opacity-60 block">
            {isVi ? "ĐỊNH VỊ NGHỀ NGHIỆP" : "CORE POSITIONING"}
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            {isVi
              ? "Từ Hạ Tầng Máy Chủ Đến Phần Mềm Thực Chiến."
              : "From Server Infrastructure To Production Engineering."}
          </h3>
        </div>

        {/* Structured Technical Anchors (No heavy box, clean ruled hierarchy) */}
        <div className="border-t border-black/10 dark:border-white/10 pt-6 space-y-5 font-mono opacity-90">
          <div className="flex items-start gap-3.5">
            <span className="w-2 h-2 bg-black dark:bg-white mt-2 flex-shrink-0" />
            <div>
              <span className="text-base sm:text-lg font-bold block leading-snug">
                {isVi ? "Bệnh Viện Mắt Bình Thuận" : "Binh Thuan Eye Hospital"}
              </span>
              <span className="opacity-70 text-xs sm:text-sm block mt-0.5">
                {isVi ? "IT Helpdesk & Vận hành Hạ tầng" : "IT Helpdesk & Production Ops"}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="w-2 h-2 bg-black dark:bg-white mt-2 flex-shrink-0" />
            <div>
              <span className="text-base sm:text-lg font-bold block leading-snug">
                {isVi ? "Cử Nhân Công Nghệ Thông Tin" : "Bachelor of Information Technology"}
              </span>
              <span className="opacity-70 text-xs sm:text-sm block mt-0.5">
                {isVi ? "Đại học (2022 — 2026)" : "University (2022 — 2026)"}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <span className="w-2 h-2 bg-black dark:bg-white mt-2 flex-shrink-0" />
            <div>
              <span className="text-base sm:text-lg font-bold block leading-snug">
                FM Dictionary
              </span>
              <span className="opacity-70 text-xs sm:text-sm block mt-0.5">
                {isVi ? "Ứng dụng Di động Thực tế (App Store)" : "Live iOS Application (App Store)"}
              </span>
            </div>
          </div>
        </div>

        {/* Competency Badges */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          <span className="border border-black/20 dark:border-white/20 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider opacity-80 bg-bgLight dark:bg-bgDark">
            {isVi ? "Production IT Ops" : "Production IT Ops"}
          </span>
          <span className="border border-black/20 dark:border-white/20 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider opacity-80 bg-bgLight dark:bg-bgDark">
            {isVi ? "Backend & Mobile" : "Backend & Mobile"}
          </span>
        </div>
      </div>

      {/* Right Column (Span 8): Architectural Lead Statement & Narrative Prose */}
      <div className="lg:col-span-8 space-y-10 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-12">
        {/* Large Lead Paragraph */}
        <p className="font-display text-3xl sm:text-4xl font-light leading-relaxed text-justify tracking-tight">
          {isVi ? (
            <>
              “Tôi không chỉ dừng lại ở việc viết mã nguồn, mà luôn bắt đầu từ sự thấu hiểu sâu sắc cách ứng dụng{" "}
              <span className="font-serif italic font-normal">vận hành, chịu tải và bảo mật</span> trên hạ tầng thực tế.”
            </>
          ) : (
            <>
              “I do not merely write code; I begin with a deep structural understanding of how applications{" "}
              <span className="font-serif italic font-normal">deploy, scale, and maintain resilience</span> in production.”
            </>
          )}
        </p>

        {/* Narrative Prose */}
        <div className="space-y-6 text-xl md:text-2xl font-light opacity-85 leading-relaxed text-justify border-t border-black/10 dark:border-white/10 pt-8">
          <p>{dict.p1}</p>
          <p>{dict.p2}</p>
        </div>
      </div>
    </div>
  );
}
