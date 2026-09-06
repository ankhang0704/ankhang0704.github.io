"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";

const APP_SCREENS = [
  { label: "Home", img: "/images/fm-dictionary/fm_dictionary_0001.webp" },
  { label: "Roadmap", img: "/images/fm-dictionary/fm_dictionary_0002.webp" },
  { label: "Quiz", img: "/images/fm-dictionary/fm_dictionary_0003.webp" },
  { label: "Pronunciation", img: "/images/fm-dictionary/fm_dictionary_0004.webp" },
  { label: "Badges", img: "/images/fm-dictionary/fm_dictionary_0005.webp" },
  { label: "Dictionary", img: "/images/fm-dictionary/fm_dictionary_0006.webp" },
];

export default function FMDictionaryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: routeLang } = use(params);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const lang = routeLang === "vi" ? "vi" : "en";
  const isVi = lang === "vi";

  useGSAP(() => {
    gsap.fromTo(".fm-hero-item", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" });
    gsap.utils.toArray<HTMLElement>(".fm-reveal").forEach((element) => {
      gsap.fromTo(element, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 85%", once: true } });
    });
  });

  return (
    <div>
      <Header variant="fm" />
      <main>
        <section id="hero" className="min-h-screen flex items-center relative overflow-x-hidden pt-32 pb-20 md:pt-20 md:pb-0">
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <p className="fm-hero-item text-sm tracking-[0.3em] uppercase mb-6 border-b border-black dark:border-white inline-block pb-2">An Khang Studio · 2026</p>
            <h1 className="fm-hero-item font-display text-5xl md:text-8xl font-bold leading-tight mb-8">
              FM <span className="font-serif italic font-normal">Dictionary.</span>
            </h1>
            <p className="fm-hero-item text-xl font-light max-w-3xl mb-12 opacity-80 leading-relaxed text-justify">
              {isVi
                ? "Ứng dụng học từ vựng FM bằng Flutter với 1.847 thuật ngữ chuyên ngành, learning core local-first, dịch vụ Firebase có ranh giới rõ ràng, proxy Cloudflare và luồng luyện phát âm/STT được ghi nhận."
                : "A Flutter FM vocabulary-learning app with 1,847 specialized terms, a local-first learning core, documented Firebase service boundaries, a Cloudflare proxy, and documented pronunciation/STT flows."}
            </p>
            <div className="fm-hero-item flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="https://apps.apple.com/us/app/fm-dictionary/id6774868353" target="_blank" rel="noopener noreferrer" className="border border-black dark:border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-3">
                {isVi ? "Xem listing iOS" : "View iOS listing"}<Icons.ArrowRight size={16} />
              </a>
              <a href="#features" className="border border-black/30 dark:border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-black dark:hover:border-white transition-all flex items-center justify-center">
                {isVi ? "Khám phá tính năng" : "Explore features"}
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-black/10 dark:border-white/10 overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["1,847", isVi ? "Thuật ngữ FM chuyên ngành" : "Specialized FM terms"],
              ["Local-first", isVi ? "Learning core" : "Learning core"],
              ["VI + EN", isVi ? "Ngôn ngữ giao diện" : "Interface languages"],
              ["30", isVi ? "Huy hiệu thành tựu" : "Achievement badges"],
            ].map(([value, label]) => (
              <div key={value} className="fm-reveal text-center md:text-left">
                <div className="font-display text-4xl font-bold mb-1">{value}</div>
                <div className="text-[11px] uppercase tracking-widest opacity-50">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="py-32 bg-cardLight dark:bg-cardDark relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-20 fm-reveal">
              <h2 className="font-display text-4xl md:text-6xl font-bold">{isVi ? <>Mọi thứ cần thiết<br />để học từ vựng</> : <>A focused vocabulary<br />learning experience</>}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
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
                  <div key={String(title)} className="fm-reveal p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-colors">
                    <div className="text-3xl mb-6"><FeatureIcon size={32} /></div>
                    <h3 className="font-display text-xl font-bold mb-4">{String(title)}</h3>
                    <p className="font-light opacity-70 leading-relaxed">{String(desc)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tech" className="py-32 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-2xl mb-16 fm-reveal">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">{isVi ? "Kiến trúc" : "Architecture"}</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold">{isVi ? "Công nghệ và ranh giới dịch vụ" : "Technology with clear boundaries"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ["Flutter", isVi ? "Ứng dụng mobile" : "Mobile application"],
                ["Provider", isVi ? "Quản lý trạng thái" : "State management"],
                ["Hive", isVi ? "Lưu trữ local" : "Local storage"],
                ["Firebase", isVi ? "Auth + database" : "Auth + database"],
                ["Cloudflare Workers", isVi ? "Canonical proxy" : "Canonical proxy"],
                ["easy_localization", isVi ? "VI + EN" : "VI + EN"],
              ].map(([label, sub]) => (
                <div key={label} className="fm-reveal p-8 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark">
                  <h3 className="font-display text-2xl font-bold mb-2">{label}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-50">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-32 bg-cardLight dark:bg-cardDark relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl fm-reveal">
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">{isVi ? "Màn hình" : "Screens"}</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold">{isVi ? "Thiết kế cho việc học" : "Designed for practice"}</h2>
              </div>
              <p className="text-sm font-mono uppercase tracking-widest opacity-50">{isVi ? "Nhấn để phóng to" : "Click to enlarge"}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {APP_SCREENS.map((screen) => (
                <button key={screen.img} type="button" onClick={() => setSelectedImg(screen.img)} className="fm-reveal aspect-[9/16] relative overflow-hidden border border-black/10 dark:border-white/10 group text-left">
                  <Image src={screen.img} alt={`FM Dictionary ${screen.label}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 bg-black/80 text-white px-3 py-1 text-[10px] uppercase tracking-widest">{screen.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="permissions" className="py-32 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16 fm-reveal">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">{isVi ? "Quyền truy cập" : "Permissions"}</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">{isVi ? "Mỗi quyền có một lý do" : "Every permission has a reason"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                ["Microphone", isVi ? "Dùng cho luyện phát âm/STT. Âm thanh đi qua proxy Cloudflare theo luồng được ghi nhận trong chính sách riêng tư." : "Used for pronunciation/STT. Audio follows the documented Cloudflare proxy flow described in the privacy policy."],
                ["Internet access", isVi ? "Dùng cho Firebase sync, đăng nhập và cập nhật nội dung; learning core local-first có boundary riêng." : "Used for Firebase sync, sign-in, and content updates; the local-first learning core has a separate boundary."],
                ["Notifications", isVi ? "Tùy chọn cho nhắc học và streak; có thể tắt trong cài đặt thiết bị." : "Optional learning reminders and streak notifications; can be disabled in device settings."],
              ].map(([title, desc]) => (
                <div key={title} className="fm-reveal p-8 md:p-10 border border-black/10 dark:border-white/10">
                  <h3 className="font-display text-2xl font-bold mb-4">{title}</h3>
                  <p className="font-light opacity-70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="py-32 bg-cardLight dark:bg-cardDark relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-16 fm-reveal">
              <h2 className="font-display text-4xl md:text-5xl font-bold">{isVi ? "Truy cập dự án" : "Project access"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="fm-reveal p-8 md:p-12 border border-black/10 dark:border-white/10 bg-bgLight dark:bg-bgDark">
                <Icons.Apple size={48} className="mb-8" />
                <h3 className="font-display text-2xl font-bold mb-3">iOS listing</h3>
                <p className="font-light opacity-70 leading-relaxed mb-6">{isVi ? "Liên kết listing iOS hiện có của FM Dictionary." : "The current FM Dictionary iOS listing link."}</p>
                <a href="https://apps.apple.com/us/app/fm-dictionary/id6774868353" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-black dark:border-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">{isVi ? "Mở listing" : "Open listing"}<Icons.ArrowRight size={12} /></a>
              </div>
              <div className="fm-reveal p-8 md:p-12 border border-black/5 dark:border-white/5 bg-bgLight/50 dark:bg-bgDark/50 opacity-70">
                <Icons.GooglePlay size={48} className="mb-8" />
                <h3 className="font-display text-2xl font-bold mb-3">Android target</h3>
                <p className="font-light opacity-70 leading-relaxed">{isVi ? "Android thuộc phạm vi sản phẩm; không tuyên bố public store listing trong portfolio hiện tại." : "Android is part of the product scope; this portfolio does not claim a public store listing here."}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="fm-reveal">
              <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-50">FM Dictionary</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">{isVi ? <>Từ vựng chuyên ngành<br />cho việc học thực tế</> : <>Specialized vocabulary<br />for practical learning</>}</h2>
              <p className="font-light text-lg opacity-70 mb-6 text-justify">{isVi ? "FM Dictionary là ứng dụng học từ vựng Facilities Management bằng Flutter với 1.847 thuật ngữ, learning core local-first và các dịch vụ Firebase/Cloudflare được mô tả theo boundary rõ ràng." : "FM Dictionary is a Flutter Facilities Management vocabulary-learning app with 1,847 terms, a local-first learning core, and clearly documented Firebase and Cloudflare service boundaries."}</p>
              <p className="font-light text-lg opacity-70 text-justify">{isVi ? "Nội dung và luồng phát âm/STT được trình bày theo tài liệu dự án hiện có; portfolio không suy diễn thêm về khả năng offline tuyệt đối hay privacy tuyệt đối." : "The project documentation defines the content and pronunciation/STT flows; this portfolio avoids extending that into absolute offline or privacy claims."}</p>
            </div>
            <div className="fm-reveal space-y-3">
              {[["Privacy Policy", "privacy-policy"], ["Terms of Service", "terms-of-service"], ["Support Center", "support"], ["Delete Account", "delete-account"]].map(([label, slug]) => {
                return <Link key={slug} href={`/${lang}/fm-dictionary/${slug}/`} className="flex justify-between items-center p-4 border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-all group"><span className="text-sm font-bold uppercase tracking-widest">{label}</span><span className="group-hover:translate-x-2 transition-transform">→</span></Link>;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="fm" />

      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6" role="dialog" aria-modal="true" onClick={() => setSelectedImg(null)}>
          <div className="relative w-full max-w-2xl h-[85vh]" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImg} alt="FM Dictionary screenshot" fill sizes="90vw" className="object-contain" />
            <button type="button" onClick={() => setSelectedImg(null)} className="absolute top-0 right-0 border border-white text-white px-4 py-2 uppercase tracking-widest text-xs">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
