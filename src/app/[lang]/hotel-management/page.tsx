import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";
import { localizedPath } from "@/lib/locale-path";

const capabilities = [
  {
    title: { en: "Availability", vi: "Tình trạng phòng" },
    body: {
      en: "Date-based inventory connects room types, concrete rooms, and stay ranges.",
      vi: "Tồn kho theo ngày kết nối loại phòng, phòng cụ thể và khoảng lưu trú.",
    },
  },
  {
    title: { en: "Reservations", vi: "Đặt phòng" },
    body: {
      en: "A booking lifecycle covers creation, overlap rejection, and cancellation.",
      vi: "Vòng đời đặt phòng bao gồm tạo đặt chỗ, từ chối trùng lịch và hủy phòng.",
    },
  },
  {
    title: { en: "Inventory", vi: "Tồn kho" },
    body: {
      en: "Booking signals decrement inventory and cancellation restores affected rows.",
      vi: "Signal đặt phòng giảm tồn kho và thao tác hủy khôi phục các dòng liên quan.",
    },
  },
  {
    title: { en: "Account flows", vi: "Luồng tài khoản" },
    body: {
      en: "Authenticated users can access profile and booking history workflows.",
      vi: "Người dùng đã xác thực có thể sử dụng luồng hồ sơ và lịch sử đặt phòng.",
    },
  },
  {
    title: { en: "Staff operations", vi: "Vận hành nhân viên" },
    body: {
      en: "Dashboard summaries and check-in or check-out actions support staff access.",
      vi: "Tổng hợp dashboard và thao tác check-in hoặc check-out hỗ trợ quyền nhân viên.",
    },
  },
  {
    title: { en: "Hotel assistant", vi: "Trợ lý khách sạn" },
    body: {
      en: "A retrieval-augmented path prepares hotel knowledge for an LLM response.",
      vi: "Một luồng RAG chuẩn bị kiến thức khách sạn trước khi tạo phản hồi từ LLM.",
    },
  },
];

