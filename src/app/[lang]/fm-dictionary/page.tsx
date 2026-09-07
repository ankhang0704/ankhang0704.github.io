"use client";

import { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { localizedPath } from "@/lib/locale-path";
import { Icons } from "@/components/Icons";

const APP_SCREENS = [
  { IconComponent: Icons.Home, label: "Home", img: "/images/fm-dictionary/fm_dictionary_0001.webp" },
  { IconComponent: Icons.Map, label: "Roadmap", img: "/images/fm-dictionary/fm_dictionary_0002.webp" },
  { IconComponent: Icons.Edit, label: "Quiz", img: "/images/fm-dictionary/fm_dictionary_0003.webp" },
  { IconComponent: Icons.Microphone, label: "Pronunciation", img: "/images/fm-dictionary/fm_dictionary_0004.webp" },
  { IconComponent: Icons.Trophy, label: "Badges", img: "/images/fm-dictionary/fm_dictionary_0005.webp" },
  { IconComponent: Icons.Bookmark, label: "Dictionary", img: "/images/fm-dictionary/fm_dictionary_0006.webp" },
];

export default function FMDictionaryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: routeLang } = use(params);
  const lang = routeLang === "vi" ? "vi" : "en";
  const isVi = lang === "vi";
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const selectedScreen = APP_SCREENS.find((screen) => screen.img === selectedImg);

  const centerSlide = (index: number) => {
    const container = scrollRef.current;
    const card = container?.querySelectorAll<HTMLElement>(".screen-card")[index];
    if (!container || !card) return;

    container.scrollTo({
      left: card.offsetLeft - container.clientWidth / 2 + card.offsetWidth / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
    centerSlide(index);
  };

  useEffect(() => {
    if (isHoveringGallery || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((previous) => {
        const next = (previous + 1) % APP_SCREENS.length;
        window.requestAnimationFrame(() => centerSlide(next));
        return next;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isHoveringGallery]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImg(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (!selectedImg) return;
    const frame = window.requestAnimationFrame(() => modalCloseRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [selectedImg]);

  return (
    <div>
      <Header variant="fm" />

      <main id="main-content">
        <section id="hero" className="relative flex min-h-[100dvh] items-center overflow-x-hidden pb-20 pt-32 md:pb-0 md:pt-20">
          <div className="container relative z-10 mx-auto w-full min-w-0 px-6 md:px-8">
            <p className="mb-6 inline-block border-b border-black pb-2 text-sm uppercase tracking-[0.3em] dark:border-white">Product case study · 2026</p>
            <h1 className="mb-8 font-display text-5xl font-bold leading-[1.1] md:text-8xl">
              FM <span className="font-serif font-normal italic leading-[1.1]">Dictionary.</span>
            </h1>
            <p className="mb-12 w-full max-w-[calc(100vw-3rem)] break-words text-xl font-light leading-relaxed opacity-80 md:max-w-3xl">
              {isVi
                ? "Ứng dụng học từ vựng FM bằng Flutter với 1.847 thuật ngữ chuyên ngành, learning core local-first, dịch vụ Firebase có ranh giới rõ ràng, proxy Cloudflare và luồng luyện phát âm/STT được ghi nhận."
                : "A Flutter FM vocabulary-learning app with 1,847 specialized terms, a local-first learning core, documented Firebase service boundaries, a Cloudflare proxy, and documented pronunciation/STT flows."}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a href="https://apps.apple.com/us/app/fm-dictionary/id6774868353" target="_blank" rel="noopener noreferrer" className="flex w-full max-w-[calc(100vw-3rem)] items-center justify-center gap-3 border border-black px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black sm:w-auto">
                {isVi ? "Xem listing iOS" : "View iOS listing"}<Icons.ArrowRight size={16} />
              </a>
              <a href="#features" className="flex w-full max-w-[calc(100vw-3rem)] items-center justify-center border border-black/30 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:border-black dark:border-white/30 dark:hover:border-white sm:w-auto">
                {isVi ? "Khám phá tính năng" : "Explore features"}
              </a>
            </div>
            <Link href={localizedPath(lang, "/fm-dictionary/case-study/")} className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] opacity-60 transition-opacity hover:opacity-100">
              {isVi ? "Xem engineering case study" : "Read engineering case study"}<Icons.ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <section className="relative overflow-x-hidden border-y border-black/10 py-12 dark:border-white/10">
          <div className="container mx-auto grid grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-8">
            {[
              ["1,847", isVi ? "Thuật ngữ FM chuyên ngành" : "Specialized FM terms"],
              ["Local-first", isVi ? "Learning core" : "Learning core"],
              ["VI + EN", isVi ? "Ngôn ngữ giao diện" : "Interface languages"],
              ["30", isVi ? "Huy hiệu thành tựu" : "Achievement badges"],
            ].map(([value, label]) => (
              <div key={value} className="text-center md:text-left">
                <div className="mb-1 font-display text-4xl font-bold">{value}</div>
                <div className="text-[11px] uppercase tracking-widest opacity-50">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="relative scroll-mt-24 overflow-x-hidden bg-cardLight py-32 dark:bg-cardDark">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-20 max-w-3xl">
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? <>Mọi thứ cần thiết<br />để học từ vựng</> : <>A focused vocabulary<br />learning experience</>}</h2>
            </div>

            <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
              {[
                [Icons.Map, isVi ? "Lộ trình học tập" : "Roadmap Learning", isVi ? "Các chương và giai đoạn giúp bạn theo dõi quá trình học theo từng bước." : "Chapters and stages help you follow a structured learning path."],
                [Icons.Microphone, isVi ? "Luyện phát âm / STT" : "Pronunciation / STT", isVi ? "Luồng luyện phát âm dùng microphone và proxy Cloudflare theo boundary được ghi nhận." : "Pronunciation practice uses the microphone and the documented Cloudflare proxy boundary."],
                [Icons.Trophy, isVi ? "Hệ thống huy hiệu" : "Achievement System", isVi ? "30 huy hiệu và chuỗi ngày học giúp duy trì động lực." : "30 achievement badges and learning streaks keep practice visible."],
                [Icons.Bookmark, isVi ? "Từ điển chuyên ngành" : "FM Dictionary", isVi ? "Tra cứu 1.847 thuật ngữ FM với định nghĩa và ví dụ theo nội dung ứng dụng." : "Look up 1,847 FM terms with definitions and examples from the app content."],
                [Icons.Language, isVi ? "Giao diện VI + EN" : "VI + EN interface", isVi ? "Giao diện được bản địa hóa cho tiếng Việt và tiếng Anh." : "The interface is localized for Vietnamese and English."],
                [Icons.Home, isVi ? "Learning core local-first" : "Local-first learning core", isVi ? "Các luồng học cốt lõi ưu tiên dữ liệu local; đồng bộ và dịch vụ mạng có boundary riêng." : "Core learning flows prioritize local data, with separate sync and network service boundaries."],
              ].map(([Icon, title, desc]) => {
                const FeatureIcon = Icon as typeof Icons.Home;
                return (
                  <div key={String(title)} className="border border-black/5 p-8 transition-colors hover:border-black/20 dark:border-white/5 dark:hover:border-white/20 md:p-10">
                    <div className="mb-6"><FeatureIcon size={32} strokeWidth={1.5} aria-hidden="true" /></div>
                    <h3 className="mb-4 font-display text-xl font-bold">{String(title)}</h3>
                    <p className="font-light leading-relaxed opacity-70">{String(desc)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tech" className="relative scroll-mt-24 overflow-x-hidden py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-50">{isVi ? "Kiến trúc" : "Architecture"}</p>
              <h2 className="font-display text-4xl font-bold md:text-5xl">{isVi ? "Công nghệ và ranh giới dịch vụ" : "Technology with clear boundaries"}</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                ["Flutter", isVi ? "Ứng dụng mobile" : "Mobile application"],
                ["Provider", isVi ? "Quản lý trạng thái" : "State management"],
                ["Hive", isVi ? "Lưu trữ local" : "Local storage"],
                ["Firebase", isVi ? "Auth + database" : "Auth + database"],
                ["Cloudflare Workers", isVi ? "Canonical proxy" : "Canonical proxy"],
                ["easy_localization", "VI + EN"],
              ].map(([label, sub]) => (
                <div key={label} className="flex items-center gap-4 border border-black/10 p-6 transition-colors hover:border-black dark:border-white/10 dark:hover:border-white">
                  <div className="h-2 w-2 shrink-0 bg-black dark:bg-white" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-tight">{label}</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-50">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="fm-gallery relative scroll-mt-24 overflow-x-hidden bg-cardLight py-32 dark:bg-cardDark">
          <div className="container mx-auto mb-16 flex flex-col items-center justify-between gap-8 px-6 md:flex-row md:items-end md:px-8">
            <div className="max-w-2xl text-center md:text-left">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Màn hình" : "Screens"}</p>
              <h2 className="font-display text-4xl font-bold md:text-6xl">{isVi ? "Thiết kế cho việc học" : "Designed for practice"}</h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {APP_SCREENS.map((screen, index) => (
                  <button key={screen.img} type="button" onClick={() => scrollToSlide(index)} aria-label={`Go to slide ${index + 1}`} aria-current={index === currentSlide ? "true" : undefined} className="flex h-11 w-11 items-center justify-center">
                    <span className={index === currentSlide ? "h-2 w-6 bg-black dark:bg-white" : "h-2 w-2 bg-black/20 dark:bg-white/20"} />
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => scrollToSlide((currentSlide - 1 + APP_SCREENS.length) % APP_SCREENS.length)} aria-label="Previous screen" className="flex h-11 w-11 items-center justify-center border border-black/10 transition-colors hover:border-black dark:border-white/10 dark:hover:border-white">
                  <Icons.ChevronLeft size={16} />
                </button>
                <button type="button" onClick={() => scrollToSlide((currentSlide + 1) % APP_SCREENS.length)} aria-label="Next screen" className="flex h-11 w-11 items-center justify-center border border-black/10 transition-colors hover:border-black dark:border-white/10 dark:hover:border-white">
                  <Icons.ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div
            onMouseEnter={() => setIsHoveringGallery(true)}
            onMouseLeave={() => setIsHoveringGallery(false)}
            onFocusCapture={() => setIsHoveringGallery(true)}
            onBlurCapture={(event) => {
              if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                setIsHoveringGallery(false);
              }
            }}
            onPointerDown={() => setIsHoveringGallery(true)}
          >
            <div ref={scrollRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-8 scrollbar-hide md:gap-8 md:px-32">
              {APP_SCREENS.map((item, index) => {
                const IconComp = item.IconComponent;
                return (
                  <button key={item.img} type="button" onClick={() => setSelectedImg(item.img)} className={`screen-card group relative aspect-[9/19] w-[68vw] max-w-[17rem] flex-none snap-center overflow-hidden border bg-bgLight text-left transition-all duration-500 dark:bg-bgDark md:w-72 ${index === currentSlide ? "border-black dark:border-white" : "border-black/10 dark:border-white/10 hover:border-black/40 dark:hover:border-white/40"}`}>
                    <Image src={item.img} alt={`FM Dictionary ${item.label}`} fill sizes="(max-width: 768px) 68vw, 288px" className="object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-20 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="text-white">
                      <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] opacity-60"><IconComp size={12} aria-hidden="true" /> UI Screen</div>
                        <div className="font-display text-lg font-bold uppercase tracking-widest">{item.label}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            {!isHoveringGallery && <div className="h-[2px] bg-black/5 dark:bg-white/5"><div key={currentSlide} className="h-full bg-black dark:bg-white" style={{ animation: "slideProgress 3s linear forwards" }} /></div>}
          </div>
        </section>

        <section id="download" className="relative scroll-mt-24 overflow-x-hidden border-t border-black/5 bg-cardLight py-32 dark:border-white/5 dark:bg-cardDark">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="font-display text-4xl font-bold md:text-5xl">{isVi ? "Truy cập dự án" : "Project access"}</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col items-center gap-8 border border-black/10 bg-bgLight p-8 transition-colors hover:border-black dark:border-white/10 dark:bg-bgDark dark:hover:border-white md:flex-row md:items-start md:p-12">
                <Icons.Apple size={48} strokeWidth={1.5} aria-hidden="true" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 font-display text-2xl font-bold">iOS listing</h3>
                  <p className="mb-6 font-light leading-relaxed opacity-70">{isVi ? "Liên kết listing iOS hiện có của FM Dictionary." : "The current FM Dictionary iOS listing link."}</p>
                  <a href="https://apps.apple.com/us/app/fm-dictionary/id6774868353" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-black px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">{isVi ? "Mở listing" : "Open listing"}<Icons.ArrowRight size={12} /></a>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 border border-black/5 bg-bgLight/50 p-8 opacity-70 dark:border-white/5 dark:bg-bgDark/50 md:flex-row md:items-start md:p-12">
                <Icons.GooglePlay size={48} strokeWidth={1.5} aria-hidden="true" />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 font-display text-2xl font-bold">Android target</h3>
                  <p className="font-light leading-relaxed opacity-70">{isVi ? "Android thuộc phạm vi sản phẩm; không tuyên bố public store listing trong portfolio hiện tại." : "Android is part of the product scope; this portfolio does not claim a public store listing here."}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="permissions" className="relative scroll-mt-24 overflow-x-hidden py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">{isVi ? "Quyền truy cập" : "Permissions"}</p>
              <h2 className="font-display text-4xl font-bold md:text-5xl">{isVi ? "Mỗi quyền có một lý do" : "Every permission has a reason"}</h2>
            </div>

            <div className="space-y-6">
              {[
                [Icons.Microphone, "Microphone", isVi ? "Dùng cho luyện phát âm/STT. Âm thanh đi qua proxy Cloudflare theo luồng được ghi nhận trong chính sách riêng tư." : "Used for pronunciation/STT. Audio follows the documented Cloudflare proxy flow described in the privacy policy.", isVi ? "Bắt buộc cho tính năng" : "Required for feature"],
                [Icons.Globe, "Internet access", isVi ? "Dùng cho Firebase sync, đăng nhập và cập nhật nội dung; learning core local-first có boundary riêng." : "Used for Firebase sync, sign-in, and content updates; the local-first learning core has a separate boundary.", isVi ? "Bắt buộc để đồng bộ" : "Required for sync"],
                [Icons.Bell, "Notifications", isVi ? "Tùy chọn cho nhắc học và streak; có thể tắt trong cài đặt thiết bị." : "Optional learning reminders and streak notifications; can be disabled in device settings.", isVi ? "Tùy chọn" : "Optional"],
              ].map(([Icon, title, desc, tag]) => {
                const PermissionIcon = Icon as typeof Icons.Microphone;
                return (
                  <div key={String(title)} className="flex flex-col items-start gap-8 border border-black/10 p-6 transition-colors hover:border-black dark:border-white/10 dark:hover:border-white md:flex-row md:p-8">
                    <PermissionIcon size={32} strokeWidth={1.5} aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="mb-2 font-display text-xl font-bold">{String(title)}</h3>
                      <p className="mb-4 font-light leading-relaxed opacity-70">{String(desc)}</p>
                      <span className="border border-black/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest opacity-70 dark:border-white/30">{String(tag)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-x-hidden bg-cardLight py-32 dark:bg-cardDark">
          <div className="container mx-auto grid grid-cols-1 items-start gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] opacity-50">FM Dictionary</p>
              <h2 className="mb-8 font-display text-4xl font-bold md:text-5xl">{isVi ? <>Từ vựng chuyên ngành<br />cho việc học thực tế</> : <>Specialized vocabulary<br />for practical learning</>}</h2>
              <p className="mb-6 text-lg font-light leading-relaxed opacity-70">{isVi ? "FM Dictionary là ứng dụng học từ vựng Facilities Management bằng Flutter với 1.847 thuật ngữ, learning core local-first và các dịch vụ Firebase/Cloudflare được mô tả theo boundary rõ ràng." : "FM Dictionary is a Flutter Facilities Management vocabulary-learning app with 1,847 terms, a local-first learning core and clearly documented Firebase and Cloudflare service boundaries."}</p>
              <p className="text-lg font-light leading-relaxed opacity-70">{isVi ? "Nội dung và luồng phát âm/STT được trình bày theo tài liệu dự án hiện có; portfolio không suy diễn thêm về khả năng offline tuyệt đối hay privacy tuyệt đối." : "The project documentation defines the content and pronunciation/STT flows; this portfolio avoids extending that into absolute offline or privacy claims."}</p>
            </div>

            <div className="space-y-3">
              {[
                [Icons.Shield, isVi ? "Chính sách bảo mật" : "Privacy Policy", "privacy-policy"],
                [Icons.File, isVi ? "Điều khoản dịch vụ" : "Terms of Service", "terms-of-service"],
                [Icons.Headset, isVi ? "Trung tâm hỗ trợ" : "Support Center", "support"],
                [Icons.Trash, isVi ? "Xóa tài khoản" : "Delete Account", "delete-account"],
              ].map(([Icon, label, slug]) => {
                const LinkIcon = Icon as typeof Icons.File;
                return (
                  <Link key={String(slug)} href={localizedPath(lang, `/fm-dictionary/${String(slug)}/`)} className="group flex items-center justify-between border border-black/10 p-4 transition-colors hover:border-black dark:border-white/10 dark:hover:border-white">
                    <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest"><LinkIcon size={18} strokeWidth={1.5} aria-hidden="true" />{String(label)}</span>
                    <Icons.ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-2" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer variant="fm" />

      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6" role="dialog" aria-modal="true" aria-label={isVi ? "Xem ảnh màn hình FM Dictionary" : "FM Dictionary screen preview"} onClick={() => setSelectedImg(null)}>
          <div className="relative h-[85vh] w-full max-w-2xl" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImg} alt={`FM Dictionary ${selectedScreen?.label ?? "screen"}`} fill sizes="90vw" className="object-contain" />
            <button ref={modalCloseRef} type="button" onClick={() => setSelectedImg(null)} aria-label="Close image" className="absolute right-0 top-0 border border-white px-4 py-2 text-xs uppercase tracking-widest text-white">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
