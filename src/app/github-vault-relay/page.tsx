"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CaseStudyAnimations } from "@/components/case-study/CaseStudyAnimations";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { BlurText } from "@/components/BlurText";
import { CountUp } from "@/components/CountUp";
import { TiltedCard } from "@/components/TiltedCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { MagneticButton } from "@/components/MagneticButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const runtimeFlow = [
  {
    Icon: Icons.Folder,
    number: "01",
    stageEn: "Inventory",
    stageVi: "Kiểm kê Vault",
    titleEn: "Discovery & Tree Traversal",
    titleVi: "Duyệt cây & tính mã băm",
    textEn: "Recursively enumerates visible Vault files and adapter-enumerated hidden user notes to build an in-memory SHA-256 state.",
    textVi: "Duyệt đệ quy toàn bộ file hiển thị trong Vault và file người dùng ẩn để lập danh mục băm SHA-256 trên bộ nhớ.",
    artifact: "Local SHA-256 Map",
  },
  {
    Icon: Icons.GitBranch,
    number: "02",
    stageEn: "Reconciliation",
    stageVi: "Đối soát phân nhánh",
    titleEn: "Three-Way State Comparison",
    titleVi: "So sánh 3 chiều độc lập",
    textEn: "Compares local entries, remote GitHub tree objects, and state.json baseline into explicit classified sync states without blind overwrites.",
    textVi: "Đối chiếu file local, remote GitHub tree và baseline state.json thành các trạng thái phân loại rõ ràng, tránh ghi đè mù quáng.",
    artifact: "Three-Way Diff Matrix",
  },
  {
    Icon: Icons.CloudDownload,
    number: "03",
    stageEn: "Pull Stage",
    stageVi: "Kéo dữ liệu",
    titleEn: "Verified Remote Ingestion",
    titleVi: "Nhận remote có nhật ký",
    textEn: "Downloads modified remote blobs with transactional recovery journals, staging diverged files into review buckets if conflict is detected.",
    textVi: "Tải blob remote về qua nhật ký khôi phục transaction; tự động lưu file xung đột vào vùng review nếu phát hiện phân kỳ.",
    artifact: "Rollback Journal",
  },
  {
    Icon: Icons.Refresh,
    number: "04",
    stageEn: "Verification",
    stageVi: "Kiểm tra bất biến",
    titleEn: "Post-Pull Integrity Invariant",
    titleVi: "Kiểm tra toàn vẹn sau Pull",
    textEn: "UnifiedSyncEngine re-scans the disk after Pull to ensure physical storage strictly mirrors expected state before proceeding.",
    textVi: "UnifiedSyncEngine quét lại ổ đĩa sau khi Pull nhằm đảm bảo tệp vật lý khớp tuyệt đối với dự kiến trước khi tiếp tục.",
    artifact: "Integrity Assertion",
  },
  {
    Icon: Icons.CloudUpload,
    number: "05",
    stageEn: "Push Stage",
    stageVi: "Đẩy dữ liệu",
    titleEn: "Atomic Git Commit & Tree Push",
    titleVi: "Tạo Git Tree & Commit nguyên khối",
    textEn: "Constructs missing blobs, builds a new Git tree object against the remote branch base, and crafts an atomic signed Git commit.",
    textVi: "Tạo các blob còn thiếu, dựng đối tượng Git tree trên commit gốc của nhánh remote và tạo một Git commit nguyên khối.",
    artifact: "Git Tree SHA & Commit",
  },
  {
    Icon: Icons.Database,
    number: "06",
    stageEn: "State Advance",
    stageVi: "Cập nhật con trỏ",
    titleEn: "Atomic Baseline Cursor Advance",
    titleVi: "Cập nhật con trỏ trạng thái",
    textEn: "StorageManager atomically commits the new remote commit SHA to state.json only after all preceding checks succeed.",
    textVi: "StorageManager ghi nhận commit SHA mới vào state.json một cách an toàn (atomic) chỉ sau khi mọi bước trước đó thành công.",
    artifact: "state.json Updated",
  },
];

