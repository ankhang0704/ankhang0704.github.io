"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FMHeader from "../../../components/fm-dictionary/Header";
import FMFooter from "../../../components/fm-dictionary/Footer";
import { Warning, CheckCircle, PaperPlaneTilt, ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function DeleteAccountPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !confirmed) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent("FM Dictionary - Account Deletion Request");
    const body = encodeURIComponent(
      `Hello,\n\nPlease delete my FM Dictionary account and all associated data permanently.\n\nAccount Details:\n- Name: ${name}\n- Registered Email: ${email}\n\nI confirm that I understand this action is permanent and cannot be undone after 30 days.\n\nThank you.`
    );

    window.location.href = `mailto:ankhang.nguyen0704@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setFormSubmitted(true);
      setIsSubmitting(false);
    }, 800);
  };

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
              <p className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50" data-en="Account Services" data-vi="Dịch vụ tài khoản">Account Services</p>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12" data-en="Delete Account" data-vi="Xóa Tài Khoản">
              Delete Account
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left: Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed opacity-70">
                <p data-vi="Chúng tôi hiểu rằng đôi khi bạn muốn xóa tài khoản. FM Dictionary tôn trọng quyền kiểm soát tuyệt đối của bạn đối với dữ liệu cá nhân." data-en="We understand that sometimes you might want to delete your account. FM Dictionary respects your absolute control over your personal data.">
                  We understand that sometimes you might want to delete your account. FM Dictionary respects your absolute control over your personal data.
                </p>
                <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/10 text-red-500/80">
                  <div className="flex items-center space-x-3 mb-4">
                    <Warning size={24} weight="bold" />
                    <span className="text-sm font-bold uppercase tracking-widest" data-vi="Lưu ý quan trọng" data-en="Permanent Action">Permanent Action</span>
                  </div>
                  <p className="text-sm leading-relaxed" data-vi="Dữ liệu sẽ bị xóa vĩnh viễn và không thể khôi phục sau 30 ngày." data-en="Your data will be permanently deleted and cannot be recovered after 30 days.">Your data will be permanently deleted and cannot be recovered after 30 days.</p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold tracking-tight" data-vi="Cách thực hiện trong ứng dụng" data-en="In-App Deletion Method">In-App Deletion Method</h3>
                <ol className="space-y-4 text-sm font-medium opacity-60">
                  <li className="flex gap-4"><span className="opacity-30">01</span> <span data-vi="Mở ứng dụng FM Dictionary" data-en="Open FM Dictionary App">Open FM Dictionary App</span></li>
                  <li className="flex gap-4"><span className="opacity-30">02</span> <span data-vi="Vào Cài đặt > Thông tin cá nhân" data-en="Go to Settings > Profile">Go to Settings &gt; Profile</span></li>
                  <li className="flex gap-4"><span className="opacity-30">03</span> <span data-vi="Chọn Xóa tài khoản & Xác nhận" data-en="Select Delete Account & Confirm">Select Delete Account &amp; Confirm</span></li>
                </ol>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 lg:p-20 rounded-[40px] bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.03] dark:border-white/[0.03] text-center"
                  >
                    <CheckCircle size={80} weight="thin" className="mx-auto mb-8 text-green-500" />
                    <h3 className="text-3xl font-bold mb-6 tracking-tight" data-vi="Đã sẵn sàng gửi" data-en="Ready to Send">Ready to Send</h3>
                    <p className="text-lg font-light opacity-60 mb-10" data-vi="Ứng dụng email của bạn sẽ được mở. Vui lòng bấm Gửi để hoàn tất." data-en="Your email client should have opened. Please press Send in that email to complete the process.">Your email client should have opened. Please press Send in that email to complete the process.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity"
                      data-vi="Gửi yêu cầu khác"
                      data-en="Submit another request"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-10 md:p-16 rounded-[40px] premium-card space-y-10"
                  >
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-1" data-vi="Họ và Tên" data-en="Full Name">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.05] dark:border-white/[0.05] rounded-2xl px-6 py-4 outline-none focus:border-black dark:focus:border-white transition-colors" 
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 ml-1" data-vi="Email đăng ký" data-en="Registered Email">Registered Email</label>
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-black/[0.05] dark:border-white/[0.05] rounded-2xl px-6 py-4 outline-none focus:border-black dark:focus:border-white transition-colors" 
                      />
                    </div>

                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input 
                          type="checkbox" 
                          required 
                          checked={confirmed}
                          onChange={(e) => setConfirmed(e.target.checked)}
                          className="peer appearance-none w-6 h-6 border border-black/10 dark:border-white/10 rounded-lg checked:bg-black dark:checked:bg-white transition-all cursor-pointer" 
                        />
                        <CheckCircle size={14} weight="bold" className="absolute text-white dark:text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="text-sm font-light opacity-60 group-hover:opacity-100 transition-opacity leading-relaxed" data-vi="Tôi xác nhận muốn xóa vĩnh viễn tài khoản và dữ liệu liên quan." data-en="I confirm that I want to permanently delete my account and all associated data.">
                        I confirm that I want to permanently delete my account and all associated data.
                      </span>
                    </label>

                    <button 
                      type="submit"
                      disabled={isSubmitting || !confirmed}
                      className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center space-x-4 hover:opacity-80 transition-all disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <PaperPlaneTilt size={18} weight="bold" />
                      <span data-vi={isSubmitting ? "Đang xử lý..." : "Gửi yêu cầu"} data-en={isSubmitting ? "Processing..." : "Submit Request"}>Submit Request</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>

      <FMFooter />
    </div>
  );
}
