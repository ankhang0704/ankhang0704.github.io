import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";
import { Icons } from "@/components/Icons";
import { localizedPath } from "@/lib/locale-path";

const timeline = [
  {
    date: "2026-03-22",
    evidence: "Git 6cd2c76",
    titleEn: "First meaningful development",
    titleVi: "Giai đoạn phát triển cốt lõi ban đầu",
    textEn: "Flashcards, Hive persistence and text-to-speech established the first zero-dependency offline learning loop.",
    textVi: "Flashcard, lưu trữ Hive và text-to-speech hình thành vòng lặp học tập offline độc lập đầu tiên.",
  },
  {
    date: "2026-05-19",
    evidence: "Git a6b69ed",
    titleEn: "Speech architecture boundary",
    titleVi: "Phân tách ranh giới dịch vụ Speech",
    textEn: "Local Whisper plan transitioned to authenticated Cloudflare proxy boundaries for lower device memory footprint.",
    textVi: "Chuyển đổi phương án Whisper local sang proxy Cloudflare có xác thực để tối ưu bộ nhớ trên thiết bị di động.",
  },
  {
    date: "2026-05-31",
    evidence: "Git tag v1.0.0",
    titleEn: "Production release milestone",
    titleVi: "Cột mốc phát hành ứng dụng v1.0.0",
    textEn: "The repository recorded its first explicit application release tag with bundled 1,847 facilities management terms.",
    textVi: "Repository ghi nhận tag release chính thức đầu tiên với bộ từ điển 1.847 thuật ngữ quản lý cơ sở vật chất.",
  },
  {
    date: "2026-06-05",
    evidence: "Git tag v1.1.0",
    titleEn: "Social learning & telemetry update",
    titleVi: "Cập nhật đo lường & Social Learning",
    textEn: "Global group leaderboard, progress sync, and accessibility UI refinements were validated and published.",
    textVi: "Bảng xếp hạng nhóm toàn cục, đồng bộ tiến trình học và các tối ưu trợ năng (a11y) được xác thực và release.",
  },
  {
    date: "2026-09-06",
    evidence: "Phase 2 baseline f59332b",
    titleEn: "Architecture canonicalization",
    titleVi: "Chuẩn hóa kiến trúc & tài liệu",
    textEn: "All storage boundaries, speech fallback mechanisms, and test invariants were audited and documented.",
    textVi: "Mọi ranh giới lưu trữ, cơ chế fallback phát âm và bộ kiểm thử tự động được kiểm toán và hoàn tất tư liệu hóa.",
  },
];