const syncStates = [
  { Icon: Icons.CloudUpload, state: "LOCAL_ONLY", textEn: "Local file has no remote or baseline entry. Staged for push.", textVi: "File local chưa từng có trên remote hoặc baseline. Sẵn sàng đẩy lên." },
  { Icon: Icons.CloudDownload, state: "REMOTE_ONLY", textEn: "Remote file has no local or baseline entry. Staged for pull.", textVi: "File remote mới xuất hiện, chưa có ở local. Sẵn sàng tải về." },
  { Icon: Icons.CloudUpload, state: "LOCAL_CHANGED", textEn: "Local differs from baseline while remote still matches.", textVi: "Local đã sửa đổi so với baseline trong khi remote giữ nguyên." },
  { Icon: Icons.CloudDownload, state: "REMOTE_CHANGED", textEn: "Remote differs from baseline while local still matches.", textVi: "Remote đã sửa đổi so với baseline trong khi local giữ nguyên." },
  { Icon: Icons.Alert, state: "POTENTIAL_CONFLICT", textEn: "Both sides diverged from base. Requires manual review.", textVi: "Cả hai bên cùng sửa đổi phân kỳ. Giữ nguyên cả hai để đối soát." },
  { Icon: Icons.Check, state: "UNCHANGED", textEn: "Canonical local and remote SHA-256 remain perfectly aligned.", textVi: "Mã băm SHA-256 ở local và remote hoàn toàn đồng nhất." },
];

const boundaries = [
  {
    Icon: Icons.Book,
    titleEn: "Single Configured Repository Target",
    titleVi: "Một Target duy nhất được xác định",
    textEn: "The sync bridge operates strictly against one configured vault, repository and branch at a time. All synchronizations are user-directed, eliminating unexpected background background conflicts.",
    textVi: "Bridge đồng bộ chỉ hoạt động trên đúng một vault, repo và nhánh chỉ định tại một thời điểm. Mọi lần sync do người dùng chủ động bấm, loại bỏ nguy cơ ghi đè ngầm.",
  },
  {
    Icon: Icons.Network,
    titleEn: "Direct HTTPS via GitHub Git Data API",
    titleVi: "Kết nối trực tiếp GitHub qua HTTPS",
    textEn: "The client utilizes Obsidian's native requestUrl() and GitHub REST / Git Data APIs. It runs without native Git binaries on iOS/Android and requires zero intermediate relay servers.",
    textVi: "Client sử dụng trực tiếp requestUrl() và Git Data API của GitHub. Chạy trơn tru trên iOS/Android mà không cần cài Git CLI, hoàn toàn không qua máy chủ trung gian.",
  },
  {
    Icon: Icons.Shield,
    titleEn: "Zero Secret Leakage — Local PAT Storage",
    titleVi: "Bảo mật tuyệt đối — Secret nằm trong Obsidian",
    textEn: "Personal Access Tokens (PAT) are stored securely inside Obsidian's SecretStorage backend. All tokens and credentials are aggressively redacted from error logs before display.",
    textVi: "Personal Access Token (PAT) được lưu trữ an toàn trong SecretStorage của Obsidian. Mọi token đều được lọc bỏ (redact) khỏi log lỗi trước khi hiển thị cho người dùng.",
  },
];

