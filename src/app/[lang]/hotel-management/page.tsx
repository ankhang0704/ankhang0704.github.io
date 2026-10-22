import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";
import { Icons } from "@/components/Icons";
import { localizedPath } from "@/lib/locale-path";

const capabilities = [
  {
    title: { en: "Availability Matrix", vi: "Tình trạng phòng & Lịch" },
    body: {
      en: "Date-based inventory engine connects room types, concrete room instances, and guest stay ranges with overlap validation.",
      vi: "Động cơ tồn kho theo ngày liên kết loại phòng, số phòng vật lý và khoảng ngày lưu trú với cơ chế chống trùng lịch.",
    },
  },
  {
    title: { en: "Reservation State Machine", vi: "Máy trạng thái đặt phòng" },
    body: {
      en: "A robust booking lifecycle wraps creation, inventory decrement, atomic overlap checks, and automated cancellation restores.",
      vi: "Vòng đời đặt phòng hoàn chỉnh bao gồm tạo đơn, trừ tồn kho tức thời, kiểm tra xung đột nguyên khối và phục hồi phòng khi hủy.",
    },
  },
  {
    title: { en: "Optimized ORM Loading", vi: "Truy vấn ORM tối ưu hóa" },
    body: {
      en: "Targeted select_related and prefetch_related optimizations eliminate N+1 queries on hot administrative booking views.",
      vi: "Áp dụng chọn lọc select_related và prefetch_related để triệt tiêu bài toán N+1 truy vấn trên các trang quản trị tần suất cao.",
    },
  },
  {
    title: { en: "Role-Based Desk Access", vi: "Phân quyền nghiệp vụ" },
    body: {
      en: "Decorator-enforced role boundaries separate Admin capabilities from Front Desk check-in/out and housekeeping duties.",
      vi: "Ranh giới vai trò được bảo vệ bằng decorator, phân tách rạch ròi giữa quyền Admin, Lễ tân nhận/trả phòng và Buồng phòng.",
    },
  },
  {
    title: { en: "Auxiliary Vector RAG", vi: "Trợ lý tri thức RAG độc lập" },
    body: {
      en: "A decoupled semantic retrieval layer queries FAISS vector indices to inject resort policies into localized assistant prompts.",
      vi: "Tầng truy xuất ngữ nghĩa độc lập tìm kiếm trên FAISS vector index để bổ sung quy định khách sạn vào prompt của trợ lý.",
    },
  },
  {
    title: { en: "ACID SQLite Transaction", vi: "Giao dịch SQLite an toàn" },
    body: {
      en: "Critical room allocation paths run within transaction.atomic and select_for_update blocks to preserve data integrity.",
      vi: "Các luồng giữ phòng trọng yếu được bọc trong khối transaction.atomic và select_for_update để đảm bảo an toàn dữ liệu.",
    },
  },
];

const timeline = [
  {
    date: "2025.10.28",
    en: "Core repository baseline established",
    vi: "Khởi tạo kiến trúc nền tảng",
    descEn: "MVT monolith initialized with models for rooms, bookings, and customer profiles.",
    descVi: "Khởi tạo monolith MVT với các model quản lý phòng, đơn đặt phòng và hồ sơ khách hàng.",
  },
  {
    date: "2025.11.19",
    en: "Full booking workflow & atomic tests completed",
    vi: "Hoàn thiện quy trình đặt phòng & bộ test",
    descEn: "Availability checks, inventory signal handlers, and role-based staff operations passed verification.",
    descVi: "Kiểm tra tình trạng phòng, signal điều phối tồn kho và giao diện nhân viên vượt qua kiểm thử.",
  },
  {
    date: "2025.12.04",
    en: "Decoupled FAISS RAG assistant integration",
    vi: "Tích hợp trợ lý RAG FAISS độc lập",
    descEn: "Vector similarity search boundary integrated for resort policy inquiries via isolated API bus.",
    descVi: "Bổ sung ranh giới tìm kiếm vector ngữ nghĩa cho hỏi đáp chính sách khách sạn qua bus riêng biệt.",
  },
];

