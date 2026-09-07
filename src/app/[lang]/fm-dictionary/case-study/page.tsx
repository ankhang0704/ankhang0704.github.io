import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";
import { localizedPath } from "@/lib/locale-path";

const timeline = [
  {
    date: "2026-03-22",
    evidence: "Git 6cd2c76",
    titleEn: "First meaningful development",
    titleVi: "Giai đoạn phát triển đầu tiên có ý nghĩa",
    textEn: "Flashcards, Hive persistence and text-to-speech established the first learning loop.",
    textVi: "Flashcard, lưu trữ Hive và text-to-speech hình thành vòng lặp học tập đầu tiên.",
  },
  {
    date: "2026-05-19",
    evidence: "Git a6b69ed",
    titleEn: "Speech architecture changed",
    titleVi: "Kiến trúc speech được thay đổi",
    textEn: "The local Whisper plan moved to online speech APIs behind the proxy boundary.",
    textVi: "Kế hoạch Whisper local được chuyển sang các speech API online sau ranh giới proxy.",
  },
  {
    date: "2026-05-31",
    evidence: "Git tag v1.0.0",
    titleEn: "First explicit release tag",
    titleVi: "Tag release đầu tiên",
    textEn: "The repository recorded its first explicit application release tag.",
    textVi: "Repository ghi nhận tag release ứng dụng đầu tiên.",
  },
  {
    date: "2026-06-05",
    evidence: "Git tag v1.1.0",
    titleEn: "Social learning milestone",
    titleVi: "Mốc social learning",
    textEn: "Global group leaderboard and UI fixes were included in the latest app tag.",
    textVi: "Leaderboard nhóm toàn cục và các bản sửa UI được đưa vào tag ứng dụng mới nhất.",
  },
  {
    date: "2026-09-06",
    evidence: "Phase 2 baseline f59332b",
    titleEn: "Production cleanup completed",
    titleVi: "Hoàn tất production cleanup",
    textEn: "Canonicalization and cleanup were completed; Phase 3 adds documentation only.",
    textVi: "Hoàn tất canonicalization và cleanup; Phase 3 chỉ bổ sung tài liệu.",
  },
];

const engineeringAreas = [
  {
    Icon: Icons.Book,
    titleEn: "Local-first learning data",
    titleVi: "Dữ liệu học local-first",
    textEn: "Bundled dictionary and tests are imported into Hive. Lookup, saved words, quizzes, tests and much of progress handling have local paths.",
    textVi: "Từ điển và bộ test được import vào Hive. Tra cứu, từ đã lưu, quiz, test và phần lớn progress có local path.",
    evidence: "CODE VERIFIED",
  },
  {
    Icon: Icons.Refresh,
    titleEn: "Safe content replacement",
    titleVi: "Thay thế content an toàn",
    textEn: "Updates validate IDs, stage a backup, replace the Hive box and restore the previous dictionary if a step fails.",
    textVi: "Bản cập nhật validate ID, lưu backup, thay Hive box và khôi phục từ điển cũ nếu một bước thất bại.",
    evidence: "CODE + TEST VERIFIED",
  },
  {
    Icon: Icons.Network,
    titleEn: "Local and cloud boundaries",
    titleVi: "Ranh giới local và cloud",
    textEn: "Firebase Auth, Firestore progress sync and RTDB social data serve different paths; the documented boundaries are not presented as a fully authoritative social backend.",
    textVi: "Firebase Auth, Firestore progress sync và RTDB social data phục vụ các luồng khác nhau; boundary hiện tại không được trình bày như social backend hoàn toàn authoritative.",
    evidence: "CODE VERIFIED / PARTIAL",
  },
  {
    Icon: Icons.Microphone,
    titleEn: "Pronunciation feedback",
    titleVi: "Phản hồi phát âm",
    textEn: "Temporary WAV audio goes through the authenticated proxy, while the returned transcript is scored locally by a rule-based scorer.",
    textVi: "Audio WAV tạm thời đi qua authenticated proxy, sau đó transcript được chấm local bằng rule-based scorer.",
    evidence: "CODE + TEST VERIFIED",
  },
];

const safeClaims = [
  "A Flutter app for learning Facility Management terminology.",
  "The current repository snapshot contains 1,847 terms and 50 test items.",
  "The app combines external speech-to-text fallback with a local rule-based pronunciation scorer.",
];