const architectureTiers = [
  {
    tierNumber: "01",
    tierNameEn: "CLIENT RUNTIME (FLUTTER + DART)",
    tierNameVi: "CLIENT RUNTIME (FLUTTER + DART)",
    tagEn: "100% OFFLINE CAPABLE",
    tagVi: "HOẠT ĐỘNG 100% OFFLINE",
    leadEn: "Zero-latency offline search, card reviews, and phonetic evaluation run entirely on device.",
    leadVi: "Tra cứu không độ trễ, ôn tập flashcard và chấm điểm phát âm chạy trực tiếp 100% trên thiết bị.",
    details: [
      {
        titleEn: "Hive Binary Storage",
        titleVi: "Kho nhị phân Hive",
        descEn: "1,847 FM terms and 50 benchmark test items pre-indexed into local binary boxes (< 5ms response).",
        descVi: "1.847 thuật ngữ và 50 bài test được biên soạn sẵn vào binary box của Hive (truy xuất < 5ms).",
      },
      {
        titleEn: "Spaced Repetition Engine",
        titleVi: "Thuật toán lặp lại ngắt quãng",
        descEn: "State machine tracks Leitner review intervals and test history without requiring network roundtrips.",
        descVi: "Máy trạng thái quản lý chu kỳ ôn tập Leitner và lịch sử làm bài độc lập, không cần mạng.",
      },
      {
        titleEn: "Rule-Based Phonetic Scorer",
        titleVi: "Bộ chấm điểm phát âm Rule-Based",
        descEn: "Evaluates acoustic transcripts against FM phonetic patterns locally to deliver immediate learner feedback.",
        descVi: "Đối soát phiên âm với mẫu phát âm chuẩn FM ngay trên thiết bị để phản hồi kết quả tức thì.",
      },
    ],
  },
  {
    tierNumber: "02",
    tierNameEn: "EDGE GATEWAY (CLOUDFLARE WORKERS)",
    tierNameVi: "EDGE GATEWAY (CLOUDFLARE WORKERS)",
    tagEn: "AUTHENTICATED PROXY",
    tagVi: "PROXY CÓ XÁC THỰC",
    leadEn: "Shields upstream credentials and caches dictionary pronunciation audio at edge nodes worldwide.",
    leadVi: "Bảo vệ khóa bí mật và lưu cache phát âm audio chuẩn tại các điểm biên CDN toàn cầu.",
    details: [
      {
        titleEn: "Edge Audio Cache",
        titleVi: "Edge Audio Caching",
        descEn: "Term pronunciation audio clips are cached at Cloudflare edge, reducing latency and upstream egress costs.",
        descVi: "Các file âm thanh phát âm mẫu được cache tại edge, giảm độ trễ và tiết kiệm băng thông gốc.",
      },
      {
        titleEn: "API Key Shield & Rate Limiting",
        titleVi: "Cô lập khóa bí mật & giới hạn tần suất",
        descEn: "Client applications never hold external speech API keys; all traffic is authenticated via worker tokens.",
        descVi: "Ứng dụng mobile không bao giờ chứa API key; mọi yêu cầu dịch vụ ngoài đều xác thực qua Worker.",
      },
      {
        titleEn: "Provider Fallback Routing",
        titleVi: "Định tuyến dự phòng thông minh",
        descEn: "Gracefully switches speech providers if primary upstream encounters degradation or rate limits.",
        descVi: "Tự động chuyển đổi provider giọng nói nếu kênh chính bị suy giảm tốc độ hoặc chạm ngưỡng.",
      },
    ],
  },
  {
    tierNumber: "03",
    tierNameEn: "PERSISTENCE BOUNDARY (FIREBASE SERVICES)",
    tierNameVi: "RANH GIỚI ĐỒNG BỘ (FIREBASE SERVICES)",
    tagEn: "ASYNC & NON-BLOCKING",
    tagVi: "BẤT ĐỒNG BỘ & KHÔNG GÂY NGHẼN",
    leadEn: "Manages user authentication and synchronizes bookmarks without ever blocking the offline experience.",
    leadVi: "Quản lý phiên người dùng và sao lưu từ đã lưu mà không bao giờ làm gián đoạn trải nghiệm ngoại tuyến.",
    details: [
      {
        titleEn: "Anonymous & Email Auth",
        titleVi: "Xác thực ẩn danh & Email",
        descEn: "Users start immediately without registration; sessions can be permanently linked at any time.",
        descVi: "Người học sử dụng app ngay lập tức không cần đăng ký; có thể liên kết tài khoản bất kỳ lúc nào.",
      },
      {
        titleEn: "Firestore Progress Sync",
        titleVi: "Đồng bộ tiến độ Firestore",
        descEn: "Bookmarks and mastery metrics sync lazily when a network connection is verified.",
        descVi: "Danh sách từ đã lưu và điểm số thành thạo được đồng bộ ngầm khi phát hiện có kết nối mạng.",
      },
      {
        titleEn: "Realtime Leaderboard",
        titleVi: "Bảng xếp hạng thời gian thực",
        descEn: "Lightweight RTDB counters compute cohort study streaks and weekly motivation statistics.",
        descVi: "Bộ đếm RTDB siêu nhẹ tính toán chuỗi ngày học tập và thống kê nhóm bạn cùng tiến.",
      },
    ],
  },
];

