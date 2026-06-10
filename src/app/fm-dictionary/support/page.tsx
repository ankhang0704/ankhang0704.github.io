"use client";

import React from "react";
import { motion } from "motion/react";
import FMHeader from "../../../components/fm-dictionary/Header";
import FMFooter from "../../../components/fm-dictionary/Footer";
import { EnvelopeSimple, ChatCircleDots, Question, ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function SupportPage() {
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
            <Link href="/fm-dictionary" className="inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-8">
              <ArrowLeft size={14} weight="bold" />
              <span>Back to App</span>
            </Link>

            <div className="flex items-center space-x-3 mb-8">
              <span className="h-[1px] w-8 bg-black dark:bg-white opacity-30"></span>
              <p className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50" data-en="Help Center" data-vi="Trung tâm hỗ trợ">Help Center</p>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12" data-en="Support & Contact" data-vi="Hỗ trợ & Liên hệ">
              Support & Contact
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {/* Contact Method 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-12 rounded-[40px] premium-card flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-10 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-500">
                  <EnvelopeSimple size={32} className="group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight" data-vi="Email hỗ trợ" data-en="Email Support">Email Support</h3>
                <p className="text-lg font-light opacity-60 leading-relaxed mb-8" data-vi="Gửi phản hồi, báo lỗi hoặc yêu cầu dữ liệu trực tiếp tới đội ngũ phát triển. Chúng tôi sẽ phản hồi sớm nhất có thể." data-en="Send feedback, bug reports, or data requests directly to the development team. We will respond as soon as possible.">
                  Send feedback, bug reports, or data requests directly to the development team. We will respond as soon as possible.
                </p>
              </div>
              <a href="mailto:ankhang.nguyen0704@gmail.com" className="text-sm font-bold border-b border-black/10 dark:border-white/10 pb-2 w-fit hover:border-black dark:hover:border-white transition-all">
                ankhang.nguyen0704@gmail.com
              </a>
            </motion.div>

            {/* Contact Method 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 md:p-12 rounded-[40px] bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 dark:bg-black/10 flex items-center justify-center mb-10">
                  <ChatCircleDots size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight" data-vi="Cộng đồng FM" data-en="Community">Community</h3>
                <p className="text-lg font-light opacity-70 leading-relaxed mb-8" data-vi="Tham gia trao đổi kiến thức Quản lý Cơ sở vật chất cùng hàng ngàn chuyên gia khác trên khắp Việt Nam." data-en="Join Facility Management knowledge sharing with thousands of other professionals across Vietnam.">
                  Join Facility Management knowledge sharing with thousands of other professionals across Vietnam.
                </p>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">Coming Soon</div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[40px] glass-card gradient-border"
          >
            <div className="flex items-center space-x-4 mb-12">
              <Question size={32} weight="thin" />
              <h2 className="text-3xl font-bold tracking-tight" data-vi="Câu hỏi thường gặp" data-en="Frequently Asked Questions">Frequently Asked Questions</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  qVi: "Ứng dụng có hoàn toàn miễn phí?",
                  qEn: "Is the app completely free?",
                  aVi: "FM Dictionary hiện tại hoàn toàn miễn phí cho cộng đồng và không có quảng cáo gây phiền nhiễu.",
                  aEn: "FM Dictionary is currently completely free for the community and contains no intrusive ads."
                },
                {
                  qVi: "Tôi có thể học khi không có mạng?",
                  qEn: "Can I learn offline?",
                  aVi: "Có, toàn bộ dữ liệu từ điển và tiến độ học tập được lưu trữ cục bộ để bạn học mọi lúc, mọi nơi.",
                  aEn: "Yes, all dictionary data and learning progress are stored locally for anytime, anywhere access."
                },
                {
                  qVi: "Làm sao để yêu cầu thêm từ vựng?",
                  qEn: "How to request more terms?",
                  aVi: "Bạn có thể gửi yêu cầu trực tiếp qua email hỗ trợ của chúng tôi để bổ sung thuật ngữ mới.",
                  aEn: "You can send requests directly via our support email to suggest new specialized terms."
                },
                {
                  qVi: "Dữ liệu của tôi có an toàn không?",
                  qEn: "Is my data secure?",
                  aVi: "Chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật của Google và Apple để bảo vệ dữ liệu của bạn.",
                  aEn: "We strictly comply with Google and Apple security standards to protect your data."
                }
              ].map((faq, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="font-bold text-lg text-black dark:text-white" data-vi={faq.qVi} data-en={faq.qEn}>{faq.qEn}</h4>
                  <p className="font-light opacity-60 leading-relaxed text-base" data-vi={faq.aVi} data-en={faq.aEn}>{faq.aEn}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="pt-32 text-center opacity-30 text-[9px] font-bold uppercase tracking-[0.3em]">
            © 2026 An Khang Studio · Dedicated to FM Excellence
          </div>
        </div>
      </main>

      <FMFooter />
    </div>
  );
}