const timeline = [
  {
    date: "2025.10.28",
    en: "First repository commit",
    vi: "Commit đầu tiên của repository",
  },
  {
    date: "2025.11.19",
    en: "Final version commit",
    vi: "Commit phiên bản hoàn thiện",
  },
  {
    date: "2025.12.04",
    en: "Groq integration added",
    vi: "Thêm tích hợp Groq",
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
        <main className="relative overflow-x-hidden pb-24 pt-28 md:pt-32">
          <section className="container mx-auto grid min-h-[calc(100dvh-7rem)] items-center gap-12 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="cs-breadcrumb mb-8 flex flex-wrap items-center gap-4">
                <Link
                  href={localizedPath(lang, "/")}
                  className="text-xs font-bold uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100"
                >
                  ← {isVi ? "Về trang chủ" : "Back to home"}
                </Link>
                <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
                <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                  {isVi ? "Đồ án học thuật" : "Academic capstone"}
                </span>
              </div>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                The Sailing Bay · 2025
              </p>
              <h1 className="cs-title max-w-4xl font-display text-5xl font-bold leading-[0.95] md:text-8xl">
                Hotel
                <br />
                <span className="font-serif text-6xl font-normal italic leading-[1.1] tracking-normal md:text-9xl">
                  Management.
                </span>
              </h1>
              <p className="cs-desc mt-8 max-w-2xl text-xl font-light leading-relaxed opacity-80">
                {isVi
                  ? "Đồ án capstone Django đã hoàn thành, xây dựng một monolith server-rendered với SQLite cho đặt phòng, tồn kho, hủy phòng và quản trị, kèm một trợ lý kiến thức theo hướng RAG."
                  : "A completed Django academic capstone: a server-rendered monolith with SQLite for booking, inventory, cancellation, and administration, alongside a retrieval-augmented knowledge assistant."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Django", "Python", "SQLite", "Server-rendered", "RAG", "FAISS"].map((tag) => (
                  <span
                    key={tag}
                    className="cs-tag border border-black/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest opacity-70 dark:border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/ankhang0704/QuanLyKhachSan_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 border border-black px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                {isVi ? "Xem mã nguồn" : "View source"} <span aria-hidden="true">↗</span>
              </a>
            </div>

            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-black/15 dark:border-white/15">
                <Image
                  src="/hotel-management-editorial-cover.webp"
                  alt={isVi ? "Ảnh bìa biên tập cho đồ án quản lý khách sạn" : "Editorial cover for the hotel management capstone"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover grayscale"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed opacity-50">
                {isVi
                  ? "Ảnh bìa biên tập của dự án, không phải ảnh chụp giao diện ứng dụng."
                  : "Editorial project cover, not a screenshot of the application UI."}
              </figcaption>
            </figure>
          </section>

          <section className="border-y border-black/10 bg-cardLight py-12 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto grid grid-cols-2 gap-px border-l border-black/10 dark:border-white/10 md:grid-cols-4">
              {[
                ["2025.10 → 12", isVi ? "Thời gian phát triển" : "Development window"],
                ["6", isVi ? "Focused tests" : "Focused tests"],
                ["SQLite", isVi ? "Cơ sở dữ liệu" : "Database"],
                [isVi ? "Đã hoàn thành" : "Completed", isVi ? "Trạng thái capstone" : "Capstone status"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-black/10 px-5 py-5 dark:border-white/10 md:px-8">
                  <p className="font-display text-2xl font-bold md:text-3xl">{value}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-50">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-6 py-24 md:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                {isVi ? "Phạm vi đã xác minh" : "Verified scope"}
              </p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">
                {isVi ? "Một hệ thống đặt phòng có ranh giới rõ ràng." : "A booking system with clear boundaries."}
              </h2>
            </div>

            <div className="grid border-t border-black/15 dark:border-white/15 md:grid-cols-3">
              {capabilities.map((item, index) => (
                <article key={item.title.en} className="border-b border-r border-black/15 p-6 dark:border-white/15 md:min-h-56">
                  <p className="mb-10 font-mono text-xs opacity-40">0{index + 1}</p>
                  <h3 className="font-display text-2xl font-bold">{isVi ? item.title.vi : item.title.en}</h3>
                  <p className="mt-3 text-base leading-relaxed opacity-70">{isVi ? item.body.vi : item.body.en}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="cs-diagram-section border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                  {isVi ? "Kiến trúc" : "Architecture"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "MVT ở lõi, RAG ở một ranh giới riêng." : "MVT at the core, RAG at a separate boundary."}
                </h2>
              </div>

              <div className="mx-auto max-w-5xl border border-black/15 bg-bgLight p-6 dark:border-white/15 dark:bg-bgDark md:p-10">
                <div className="font-mono text-xs leading-relaxed md:text-sm">
                  <div className="cs-diagram-node border border-black/20 p-5 text-center dark:border-white/20">
                    <span className="block font-bold">Django MVT monolith</span>
                    <span className="mt-2 block opacity-60">URL configuration → views and ORM → server-rendered templates</span>
                  </div>
                  <div className="cs-diagram-node py-5 text-center font-bold opacity-70">↓ Domain workflows</div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      ["Booking domain", "Rooms · inventory · reservations · cancellations"],
                      ["SQLite", "Users · rooms · dates · booking records"],
                      ["Selected ORM loading", "Concrete select_related usage in targeted queries"],
                    ].map(([title, body]) => (
                      <div key={title} className="cs-diagram-node border border-black/20 p-5 text-center dark:border-white/20">
                        <span className="block font-bold">{title}</span>
                        <span className="mt-2 block opacity-60">{body}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cs-diagram-node py-5 text-center font-bold opacity-70">↓ Knowledge retrieval path</div>
                  <div className="cs-diagram-node border border-black/20 p-5 text-center dark:border-white/20">
                    <span className="block font-bold">Knowledge base → HuggingFace embeddings → FAISS → retrieved context → LLM response</span>
                    <span className="mt-2 block opacity-60">Groq cloud path or optional local LlamaCpp / Phi-4 path</span>
                  </div>
                </div>
              </div>

              <p className="mx-auto mt-5 max-w-5xl text-sm leading-relaxed opacity-60">
                {isVi
                  ? "Hai đường provider là các lựa chọn riêng trong code. Không có automatic fallback, async inference hoặc bằng chứng về runtime AI production."
                  : "The two provider paths are separate implementation options. There is no automatic fallback, asynchronous inference, or verified production AI runtime."}
              </p>
            </div>
          </section>

          <section className="container mx-auto px-6 py-24 md:px-8">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                  {isVi ? "Quyết định kỹ thuật" : "Engineering decisions"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Tính nhất quán trước các con số đẹp." : "Consistency before impressive numbers."}
                </h2>
              </div>
              <div className="space-y-0 border-t border-black/15 dark:border-white/15 lg:col-span-7">
                {[
                  {
                    en: "transaction.atomic and select_for_update wrap the documented booking conflict check.",
                    vi: "transaction.atomic và select_for_update bao quanh phần kiểm tra xung đột đặt phòng được ghi nhận.",
                  },
                  {
                    en: "A booking signal decrements inventory for the stay range, while cancellation restores affected inventory rows.",
                    vi: "Signal đặt phòng giảm tồn kho theo khoảng lưu trú, còn thao tác hủy khôi phục các dòng tồn kho liên quan.",
                  },
                  {
                    en: "Selected relationship loading is presented as a concrete ORM technique, not a claim of global query optimization.",
                    vi: "Việc tải quan hệ ở một số truy vấn được trình bày như kỹ thuật ORM cụ thể, không phải tuyên bố tối ưu query toàn hệ thống.",
                  },
                ].map((item, index) => (
                  <div key={item.en} className="cs-breakdown-row grid gap-4 border-b border-black/15 py-7 dark:border-white/15 md:grid-cols-[4rem_1fr]">
                    <span className="font-mono text-xs opacity-40">0{index + 1}</span>
                    <p className="text-lg leading-relaxed opacity-80">{isVi ? item.vi : item.en}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto grid gap-16 px-6 md:px-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                  {isVi ? "Dấu mốc repository" : "Repository timeline"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Được phát triển qua ba mốc rõ ràng." : "Built across three documented milestones."}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="border-t border-black/15 dark:border-white/15">
                  {timeline.map((item) => (
                    <div key={item.date} className="cs-breakdown-row grid gap-4 border-b border-black/15 py-6 dark:border-white/15 md:grid-cols-[9rem_1fr]">
                      <span className="font-mono text-sm opacity-60">{item.date}</span>
                      <span className="text-lg opacity-80">{isVi ? item.vi : item.en}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 py-24 md:px-8">
            <div className="grid gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                  {isVi ? "Bằng chứng kiểm thử" : "Test evidence"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Sáu test tập trung vào hành vi cốt lõi." : "Six tests around core behavior."}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-2xl text-xl font-light leading-relaxed opacity-80">
                  {isVi
                    ? "Baseline hiện có bao phủ tạo booking và giảm tồn kho, từ chối overlap, khôi phục khi hủy, ownership của user, input chatbot bị thiếu và lỗi chatbot đã được sanitize."
                    : "The documented baseline covers booking creation and inventory decrement, overlap rejection, cancellation restoration, user ownership, missing chatbot input, and sanitized chatbot failure behavior."}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["python manage.py check", "python manage.py test"].map((command) => (
                    <code key={command} className="border border-black/20 px-4 py-3 text-xs dark:border-white/20">
                      {command}
                    </code>
                  ))}
                </div>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed opacity-60">
                  {isVi
                    ? "Các test mock boundary của chatbot và không gọi provider AI bên ngoài. Đây là baseline có ý nghĩa, không phải comprehensive coverage."
                    : "The tests mock the chatbot boundary and do not call an external AI provider. This is a meaningful baseline, not comprehensive coverage."}
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                  {isVi ? "Giới hạn bằng chứng hình ảnh" : "Visual evidence boundary"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Không dựng bằng chứng từ những gì chưa có." : "No proof is manufactured from what is missing."}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-70">
                  {isVi
                    ? "Repository chưa lưu screenshot của booking/search, room detail, admin dashboard hoặc chatbot. Các ảnh phòng và dịch vụ chỉ là content imagery, không phải ảnh chụp UI."
                    : "The repository does not track screenshots of booking/search, room detail, admin dashboard, or chatbot conversations. Room and service imagery is content material, not UI evidence."}
                </p>
              </div>
              <div className="grid border-t border-black/15 md:grid-cols-3 dark:border-white/15">
                {[
                  [isVi ? "Cần chụp lại" : "Need recapture", isVi ? "Booking/search, room detail, admin, chatbot" : "Booking/search, room detail, admin, chatbot"],
                  [isVi ? "Sẵn sàng hỗ trợ" : "Ready as support", isVi ? "Room and service gallery content" : "Room and service gallery content"],
                  [isVi ? "Không dùng" : "Do not use", isVi ? "ERD stale và media đã loại bỏ" : "Stale ERD and removed media"],
                ].map(([status, detail]) => (
                  <div key={status} className="border-b border-r border-black/15 p-6 dark:border-white/15">
                    <p className="font-display text-2xl font-bold">{status}</p>
                    <p className="mt-3 text-sm leading-relaxed opacity-60">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 py-24 md:px-8">
            <div className="grid gap-12 border-t border-black/15 pt-10 dark:border-white/15 md:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">
                  {isVi ? "Quyền sở hữu" : "Ownership"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  Student Project Owner / Maintainer
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-70">
                  {isVi
                    ? "Chủ dự án chịu trách nhiệm về yêu cầu, hướng capstone, quyết định tính năng, kiểm thử và bàn giao học thuật. AI hỗ trợ implementation, refactoring, đề xuất kiến trúc, debugging và testing assistance."
                    : "The student project owner directed requirements, capstone scope, feature decisions, testing, and academic delivery. AI assistance supported implementation, refactoring, architecture proposals, debugging, and testing assistance."}
                </p>
              </div>
              <div className="flex items-end md:justify-end">
                <a
                  href="https://github.com/ankhang0704/QuanLyKhachSan_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex border border-black px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  {isVi ? "Mở repository GitHub" : "Open GitHub repository"} <span className="ml-3" aria-hidden="true">↗</span>
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
