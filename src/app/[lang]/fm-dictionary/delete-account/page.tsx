"use client";

import React, { useState, use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";

export default function DeleteAccountPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang === "vi" ? "vi" : "en";
  const isVi = lang === "vi";

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
    <>
      <Header variant="fm" />

      <main className="pt-40 pb-32 w-full max-w-full">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl break-words">
          {/* Hero */}
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 border-b border-black dark:border-white inline-block pb-1">
              {isVi ? "Dịch vụ Tài khoản" : "Account Services"}
            </p>
            <h1 className="font-display text-5xl md:text-8xl font-bold mb-8">
              {isVi ? "Xóa Tài Khoản" : "Delete Account"}
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest opacity-80 font-medium">
              <span>
                <Icons.Calendar size={12} className="inline mr-2" />
                <span>{isVi ? "Ngày hiệu lực: 01/01/2026" : "Effective: Jan 01, 2026"}</span>
              </span>
              <span>
                <Icons.Refresh size={12} className="inline mr-2" />
                <span>{isVi ? "Cập nhật lần cuối: 04/06/2026" : "Updated: June 04, 2026"}</span>
              </span>
              <span>
                <Icons.Building size={12} className="inline mr-2" />
                <span>{isVi ? "Đơn vị phát triển: An Khang Studio" : "An Khang Studio"}</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12 font-light text-xl leading-relaxed opacity-90">
            <section>
              <p className="mb-6">
                {isVi
                  ? "Chúng tôi hiểu rằng đôi khi bạn muốn xóa tài khoản của mình. FM Dictionary tôn trọng quyền kiểm soát tuyệt đối của bạn đối với dữ liệu cá nhân. Bạn có thể xóa tài khoản trực tiếp trong ứng dụng hoặc gửi yêu cầu xóa trực tuyến bên dưới."
                  : "We understand that sometimes you might want to delete your account. FM Dictionary respects your absolute control over your personal data. You can delete your account directly inside the app, or submit a deletion request online below."}
              </p>
              <p>
                {isVi ? (
                  <span>
                    Lưu ý: Sau khi tài khoản bị xóa, toàn bộ thông tin cá nhân định danh (Email, Họ tên, Ảnh đại diện), tiến trình học tập, lịch sử từ vựng, điểm số và dữ liệu nhóm học tập của bạn sẽ bị <strong>xóa bỏ hoàn toàn, vĩnh viễn và không thể khôi phục</strong> sau 30 ngày.
                  </span>
                ) : (
                  <span>
                    Note: After your account is deleted, all personally identifiable information (Email, Full Name, Profile Picture), learning progress, vocabulary history, scores, and study group data will be <strong>completely, permanently deleted and cannot be recovered</strong> after 30 days.
                  </span>
                )}
              </p>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Method 1: In-App */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 uppercase tracking-tighter">
                {isVi ? "Cách 1: Xóa trực tiếp trong ứng dụng (Khuyên dùng)" : "Method 1: Delete Directly inside the App (Recommended)"}
              </h2>
              <p className="mb-6">
                {isVi
                  ? "Đây là phương thức nhanh nhất và an toàn nhất để xóa dữ liệu của bạn ngay lập tức:"
                  : "This is the fastest and most secure method to delete your data instantly:"}
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-lg md:text-xl">
                <li>
                  {isVi ? <span>Mở ứng dụng <strong>FM Dictionary</strong> trên điện thoại.</span> : <span>Open the <strong>FM Dictionary</strong> app on your device.</span>}
                </li>
                <li>
                  {isVi ? <span>Đi tới màn hình <strong>Cài đặt (Settings)</strong>.</span> : <span>Go to the <strong>Settings</strong> tab.</span>}
                </li>
                <li>
                  {isVi ? <span>Chọn phần <strong>Thông tin cá nhân (Profile)</strong> hoặc <strong>Vùng nguy hiểm (Danger Zone)</strong>.</span> : <span>Select <strong>Profile</strong> or <strong>Danger Zone</strong>.</span>}
                </li>
                <li>
                  {isVi ? <span>Chọn <strong>Xóa tài khoản (Delete Account)</strong> và xác nhận.</span> : <span>Select <strong>Delete Account</strong> and confirm.</span>}
                </li>
              </ol>
            </section>

            {/* Method 2: Submit an Online Request */}
            <hr className="border-black/10 dark:border-white/10" />

            <section>
              <h2 className="font-display text-3xl font-bold mb-6 uppercase tracking-tighter">
                {isVi ? "Cách 2: Gửi yêu cầu xóa trực tuyến" : "Method 2: Submit an Online Request"}
              </h2>
              <p className="mb-8">
                {isVi
                  ? "Nếu bạn không còn cài đặt ứng dụng trên thiết bị, bạn có thể điền thông tin vào mẫu dưới đây. Nút gửi sẽ mở ứng dụng email của bạn để gửi yêu cầu chính thức tới chúng tôi."
                  : "If you no longer have the app installed on your device, you can fill out the form below. The submit button will open your email client to send an official request to us."}
              </p>

              {formSubmitted ? (
                <div className="p-8 border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-center">
                  <Icons.Check size={36} className="mb-4 inline-block" />
                  <h3 className="font-display text-2xl font-bold mb-2 uppercase">
                    {isVi ? "Đã chuẩn bị email thành công!" : "Email Prepared Successfully!"}
                  </h3>
                  <p className="text-lg opacity-85 mb-4">
                    {isVi ? (
                      <span>Ứng dụng email của bạn sẽ được mở. Vui lòng bấm <strong>Gửi (Send)</strong> trong email đó để hoàn tất yêu cầu xóa tài khoản.</span>
                    ) : (
                      <span>Your email client should have opened. Please press <strong>Send</strong> in that email to complete your account deletion request.</span>
                    )}
                  </p>

                  <div className="my-6 p-6 border border-black/10 dark:border-white/10 bg-bgLight dark:bg-bgDark text-left text-sm font-mono space-y-2">
                    <p className="opacity-70 text-xs uppercase tracking-wider font-sans font-bold">
                      {isVi ? "Thông tin email gửi thủ công (nếu ứng dụng không tự mở):" : "Manual email details (if your client didn't open):"}
                    </p>
                    <div className="border-t border-black/10 dark:border-white/10 pt-2 space-y-1">
                      <p><strong>To:</strong> ankhang.nguyen0704@gmail.com</p>
                      <p><strong>Subject:</strong> FM Dictionary - Account Deletion Request</p>
                      <p className="pt-2 font-sans font-bold text-xs uppercase opacity-70">{isVi ? "Nội dung email:" : "Body:"}</p>
                      <div className="bg-cardLight dark:bg-cardDark p-3 border border-black/5 dark:border-white/5 whitespace-pre-wrap break-words text-xs">
                        {`Hello,\n\nPlease delete my FM Dictionary account and all associated data permanently.\n\nAccount Details:\n- Name: ${name}\n- Registered Email: ${email}\n\nI confirm that I understand this action is permanent and cannot be undone after 30 days.\n\nThank you.`}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-sm underline opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest font-bold"
                  >
                    {isVi ? "Gửi lại yêu cầu khác" : "Submit another request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 md:p-8 border border-black/10 dark:border-white/10 bg-cardLight dark:bg-cardDark">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-bold mb-2">
                      <span>{isVi ? "Họ và Tên" : "Full Name"}</span>
                      <span className="text-black dark:text-white opacity-50 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-bgLight dark:bg-bgDark border border-black/15 dark:border-white/15 focus:border-black dark:focus:border-white outline-none transition-colors text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-widest font-bold mb-2">
                      <span>{isVi ? "Địa chỉ Email" : "Email Address"}</span>
                      <span className="text-black dark:text-white opacity-50 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-bgLight dark:bg-bgDark border border-black/15 dark:border-white/15 focus:border-black dark:focus:border-white outline-none transition-colors text-base"
                    />
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                        className="mt-1 h-5 w-5 cursor-pointer accent-black dark:accent-white"
                      />
                      <span className="text-sm opacity-80 select-none leading-normal">
                        {isVi
                          ? "Tôi xác nhận rằng tôi muốn xóa vĩnh viễn tài khoản FM Dictionary và tất cả dữ liệu liên quan. Tôi hiểu rằng hành động này không thể hoàn tác sau 30 ngày."
                          : "I confirm that I want to permanently delete my FM Dictionary account and all associated data. I understand that this action cannot be undone after 30 days."}
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !email || !name || !confirmed}
                    className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest text-sm hover:opacity-85 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isVi
                      ? isSubmitting
                        ? "Đang xử lý..."
                        : "Gửi yêu cầu xóa tài khoản"
                      : isSubmitting
                      ? "Processing..."
                      : "Submit Deletion Request"}
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer variant="fm" />
    </>
  );
}