const engineeringAreas = [
  {
    Icon: Icons.Book,
    titleEn: "Local-First Learning Core",
    titleVi: "Lõi học tập ưu tiên Offline",
    textEn: "Complete bilingual dictionary and 50 benchmark test items are stored in binary Hive boxes. Search, quizzes, and streak calculations execute with zero network overhead.",
    textVi: "Toàn bộ từ điển song ngữ và 50 bài kiểm tra chuẩn được lưu trong Hive binary box. Tìm kiếm, làm quiz và tính streak diễn ra ngay lập tức, không tốn băng thông.",
    evidence: "HIVE · CODE VERIFIED",
  },
  {
    Icon: Icons.Refresh,
    titleEn: "Safe Dictionary Update Pipeline",
    titleVi: "Quy trình cập nhật dữ liệu an toàn",
    textEn: "Remote dictionary updates validate schema version, stage a temporary rollback box, and atomically apply changes with instant fallback if verification fails.",
    textVi: "Cập nhật từ xa tự động kiểm tra phiên bản schema, tạo hộp lưu tạm dự phòng và áp dụng nguyên khối (atomic), khôi phục ngay nếu phát hiện lỗi toàn vẹn.",
    evidence: "ATOMIC · TEST VERIFIED",
  },
  {
    Icon: Icons.Network,
    titleEn: "Strict Architectural Boundaries",
    titleVi: "Ranh giới kiến trúc độc lập",
    textEn: "Local Hive operations, Cloudflare proxy edge, and Firebase cloud sync are strictly decoupled. Failure of cloud services never degrades core dictionary functionality.",
    textVi: "Hoạt động Hive local, proxy Cloudflare và đồng bộ Firebase được cô lập hoàn toàn. Sự cố của dịch vụ đám mây không bao giờ làm ảnh hưởng đến việc tra cứu offline.",
    evidence: "ZERO-DEPENDENCY CORE",
  },
  {
    Icon: Icons.Microphone,
    titleEn: "Hybrid Pronunciation Scoring",
    titleVi: "Đánh giá phát âm lai (Hybrid)",
    textEn: "Speech audio is routed through an authenticated edge proxy to obtain phonetic transcripts, which are then scored locally against FM pronunciation rubrics.",
    textVi: "File âm thanh phát âm được gửi qua edge proxy có xác thực để lấy chuỗi âm thanh, sau đó thuật toán local sẽ chấm điểm dựa trên tiêu chuẩn ngữ âm chuyên ngành.",
    evidence: "EDGE PROXY + LOCAL SCORER",
  },
];

const safeClaims = [
  "Production Flutter mobile application specialized in Facilities Management vocabulary (1,847 terms).",
  "Zero-dependency local-first core: complete lookup and quiz flows operate seamlessly without internet.",
  "Decoupled security boundary: speech APIs and analytics are routed through Cloudflare edge workers without client-side secrets.",
  "Verified testing suite: 27 recorded unit/widget tests and 50 bundled benchmark test scenarios.",
];

