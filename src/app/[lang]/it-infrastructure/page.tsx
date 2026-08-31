import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";
import { BackupTerminalSimulator } from "@/components/case-study/BackupTerminalSimulator";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function ITInfrastructureCaseStudy({
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
                {isVi ? "Hạ Tầng Thực Tế · IT Ops" : "Production IT Ops · Infrastructure"}
              </span>
            </div>

            <h1 className="cs-title font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
              IT System Reliability <br />
              <span className="font-serif italic text-6xl md:text-8xl tracking-normal">
                &amp; Operations
              </span>
            </h1>

            <p className="cs-desc text-xl font-light max-w-3xl opacity-80 leading-relaxed text-justify">
              {isVi
                ? "Báo cáo vận hành hạ tầng công nghệ thông tin thực tế, duy trì 99.8% uptime cho hệ thống hơn 50 máy trạm & máy chủ với kịch bản sao lưu dữ liệu PostgreSQL tự động và quy trình ứng cứu sự cố."
                : "Field report on real-world IT infrastructure operations, maintaining 99.8% uptime across 50+ workstations & server nodes with automated PostgreSQL backup scripts and disaster recovery workflows."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["IT Operations", "Linux", "Cisco CCNA", "PostgreSQL", "PowerShell", "Server Backup"].map((tag) => (
                <span
                  key={tag}
                  className="cs-tag text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Network Topology Diagram Section */}
          <section className="cs-diagram-section py-16 bg-cardLight dark:bg-cardDark border-y border-black/10 dark:border-white/10 mb-20">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="font-display text-3xl font-bold mb-10 text-center uppercase tracking-wider">
                {isVi ? "Sơ Đồ Hạ Tầng & Luồng Sao Lưu" : "Infrastructure & Backup Topology"}
              </h2>

              <div className="max-w-4xl mx-auto border border-black/10 dark:border-white/10 p-8 md:p-12 bg-bgLight dark:bg-bgDark">
                <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto opacity-90 space-y-6">
                  <div className="cs-diagram-node text-center p-4 border border-black/20 dark:border-white/20">
                    <span className="font-bold block">[ ISP Gateway Router / Firewall Layer ]</span>
                    <span className="opacity-70 text-xs">Access Control · NAT · Bandwidth Management</span>
                  </div>

                  <div className="cs-diagram-node text-center font-bold">↓ Managed VLAN Switching</div>

                  <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                    <span className="font-bold block">[ Core Managed Switch ]</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                      <span className="font-bold block text-xs md:text-sm">← LAN Access Segment →</span>
                      <span className="font-bold block mt-2">[ 50+ Workstation Nodes ]</span>
                      <span className="opacity-70 text-xs">Helpdesk Support · Endpoint Security</span>
                    </div>

                    <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                      <span className="font-bold block text-xs md:text-sm">← Server Segment →</span>
                      <span className="font-bold block mt-2">[ PostgreSQL Server Node ]</span>
                      <span className="opacity-70 text-xs">Active Database · System Files</span>
                      <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10 text-xs font-bold opacity-80">
                        ↓ Cron / PowerShell Automated Backup Engine → Off-site Dump Storage
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Operational Metrics Breakdown */}
          <section className="container mx-auto px-6 md:px-8 max-w-5xl space-y-16 mb-20">
            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">01 / Operational Uptime</h3>
              <p className="font-light text-lg leading-relaxed text-justify opacity-80">
                {isVi
                  ? "Duy trì cam kết độ tin cậy 99.8% cho hơn 50 máy trạm làm việc và cụm máy chủ, giảm thiểu tối đa thời gian gián đoạn công việc của cán bộ y tế và nhân viên."
                  : "Maintained 99.8% system availability SLA across 50+ active workstations and core server nodes, minimizing operational downtime for staff."}
              </p>
            </div>

            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">02 / Automated Backups</h3>
              <div>
                <p className="font-light text-lg leading-relaxed text-justify opacity-80 mb-6">
                  {isVi
                    ? "Viết kịch bản tự động hóa bằng PowerShell và Linux Shell script thực hiện dump dữ liệu PostgreSQL hàng ngày, nén tệp, kiểm tra tính toàn vẹn và luân chuyển bản sao lưu sang bộ nhớ an toàn."
                    : "Engineered automated PowerShell and Linux shell scripts for daily PostgreSQL database dumps, automated compression, integrity validation, and backup rotation."}
                </p>

                {/* Interactive Terminal Simulator */}
                <BackupTerminalSimulator isVi={isVi} />
              </div>
            </div>

            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-b border-black/10 dark:border-white/10 py-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">03 / Incident Recovery</h3>
              <p className="font-light text-lg leading-relaxed text-justify opacity-80">
                {isVi
                  ? "Xây dựng quy trình ứng cứu sự cố mạng, cô lập thiết bị nhiễm vi-rút và khôi phục dữ liệu từ bản sao lưu gần nhất trong thời gian ngắn nhất."
                  : "Defined rapid incident response workflows for network isolation, VLAN policy enforcement, and fast data restoration from verified backup dumps."}
              </p>
            </div>
          </section>
        </main>
      </CaseStudyAnimations>

      <Footer variant="main" />
    </>
  );
}
