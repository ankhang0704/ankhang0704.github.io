"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import FMHeader from "../../../components/fm-dictionary/Header";
import FMFooter from "../../../components/fm-dictionary/Footer";
import { CalendarBlank, ArrowsClockwise, Buildings, ShieldCheck, ArrowRight } from "@phosphor-icons/react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-bgLight text-textLight dark:bg-bgDark dark:text-textDark selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black min-h-screen">
      <div className="noise-overlay" />
      <div className="ambient-glow top-glow opacity-20 dark:opacity-10" />
      <div className="ambient-glow bottom-glow opacity-20 dark:opacity-5" />

      <FMHeader />

      <main className="pt-48 pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-5xl">
          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <div className="flex items-center space-x-3 mb-8">
              <span className="h-[1px] w-8 bg-black dark:bg-white opacity-30"></span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50" data-en="Legal Document" data-vi="Văn bản pháp lý">Legal Document</p>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12" data-en="Privacy Policy" data-vi="Chính sách Bảo mật">
              Privacy Policy
            </h1>

            <div className="flex flex-wrap gap-10">
              <div className="flex items-center space-x-3 opacity-40">
                <CalendarBlank size={16} weight="bold" />
                <span className="text-[10px] font-bold uppercase tracking-widest" data-en="Effective: Jan 01, 2026" data-vi="Hiệu lực: 01/01/2026">Effective: Jan 01, 2026</span>
              </div>
              <div className="flex items-center space-x-3 opacity-40">
                <ArrowsClockwise size={16} weight="bold" />
                <span className="text-[10px] font-bold uppercase tracking-widest" data-en="Updated: June 01, 2026" data-vi="Cập nhật: 01/06/2026">Updated: June 01, 2026</span>
              </div>
              <div className="flex items-center space-x-3 opacity-40">
                <Buildings size={16} weight="bold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">An Khang Studio</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="space-y-20 text-lg md:text-xl font-light leading-relaxed opacity-80"
          >
            <section className="space-y-8">
              <p data-vi='Chào mừng bạn đến với <strong>FM Dictionary</strong> ("Ứng dụng", "chúng tôi"). Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo rằng thông tin cá nhân của bạn được xử lý một cách an toàn, minh bạch và có trách nhiệm.' data-en='Welcome to <strong>FM Dictionary</strong> ("the App", "we", "our"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe, transparent, and responsible manner.'>
                Welcome to <strong>FM Dictionary</strong> ("the App", "we", "our"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe, transparent, and responsible manner.
              </p>
              <p data-vi="Chính sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, xử lý, bảo mật và xóa dữ liệu của bạn khi bạn sử dụng ứng dụng di động FM Dictionary trên các hệ điều hành iOS và Android. Bằng cách cài đặt và sử dụng ứng dụng, bạn đồng ý với các điều khoản được quy định trong chính sách này." data-en="This Privacy Policy explains how we collect, use, process, secure, and delete your data when you use the FM Dictionary mobile application on iOS and Android operating systems. By installing and using the app, you agree to the terms set forth in this policy.">
                This Privacy Policy explains how we collect, use, process, secure, and delete your data when you use the FM Dictionary mobile application on iOS and Android operating systems. By installing and using the app, you agree to the terms set forth in this policy.
              </p>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 1 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white" data-vi="1. Dữ liệu chúng tôi thu thập và mục đích sử dụng" data-en="1. Data Collection and Purpose of Use">1. Data Collection and Purpose of Use</h2>
              <p data-vi="Chúng tôi chỉ thu thập và xử lý các thông tin cần thiết tối thiểu để vận hành các tính năng cốt lõi của ứng dụng, đồng bộ tiến trình học tập, chẩn đoán lỗi hệ thống và bảo mật tài khoản của bạn:" data-en="We only collect and process the minimum necessary information to operate the app's core features, sync learning progress, diagnose system errors, and secure your account:">
                We only collect and process the minimum necessary information to operate the app's core features, sync learning progress, diagnose system errors, and secure your account:
              </p>
              <ul className="space-y-12">
                {[
                  {
                    titleVi: "Thông tin tài khoản (Đăng nhập)",
                    titleEn: "Account Information (Login)",
                    descVi: "Khi bạn đăng ký hoặc đăng nhập thông qua bên thứ ba (Google/Apple), chúng tôi nhận được Email, Họ và tên, và Ảnh đại diện. Dùng để xác thực danh tính, tạo tài khoản và đồng bộ dữ liệu.",
                    descEn: "When you register or log in via third parties (Google/Apple), we receive Email, Full Name, and Profile Picture. Used for authentication, account creation, and data sync."
                  },
                  {
                    titleVi: "Tiến độ học tập và Thành tựu",
                    titleEn: "Learning Progress and Achievements",
                    descVi: "Lịch sử học từ vựng, danh sách đánh dấu (flashcard), kết quả kiểm tra (quiz), chuỗi ngày học (streak) và huy hiệu. Dùng để tránh mất mát dữ liệu khi đổi thiết bị.",
                    descEn: "Vocabulary history, bookmarked lists (flashcards), quiz results, daily streaks, and badges. Used to prevent data loss when changing devices."
                  },
                  {
                    titleVi: "Nhóm học tập (Social Learning)",
                    titleEn: "Social Learning Groups",
                    descVi: "Nếu tham gia nhóm riêng tư, tên và chỉ số tiến trình của bạn sẽ hiển thị công khai chỉ đối với các thành viên trong nhóm đó. Thúc đẩy động lực học tập nhóm.",
                    descEn: "If joining a private group, your name and progress metrics will be visible only to members of that group. Promotes group learning motivation."
                  },
                  {
                    titleVi: "Dữ liệu kỹ thuật và chẩn đoán",
                    titleEn: "Technical Data and Automatic Error Diagnostics",
                    descVi: "Địa chỉ IP, loại thiết bị, hệ điều hành, mã định danh ngẫu nhiên và nhật ký lỗi. Giám sát hiệu năng và bảo vệ ứng dụng khỏi tấn công.",
                    descEn: "IP address, device type, OS, random identifiers, and crash logs. Monitors performance and protects against attacks."
                  }
                ].map((item, index) => (
                  <li key={index} className="flex gap-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 mt-3 flex-shrink-0" />
                    <div>
                      <strong className="block text-black dark:text-white mb-2 text-xl" data-vi={item.titleVi} data-en={item.titleEn}>{item.titleEn}</strong>
                      <span className="opacity-70 leading-relaxed block" data-vi={item.descVi} data-en={item.descEn}>{item.descEn}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 2 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white" data-vi="2. Quyền truy cập thiết bị và Xử lý âm thanh (Tính năng phát âm AI)" data-en="2. Device Access and Audio Processing (AI Pronunciation Feature)">2. Device Access and Audio Processing (AI Pronunciation Feature)</h2>
              <p data-vi="Ứng dụng tích hợp tính năng phân tích phát âm bằng trí tuệ nhân tạo (AI), yêu cầu quyền truy cập vào Microphone:" data-en="The app integrates AI pronunciation analysis, requiring access to the Microphone:">
                The app integrates AI pronunciation analysis, requiring access to the Microphone:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03]">
                  <h4 className="text-xl font-bold mb-6" data-vi="Sự đồng ý rõ ràng" data-en="Explicit Consent">Explicit Consent</h4>
                  <p className="text-sm opacity-70 leading-relaxed" data-vi="Chúng tôi chỉ truy cập Microphone khi bạn đồng ý qua hộp thoại hệ thống. Bạn có thể thu hồi quyền này bất kỳ lúc nào trong cài đặt thiết bị." data-en="We only access the Microphone when you agree via the system dialog. You can revoke this permission anytime in device settings.">
                    We only access the Microphone when you agree via the system dialog. You can revoke this permission anytime in device settings.
                  </p>
                </div>
                <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03]">
                  <h4 className="text-xl font-bold mb-6" data-vi="Xử lý thời gian thực" data-en="Real-time Processing">Real-time Processing</h4>
                  <p className="text-sm opacity-70 leading-relaxed" data-vi="Ứng dụng chỉ thu âm khi bạn nhấn giữ nút ghi âm trong các bài học. Tệp âm thanh được mã hóa và chuyển giao an toàn qua HTTPS." data-en="The app only records when you hold the record button during lessons. Audio files are encrypted and securely transferred via HTTPS.">
                    The app only records when you hold the record button during lessons. Audio files are encrypted and securely transferred via HTTPS.
                  </p>
                </div>
              </div>

              <div className="p-10 rounded-3xl bg-black dark:bg-white text-white dark:text-black">
                <div className="flex items-center space-x-4 mb-8">
                  <ShieldCheck size={32} weight="thin" />
                  <h4 className="text-xl font-bold" data-vi="Xóa tức thì & Bảo mật tuyệt đối" data-en="Instant Deletion & Absolute Privacy">Instant Deletion & Absolute Privacy</h4>
                </div>
                <p className="opacity-80 leading-relaxed" data-vi="Ngay sau khi nhận diện hoàn tất, tệp âm thanh tạm thời sẽ bị xóa bỏ lập tức và vĩnh viễn. Chúng tôi không lưu trữ, không ghi nhật ký và không bao giờ chia sẻ dữ liệu âm thanh này với bên thứ ba." data-en="Immediately after recognition, temporary audio files are deleted permanently. We do not store, log, or share this audio data with third parties.">
                  Immediately after recognition, temporary audio files are deleted permanently. We do not store, log, or share this audio data with third parties.
                </p>
              </div>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 3 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white" data-vi="3. Dịch vụ bên thứ ba & Cam kết Dữ liệu" data-en="3. Third-party Services & Data Commitment">3. Third-party Services & Data Commitment</h2>
              <p data-vi="Chúng tôi sử dụng các dịch vụ uy tín toàn cầu để đảm bảo vận hành kỹ thuật:" data-en="We use reputable global services to ensure technical operation:">
                We use reputable global services to ensure technical operation:
              </p>
              <div className="flex flex-wrap gap-4">
                {["Google Sign-In", "Apple Sign-In", "Firebase", "Cloudflare Workers"].map(s => (
                  <span key={s} className="px-6 py-3 rounded-full border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-widest">{s}</span>
                ))}
              </div>
              
              <div className="space-y-8 mt-12 p-10 md:p-12 border border-black/10 dark:border-white/10 italic rounded-[40px]">
                <p className="font-bold uppercase tracking-widest text-sm" data-vi="Cam kết quan trọng:" data-en="Core Commitments:">Core Commitments:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <strong className="block mb-4 not-italic" data-vi="Không bán dữ liệu" data-en="No Data Selling">No Data Selling</strong>
                    <p className="text-base opacity-70" data-vi="Chúng tôi không bán, thuê hay trao đổi thông tin của bạn cho bất kỳ bên thứ ba nào vì mục đích quảng cáo." data-en="We do not sell, rent, or trade your information to any third parties for advertising purposes.">We do not sell, rent, or trade your information to any third parties for advertising purposes.</p>
                  </div>
                  <div>
                    <strong className="block mb-4 not-italic" data-vi="Chính sách No-Tracking" data-en="No-Tracking Policy">No-Tracking Policy</strong>
                    <p className="text-base opacity-70" data-vi="Ứng dụng tuân thủ nghiêm ngặt cơ chế App Tracking Transparency. Không sử dụng mã định danh để theo dõi hành vi của bạn." data-en="The app strictly complies with App Tracking Transparency. No identifiers are used to track your behavior.">The app strictly complies with App Tracking Transparency. No identifiers are used to track your behavior.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 4 & 5 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white" data-vi="4. Bảo mật & 5. Quyền của người dùng" data-en="4. Security & 5. User Rights">4. Security & 5. User Rights</h2>
              <p data-vi="Mọi dữ liệu được mã hóa SSL/TLS qua HTTPS. Bạn có quyền kiểm soát tuyệt đối, bao gồm chỉnh sửa và xóa vĩnh viễn tài khoản:" data-en="All data is SSL/TLS encrypted via HTTPS. You have absolute control, including editing and permanent deletion:">
                All data is SSL/TLS encrypted via HTTPS. You have absolute control, including editing and permanent deletion:
              </p>
              <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03]">
                <h4 className="text-xl font-bold mb-6" data-vi="Quy trình xóa dữ liệu" data-en="Data Deletion Process">Data Deletion Process</h4>
                <p className="text-base opacity-70 leading-relaxed mb-8" data-vi="Sau khi xác nhận xóa, toàn bộ thông tin định danh và tiến độ học tập sẽ bị xóa bỏ hoàn toàn khỏi hệ thống trong vòng 30 ngày và không thể khôi phục." data-en="After confirming deletion, all identifiable info and learning progress will be completely removed from the system within 30 days and cannot be recovered.">
                  After confirming deletion, all identifiable info and learning progress will be completely removed from the system within 30 days and cannot be recovered.
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                  <Link href="/fm-dictionary/delete-account" className="inline-flex items-center space-x-4 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all shadow-xl">
                    <span data-vi="Trang xóa tài khoản" data-en="Deletion Page">Deletion Page</span>
                    <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 6, 7, 8 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white" data-vi="Thông tin bổ sung" data-en="Additional Information">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-bold text-xl" data-vi="Trẻ em" data-en="Children's Privacy">Children's Privacy</h4>
                  <p className="text-base opacity-60 leading-relaxed" data-vi="Ứng dụng không hướng tới trẻ em dưới 13 tuổi. Nếu phát hiện sai sót, vui lòng liên hệ hỗ trợ để xóa dữ liệu lập tức." data-en="The App is not directed at children under 13. If errors are found, contact support to delete data immediately.">The App is not directed at children under 13. If errors are found, contact support to delete data immediately.</p>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-xl" data-vi="Thay đổi chính sách" data-en="Policy Changes">Policy Changes</h4>
                  <p className="text-base opacity-60 leading-relaxed" data-vi="Chúng tôi có thể cập nhật chính sách này để phản ánh các thay đổi vận hành hoặc pháp lý mới từ Google/Apple." data-en="We may update this policy to reflect operational changes or new legal requirements from Google/Apple.">We may update this policy to reflect operational changes or new legal requirements from Google/Apple.</p>
                </div>
              </div>
            </section>

            <section className="p-12 lg:p-16 rounded-[40px] border border-red-500/10 bg-red-500/[0.02] space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-red-500/80" data-vi="Liên hệ với chúng tôi" data-en="Contact Us">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
                <div>
                  <p className="font-bold mb-2 opacity-40 uppercase tracking-widest text-[10px]">Developer</p>
                  <p className="font-medium">An Khang Studio</p>
                </div>
                <div>
                  <p className="font-bold mb-2 opacity-40 uppercase tracking-widest text-[10px]">Copyright Owner</p>
                  <p className="font-medium">Thuy Ta</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-bold mb-2 opacity-40 uppercase tracking-widest text-[10px]">Support Email</p>
                  <a href="mailto:ankhang.nguyen0704@gmail.com" className="font-medium underline break-all">ankhang.nguyen0704@gmail.com</a>
                </div>
              </div>
            </section>

            <div className="pt-20 text-center opacity-30 text-[9px] font-bold uppercase tracking-[0.3em]">
              © 2026 An Khang Studio · All Rights Reserved
            </div>
          </motion.div>
        </div>
      </main>

      <FMFooter />
    </div>
  );
}