const avoidClaims = [
  "Claims of fully distributed serverless database: Firebase is utilized solely for non-critical telemetry and sync.",
  "Claims of real-time multi-speaker conversation: speech integration focuses on focused pronunciation assessment.",
  "Claims of third-party user data monetization: zero tracking or commercial telemetry in codebase.",
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
      <Header />

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
                    {isVi ? "Sản phẩm Mobile" : "Mobile Product"}
                  </span>
                </div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                  2026 · APP STORE VERIFIED
                </div>
              </div>

              <h1 className="cs-title mb-6 break-words font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-8xl">
                FM <span className="font-light opacity-90 leading-[1.1] tracking-tight">Dictionary.</span>
              </h1>

              <p className="cs-desc mb-8 max-w-2xl text-xl font-light leading-relaxed opacity-85 md:text-2xl">
                {isVi
                  ? "Một case study dựa trên bằng chứng kỹ thuật về ứng dụng Flutter hỗ trợ cộng đồng quản lý tòa nhà & cơ sở vật chất (Facilities Management) — từ lõi học offline Hive 1.847 từ đến ranh giới proxy Cloudflare và Firebase."
                  : "An evidence-backed engineering case study of a Flutter application helping the Facilities Management community master 1,847 domain terms — from a zero-latency Hive local core to Cloudflare edge and Firebase boundaries."}
              </p>

              {/* Technology Specification Tags */}
              <div className="mb-10 flex flex-wrap gap-2.5">
                {["Flutter", "Dart", "Hive DB", "Cloudflare Workers", "Firebase", "1,847 Terms"].map((tag) => (
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
                  href="https://fm-dictionary.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/80"
                >
                  {isVi ? "Website sản phẩm" : "Product Website"} <Icons.ArrowRight size={14} />
                </a>
                <a
                  href="https://apps.apple.com/us/app/fm-dictionary/id6774868353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest opacity-80 transition-all hover:border-black hover:opacity-100 dark:border-white/20 dark:hover:border-white"
                >
                  {isVi ? "Xem trên App Store" : "View on App Store"} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* Precision Viewport Preview Frame */}
            <figure className="min-w-0 lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden border border-black/15 bg-cardLight dark:border-white/15 dark:bg-cardDark">
                <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-black dark:bg-white" />
                    <span className="font-bold opacity-90">PRJ-01 · FM-DICT</span>
                  </div>
                  <span className="opacity-75">1.1.0+9 PRODUCTION</span>
                </div>
                <div className="relative h-[calc(100%-35px)] w-full overflow-hidden">
                  <Image
                    src="/fm-dictionary-editorial-cover.webp"
                    alt={isVi ? "Ảnh bìa ứng dụng FM Dictionary" : "Editorial cover for FM Dictionary application"}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="cs-cover-img scale-105 object-cover grayscale transition-all duration-700 hover:scale-100 hover:grayscale-0"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                    {["1,847 Terms", "Hive Offline", "Cloudflare STT Proxy"].map((s) => (
                      <span key={s} className="bg-black/85 text-white dark:bg-white/90 dark:text-black text-[9px] font-mono uppercase px-2 py-0.5 border border-white/20 dark:border-black/20 font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed opacity-55">
                {isVi
                  ? "Bản ghi nhận kỹ thuật chính thức: FM Dictionary v1.1.0 trên nền tảng Flutter (iOS & Android)."
                  : "Documented engineering snapshot: FM Dictionary v1.1.0 on Flutter for iOS & Android."}
              </figcaption>
            </figure>
          </section>

          {/* 2. UNIFIED 4-METRIC STRIP */}
          <section className="border-y border-black/10 bg-cardLight py-12 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto grid grid-cols-2 divide-x divide-black/10 border-l border-black/10 px-6 dark:divide-white/10 dark:border-white/10 md:grid-cols-4 md:px-8">
              {[
                ["1,847", isVi ? "Thuật ngữ hiện tại" : "Current terms"],
                ["50", isVi ? "Bộ test bundled" : "Bundled test items"],
                ["27", isVi ? "Flutter tests đã ghi nhận" : "Recorded tests"],
                ["1.1.0+9", isVi ? "Phiên bản App Store" : "App Store version"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-black/10 px-5 py-4 dark:border-white/10 md:px-8">
                  <p className="font-display text-2xl font-bold md:text-3xl">{value}</p>
                  <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">{label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. MULTI-TIER OFFLINE-FIRST ARCHITECTURE BLUEPRINT */}
          <section id="architecture" className="cs-diagram-section scroll-mt-24 border-b border-black/10 bg-bgLight py-24 dark:border-white/10 dark:bg-bgDark md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Kiến trúc hệ thống" : "System Architecture"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Ranh giới 3 tầng: Offline Core, Edge Gateway & Cloud Sync" : "Three-Tier Blueprint: Offline Core, Edge Gateway & Cloud Sync"}
                </h2>
                <p className="mt-4 text-lg font-light leading-relaxed opacity-80">
                  {isVi
                    ? "Kiến trúc được chia tách minh bạch thành 3 ranh giới cô lập. Mọi luồng học và tra cứu cốt lõi được bảo đảm chạy 100% không phụ thuộc internet."
                    : "The architecture strictly decouples 3 isolated boundaries. All primary search and learning loops are guaranteed to execute with zero cloud dependencies."}
                </p>
              </div>

              {/* 3 Architectural Tiers */}
              <div className="space-y-8">
                {architectureTiers.map((tier) => (
                  <div
                    key={tier.tierNumber}
                    className="cs-diagram-node border border-black/10 bg-cardLight p-8 dark:border-white/10 dark:bg-cardDark md:p-10 transition-colors duration-200 hover:border-black dark:hover:border-white"
                  >
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 dark:border-white/10">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold opacity-50">{tier.tierNumber} /</span>
                        <h3 className="font-display text-xl font-bold md:text-2xl">
                          {isVi ? tier.tierNameVi : tier.tierNameEn}
                        </h3>
                      </div>
                      <span className="border border-black/20 bg-bgLight px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider opacity-85 dark:border-white/20 dark:bg-bgDark">
                        {isVi ? tier.tagVi : tier.tagEn}
                      </span>
                    </div>

                    <p className="mb-8 max-w-3xl text-base font-light leading-relaxed opacity-80 md:text-lg">
                      {isVi ? tier.leadVi : tier.leadEn}
                    </p>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {tier.details.map((item) => (
                        <div
                          key={item.titleEn}
                          className="border border-black/5 bg-bgLight p-6 dark:border-white/5 dark:bg-bgDark"
                        >
                          <h4 className="font-display text-base font-bold md:text-lg mb-2">
                            {isVi ? item.titleVi : item.titleEn}
                          </h4>
                          <p className="text-sm font-light leading-relaxed opacity-75">
                            {isVi ? item.descVi : item.descEn}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Architecture Diagram Image Frame */}
              <div className="mt-16 border border-black/10 bg-cardLight p-6 dark:border-white/10 dark:bg-cardDark md:p-8">
                <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
                    <span className="h-2 w-2 bg-black dark:bg-white" />
                    <span className="font-bold opacity-80">{isVi ? "Sơ đồ kiến trúc Offline-First" : "Offline-First Data Flow Schematic"}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase opacity-50">VERIFIED ARCHITECTURE ARTIFACT</span>
                </div>
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-black/10 dark:border-white/10">
                  <Image
                    src="/fm-offline-architecture.webp"
                    alt={isVi ? "Sơ đồ luồng dữ liệu offline của FM Dictionary" : "Offline data flow schematic for FM Dictionary"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. CODEBASE EVIDENCE AREAS */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Khu vực kiểm toán Codebase" : "Audited Codebase Areas"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Những giải pháp kỹ thuật đáng chú ý" : "Engineering Highlights in the Codebase"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
                {engineeringAreas.map(({ Icon, titleEn, titleVi, textEn, textVi, evidence }) => (
                  <article key={titleEn} className="bg-cardLight p-8 dark:bg-cardDark md:p-10">
                    <Icon size={32} strokeWidth={1.5} className="mb-8" />
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold">{isVi ? titleVi : titleEn}</h3>
                      <span className="border border-black/20 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest opacity-70 dark:border-white/20">
                        {evidence}
                      </span>
                    </div>
                    <p className="font-light leading-relaxed opacity-80">{isVi ? textVi : textEn}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. VERIFIED GIT TIMELINE */}
          <section id="evidence" className="scroll-mt-24 border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Tiến trình kiểm chứng" : "Verified Git History"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Minh chứng từ Git commit & tag release" : "Git History Without the Marketing Leap"}
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
                      <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">{item.evidence}</p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-2xl font-bold">{isVi ? item.titleVi : item.titleEn}</h3>
                      <p className="font-light leading-relaxed opacity-80">{isVi ? item.textVi : item.textEn}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 6. CLAIM BOUNDARY SPECIFICATION */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Ranh giới công bố" : "Truthful Engineering Claims"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Nói đúng phạm vi là một phẩm chất kỹ thuật" : "Precision is Part of the Feature"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="border border-black/15 bg-cardLight p-8 dark:border-white/15 dark:bg-cardDark md:p-10">
                  <div className="mb-8 flex items-center gap-3">
                    <Icons.Check size={24} />
                    <h3 className="font-display text-2xl font-bold">{isVi ? "Minh chứng an toàn để khẳng định" : "Safe to Claim"}</h3>
                  </div>
                  <ul className="space-y-4">
                    {safeClaims.map((claim) => (
                      <li key={claim} className="border-t border-black/10 pt-4 font-light leading-relaxed opacity-85 dark:border-white/10">
                        {isVi
                          ? claim
                              .replace("Production Flutter mobile application specialized in Facilities Management vocabulary (1,847 terms).", "Ứng dụng di động Flutter đã phát hành, chuyên biệt cho thuật ngữ Quản lý Cơ sở vật chất (1.847 từ).")
                              .replace("Zero-dependency local-first core: complete lookup and quiz flows operate seamlessly without internet.", "Lõi offline-first không phụ thuộc đám mây: toàn bộ luồng tra cứu và làm bài kiểm tra hoạt động trơn tru không cần mạng.")
                              .replace("Decoupled security boundary: speech APIs and analytics are routed through Cloudflare edge workers without client-side secrets.", "Ranh giới bảo mật cô lập: các API speech và đo lường được định tuyến qua Cloudflare Workers, không để lộ secret ở phía client.")
                              .replace("Verified testing suite: 27 recorded unit/widget tests and 50 bundled benchmark test scenarios.", "Bộ kiểm thử tự động đã xác nhận: 27 unit/widget test đã ghi nhận và 50 kịch bản test chuẩn hóa.")
                          : claim}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-black/10 bg-bgLight p-8 opacity-85 dark:border-white/10 dark:bg-bgDark md:p-10">
                  <div className="mb-8 flex items-center gap-3">
                    <Icons.Alert size={24} />
                    <h3 className="font-display text-2xl font-bold">{isVi ? "Tuyệt đối không phóng đại" : "Do Not Over-Claim"}</h3>
                  </div>
                  <ul className="space-y-4">
                    {avoidClaims.map((claim) => (
                      <li key={claim} className="border-t border-black/10 pt-4 font-light leading-relaxed opacity-75 dark:border-white/10">
                        {isVi
                          ? claim
                              .replace("Claims of fully distributed serverless database: Firebase is utilized solely for non-critical telemetry and sync.", "Không tự xưng cơ sở dữ liệu serverless hoàn chỉnh: Firebase chỉ phục vụ đồng bộ phụ và đo lường tiến độ.")
                              .replace("Claims of real-time multi-speaker conversation: speech integration focuses on focused pronunciation assessment.", "Không tự xưng hệ thống hội thoại thời gian thực: speech chỉ phục vụ đối soát phát âm từ vựng.")
                              .replace("Claims of third-party user data monetization: zero tracking or commercial telemetry in codebase.", "Không chứa bất kỳ mã theo dõi thương mại hay bán dữ liệu người dùng nào trong codebase.")
                          : claim}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 7. LIVE CONVERSION CALLOUT */}
          <section className="container mx-auto px-6 pb-24 md:px-8 md:pb-32">
            <div className="flex flex-col items-start justify-between gap-8 border border-black bg-cardLight p-8 dark:border-white dark:bg-cardDark md:flex-row md:items-center md:p-12">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">FM Dictionary</p>
                <h2 className="font-display text-3xl font-bold md:text-4xl">
                  {isVi ? "Trải nghiệm ứng dụng trên môi trường thực tế" : "Experience the Production Application"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 w-full md:w-auto">
                <a
                  href="https://fm-dictionary.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 border border-black bg-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/80 md:w-auto"
                >
                  <span>fm-dictionary.pages.dev</span>
                  <Icons.ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </CaseStudyAnimations>

      <Footer />
    </>
  );
}