export default function GithubVaultRelayPage() {
  const { isVi } = useLanguage();

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
                    href="/"
                    className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100"
                  >
                    ← {isVi ? "Mục lục" : "Index"}
                  </Link>
                  <span className="opacity-30">/</span>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                    {isVi ? "Mã nguồn mở" : "Open Source Plugin"}
                  </span>
                </div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                  2026 · OBSIDIAN COMMUNITY
                </div>
              </div>

              <h1 className="cs-title mb-6 break-words font-display text-5xl font-bold leading-[0.95] sm:text-6xl md:text-8xl">
                <BlurText text="GitHub" delay={50} />{" "}
                <span className="font-light opacity-90 leading-[1.1] tracking-tight">
                  <BlurText text="Vault Relay." delay={160} />
                </span>
              </h1>

              <p className="cs-desc mb-8 max-w-2xl text-xl font-light leading-relaxed opacity-85 md:text-2xl">
                {isVi
                  ? "Một bridge đồng bộ dữ liệu GitHub bảo thủ cho Obsidian Mobile và Desktop, ưu tiên báo lỗi minh bạch và bảo toàn các tệp phân kỳ để người dùng chủ động kiểm tra thay vì tự động ghi đè dữ liệu."
                  : "A conservative, resilient GitHub sync bridge for Obsidian Mobile and Desktop, prioritizing explicit transaction failures and preserving ambiguous states for manual review."}
              </p>

              {/* Technology Specification Tags */}
              <div className="mb-10 flex flex-wrap gap-2.5">
                {["Obsidian Plugin", "GitHub REST API", "Git Data API", "Mobile-First", "Open Source", "TypeScript"].map((tag) => (
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
                <MagneticButton strength={0.15}>
                  <a
                    href="https://community.obsidian.md/plugins/github-vault-relay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-black bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/80"
                  >
                    {isVi ? "Cộng đồng Obsidian" : "Obsidian Community"} <Icons.ArrowRight size={14} />
                  </a>
                </MagneticButton>
                <MagneticButton strength={0.15}>
                  <a
                    href="https://github.com/ankhang0704/github-vault-relay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-black/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest opacity-80 transition-all hover:border-black hover:opacity-100 dark:border-white/20 dark:hover:border-white"
                  >
                    GitHub <Icons.Github size={14} />
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Precision Viewport Preview Frame */}
            <figure className="min-w-0 lg:col-span-5">
              <TiltedCard maxTilt={5}>
                <div className="relative aspect-[4/3] overflow-hidden border border-black/15 bg-cardLight dark:border-white/15 dark:bg-cardDark">
                  <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-black dark:bg-white" />
                      <span className="font-bold opacity-90">PRJ-02 · VAULT-RELAY</span>
                    </div>
                    <span className="opacity-75">v1.2.1 RELEASED</span>
                  </div>
                  <div className="relative h-[calc(100%-35px)] w-full overflow-hidden">
                    <Image
                      src="/github-vault-relay-cover.webp"
                      alt={isVi ? "Ảnh bìa GitHub Vault Relay" : "Editorial cover for GitHub Vault Relay"}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="cs-cover-img scale-105 object-cover grayscale transition-all duration-700 hover:scale-100 hover:grayscale-0"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                      {["Obsidian Plugin", "GitHub REST API", "Direct Tree Sync"].map((s) => (
                        <span key={s} className="bg-black/85 text-white dark:bg-white/90 dark:text-black text-[9px] font-mono uppercase px-2 py-0.5 border border-white/20 dark:border-black/20 font-semibold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltedCard>
              <figcaption className="mt-3 text-xs leading-relaxed opacity-55">
                {isVi
                  ? "Bản ghi nhận kỹ thuật: Plugin Obsidian được phát hành trên Community Hub, hỗ trợ đồng bộ GitHub trực tiếp."
                  : "Technical snapshot: Obsidian Community Plugin enabling direct GitHub git-tree synchronization."}
              </figcaption>
            </figure>
          </section>

          {/* 2. UNIFIED 4-METRIC STRIP */}
          <section className="border-y border-black/10 bg-cardLight py-12 dark:border-white/10 dark:bg-cardDark">
            <div className="container mx-auto grid grid-cols-2 divide-x divide-black/10 border-l border-black/10 px-6 dark:divide-white/10 dark:border-white/10 md:grid-cols-4 md:px-8">
              <div className="border-r border-black/10 px-5 py-4 dark:border-white/10 md:px-8">
                <p className="font-display text-2xl font-bold md:text-3xl">1.2.1</p>
                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {isVi ? "Phiên bản ổn định" : "Stable release"}
                </p>
              </div>
              <div className="border-r border-black/10 px-5 py-4 dark:border-white/10 md:px-8">
                <p className="font-display text-2xl font-bold md:text-3xl">≥ 1.11.4</p>
                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {isVi ? "Obsidian tối thiểu" : "Minimum Obsidian"}
                </p>
              </div>
              <div className="border-r border-black/10 px-5 py-4 dark:border-white/10 md:px-8">
                <p className="font-display text-2xl font-bold md:text-3xl">
                  <CountUp to={44} />
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {isVi ? "File test suite" : "Test suite files"}
                </p>
              </div>
              <div className="border-r border-black/10 px-5 py-4 dark:border-white/10 md:px-8">
                <p className="font-display text-2xl font-bold md:text-3xl">
                  <CountUp to={478} />
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
                  {isVi ? "Test đã vượt qua" : "Passing test cases"}
                </p>
              </div>
            </div>
          </section>

          {/* 3. CONNECTED SEQUENTIAL CRYPTOGRAPHIC SYNC PIPELINE */}
          <section id="architecture" className="cs-diagram-section scroll-mt-24 border-b border-black/10 bg-bgLight py-24 dark:border-white/10 dark:bg-bgDark md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Kiến trúc luồng thực thi" : "Runtime Execution Pipeline"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Quy trình 6 giai đoạn đảm bảo tính bất biến dữ liệu" : "6-Stage State Machine with Strict Invariant Verification"}
                </h2>
                <p className="mt-4 text-lg font-light leading-relaxed opacity-80">
                  {isVi
                    ? "Mỗi bước trong chu trình đồng bộ đều tạo ra artifact kiểm thử rõ ràng trước khi tiến hành bước kế tiếp, ngăn chặn hoàn toàn việc mất dữ liệu ghi chú khi mất kết nối."
                    : "Every transition in the sync lifecycle produces explicit verifiable artifacts before state advances, preventing note truncation during intermittent network conditions."}
                </p>
              </div>

              {/* 6 Connected Pipeline Steps */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {runtimeFlow.map(({ Icon, number, stageEn, stageVi, titleEn, titleVi, textEn, textVi, artifact }, index) => {
                  const FlowIcon = Icon as typeof Icons.Folder;
                  return (
                    <RevealOnScroll key={number} delay={index * 80}>
                      <SpotlightCard className="h-full cs-diagram-node border border-black/10 bg-cardLight p-8 dark:border-white/10 dark:bg-cardDark md:min-h-72 flex flex-col justify-between hover:border-black dark:hover:border-white transition-colors duration-200">
                        <div>
                          <div className="mb-6 flex items-start justify-between">
                            <FlowIcon size={28} strokeWidth={1.5} className="opacity-90" />
                            <span className="font-mono text-xs font-bold opacity-45">{number} / 06</span>
                          </div>
                          <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
                            {isVi ? stageVi : stageEn}
                          </div>
                          <h3 className="mb-3 font-display text-xl font-bold">
                            {isVi ? titleVi : titleEn}
                          </h3>
                          <p className="text-sm font-light leading-relaxed opacity-75">
                            {isVi ? textVi : textEn}
                          </p>
                        </div>

                        <div className="mt-6 border-t border-black/10 pt-4 dark:border-white/10">
                          <span className="inline-block bg-bgLight dark:bg-bgDark border border-black/15 dark:border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider opacity-85">
                            {artifact}
                          </span>
                        </div>
                      </SpotlightCard>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 4. SYNC STATE CLASSIFICATION MATRIX */}
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Ma trận trạng thái" : "State Classification"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Phân loại 3 chiều không mập mờ" : "Unambiguous 3-Way State Classification"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {syncStates.map(({ Icon, state, textEn, textVi }, index) => {
                  const StateIcon = Icon as typeof Icons.CloudUpload;
                  return (
                    <RevealOnScroll key={state} delay={index * 60}>
                      <SpotlightCard className="h-full border border-black/10 bg-cardLight p-6 dark:border-white/10 dark:bg-cardDark transition-colors duration-200 hover:border-black dark:hover:border-white">
                        <div className="mb-4 flex items-center justify-between">
                          <StateIcon size={20} strokeWidth={1.5} />
                          <span className="font-mono text-xs font-bold tracking-wider">{state}</span>
                        </div>
                        <p className="text-sm font-light leading-relaxed opacity-80">
                          {isVi ? textVi : textEn}
                        </p>
                      </SpotlightCard>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 5. ARCHITECTURAL BOUNDARY SPECIFICATIONS */}
          <section className="border-t border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark md:py-32">
            <div className="container mx-auto px-6 md:px-8">
              <div className="mb-16 max-w-3xl">
                <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] opacity-60">
                  {isVi ? "Ranh giới sản phẩm" : "Product Boundaries"}
                </p>
                <h2 className="font-display text-4xl font-bold md:text-6xl">
                  {isVi ? "Đồng bộ an toàn, không hứa hẹn viển vông" : "Explicit Guarantees Over Generic Sync"}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {boundaries.map(({ Icon, titleEn, titleVi, textEn, textVi }, index) => (
                  <RevealOnScroll key={titleEn} delay={index * 100}>
                    <SpotlightCard className="h-full border border-black/10 bg-bgLight p-8 dark:border-white/10 dark:bg-bgDark md:p-10 transition-colors duration-200 hover:border-black dark:hover:border-white">
                      <Icon size={32} strokeWidth={1.5} className="mb-8" />
                      <h3 className="mb-4 font-display text-2xl font-bold">{isVi ? titleVi : titleEn}</h3>
                      <p className="font-light leading-relaxed opacity-80">{isVi ? textVi : textEn}</p>
                    </SpotlightCard>
                  </RevealOnScroll>
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
