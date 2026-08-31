"use client";

import React from "react";

interface TimelineItem {
  index: string;
  timeVi: string;
  timeEn: string;
  statusVi: string;
  statusEn: string;
  isActive: boolean;
  badgeVi: string;
  badgeEn: string;
  roleVi: string;
  roleEn: string;
  descVi: string;
  descEn: string;
  tags: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    index: "01",
    timeVi: "04/2026 — Nay",
    timeEn: "04/2026 — Present",
    statusVi: "ĐANG ĐẢM NHIỆM",
    statusEn: "ACTIVE ROLE",
    isActive: true,
    badgeVi: "Hạ tầng Thực tế",
    badgeEn: "Production IT Ops",
    roleVi: "IT Helpdesk · Bệnh Viện Mắt Bình Thuận",
    roleEn: "IT Helpdesk · Binh Thuan Eye Hospital",
    descVi:
      "Chịu trách nhiệm vận hành, quản trị hạ tầng mạng nội bộ, máy chủ dữ liệu PostgreSQL và hỗ trợ kỹ thuật cho hơn 50 máy trạm toàn viện.",
    descEn:
      "Responsible for operating and managing internal network infrastructure, PostgreSQL server nodes, and technical support across 50+ hospital workstations.",
    tags: [
      "PostgreSQL 16",
      "50+ Workstations",
      "Network Monitoring",
      "Automated Backup",
      "Hardware & LAN",
    ],
  },
  {
    index: "02",
    timeVi: "01/2026 — 04/2026",
    timeEn: "01/2026 — 04/2026",
    statusVi: "HOÀN THÀNH",
    statusEn: "COMPLETED",
    isActive: false,
    badgeVi: "Thực tập Doanh nghiệp",
    badgeEn: "Industry Internship",
    roleVi: "IT Operations Intern · SOJO Company",
    roleEn: "IT Operations Intern · SOJO Company",
    descVi:
      "Tham gia hỗ trợ vận hành hệ thống CNTT, giám sát thiết bị mạng và quy trình công nghệ tại SOJO Company, tích lũy kinh nghiệm thực tế về hạ tầng dịch vụ.",
    descEn:
      "Assisted with IT operations, network monitoring, and technology infrastructure at SOJO Company, gaining hands-on experience in production service systems.",
    tags: [
      "IT Support",
      "Network Infrastructure",
      "Smart Hospitality",
      "Operational Workflows",
    ],
  },
  {
    index: "03",
    timeVi: "03/2026",
    timeEn: "03/2026",
    statusVi: "TỐT NGHIỆP",
    statusEn: "GRADUATION",
    isActive: false,
    badgeVi: "Đồ án Xuất sắc",
    badgeEn: "Capstone Defense",
    roleVi: "Tốt Nghiệp Cử Nhân CNTT · Graduation",
    roleEn: "Bachelor of IT · Graduation",
    descVi:
      "Bảo vệ thành công đồ án tốt nghiệp hệ thống quản lý tích hợp AI, chính thức tốt nghiệp Cử nhân Công nghệ Thông tin với định hướng phát triển phần mềm và hệ thống.",
    descEn:
      "Successfully defended the capstone management & AI system project, graduating with a Bachelor's Degree in Information Technology.",
    tags: [
      "Django REST",
      "OpenAI Integration",
      "PostgreSQL Indexing",
      "Bachelor Degree",
    ],
  },
  {
    index: "04",
    timeVi: "2022 — 2026",
    timeEn: "2022 — 2026",
    statusVi: "HOÀN THÀNH",
    statusEn: "COMPLETED",
    isActive: false,
    badgeVi: "Đào tạo Cử nhân",
    badgeEn: "Academic Degree",
    roleVi: "Cử Nhân Công Nghệ Thông Tin · Đại Học",
    roleEn: "Bachelor of Information Technology · University",
    descVi:
      "Hoàn thành chương trình cử nhân CNTT, nghiên cứu chuyên sâu về Kiến trúc phần mềm Backend (Django, Python), Lập trình ứng dụng di động (Flutter) và Quản trị mạng (Cisco CCNA).",
    descEn:
      "Completed Bachelor of IT degree, focusing on Backend Software Architecture (Django, Python), Mobile App Development (Flutter), and Networking (Cisco CCNA).",
    tags: [
      "Data Structures",
      "Django & Python",
      "Flutter & Dart",
      "Cisco CCNA",
      "Software Architecture",
    ],
  },
];

export function TimelineInteractiveView({ isVi }: { isVi: boolean }) {
  return (
    <div className="timeline-wrapper relative max-w-5xl pl-6 sm:pl-8 md:pl-12 border-l border-black/10 dark:border-white/10 border-b border-b-black/10 dark:border-b-white/10">
      {/* GSAP Scrubbing Active Vertical Line (from Option 1) */}
      <div className="timeline-line-active absolute top-0 left-[-1px] w-[2px] h-full bg-black dark:bg-white scale-y-0 origin-top pointer-events-none" />

      {TIMELINE_DATA.map((item) => (
        <div
          key={item.index}
          className="gsap-timeline-row group relative border-t border-black/10 dark:border-white/10 py-12 md:py-16 transition-all duration-300 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] px-2 sm:px-4 md:px-6"
        >
          {/* Sharp 0px Square Node Marker on the left vertical line */}
          <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[55px] top-14 w-4 h-4 bg-bgLight dark:bg-bgDark border-2 border-black dark:border-white group-hover:scale-125 group-hover:bg-black dark:group-hover:bg-white transition-all duration-300 z-10" />

          {/* Ledger Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
            {/* Left Column (Span 4): Index, Time, Badge & Status */}
            <div className="lg:col-span-4 space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm opacity-50 font-bold">
                  {item.index} /
                </span>
                <span className="text-xs font-mono uppercase tracking-widest border border-black/20 dark:border-white/20 px-3 py-1 opacity-80 font-medium">
                  {isVi ? item.badgeVi : item.badgeEn}
                </span>
              </div>

              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                {isVi ? item.timeVi : item.timeEn}
              </div>

              {item.isActive ? (
                <div className="inline-flex items-center gap-2.5 border border-black dark:border-white px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black">
                  <span className="w-2 h-2 bg-white dark:bg-black animate-pulse inline-block" />
                  <span>{isVi ? item.statusVi : item.statusEn}</span>
                </div>
              ) : (
                <span className="text-xs font-mono uppercase tracking-widest opacity-50 block font-medium">
                  {isVi ? item.statusVi : item.statusEn}
                </span>
              )}
            </div>

            {/* Right Column (Span 8): Role Title, Description & Competency Chips */}
            <div className="lg:col-span-8 lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-10 space-y-5">
              <h4 className="font-display text-3xl md:text-4xl font-bold group-hover:translate-x-2 transition-transform duration-300 flex items-center justify-between">
                <span>{isVi ? item.roleVi : item.roleEn}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xl">
                  →
                </span>
              </h4>

              <p className="font-light opacity-85 text-xl leading-relaxed text-justify max-w-[65ch]">
                {isVi ? item.descVi : item.descEn}
              </p>

              {/* Competency Chips */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black/15 dark:border-white/15 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity bg-bgLight dark:bg-bgDark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
