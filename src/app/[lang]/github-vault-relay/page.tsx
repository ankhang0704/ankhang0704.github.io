import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";
import { localizedPath } from "@/lib/locale-path";

const runtimeFlow = [
  { Icon: Icons.Folder, number: "01", title: "Inventory", text: "Visible Vault files and adapter-enumerated hidden user files." },
  { Icon: Icons.GitBranch, number: "02", title: "Classify", text: "Local entries, remote blobs and state.json become one explicit sync state." },
  { Icon: Icons.CloudDownload, number: "03", title: "Pull", text: "Verified remote changes are applied with recovery journals." },
  { Icon: Icons.Refresh, number: "04", title: "Rescan", text: "UnifiedSyncEngine checks the Vault again after Pull." },
  { Icon: Icons.CloudUpload, number: "05", title: "Push", text: "Blobs, tree and commit are built against the remote base." },
  { Icon: Icons.Database, number: "06", title: "Baseline", text: "StorageManager advances state only after checks permit it." },
];

const syncStates = [
  { Icon: Icons.CloudUpload, state: "LOCAL_ONLY", text: "Local file has no remote or baseline entry." },
  { Icon: Icons.CloudDownload, state: "REMOTE_ONLY", text: "Remote file has no local or baseline entry." },
  { Icon: Icons.CloudUpload, state: "LOCAL_CHANGED", text: "Local differs from baseline while remote still matches." },
  { Icon: Icons.CloudDownload, state: "REMOTE_CHANGED", text: "Remote differs from baseline while local still matches." },
  { Icon: Icons.Alert, state: "POTENTIAL_CONFLICT", text: "Both sides diverged, or no usable base exists." },
  { Icon: Icons.Check, state: "UNCHANGED", text: "Canonical local and remote SHAs remain aligned." },
  { Icon: Icons.CloudUpload, state: "LOCAL_DELETED", text: "Local is absent while remote still has baseline content." },
  { Icon: Icons.CloudDownload, state: "REMOTE_DELETED", text: "Remote is absent while local still has baseline content." },
  { Icon: Icons.Alert, state: "DELETE_CONFLICT", text: "One side deleted while the other side changed." },
  { Icon: Icons.Trash, state: "DELETED", text: "Both sides are absent and the old baseline can be removed." },
];

const boundaries = [
  {
    Icon: Icons.Book,
    titleEn: "One configured target",
    titleVi: "Một target được cấu hình",
    textEn: "The bridge serves one configured vault, repository and branch at a time. Sync is user-triggered, not scheduled or sync-on-save.",
    textVi: "Bridge phục vụ một vault, repository và branch được cấu hình tại một thời điểm. Sync do người dùng kích hoạt, không chạy theo lịch hoặc sync-on-save.",
  },
  {
    Icon: Icons.Network,
    titleEn: "GitHub over HTTPS",
    titleVi: "GitHub qua HTTPS",
    textEn: "The client uses requestUrl() and GitHub REST or Git Data API calls. It avoids native Git on mobile and has no intermediary relay service.",
    textVi: "Client dùng requestUrl() và GitHub REST hoặc Git Data API. Plugin tránh chạy Git native trên mobile và không có relay service trung gian.",
  },
  {
    Icon: Icons.Shield,
    titleEn: "Secrets stay in Obsidian",
    titleVi: "Secret nằm trong Obsidian",
    textEn: "SecretStorage is the active PAT backend. Token patterns and configured tokens are redacted from sanitized errors.",
    textVi: "SecretStorage là PAT backend đang active. Token pattern và token đã cấu hình được redact khỏi error đã sanitize.",
  },
];

const nonGoals = [
  "Background or scheduled sync",
  "Sync-on-save",
  "Fuzzy rename inference",
  "Empty-directory sync",
  "Alternative Git forges",
  "Multi-account switching",
  "Force-push behavior",
];

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "vi" }];
}

