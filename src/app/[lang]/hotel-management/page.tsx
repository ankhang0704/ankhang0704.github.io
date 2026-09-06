import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";

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
          <section className="container mx-auto px-6 md:px-8 mb-20">
            <div className="cs-breadcrumb flex items-center space-x-4 mb-6">
              <Link href={`/${lang}/`} className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                ← {isVi ? "Về Trang Chủ" : "Back to Home"}
              </Link>
              <span className="h-[1px] w-8 bg-black dark:bg-white opacity-30" />
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                {isVi ? "Đồ án học thuật" : "Academic Capstone"}
              </span>
            </div>

            <h1 className="cs-title font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
              Hotel Management <br />
              <span className="font-serif italic text-6xl md:text-8xl tracking-normal">Academic Capstone</span>
            </h1>

            <p className="cs-desc text-xl font-light max-w-3xl opacity-80 leading-relaxed text-justify">
              {isVi
                ? "Đồ án hoàn thành xây dựng một Django monolith với template server-rendered và SQLite cho quy trình đặt phòng, tồn kho, hủy phòng và quản trị; đồng thời thử nghiệm trợ lý kiến thức theo hướng RAG."
                : "A completed academic capstone: a Django monolith with server-rendered templates and SQLite for booking, inventory, cancellation, and admin workflows, alongside a retrieval-augmented knowledge assistant."}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Django", "Python", "SQLite", "Server-rendered", "RAG", "FAISS"].map((tag) => (
                <span key={tag} className="cs-tag text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-1.5 opacity-60">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="cs-diagram-section py-16 bg-cardLight dark:bg-cardDark border-y border-black/10 dark:border-white/10 mb-20">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="font-display text-3xl font-bold mb-10 text-center uppercase tracking-wider">
                {isVi ? "Sơ đồ kiến trúc hệ thống" : "System Architecture"}
              </h2>

              <div className="max-w-4xl mx-auto border border-black/10 dark:border-white/10 p-8 md:p-12 bg-bgLight dark:bg-bgDark">
                <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto opacity-90 space-y-6">
                  <div className="cs-diagram-node text-center p-4 border border-black/20 dark:border-white/20">
                    <span className="font-bold block">[ Server-rendered Django application ]</span>
                    <span className="opacity-70 text-xs">Templates · Views · Domain workflows · Admin</span>
                  </div>
                  <div className="cs-diagram-node text-center font-bold">↓ Booking and inventory workflows</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                      <span className="font-bold block">[ SQLite database ]</span>
                      <span className="opacity-70 text-xs">Rooms · Inventory · Bookings · Cancellations · Users</span>
                    </div>
                    <div className="cs-diagram-node p-4 border border-black/20 dark:border-white/20 text-center">
                      <span className="font-bold block">[ RAG knowledge path ]</span>
                      <span className="opacity-70 text-xs">HuggingFace embeddings → FAISS retrieval</span>
                    </div>
                  </div>
                  <div className="cs-diagram-node text-center p-4 border border-black/20 dark:border-white/20">
                    <span className="font-bold block">[ Model provider paths ]</span>
                    <span className="opacity-70 text-xs">Groq cloud path · Optional local LlamaCpp / Phi-4 path</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-6 md:px-8 max-w-5xl space-y-16 mb-20">
            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">01 / Problem &amp; Scope</h3>
              <p className="font-light text-lg leading-relaxed text-justify opacity-80">
                {isVi
                  ? "Phạm vi tập trung vào các luồng quản lý khách sạn cốt lõi: đặt phòng, kiểm tra tồn kho phòng, hủy phòng và thao tác quản trị trong một ứng dụng monolith."
                  : "The scope focused on core hotel workflows: room booking, inventory availability, cancellation, and administration inside one monolithic application."}
              </p>
            </div>

            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-black/10 dark:border-white/10 pt-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">02 / Key Decisions</h3>
              <div className="font-light text-lg leading-relaxed opacity-80 space-y-4">
                <p>{isVi ? "• Dùng transaction.atomic và select_for_update cho các thao tác đặt phòng cần giữ tính nhất quán." : "• Used transaction.atomic and select_for_update around booking operations that require consistency."}</p>
                <p>{isVi ? "• Chọn các truy vấn liên quan phù hợp thay vì đưa ra các tuyên bố hiệu năng tổng quát không có trong tài liệu canonical." : "• Kept query choices focused on the documented domain workflows rather than making unsupported performance claims."}</p>
                <p>{isVi ? "• Tách đường đi Groq và đường đi local LlamaCpp/Phi-4 trong phần RAG để ranh giới provider rõ ràng." : "• Kept the Groq path separate from the optional local LlamaCpp/Phi-4 path so provider boundaries remain clear."}</p>
              </div>
            </div>

            <div className="cs-breakdown-row grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-b border-black/10 dark:border-white/10 py-10">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider opacity-60">03 / Tests &amp; Source</h3>
              <div>
                <p className="font-light text-lg leading-relaxed opacity-80 mb-6">
                  {isVi
                    ? "Repository có sáu focused tests cho các phần quan trọng của hệ thống. Mã nguồn dự án được cung cấp trên GitHub để xem chi tiết implementation."
                    : "The repository includes six focused tests around important system behavior. The project source is available on GitHub for implementation details."}
                </p>
                <a href="https://github.com/ankhang0704/QuanLyKhachSan_AI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-black dark:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
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
