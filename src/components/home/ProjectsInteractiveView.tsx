"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectsInteractiveViewProps {
  lang: string;
  isVi: boolean;
  dict: {
    title: string;
    p1Category: string;
    p1Title: string;
    p1Desc: string;
    p1CaseStudy: string;
    p2Category: string;
    p2Title: string;
    p2Desc: string;
    p3Category: string;
    p3Title: string;
    p3Desc: string;
  };
}

export function ProjectsInteractiveView({
  lang,
  isVi,
  dict,
}: ProjectsInteractiveViewProps) {
  const projects = [
    {
      id: "project-fm-dictionary",
      num: "01",
      code: "PRJ-01",
      typeVi: "SẢN PHẨM LIVE",
      typeEn: "LIVE PRODUCTION",
      statusVi: "ĐÃ PHÁT HÀNH",
      statusEn: "PUBLISHED",
      image: "/fm-dictionary-cover.webp",
      category: dict.p1Category,
      title: dict.p1Title,
      desc: dict.p1Desc,
      tags: ["Production", "Flutter", "Firebase", "Cloudflare Workers", "iOS Live"],
      caseStudyHref: `/${lang}/fm-dictionary/`,
      externalHref: "https://apps.apple.com/us/app/fm-dictionary/id6774868353",
      externalLabel: "App Store ↗",
      impact: {
        problem: isVi
          ? "Thiếu từ điển chuyên ngành FM chuẩn hóa ngoại tuyến."
          : "Lack of standardized offline FM terminology app.",
        solution: isVi
          ? "Phát triển ứng dụng Flutter offline-first, tích hợp AI phát âm."
          : "Built offline-first Flutter app with embedded AI pronunciation.",
        outcome: isVi
          ? "Đã phát hành trên App Store với 1,800+ thuật ngữ chuyên sâu."
          : "Published on App Store with 1,800+ specialized terms.",
      },
    },
    {
      id: "project-hotel-management",
      num: "02",
      code: "PRJ-02",
      typeVi: "ĐỒ ÁN NGHIÊN CỨU",
      typeEn: "ACADEMIC CAPSTONE",
      statusVi: "HOÀN TẤT",
      statusEn: "COMPLETED",
      image: "/hotel-management-cover.webp",
      category: dict.p2Category,
      title: dict.p2Title,
      desc: dict.p2Desc,
      tags: ["Academic Case Study", "Django", "Python", "PostgreSQL", "REST APIs", "OpenAI"],
      caseStudyHref: `/${lang}/hotel-management/`,
      externalHref: "https://github.com/ankhang0704/QuanLyKhachSan_AI",
      externalLabel: "GitHub ↗",
      impact: {
        problem: isVi
          ? "Xử lý đặt phòng chậm và chi phí trực tổng đài cao."
          : "Slow room query latency and high customer support overhead.",
        solution: isVi
          ? "Tối ưu B-Tree indexing PostgreSQL và tích hợp OpenAI worker."
          : "PostgreSQL B-Tree query indexing and async OpenAI prompt workers.",
        outcome: isVi
          ? "Giảm 95.7% thời gian truy vấn, phản hồi AI dưới 1,5 giây."
          : "95.7% query latency drop, sub-1.5s AI response time.",
      },
    },
    {
      id: "project-it-infrastructure",
      num: "03",
      code: "PRJ-03",
      typeVi: "HẠ TẦNG DOANH NGHIỆP",
      typeEn: "PRODUCTION INFRA",
      statusVi: "VẬN HÀNH LIÊN TỤC",
      statusEn: "ACTIVE SLA",
      image: "/it-infrastructure-cover.webp",
      category: dict.p3Category,
      title: dict.p3Title,
      desc: dict.p3Desc,
      tags: ["IT Operations", "Linux", "Cisco CCNA", "PostgreSQL", "PowerShell", "Server Backup"],
      caseStudyHref: `/${lang}/it-infrastructure/`,
      impact: {
        problem: isVi
          ? "Nguy cơ mất dữ liệu và gián đoạn công việc y tế."
          : "Risk of hospital data loss and operational workflow downtime.",
        solution: isVi
          ? "Thiết lập kịch bản sao lưu tự động và phân luồng mạng VLAN."
          : "Automated backup rotation pipeline and VLAN network segregation.",
        outcome: isVi
          ? "Đạt cam kết 99.8% Uptime, khôi phục sự cố dưới 15 phút."
          : "Maintained 99.8% Uptime SLA with sub-15min disaster recovery.",
      },
    },
  ];

  return (
    <div className="space-y-24 md:space-y-36">
      {projects.map((p) => (
        <div
          key={p.id}
          id={p.id}
          className="gsap-project-item border border-black/15 dark:border-white/15 bg-cardLight dark:bg-cardDark relative overflow-hidden group scroll-mt-24 shadow-sm hover:border-black dark:hover:border-white transition-all duration-500"
        >
          {/* Technical Blueprint Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 md:px-10 py-5 bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/10 font-mono text-sm">
            <div className="flex items-center gap-4">
              <span className="font-bold tracking-widest text-base">{p.code}</span>
              <span className="opacity-30">|</span>
              <span className="opacity-75 tracking-wider">{isVi ? p.typeVi : p.typeEn}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-black dark:bg-white inline-block" />
              <span className="font-bold tracking-wider">
                {isVi ? p.statusVi : p.statusEn}
              </span>
            </div>
          </div>

          {/* Card Body: Asymmetric Grid Split */}
          <div className="p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col (Span 7): Technical Image Container */}
            <div className="project-img-box lg:col-span-7 overflow-hidden relative aspect-[16/10] border border-black/10 dark:border-white/10">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
              />
              <div className="absolute top-5 left-5 bg-black/80 text-white dark:bg-white/90 dark:text-black font-mono text-xs px-3 py-1.5 tracking-widest uppercase font-bold">
                SPEC // {p.num}
              </div>
            </div>

            {/* Right Col (Span 5): Technical Info & Impact Table */}
            <div className="project-info-box lg:col-span-5 space-y-6">
              <div>
                <span className="text-sm font-mono uppercase tracking-[0.25em] opacity-60 block mb-2 font-bold">
                  {p.category}
                </span>
                <h3 className="font-display text-4xl md:text-5xl font-bold">
                  {p.title}
                </h3>
              </div>

              <p className="font-light opacity-85 text-xl leading-relaxed text-justify">
                {p.desc}
              </p>

              {/* Impact 3-Point Table (Problem -> Solution -> Result) */}
              <div className="space-y-3 border-t border-b border-black/10 dark:border-white/10 py-5 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="opacity-60 text-xs font-bold min-w-[85px] mt-0.5">
                    PROBLEM:
                  </span>
                  <span className="opacity-90 leading-relaxed">{p.impact.problem}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="opacity-60 text-xs font-bold min-w-[85px] mt-0.5">
                    SOLVE:
                  </span>
                  <span className="opacity-90 leading-relaxed">{p.impact.solution}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="opacity-60 text-xs font-bold min-w-[85px] mt-0.5">
                    RESULT:
                  </span>
                  <span className="font-bold leading-relaxed">{p.impact.outcome}</span>
                </div>
              </div>

              {/* Tags & Action Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-3.5 py-1.5 opacity-70 group-hover:border-black dark:group-hover:border-white group-hover:opacity-100 transition-all bg-bgLight dark:bg-bgDark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <Link
                  href={p.caseStudyHref}
                  className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center group/btn"
                >
                  <span>{dict.p1CaseStudy}</span>
                  <span className="ml-3 group-hover/btn:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </Link>
                {p.externalHref && (
                  <a
                    href={p.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black/30 dark:border-white/30 px-6 py-4 text-sm font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-all flex items-center"
                  >
                    {p.externalLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