const avoidClaims = [
  "Public App Store, Google Play or TestFlight release without store evidence.",
  "Full offline-first support, encrypted local storage or absolute privacy.",
  "Authoritative private groups, production scale or a generic AI assistant feature.",
];

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function FMDictionaryCaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: routeLang } = await params;
  const lang = routeLang === "vi" ? "vi" : "en";
  const isVi = lang === "vi";

  return (
    <>
      <Header variant="fm" />

      <main className="w-full min-w-0 overflow-x-hidden pt-32">
        <section className="container mx-auto w-full min-w-0 px-6 pb-24 md:px-8 md:pb-32">
          <div className="max-w-5xl">
            <p className="mb-6 inline-block border-b border-black pb-2 text-xs font-bold uppercase tracking-[0.3em] dark:border-white">
              {isVi ? "Engineering case study · Evidence pack" : "Engineering case study · Evidence pack"}
            </p>
            <h1 className="mb-8 break-words font-display text-5xl font-bold leading-[1.05] md:text-8xl">
              FM <span className="font-serif font-normal italic">Dictionary.</span>
            </h1>
            <p className="max-w-3xl text-xl font-light leading-relaxed opacity-80 md:text-2xl">
              {isVi
                ? "Một case study dựa trên bằng chứng về ứng dụng Flutter giúp học thuật ngữ Facilities Management — từ learning core local-first đến các ranh giới cloud và speech."
                : "An evidence-backed case study of a Flutter app for learning Facility Management terminology — from its local-first learning core to its cloud and speech boundaries."}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
            {[
              ["1,847", isVi ? "Thuật ngữ hiện tại" : "Current terms"],
              ["50", isVi ? "Bộ test bundled" : "Bundled test items"],
              ["27", isVi ? "Flutter tests đã ghi nhận" : "Recorded Flutter tests"],
              ["1.1.0+9", isVi ? "App version" : "App version"],
            ].map(([value, label]) => (
              <div key={value} className="bg-bgLight p-6 dark:bg-bgDark md:p-8">
                <div className="mb-2 break-words font-display text-3xl font-bold md:text-4xl">{value}</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="evidence" className="scroll-mt-24 border-y border-black/5 bg-cardLight py-24 dark:border-white/5 dark:bg-cardDark md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Timeline đã kiểm chứng" : "Verified timeline"}</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Không biến Git history thành marketing copy" : "Git history, without the marketing leap"}</h2>
            </div>

            <div className="space-y-0 border-l border-black/20 dark:border-white/20">
              {timeline.map((item) => (
                <article key={item.date} className="relative border-b border-black/10 py-8 pl-8 last:border-b-0 dark:border-white/10 md:grid md:grid-cols-[12rem_1fr] md:gap-10 md:pl-10">
                  <span className="absolute -left-[5px] top-10 h-2 w-2 bg-black dark:bg-white" />
                  <div className="mb-3 md:mb-0">
                    <p className="font-display text-lg font-bold">{item.date}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest opacity-50">{item.evidence}</p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-2xl font-bold">{isVi ? item.titleVi : item.titleEn}</h3>
                    <p className="font-light leading-relaxed opacity-70">{isVi ? item.textVi : item.textEn}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Vai trò thực tế" : "Actual role"}</p>
              <h2 className="mb-8 font-display text-4xl font-bold md:text-5xl">{isVi ? "Product owner, maintainer và AI-assisted engineering" : "Product owner, maintainer and AI-assisted engineering"}</h2>
              <p className="text-lg font-light leading-relaxed opacity-70">
                {isVi
                  ? "Vai trò bao gồm định nghĩa vấn đề, yêu cầu, quyết định UX/product, điều phối AI agents, manual testing, acceptance và quyết định release. Repository không được dùng để suy diễn rằng maintainer tự tay viết hoặc thiết kế mọi dòng code."
                  : "The role covers problem definition, requirements, UX/product decisions, directing AI agents, manual testing, acceptance and release decisions. The repository is not used to infer that the maintainer personally typed or independently designed every line."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
              {[
                [Icons.Code, isVi ? "Architecture exploration" : "Architecture exploration"],
                [Icons.Refresh, isVi ? "Refactoring" : "Refactoring"],
                [Icons.Check, isVi ? "Automated tests" : "Automated tests"],
                [Icons.Alert, isVi ? "Debugging & audits" : "Debugging & audits"],
              ].map(([Icon, label]) => {
                const RoleIcon = Icon as typeof Icons.Code;
                return (
                  <div key={String(label)} className="bg-bgLight p-6 dark:bg-bgDark md:p-8">
                    <RoleIcon size={28} strokeWidth={1.5} className="mb-8" />
                    <p className="font-display text-lg font-bold">{String(label)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="architecture" className="scroll-mt-24 border-y border-black/5 bg-cardLight py-24 dark:border-white/5 dark:bg-cardDark md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Kiến trúc" : "Architecture"}</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Ranh giới rõ ràng thay cho claim tuyệt đối" : "Clear boundaries over absolute claims"}</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                [Icons.Book, "Local", isVi ? "Hive, SharedPreferences và bundled JSON phục vụ các luồng học cốt lõi." : "Hive, SharedPreferences and bundled JSON serve core learning paths."],
                [Icons.Server, "Firebase", isVi ? "Auth, Firestore progress sync và RTDB social data có các boundary riêng." : "Auth, Firestore progress sync and RTDB social data have separate boundaries."],
                [Icons.Network, "Cloudflare", isVi ? "Authenticated proxy, rate limit và provider fallback cho speech/content requests." : "Authenticated proxy, rate limiting and provider fallback for speech/content requests."],
              ].map(([Icon, label, text]) => {
                const BoundaryIcon = Icon as typeof Icons.Book;
                return (
                  <div key={String(label)} className="border border-black/10 p-8 dark:border-white/10 md:p-10">
                    <BoundaryIcon size={32} strokeWidth={1.5} className="mb-8" />
                    <h3 className="mb-3 font-display text-2xl font-bold">{String(label)}</h3>
                    <p className="font-light leading-relaxed opacity-70">{String(text)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Engineering areas" : "Engineering areas"}</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Những phần đáng nói trong codebase" : "The parts of the codebase worth showing"}</h2>
            </div>

            <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
              {engineeringAreas.map(({ Icon, titleEn, titleVi, textEn, textVi, evidence }) => (
                <article key={titleEn} className="bg-bgLight p-8 dark:bg-bgDark md:p-10">
                  <Icon size={32} strokeWidth={1.5} className="mb-8" />
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold">{isVi ? titleVi : titleEn}</h3>
                    <span className="border border-black/20 px-2 py-1 text-[9px] font-bold uppercase tracking-widest opacity-60 dark:border-white/20">{evidence}</span>
                  </div>
                  <p className="font-light leading-relaxed opacity-70">{isVi ? textVi : textEn}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-cardLight py-24 dark:border-white/5 dark:bg-cardDark md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Claim boundary" : "Claim boundary"}</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Nói chính xác cũng là một feature" : "Precision is part of the feature"}</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="border border-black/10 bg-bgLight p-8 dark:border-white/10 dark:bg-bgDark md:p-10">
                <div className="mb-8 flex items-center gap-3"><Icons.Check size={24} /><h3 className="font-display text-2xl font-bold">{isVi ? "Có thể nói" : "Safe to say"}</h3></div>
                <ul className="space-y-4">
                  {safeClaims.map((claim) => <li key={claim} className="border-t border-black/10 pt-4 font-light leading-relaxed opacity-80 dark:border-white/10">{isVi ? claim.replace("A Flutter app for learning Facility Management terminology.", "Ứng dụng Flutter giúp học thuật ngữ Facility Management.").replace("The current repository snapshot contains 1,847 terms and 50 test items.", "Snapshot hiện tại chứa 1.847 thuật ngữ và 50 item test.").replace("The app combines external speech-to-text fallback with a local rule-based pronunciation scorer.", "Ứng dụng kết hợp speech-to-text fallback bên ngoài với rule-based pronunciation scorer local.") : claim}</li>)}
                </ul>
              </div>
              <div className="border border-black/10 bg-bgLight/50 p-8 opacity-80 dark:border-white/10 dark:bg-bgDark/50 md:p-10">
                <div className="mb-8 flex items-center gap-3"><Icons.Alert size={24} /><h3 className="font-display text-2xl font-bold">{isVi ? "Không nên nói" : "Do not claim"}</h3></div>
                <ul className="space-y-4">
                  {avoidClaims.map((claim) => <li key={claim} className="border-t border-black/10 pt-4 font-light leading-relaxed opacity-80 dark:border-white/10">{isVi ? claim.replace("Public App Store, Google Play or TestFlight release without store evidence.", "Đã public trên App Store, Google Play hoặc TestFlight khi chưa có store evidence.").replace("Full offline-first support, encrypted local storage or absolute privacy.", "Full offline-first, local storage mã hóa hoặc privacy tuyệt đối.").replace("Authoritative private groups, production scale or a generic AI assistant feature.", "Private groups authoritative, production scale hoặc generic AI assistant đang active.") : claim}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24 md:px-8 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 border border-black p-8 dark:border-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] opacity-50">FM Dictionary</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">{isVi ? "Quay lại product landing" : "Back to the product landing"}</h2>
            </div>
            <Link href={localizedPath(lang, "/fm-dictionary/")} className="inline-flex w-full items-center justify-center gap-3 border border-black px-6 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black md:w-auto">
              {isVi ? "Xem FM Dictionary" : "View FM Dictionary"}<Icons.ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="fm" />
    </>
  );
}
