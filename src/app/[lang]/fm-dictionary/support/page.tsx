"use client";

import React, { use } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icons } from "@/components/Icons";
import { FAQItem } from "@/components/support/FAQAccordion";
import { localizedPath } from "@/lib/locale-path";

export default function SupportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang === "vi" ? "vi" : "en";
  const isVi = lang === "vi";

  return (
    <>
      <Header variant="fm" />

      <main className="pt-40 pb-32 w-full max-w-full overflow-x-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl break-words overflow-x-hidden">
          {/* Hero */}
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 border-b border-black dark:border-white inline-block pb-1">
              {isVi ? "Trung tâm Trợ giúp" : "Help Center"}
            </p>
            <h1 className="font-display text-5xl md:text-8xl font-bold mb-8">
              {isVi ? "Trung tâm Trợ giúp" : "Support Center"}
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest opacity-80 font-medium">
              <span>
                <Icons.Mail size={12} className="inline mr-2" />
                <span>Email: ankhang.nguyen0704@gmail.com</span>
              </span>
              <span>
                <Icons.Clock size={12} className="inline mr-2" />
                <span>{isVi ? "Phản hồi: 24–48 giờ làm việc" : "Response: 24–48 hours"}</span>
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
                  ? "Chào mừng bạn đến với Trung tâm Hỗ trợ FM Dictionary. Chúng tôi luôn ở đây để giúp bạn có trải nghiệm học tập tốt nhất. Hãy tìm câu trả lời nhanh trong phần câu hỏi thường gặp bên dưới, hoặc liên hệ trực tiếp với đội ngũ hỗ trợ của chúng tôi bất kỳ lúc nào."
                  : "Welcome to the FM Dictionary Support Center. We are always here to help you have the best learning experience. Find quick answers in the FAQ below, or contact our support team anytime."}
              </p>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section>
              <h2 className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter">
                {isVi ? "Câu hỏi thường gặp (FAQ)" : "Frequently Asked Questions (FAQ)"}
              </h2>

              <div className="space-y-12">
                {/* Account & Login */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <Icons.Shield size={20} className="text-black dark:text-white mr-3" />
                    <span>{isVi ? "Tài khoản & Đăng nhập" : "Account & Login"}</span>
                  </h3>
                  <div className="space-y-4">
                    <FAQItem
                      question={isVi ? "Tôi có thể đăng nhập bằng những phương thức nào?" : "Which methods can I use to log in?"}
                      defaultOpen={true}
                    >
                      <p>
                        {isVi ? (
                          <span>
                            FM Dictionary hỗ trợ hai phương thức đăng nhập an toàn: <strong>Google Sign-In</strong> và <strong>Apple Sign-In</strong>. Bạn không cần tạo mật khẩu riêng, giúp đăng nhập nhanh chóng và bảo mật.
                          </span>
                        ) : (
                          <span>
                            FM Dictionary supports two secure login methods: <strong>Google Sign-In</strong> and <strong>Apple Sign-In</strong>. No need to create a separate password, ensuring quick and secure access.
                          </span>
                        )}
                      </p>
                    </FAQItem>

                    <FAQItem question={isVi ? "Tại sao tôi không đăng nhập được?" : "Why can't I log in?"}>
                      <p>
                        {isVi
                          ? "Hãy kiểm tra kết nối Internet, đảm bảo dùng đúng tài khoản Google/Apple. Nếu dùng Apple Sign-In, hãy chắc chắn bạn đã chia sẻ email thật. Nếu vẫn lỗi, hãy thử cài lại ứng dụng hoặc liên hệ chúng tôi."
                          : "Check your Internet connection, ensure you're using the correct Google/Apple account. If using Apple Sign-In, make sure you've shared your real email. If issues persist, try reinstalling the app or contact us."}
                      </p>
                    </FAQItem>

                    <FAQItem question={isVi ? "Tôi muốn xóa tài khoản vĩnh viễn, phải làm thế nào?" : "How do I delete my account permanently?"}>
                      <p className="mb-4">
                        {isVi ? (
                          <span>
                            Vào <strong>Cài đặt</strong> → <strong>Vùng nguy hiểm</strong> → <strong>Xóa tài khoản</strong>. Dữ liệu sẽ bị xóa vĩnh viễn và không thể phục hồi sau 30 ngày.
                          </span>
                        ) : (
                          <span>
                            Go to <strong>Settings</strong> → <strong>Danger Zone</strong> → <strong>Delete Account</strong>. Data will be permanently deleted and cannot be recovered after 30 days.
                          </span>
                        )}
                      </p>
                      <p className="text-sm opacity-80">
                        <Link
                          href={localizedPath(lang, "/fm-dictionary/delete-account/")}
                          className="underline hover:text-black dark:hover:text-white transition-colors"
                        >
                          {isVi ? "Xem chi tiết hoặc gửi yêu cầu trực tuyến →" : "View details or submit an online request →"}
                        </Link>
                      </p>
                    </FAQItem>
                  </div>
                </div>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Learning & Features */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <Icons.Book size={20} className="text-black dark:text-white mr-3" />
                    <span>{isVi ? "Học tập & Tính năng" : "Learning & Features"}</span>
                  </h3>
                  <div className="space-y-4">
                    <FAQItem question={isVi ? "Ứng dụng có bao nhiêu từ vựng và thuộc lĩnh vực nào?" : "How many words and which fields does the app cover?"}>
                      <p>
                        {isVi ? (
                          <span>
                            1.847 thuật ngữ <strong>Facility Management (FM)</strong> bao gồm MEP, vận hành tòa nhà, HSE, tài chính FM và các chủ đề liên quan.
                          </span>
                        ) : (
                          <span>
                            1,847 <strong>Facility Management (FM)</strong> terms covering MEP, building operations, HSE, FM finance, and related topics.
                          </span>
                        )}
                      </p>
                    </FAQItem>

                    <FAQItem question={isVi ? "Sự khác biệt giữa Flashcard, Quiz và Smart Review là gì?" : "What is the difference between Flashcard, Quiz, and Smart Review?"}>
                      <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
                        <li>
                          {isVi ? <span><strong>Flashcard:</strong> Học từ mới theo bộ chủ đề.</span> : <span><strong>Flashcard:</strong> Learn new words by topic.</span>}
                        </li>
                        <li>
                          {isVi ? <span><strong>Quiz:</strong> Đánh giá nhanh kiến thức với trắc nghiệm.</span> : <span><strong>Quiz:</strong> Quick knowledge assessment with multiple choice.</span>}
                        </li>
                        <li>
                          {isVi ? <span><strong>Smart Review:</strong> Ôn tập thông minh (spaced repetition) cho từ hay quên.</span> : <span><strong>Smart Review:</strong> Intelligent review (spaced repetition) for often forgotten words.</span>}
                        </li>
                      </ul>
                    </FAQItem>

                    <FAQItem question={isVi ? "Tính năng Luyện phát âm hoạt động như thế nào?" : "How does the AI Pronunciation feature work?"}>
                      <p>
                        {isVi
                          ? "Sử dụng AI phân tích giọng nói thời gian thực. Nhấn giữ nút ghi âm, đọc to và nhận phản hồi chi tiết. Lưu ý cấp quyền Microphone trong cài đặt hệ thống."
                          : "Uses real-time AI voice analysis. Hold the record button, speak aloud, and receive detailed feedback. Ensure Microphone permission is granted in system settings."}
                      </p>
                    </FAQItem>

                    <FAQItem question={isVi ? "Tôi có thể dùng ứng dụng khi không có mạng không?" : "Can I use the app offline?"}>
                      <p>
                        {isVi ? (
                          <span>
                            Có. FM Dictionary có <strong>learning core local-first</strong> cho tra cứu, flashcard và quiz. Mạng được dùng cho phát âm/STT và đồng bộ cloud theo tài liệu.
                          </span>
                        ) : (
                          <span>
                            Yes. FM Dictionary has a <strong>local-first learning core</strong> for lookups, flashcards, and quizzes. Network is used for pronunciation/STT and documented cloud sync.
                          </span>
                        )}
                      </p>
                    </FAQItem>
                  </div>
                </div>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Social Learning */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <Icons.Users size={20} className="text-black dark:text-white mr-3" />
                    <span>{isVi ? "Nhóm học tập" : "Social Learning"}</span>
                  </h3>
                  <div className="space-y-4">
                    <FAQItem question={isVi ? "Tôi tham gia nhóm học tập như thế nào?" : "How do I join a study group?"}>
                      <p>
                        {isVi ? (
                          <span>
                            Vào Menu → <strong>Nhóm học tập</strong> → Nhập <strong>mã nhóm</strong> được cung cấp. Liên hệ chúng tôi nếu muốn tạo nhóm riêng.
                          </span>
                        ) : (
                          <span>
                            Go to Menu → <strong>Study Groups</strong> → Enter the provided <strong>group code</strong>. Contact us to create a private group.
                          </span>
                        )}
                      </p>
                    </FAQItem>

                    <FAQItem question={isVi ? "Thông tin nào của tôi được hiển thị trong nhóm?" : "What information of mine is displayed in the group?"}>
                      <p>
                        {isVi
                          ? "Tên hiển thị, ảnh đại diện, điểm số và streak sẽ chỉ hiển thị với các thành viên trong cùng nhóm đó, không bao giờ hiển thị công khai."
                          : "Display name, profile picture, scores, and streak will only be shown to members of the same group, never publicly."}
                      </p>
                    </FAQItem>
                  </div>
                </div>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Technical Support */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <Icons.Settings size={20} className="text-black dark:text-white mr-3" />
                    <span>{isVi ? "Lỗi & Sự cố kỹ thuật" : "Technical Support"}</span>
                  </h3>
                  <div className="space-y-4">
                    <FAQItem question={isVi ? "Ứng dụng bị treo hoặc crash, tôi phải làm gì?" : "The app is frozen or crashed, what should I do?"}>
                      <p>
                        {isVi
                          ? "Thử đóng và mở lại ứng dụng, kiểm tra cập nhật, hoặc khởi động lại thiết bị. Nếu không hết, hãy gỡ và cài lại ứng dụng (dữ liệu sẽ được khôi phục sau khi đăng nhập)."
                          : "Try closing and reopening the app, checking for updates, or restarting your device. If it persists, uninstall and reinstall the app (data will be restored after login)."}
                      </p>
                    </FAQItem>

                    <FAQItem question={isVi ? "Điểm phát âm của tôi luôn thấp mặc dù tôi đọc đúng?" : "My pronunciation score is always low even though I read correctly?"}>
                      <p>
                        {isVi
                          ? "Đảm bảo môi trường yên tĩnh, giữ thiết bị cách miệng 15-20cm và đọc rõ ràng. Nếu vẫn thấp, hãy báo cáo từ vựng đó qua email cho chúng tôi."
                          : "Ensure a quiet environment, keep the device 15-20cm from your mouth, and speak clearly. If still low, report that vocabulary to us via email."}
                      </p>
                    </FAQItem>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Contact Support */}
            <section>
              <h2 className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter">
                {isVi ? "Liên hệ Hỗ trợ" : "Contact Support"}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black/10 dark:border-white/10 text-sm">
                  <tbody>
                    <tr className="bg-black/5 dark:bg-white/5 uppercase tracking-widest font-bold">
                      <th className="border border-black/10 dark:border-white/10 p-4 text-left">
                        {isVi ? "Kênh liên hệ" : "Channel"}
                      </th>
                      <th className="border border-black/10 dark:border-white/10 p-4 text-left">
                        {isVi ? "Thông tin" : "Details"}
                      </th>
                      <th className="border border-black/10 dark:border-white/10 p-4 text-left">
                        {isVi ? "Thời gian phản hồi" : "Response Time"}
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-black/10 dark:border-white/10 p-4 font-bold">
                        Email
                      </td>
                      <td className="border border-black/10 dark:border-white/10 p-4">
                        <a
                          href="mailto:ankhang.nguyen0704@gmail.com"
                          className="underline hover:text-black dark:hover:text-white transition-colors"
                        >
                          ankhang.nguyen0704@gmail.com
                        </a>
                      </td>
                      <td className="border border-black/10 dark:border-white/10 p-4 opacity-80">
                        {isVi ? "24–48 giờ làm việc" : "24–48 business hours"}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 dark:border-white/10 p-4 font-bold">
                        GitHub Issues
                      </td>
                      <td className="border border-black/10 dark:border-white/10 p-4">
                        <a
                          href="https://github.com/ankhang0704"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-black dark:hover:text-white transition-colors"
                        >
                          github.com/ankhang0704 ↗
                        </a>
                      </td>
                      <td className="border border-black/10 dark:border-white/10 p-4 opacity-80">
                        {isVi ? "3–5 ngày làm việc" : "3–5 business days"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section>
              <h2 className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter">
                {isVi ? "Khi gửi email, vui lòng cung cấp" : "When emailing, please provide"}
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  {isVi
                    ? "Địa chỉ email liên kết với tài khoản của bạn (Google / Apple ID)."
                    : "Email address associated with your account (Google / Apple ID)."}
                </li>
                <li>
                  {isVi
                    ? "Dòng máy đang sử dụng (ví dụ: iPhone 14 Pro, Samsung Galaxy S23) và phiên bản hệ điều hành (ví dụ: iOS 17.2)."
                    : "Device model (e.g., iPhone 14 Pro, Samsung Galaxy S23) and OS version (e.g., iOS 17.2)."}
                </li>
                <li>
                  {isVi
                    ? "Mô tả chi tiết sự cố bạn gặp phải, kèm ảnh chụp màn hình nếu có."
                    : "Detailed description of the issue you are experiencing, with screenshots if available."}
                </li>
              </ul>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section>
              <h3 className="font-display text-xl font-bold mb-4 uppercase tracking-widest">
                {isVi ? "Về FM Dictionary" : "About FM Dictionary"}
              </h3>
              <p className="opacity-80">
                {isVi
                  ? "FM Dictionary là ứng dụng học từ vựng Quản lý cơ sở vật chất (Facility Management) được thiết kế và phát triển bởi An Khang Studio. Nội dung thuật ngữ được biên soạn bởi Thúy Tạ."
                  : "FM Dictionary is a Facility Management vocabulary learning app designed and developed by An Khang Studio. Terminology content compiled by Thuy Ta."}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer variant="fm" />
    </>
  );
}