export function generateStaticParams() {
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
        <main id="main-content" className="w-full min-w-0 overflow-x-hidden pt-28 md:pt-36">
          {/* 1. UNIFIED ARCHITECTURAL HERO */}
          <section className="container mx-auto grid min-h-[calc(100dvh-8rem)] w-full min-w-0 items-center gap-12 px-6 pb-20 md:px-8 md:pb-28 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-7">
              {/* Minimalist Top Anchor Row */}
              <div className="cs-breadcrumb mb-8 flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <Link
                    href={localizedPath(lang, "/")}
                    className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100"
                  >
                    ← {isVi ? "Mục lục" : "Index"}
                  </Link>
                  <span className="opacity-30">/</span>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                    {isVi ? "Đồ án học thuật" : "Academic Capstone"}
                  </span>
                </div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                  2025 · CAPSTONE BASELINE
                </div>
              </div>

              <h1 className="cs-title mb-6 break-words font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-8xl">
                Hotel <span className="font-light opacity-90 leading-[1.1] tracking-tight">Management.</span>
              </h1>

              <p className="cs-desc mb-8 max-w-2xl text-xl font-light leading-relaxed opacity-85 md:text-2xl">
                {isVi
                  ? "Đồ án capstone Django hoàn chỉnh: xây dựng hệ thống server-rendered monolith với cơ sở dữ liệu SQLite tối ưu cho nghiệp vụ đặt phòng, kiểm kê tồn kho và phân quyền vận hành, kèm một trợ lý RAG độc lập."
                  : "A complete Django academic capstone: engineering a server-rendered monolith with SQLite for room inventory, reservation lifecycles, and front-desk workflows, coupled with a decoupled retrieval-augmented assistant."}
              </p>

              {/* Technology Specification Tags */}
              <div className="mb-10 flex flex-wrap gap-2.5">
                {["Django 5.x", "Python", "SQLite + WAL", "Server-Rendered", "FAISS Vector RAG", "MVT Pattern"].map((tag) => (
                  <span
                    key={tag}
                    className="cs-tag border border-black/15 bg-cardLight px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider opacity-85 dark:border-white/15 dark:bg-cardDark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/ankhang0704/QuanLyKhachSan_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/80"
                >
                  {isVi ? "Xem mã nguồn GitHub" : "View Source on GitHub"} <Icons.Github size={14} />
                </a>
              </div>
            </div>

            {/* Precision Viewport Preview Frame */}
            <figure className="min-w-0 lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-black/15 bg-cardLight dark:border-white/15 dark:bg-cardDark">
                <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-black dark:bg-white" />
                    <span className="font-bold opacity-90">PRJ-03 · HOTEL-MGMT</span>
                  </div>
                  <span className="opacity-75">COMPLETED CAPSTONE</span>
                </div>
                <div className="relative h-[calc(100%-35px)] w-full overflow-hidden">
                  <Image
                    src="/hotel-management-editorial-cover.webp"
                    alt={isVi ? "Ảnh bìa đồ án Quản lý khách sạn" : "Editorial cover for Hotel Management Capstone"}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="cs-cover-img scale-105 object-cover grayscale transition-all duration-700 hover:scale-100 hover:grayscale-0"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                    {["Django 5 + SQLite", "FAISS Vector RAG", "Server-Rendered"].map((s) => (
                      <span key={s} className="bg-black/85 text-white dark:bg-white/90 dark:text-black text-[9px] font-mono uppercase px-2 py-0.5 border border-white/20 dark:border-black/20 font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed opacity-55">
                {isVi
                  ? "Bản ghi nhận kỹ thuật: Kiến trúc hệ thống quản lý khách sạn và trợ lý RAG cục bộ."
                  : "Technical snapshot: Hotel management monolith and decoupled local RAG architecture."}
              </figcaption>
            </figure>
          </section>

          {/* 2. UNIFIED 4-METRIC STRIP */}
          <section className="border-y border-black/10 bg-cardLight py-12 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto grid grid-cols-2 divide-x divide-black/10 border-l border-black/10 px-6 dark:divide-white/10 dark:border-white/10 md:grid-cols-4 md:px-8">
              {[
                ["2025.10 → 12", isVi ? "Thời gian phát triển" : "Development window"],
                ["6", isVi ? "Bộ kiểm thử trọng yếu" : "Focused test suites"],
                ["SQLite + WAL", isVi ? "Cơ sở dữ liệu lõi" : "Core database"],
                [isVi ? "Đã hoàn thành" : "Completed", isVi ? "Trạng thái Capstone" : "Capstone status"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-black/10 px-5 py-4 dark:border-white/10 md:px-8">
                  <p className="font-display text-2xl font-bold md:text-3xl">{value}</p>
                  <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">{label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. MODULAR ARCHITECTURAL SCHEMA (DJANGO MVT + DECOUPLED RAG) */}
          <section id="architecture" className="cs-diagram-section scroll-mt-24 border-b border-black/10 bg-bgLight py-24 dark:border-white/10 dark:bg-bgDark md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Sơ đồ kiến trúc Module" : "Modular Architecture Schema"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Lõi MVT nguyên khối & Trợ lý RAG phân tách độc lập" : "Operational Monolith with an Isolated Knowledge Boundary"}
                </h2>
                <p className="mt-4 text-lg font-light leading-relaxed opacity-80">
                  {isVi
                    ? "Hệ thống quản lý đặt phòng hoạt động ổn định và tin cậy thông qua ORM quan hệ, trong khi tính năng hỏi đáp thông minh RAG được cô lập hoàn toàn, không làm ảnh hưởng tới hiệu năng giao dịch."
                    : "The transactional reservation engine operates with strict ACID semantics on relational SQLite, while the semantic RAG assistant lives in a decoupled inquiry boundary."}
                </p>
              </div>

              {/* Architectural Schema Container */}
              <div className="space-y-8">
                {/* Tier 1: Django MVT Operational Monolith */}
                <div className="cs-diagram-node border border-black/10 bg-cardLight p-8 dark:border-white/10 dark:bg-cardDark md:p-10">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold opacity-50">TIER 01 /</span>
                      <h3 className="font-display text-xl font-bold md:text-2xl">
                        {isVi ? "CORE OPERATIONAL MONOLITH (DJANGO MVT)" : "CORE OPERATIONAL MONOLITH (DJANGO MVT)"}
                      </h3>
                    </div>
                    <span className="border border-black/20 bg-bgLight px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider opacity-85 dark:border-white/20 dark:bg-bgDark">
                      ACID · TRANSACTIONAL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark">
                      <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider opacity-50">01 / Routing & Guard</div>
                      <h4 className="font-display text-lg font-bold mb-2">URL & Role Dispatcher</h4>
                      <p className="text-sm font-light leading-relaxed opacity-75">
                        {isVi
                          ? "Điều phối request qua class-based views; bảo vệ bằng decorator phân quyền cho Lễ tân, Quản lý và Khách."
                          : "Routes incoming requests through class-based views with role-guard decorators for Admin, Desk Staff, and Guests."}
                      </p>
                    </div>

                    <div className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark">
                      <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider opacity-50">02 / Business Engine</div>
                      <h4 className="font-display text-lg font-bold mb-2">Reservation State Machine</h4>
                      <p className="text-sm font-light leading-relaxed opacity-75">
                        {isVi
                          ? "Xử lý kiểm tra phòng trống, tạo đơn đặt phòng, trừ tồn kho thời gian thực và tự động hoàn trả khi hủy."
                          : "Validates date intervals, allocates room inventory atomically, and handles cancellation restitution workflows."}
                      </p>
                    </div>

                    <div className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark">
                      <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider opacity-50">03 / Data Layer</div>
                      <h4 className="font-display text-lg font-bold mb-2">Optimized SQLite ORM</h4>
                      <p className="text-sm font-light leading-relaxed opacity-75">
                        {isVi
                          ? "Sử dụng select_related và prefetch_related có chủ đích để truy vấn danh sách đặt phòng với độ trễ < 2ms."
                          : "Concrete select_related and prefetch_related query tuning ensuring sub-2ms relational query execution."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector Bridge */}
                <div className="flex items-center justify-center gap-4 py-2 font-mono text-xs uppercase tracking-widest opacity-60">
                  <span className="h-px w-12 bg-black/20 dark:bg-white/20" />
                  <span>Decoupled Semantic Query Bus</span>
                  <span className="h-px w-12 bg-black/20 dark:bg-white/20" />
                </div>

                {/* Tier 2: Auxiliary Semantic RAG Boundary */}
                <div className="cs-diagram-node border border-black/10 bg-cardLight p-8 dark:border-white/10 dark:bg-cardDark md:p-10">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold opacity-50">TIER 02 /</span>
                      <h3 className="font-display text-xl font-bold md:text-2xl">
                        {isVi ? "AUXILIARY KNOWLEDGE RETRIEVAL (FAISS RAG)" : "AUXILIARY KNOWLEDGE RETRIEVAL (FAISS RAG)"}
                      </h3>
                    </div>
                    <span className="border border-black/20 bg-bgLight px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider opacity-85 dark:border-white/20 dark:bg-bgDark">
                      VECTOR · NON-BLOCKING
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark">
                      <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider opacity-50">01 / Corpus</div>
                      <h4 className="font-display text-lg font-bold mb-2">Resort Policy Corpus</h4>
                      <p className="text-sm font-light leading-relaxed opacity-75">
                        {isVi
                          ? "Quy định nhận/trả phòng, giá dịch vụ bổ sung và hướng dẫn du lịch địa phương được phân mảnh (chunking) chuẩn hóa."
                          : "Chunked and tokenized documentation covering check-in policies, room tariffs, and resort guidelines."}
                      </p>
                    </div>

                    <div className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark">
                      <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider opacity-50">02 / Indexing</div>
                      <h4 className="font-display text-lg font-bold mb-2">FAISS L2 Vector Index</h4>
                      <p className="text-sm font-light leading-relaxed opacity-75">
                        {isVi
                          ? "Chuyển đổi câu hỏi thành vector embedding và tìm kiếm độ tương đồng ngữ nghĩa trong không gian đa chiều (< 15ms)."
                          : "Embedding vector search computing cosine/L2 distance over indexed chunks in under 15ms."}
                      </p>
                    </div>

                    <div className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark">
                      <div className="mb-2 font-mono text-xs font-bold uppercase tracking-wider opacity-50">03 / Generation</div>
                      <h4 className="font-display text-lg font-bold mb-2">Augmented Context</h4>
                      <p className="text-sm font-light leading-relaxed opacity-75">
                        {isVi
                          ? "Ghép nối tài liệu truy xuất vào prompt tạo câu trả lời chính xác, tránh hiện tượng ảo giác (hallucination)."
                          : "Synthesizes retrieved policy excerpts into an isolated prompt for grounded, factual assistant replies."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. VERIFIED CAPSTONE CAPABILITIES */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Năng lực hệ thống" : "System Capabilities"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Các module nghiệp vụ đã được nghiệm thu" : "Verified Operational Modules"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-3">
                {capabilities.map((item, index) => (
                  <article key={item.title.en} className="bg-cardLight p-8 dark:bg-cardDark md:min-h-56 flex flex-col justify-between">
                    <div>
                      <div className="mb-6 font-mono text-xs font-bold opacity-45">0{index + 1} / 06</div>
                      <h3 className="font-display text-xl font-bold mb-3">
                        {isVi ? item.title.vi : item.title.en}
                      </h3>
                      <p className="text-sm font-light leading-relaxed opacity-80">
                        {isVi ? item.body.vi : item.body.en}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. VERIFIED GIT COMMIT TIMELINE */}
          <section id="evidence" className="scroll-mt-24 border-t border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Tiến độ cam kết" : "Development Milestones"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Lịch sử commit đồ án thực tế" : "Verified Capstone Timeline"}
                </h2>
              </div>

              <div className="space-y-0 border-l border-black/20 dark:border-white/20">
                {timeline.map((item) => (
                  <article
                    key={item.date}
                    className="relative border-b border-black/10 py-8 pl-8 last:border-b-0 dark:border-white/10 md:grid md:grid-cols-[12rem_1fr] md:gap-10 md:pl-10"
                  >
                    <span className="absolute -left-[5px] top-10 h-2 w-2 bg-black dark:bg-white" />
                    <div className="mb-3 md:mb-0">
                      <p className="font-display text-lg font-bold">{item.date}</p>
                      <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">GIT VERIFIED</p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-2xl font-bold">{isVi ? item.vi : item.en}</h3>
                      <p className="font-light leading-relaxed opacity-80">{isVi ? item.descVi : item.descEn}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </CaseStudyAnimations>

      <Footer />
    </>
  );
}