export default async function GithubVaultRelayPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: routeLang } = await params;
  const lang = routeLang === "vi" ? "vi" : "en";
  const isVi = lang === "vi";

  return (
    <>
      <Header variant="main" />

      <main id="main-content" className="w-full min-w-0 overflow-x-hidden pt-32">
        <section className="container mx-auto grid min-h-[calc(100dvh-7rem)] w-full min-w-0 items-center gap-12 px-6 pb-24 md:px-8 md:pb-32 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Link href={localizedPath(lang, "/")} className="text-xs font-bold uppercase tracking-widest opacity-60 transition-opacity hover:opacity-100">
                ← {isVi ? "Về trang chủ" : "Back to home"}
              </Link>
              <span className="h-px w-8 bg-black/30 dark:bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Open source plugin</span>
            </div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] opacity-50">Obsidian · GitHub · 2026</p>
            <h1 className="max-w-4xl break-words font-display text-5xl font-bold leading-[0.95] md:text-8xl">
              GitHub
              <br />
              <span className="whitespace-nowrap font-serif text-6xl font-normal italic leading-[1.1] tracking-normal md:text-8xl">Vault Relay.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed opacity-80 md:text-2xl">
              {isVi
                ? "Một bridge đồng bộ GitHub bảo thủ cho Obsidian Mobile và desktop, ưu tiên failure rõ ràng và giữ lại trạng thái mơ hồ để review."
                : "A conservative GitHub sync bridge for Obsidian Mobile and desktop, prioritizing explicit failure and preserving ambiguous state for review."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Obsidian", "GitHub Data API", "Mobile-first", "Open source"].map((tag) => (
                <span key={tag} className="border border-black/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest opacity-70 dark:border-white/20">{tag}</span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://community.obsidian.md/plugins/github-vault-relay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-black px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                {isVi ? "Xem trên Obsidian" : "View on Obsidian"} <Icons.ArrowRight size={14} />
              </a>
              <a href="https://github.com/ankhang0704/github-vault-relay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-black/30 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:border-black dark:border-white/30 dark:hover:border-white">
                GitHub <Icons.Github size={14} />
              </a>
            </div>
          </div>

          <figure className="min-w-0 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden border border-black/15 dark:border-white/15">
              <Image src="/github-vault-relay-cover.webp" alt={isVi ? "Ảnh bìa biên tập cho GitHub Vault Relay" : "Editorial cover for GitHub Vault Relay"} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover grayscale transition-all duration-700 hover:grayscale-0" />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed opacity-50">{isVi ? "Ảnh bìa portfolio, không phải ảnh chụp giao diện plugin." : "Portfolio cover, not a screenshot of the plugin UI."}</figcaption>
          </figure>
        </section>

        <section className="border-y border-black/10 bg-cardLight py-12 dark:border-white/10 dark:bg-cardDark">
          <div className="container mx-auto grid grid-cols-2 gap-px border-l border-black/10 px-6 dark:border-white/10 md:grid-cols-4 md:px-8">
            {[
              ["1.0.5", isVi ? "Stable release" : "Stable release"],
              ["1.11.4", isVi ? "Obsidian tối thiểu" : "Minimum Obsidian"],
              ["44", isVi ? "File test" : "Test files"],
              ["478", isVi ? "Test đã pass" : "Passing tests"],
            ].map(([value, label]) => (
              <div key={value} className="border-r border-black/10 px-5 py-5 dark:border-white/10 md:px-8">
                <p className="break-words font-display text-2xl font-bold md:text-3xl">{value}</p>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-50">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-24 md:px-8 md:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">{isVi ? "Product boundary" : "Product boundary"}</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Sync rõ ràng hơn, không hứa hẹn quá mức" : "Explicit sync, without the bigger promise"}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {boundaries.map(({ Icon, titleEn, titleVi, textEn, textVi }) => (
              <article key={titleEn} className="border border-black/10 p-8 dark:border-white/10 md:p-10">
                <Icon size={32} strokeWidth={1.5} className="mb-8" />
                <h3 className="mb-3 font-display text-2xl font-bold">{isVi ? titleVi : titleEn}</h3>
                <p className="font-light leading-relaxed opacity-70">{isVi ? textVi : textEn}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="scroll-mt-24 border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">{isVi ? "Runtime architecture" : "Runtime architecture"}</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Một sync flow có thể kiểm tra từng bước" : "A sync flow with a check at every step"}</h2>
            </div>
            <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-3 lg:grid-cols-6">
              {runtimeFlow.map(({ Icon, number, title, text }) => {
                const FlowIcon = Icon as typeof Icons.Folder;
                return (
                  <article key={number} className="bg-bgLight p-6 dark:bg-bgDark md:min-h-64 md:p-7">
                    <div className="mb-10 flex items-start justify-between gap-4">
                      <FlowIcon size={28} strokeWidth={1.5} aria-hidden="true" />
                      <p className="font-mono text-xs opacity-50">{number}</p>
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold">{title}</h3>
                    <p className="text-sm font-light leading-relaxed opacity-70">{isVi ? text.replace("Visible Vault files and adapter-enumerated hidden user files.", "File Vault hiển thị và file user ẩn được adapter enumerate.").replace("Local entries, remote blobs and state.json become one explicit sync state.", "Local entry, remote blob và state.json trở thành một sync state rõ ràng.").replace("Verified remote changes are applied with recovery journals.", "Remote change đã verify được áp dụng cùng recovery journal.").replace("UnifiedSyncEngine checks the Vault again after Pull.", "UnifiedSyncEngine rescan Vault sau Pull.").replace("Blobs, tree and commit are built against the remote base.", "Blob, tree và commit được tạo trên remote base.").replace("StorageManager advances state only after checks permit it.", "StorageManager chỉ advance state sau khi check cho phép.") : text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24 md:px-8 md:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">{isVi ? "Classifier" : "Classifier"}</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Mười state thay cho đoán ý người dùng" : "Ten states instead of guessing user intent"}</h2>
          </div>
          <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-2">
            {syncStates.map(({ Icon, state, text }) => {
              const StateIcon = Icon as typeof Icons.Check;
              return (
                <div key={state} className="bg-bgLight p-6 dark:bg-bgDark md:p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center border border-black/15 dark:border-white/15">
                      <StateIcon size={17} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <code className="text-xs font-bold tracking-widest">{state}</code>
                  </div>
                  <p className="font-light leading-relaxed opacity-70">{isVi ? text.replace("Local file has no remote or baseline entry.", "File local không có remote hoặc baseline entry.").replace("Remote file has no local or baseline entry.", "File remote không có local hoặc baseline entry.").replace("Local differs from baseline while remote still matches.", "Local khác baseline trong khi remote vẫn khớp.").replace("Remote differs from baseline while local still matches.", "Remote khác baseline trong khi local vẫn khớp.").replace("Both sides diverged, or no usable base exists.", "Hai phía cùng diverge hoặc không có base dùng được.").replace("Canonical local and remote SHAs remain aligned.", "SHA canonical của local và remote vẫn aligned.").replace("Local is absent while remote still has baseline content.", "Local đã mất trong khi remote còn baseline content.").replace("Remote is absent while local still has baseline content.", "Remote đã mất trong khi local còn baseline content.").replace("One side deleted while the other side changed.", "Một phía bị xóa trong khi phía kia thay đổi.").replace("Both sides are absent and the old baseline can be removed.", "Cả hai phía đều mất và baseline cũ có thể xóa.") : text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark md:py-32">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">{isVi ? "Safety model" : "Safety model"}</p>
              <h2 className="mb-8 font-display text-4xl font-bold md:text-6xl">{isVi ? "Preserve trước, mutate sau" : "Preserve before mutate"}</h2>
              <p className="text-lg font-light leading-relaxed opacity-70">
                {isVi
                  ? "Pull kiểm tra blob và ghi recovery journal trước khi ghi đè hoặc xóa. Push dùng một commit/ref boundary, force: false và đọc lại ref authoritative trước khi báo thành công."
                  : "Pull verifies blobs and writes recovery evidence before overwriting or deleting. Push uses one commit/ref boundary, force: false, and rereads the authoritative ref before reporting success."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
              {[
                [Icons.Check, isVi ? "Blob verification" : "Blob verification"],
                [Icons.Refresh, isVi ? "Recovery journals" : "Recovery journals"],
                [Icons.Shield, isVi ? "Optimistic concurrency" : "Optimistic concurrency"],
                [Icons.Alert, isVi ? "Explicit conflict review" : "Explicit conflict review"],
              ].map(([Icon, label]) => (
                <div key={String(label)} className="bg-bgLight p-6 dark:bg-bgDark md:p-8">
                  <Icon size={28} strokeWidth={1.5} className="mb-8" />
                  <p className="font-display text-lg font-bold">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24 md:px-8 md:py-32">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">{isVi ? "Verification" : "Verification"}</p>
            <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Release có evidence để quay lại" : "A release with evidence to return to"}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["npm run verify", isVi ? "ESLint, typecheck, Vitest và production build trong quality gate." : "ESLint, typecheck, Vitest and production build in the quality gate."],
              ["1.0.5", isVi ? "Release tag có release assets được SHA-256 verify và attestation." : "Release tag with SHA-256 verified assets and attestation."],
              ["Windows + iPhone", isVi ? "Manual release-gate acceptance đã ghi nhận cho settings, hidden paths, normal files và restart." : "Manual release-gate acceptance recorded for settings, hidden paths, normal files and restart."],
            ].map(([label, text]) => (
              <article key={label} className="border border-black/10 p-8 dark:border-white/10 md:p-10">
                <code className="text-sm font-bold tracking-wide">{label}</code>
                <p className="mt-6 font-light leading-relaxed opacity-70">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-cardLight py-24 dark:border-white/10 dark:bg-cardDark md:py-32">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] opacity-50">{isVi ? "Non-goals" : "Non-goals"}</p>
              <h2 className="mb-8 font-display text-4xl font-bold md:text-6xl">{isVi ? "Không phải mọi thứ đều cần sync" : "Not everything needs to sync"}</h2>
              <p className="text-lg font-light leading-relaxed opacity-70">
                {isVi
                  ? "Các giới hạn này là một phần của product boundary, không phải thiếu sót cần che giấu trong portfolio."
                  : "These limits are part of the product boundary, not gaps to hide in a portfolio."}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {nonGoals.map((item) => <div key={item} className="border border-black/10 p-4 text-sm font-bold uppercase tracking-widest opacity-70 dark:border-white/10">{isVi ? item.replace("Background or scheduled sync", "Background hoặc scheduled sync").replace("Sync-on-save", "Sync-on-save").replace("Fuzzy rename inference", "Đoán rename mơ hồ").replace("Empty-directory sync", "Sync empty directory").replace("Alternative Git forges", "Git forge khác").replace("Multi-account switching", "Đổi nhiều account").replace("Force-push behavior", "Force-push") : item}</div>)}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24 md:px-8 md:py-32">
          <div className="flex flex-col items-start justify-between gap-8 border border-black p-8 dark:border-white md:flex-row md:items-center md:p-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] opacity-50">GitHub Vault Relay</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">{isVi ? "Xem plugin và source" : "Explore the plugin and source"}</h2>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="https://community.obsidian.md/plugins/github-vault-relay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border border-black px-6 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">Obsidian <Icons.ArrowRight size={16} /></a>
              <a href="https://github.com/ankhang0704/github-vault-relay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border border-black/30 px-6 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:border-black dark:border-white/30 dark:hover:border-white">GitHub <Icons.Github size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="main" />
    </>
  );
}
