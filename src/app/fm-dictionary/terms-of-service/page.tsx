"use client";

import React from "react";
import { motion } from "motion/react";
import FMHeader from "../../../components/fm-dictionary/Header";
import FMFooter from "../../../components/fm-dictionary/Footer";
import { CalendarBlank, ArrowsClockwise, Buildings, FileText, ShieldCheck, Scales, WarningCircle } from "@phosphor-icons/react";

export default function TermsOfServicePage() {
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
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12" data-en="Terms of Service" data-vi="Điều khoản Dịch vụ">
              Terms of Service
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
              <p data-vi='Chào mừng bạn đến với <strong>FM Dictionary</strong> ("Ứng dụng"). Bằng cách cài đặt và sử dụng Ứng dụng này, bạn đồng ý tuân thủ các Điều khoản Dịch vụ sau đây. Vui lòng đọc kỹ trước khi sử dụng.' data-en='Welcome to <strong>FM Dictionary</strong> ("the App"). By installing and using this App, you agree to comply with the following Terms of Service. Please read them carefully.'>
                Welcome to <strong>FM Dictionary</strong> ("the App"). By installing and using this App, you agree to comply with the following Terms of Service. Please read them carefully.
              </p>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 1 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white uppercase tracking-tighter" data-vi="1. Chấp thuận các Điều khoản" data-en="1. Acceptance of Terms">1. Acceptance of Terms</h2>
              <p data-vi="Bằng việc truy cập hoặc sử dụng FM Dictionary, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý bị ràng buộc bởi các Điều khoản này. Nếu bạn không đồng ý với bất kỳ phần nào, vui lòng không sử dụng Ứng dụng." data-en="By accessing or using FM Dictionary, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part, please do not use the App.">
                By accessing or using FM Dictionary, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part, please do not use the App.
              </p>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 2 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white uppercase tracking-tighter" data-vi="2. Quyền Sở hữu Trí tuệ" data-en="2. Intellectual Property Rights">2. Intellectual Property Rights</h2>
              <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03] space-y-8">
                <div className="flex items-center space-x-4">
                  <FileText size={32} weight="thin" />
                  <h4 className="text-xl font-bold uppercase tracking-widest" data-vi="Bản quyền nội dung" data-en="Content Copyright">Content Copyright</h4>
                </div>
                <p className="text-base md:text-lg opacity-70 leading-relaxed" data-vi="Toàn bộ nội dung bao gồm nhưng không giới hạn ở: định nghĩa từ vựng, tài liệu học tập, thuật ngữ chuyên ngành, hình ảnh, mã nguồn và giao diện người dùng đều thuộc sở hữu hợp pháp của <strong>Thúy Tạ</strong> và <strong>An Khang Studio</strong>." data-en="All content including but not limited to: vocabulary definitions, learning materials, specialized terms, images, source code, and user interface are the legal property of <strong>Thuy Ta</strong> and <strong>An Khang Studio</strong>.">
                  All content including but not limited to: vocabulary definitions, learning materials, specialized terms, images, source code, and user interface are the legal property of <strong>Thuy Ta</strong> and <strong>An Khang Studio</strong>.
                </p>
                <div className="p-6 rounded-2xl bg-black dark:bg-white text-white dark:text-black text-sm font-medium" data-vi="Nghiêm cấm mọi hành vi sao chép, trích xuất dữ liệu (scraping), phân phối lại hoặc sử dụng nội dung cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản." data-en="Any act of copying, data scraping, redistributing, or using content for commercial purposes without written consent is strictly prohibited.">
                  Any act of copying, data scraping, redistributing, or using content for commercial purposes without written consent is strictly prohibited.
                </div>
              </div>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 3 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white uppercase tracking-tighter" data-vi="3. Sử dụng Hợp lệ" data-en="3. Acceptable Use">3. Acceptable Use</h2>
              <p data-vi="Bạn đồng ý sử dụng Ứng dụng cho mục đích học tập cá nhân và tuân thủ các quy tắc:" data-en="You agree to use the App for personal learning purposes and comply with these rules:">
                You agree to use the App for personal learning purposes and comply with these rules:
              </p>
              <ul className="space-y-8">
                {[
                  {
                    titleVi: "Không can thiệp hệ thống",
                    titleEn: "No System Interference",
                    descVi: "Không cố gắng phá vỡ các biện pháp bảo mật, gây quá tải máy chủ hoặc can thiệp vào hoạt động bình thường của Ứng dụng.",
                    descEn: "Do not attempt to bypass security measures, overload servers, or interfere with the normal operation of the App."
                  },
                  {
                    titleVi: "Tài khoản người dùng",
                    titleEn: "User Accounts",
                    descVi: "Bạn chịu trách nhiệm bảo mật thông tin đăng nhập từ Google/Apple Sign-In và mọi hoạt động diễn ra dưới tài khoản của bạn.",
                    descEn: "You are responsible for securing your Google/Apple Sign-In credentials and all activities under your account."
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

            {/* Section 4 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white uppercase tracking-tighter" data-vi="4. Miễn trừ Trách nhiệm" data-en="4. Disclaimer of Liability">4. Disclaimer of Liability</h2>
              <div className="p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03] space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <WarningCircle size={32} weight="thin" />
                  <h4 className="text-xl font-bold uppercase tracking-widest" data-vi="Giới hạn trách nhiệm" data-en="Limitation of Liability">Limitation of Liability</h4>
                </div>
                <p className="text-base opacity-70 leading-relaxed" data-vi="FM Dictionary được cung cấp trên cơ sở 'nguyên trạng' (as is). Chúng tôi nỗ lực đảm bảo tính chính xác của thuật ngữ nhưng không đảm bảo rằng mọi thông tin đều hoàn hảo hoặc không có sai sót kỹ thuật." data-en="FM Dictionary is provided on an 'as is' basis. We strive for accuracy but do not guarantee that all info is perfect or free of technical errors.">
                  FM Dictionary is provided on an 'as is' basis. We strive for accuracy but do not guarantee that all info is perfect or free of technical errors.
                </p>
                <p className="text-base opacity-70 leading-relaxed" data-vi="Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng hoặc không thể sử dụng Ứng dụng." data-en="We are not liable for any direct or indirect damages arising from the use or inability to use the App.">
                  We are not liable for any direct or indirect damages arising from the use or inability to use the App.
                </p>
              </div>
            </section>

            <div className="h-[1px] w-full bg-black/5 dark:bg-white/5" />

            {/* Section 5 & 6 */}
            <section className="space-y-12">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white uppercase tracking-tighter" data-vi="5. Thay đổi & 6. Liên hệ" data-en="5. Changes & 6. Contact">5. Changes & 6. Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-bold text-xl" data-vi="Cập nhật Điều khoản" data-en="Terms Updates">Terms Updates</h4>
                  <p className="text-base opacity-60 leading-relaxed" data-vi="Chúng tôi có quyền sửa đổi các Điều khoản này bất kỳ lúc nào. Việc bạn tiếp tục sử dụng Ứng dụng sau khi thay đổi có nghĩa là bạn chấp thuận các Điều khoản mới." data-en="We reserve the right to modify these Terms at any time. Continued use of the App after changes means you accept the new Terms.">We reserve the right to modify these Terms at any time. Continued use of the App after changes means you accept the new Terms.</p>
                </div>
                <div className="space-y-6 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03]">
                  <h4 className="font-bold text-xl" data-vi="Hỗ trợ" data-en="Support">Support</h4>
                  <p className="text-sm opacity-60 mb-4" data-vi="Mọi thắc mắc về Điều khoản vui lòng liên hệ:" data-en="For any questions regarding the Terms, please contact:">For any questions regarding the Terms, please contact:</p>
                  <a href="mailto:ankhang.nguyen0704@gmail.com" className="font-bold underline text-base break-all">ankhang.nguyen0704@gmail.com</a>
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
