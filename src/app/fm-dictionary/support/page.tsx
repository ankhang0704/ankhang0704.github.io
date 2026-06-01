"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import FMHeader from "../../../components/fm-dictionary/Header";
import FMFooter from "../../../components/fm-dictionary/Footer";

export default function SupportPage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <div className="ambient-glow top-glow max-w-full"></div>
      <div className="ambient-glow bottom-glow max-w-full"></div>

      <FMHeader />

      <main className="pt-40 pb-32 w-full max-w-[100vw] overflow-x-hidden">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl break-words overflow-x-hidden">
          {/* Hero */}
          <div className="mb-20" data-aos="fade-up">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 border-b border-black dark:border-white inline-block pb-1"
              data-en="Help Center"
              data-vi="Trung tâm Trợ giúp"
            >
              Help Center
            </p>
            <h1
              className="font-display text-5xl md:text-8xl font-bold mb-8"
              data-en="Support Center"
              data-vi="Trung tâm Trợ giúp"
            >
              Support Center
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest opacity-80 font-medium">
              <span>
                <i className="fas fa-envelope mr-2"></i>
                <span data-en="Email: ankhang.nguyen0704@gmail.com" data-vi="Email: ankhang.nguyen0704@gmail.com">
                  Email: ankhang.nguyen0704@gmail.com
                </span>
              </span>
              <span>
                <i className="fas fa-clock mr-2"></i>
                <span data-en="Response: 24–48 hours" data-vi="Phản hồi: 24–48 giờ làm việc">
                  Response: 24–48 hours
                </span>
              </span>
              <span>
                <i className="fas fa-building mr-2"></i>
                <span data-en="An Khang Studio" data-vi="Đơn vị phát triển: An Khang Studio">
                  An Khang Studio
                </span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-12 font-light text-xl leading-relaxed opacity-90">
            <section data-aos="fade-up">
              <p
                className="mb-6"
                data-vi="Chào mừng bạn đến với Trung tâm Hỗ trợ FM Dictionary. Chúng tôi luôn ở đây để giúp bạn có trải nghiệm học tập tốt nhất. Hãy tìm câu trả lời nhanh trong phần câu hỏi thường gặp bên dưới, hoặc liên hệ trực tiếp với đội ngũ hỗ trợ của chúng tôi bất kỳ lúc nào."
                data-en="Welcome to the FM Dictionary Support Center. We are always here to help you have the best learning experience. Find quick answers in the FAQ below, or contact our support team anytime."
              >
                Welcome to the FM Dictionary Support Center. We are always here to help you
                have the best learning experience. Find quick answers in the FAQ below, or
                contact our support team anytime.
              </p>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="Câu hỏi thường gặp (FAQ)"
                data-en="Frequently Asked Questions (FAQ)"
              >
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-12">
                {/* Account & Login */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <i className="fas fa-shield-halved text-black dark:text-white mr-3"></i>
                    <span data-vi="Tài khoản & Đăng nhập" data-en="Account & Login">
                      Account & Login
                    </span>
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Tôi có thể đăng nhập bằng những phương thức nào?"
                        data-en="Q: Which methods can I use to log in?"
                      >
                        Q: Which methods can I use to log in?
                      </p>
                      <p
                        data-vi="FM Dictionary hỗ trợ hai phương thức đăng nhập an toàn: <strong>Google Sign-In</strong> và <strong>Apple Sign-In</strong>. Bạn không cần tạo mật khẩu riêng, giúp đăng nhập nhanh chóng và bảo mật."
                        data-en="FM Dictionary supports two secure login methods: <strong>Google Sign-In</strong> and <strong>Apple Sign-In</strong>. No need to create a separate password, ensuring quick and secure access."
                      >
                        FM Dictionary supports two secure login methods:{" "}
                        <strong>Google Sign-In</strong> and <strong>Apple Sign-In</strong>. No
                        need to create a separate password, ensuring quick and secure access.
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Tại sao tôi không đăng nhập được?"
                        data-en="Q: Why can't I log in?"
                      >
                        Q: Why can't I log in?
                      </p>
                      <p
                        data-vi="Hãy kiểm tra kết nối Internet, đảm bảo dùng đúng tài khoản Google/Apple. Nếu dùng Apple Sign-In, hãy chắc chắn bạn đã chia sẻ email thật. Nếu vẫn lỗi, hãy thử cài lại ứng dụng hoặc liên hệ chúng tôi."
                        data-en="Check your Internet connection, ensure you're using the correct Google/Apple account. If using Apple Sign-In, make sure you've shared your real email. If issues persist, try reinstalling the app or contact us."
                      >
                        Check your Internet connection, ensure you're using the correct
                        Google/Apple account. If using Apple Sign-In, make sure you've shared
                        your real email. If issues persist, try reinstalling the app or
                        contact us.
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Tôi muốn xóa tài khoản vĩnh viễn, phải làm thế nào?"
                        data-en="Q: How do I delete my account permanently?"
                      >
                        Q: How do I delete my account permanently?
                      </p>
                      <p
                        data-vi="Vào <strong>Cài đặt</strong> → <strong>Vùng nguy hiểm</strong> → <strong>Xóa tài khoản</strong>. Dữ liệu sẽ bị xóa vĩnh viễn và không thể phục hồi sau 30 ngày."
                        data-en="Go to <strong>Settings</strong> → <strong>Danger Zone</strong> → <strong>Delete Account</strong>. Data will be permanently deleted and cannot be recovered after 30 days."
                      >
                        Go to <strong>Settings</strong> → <strong>Danger Zone</strong> →{" "}
                        <strong>Delete Account</strong>. Data will be permanently deleted and
                        cannot be recovered after 30 days.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Learning & Features */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <i className="fas fa-book-open text-black dark:text-white mr-3"></i>
                    <span data-vi="Học tập & Tính năng" data-en="Learning & Features">
                      Learning & Features
                    </span>
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Ứng dụng có bao nhiêu từ vựng và thuộc lĩnh vực nào?"
                        data-en="Q: How many words and which fields does the app cover?"
                      >
                        Q: How many words and which fields does the app cover?
                      </p>
                      <p
                        data-vi="Hơn 1.800 thuật ngữ chuyên ngành <strong>Quản lý cơ sở vật chất (Facility Management)</strong>: MEP, vận hành tòa nhà, HSE, tài chính FM... biên soạn bởi chuyên gia Thúy Tạ."
                        data-en="Over 1,800 <strong>Facility Management (FM)</strong> terms: MEP, building operations, HSE, FM finance... compiled by expert Thuy Ta."
                      >
                        Over 1,800 <strong>Facility Management (FM)</strong> terms: MEP,
                        building operations, HSE, FM finance... compiled by expert Thuy Ta.
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Sự khác biệt giữa Flashcard, Quiz và Smart Review là gì?"
                        data-en="Q: What is the difference between Flashcard, Quiz, and Smart Review?"
                      >
                        Q: What is the difference between Flashcard, Quiz, and Smart Review?
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-base md:text-xl">
                        <li data-vi="<strong>Flashcard:</strong> Học từ mới theo bộ chủ đề." data-en="<strong>Flashcard:</strong> Learn new words by topic.">
                          <strong>Flashcard:</strong> Learn new words by topic.
                        </li>
                        <li data-vi="<strong>Quiz:</strong> Đánh giá nhanh kiến thức với trắc nghiệm." data-en="<strong>Quiz:</strong> Quick knowledge assessment with multiple choice.">
                          <strong>Quiz:</strong> Quick knowledge assessment with multiple
                          choice.
                        </li>
                        <li data-vi="<strong>Smart Review:</strong> Ôn tập thông minh (spaced repetition) cho từ hay quên." data-en="<strong>Smart Review:</strong> Intelligent review (spaced repetition) for often forgotten words.">
                          <strong>Smart Review:</strong> Intelligent review (spaced
                          repetition) for often forgotten words.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Tính năng Luyện phát âm hoạt động như thế nào?"
                        data-en="Q: How does the AI Pronunciation feature work?"
                      >
                        Q: How does the AI Pronunciation feature work?
                      </p>
                      <p
                        data-vi="Sử dụng AI phân tích giọng nói thời gian thực. Nhấn giữ nút ghi âm, đọc to và nhận phản hồi chi tiết. Lưu ý cấp quyền Microphone trong cài đặt hệ thống."
                        data-en="Uses real-time AI voice analysis. Hold the record button, speak aloud, and receive detailed feedback. Ensure Microphone permission is granted in system settings."
                      >
                        Uses real-time AI voice analysis. Hold the record button, speak aloud,
                        and receive detailed feedback. Ensure Microphone permission is granted
                        in system settings.
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Tôi có thể dùng ứng dụng khi không có mạng không?"
                        data-en="Q: Can I use the app offline?"
                      >
                        Q: Can I use the app offline?
                      </p>
                      <p
                        data-vi="Có. FM Dictionary hỗ trợ <strong>Offline-First</strong> cho tra cứu, flashcard và quiz. Cần mạng để luyện phát âm AI và đồng bộ đám mây."
                        data-en="Yes. FM Dictionary supports <strong>Offline-First</strong> for lookups, flashcards, and quizzes. Network is required for AI pronunciation and cloud sync."
                      >
                        Yes. FM Dictionary supports <strong>Offline-First</strong> for
                        lookups, flashcards, and quizzes. Network is required for AI
                        pronunciation and cloud sync.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Social Learning */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <i className="fas fa-users text-black dark:text-white mr-3"></i>
                    <span data-vi="Nhóm học tập" data-en="Social Learning">
                      Social Learning
                    </span>
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Tôi tham gia nhóm học tập như thế nào?"
                        data-en="Q: How do I join a study group?"
                      >
                        Q: How do I join a study group?
                      </p>
                      <p
                        data-vi="Vào Menu → <strong>Nhóm học tập</strong> → Nhập <strong>mã nhóm</strong> được cung cấp. Liên hệ chúng tôi nếu muốn tạo nhóm riêng."
                        data-en="Go to Menu → <strong>Study Groups</strong> → Enter the provided <strong>group code</strong>. Contact us to create a private group."
                      >
                        Go to Menu → <strong>Study Groups</strong> → Enter the provided{" "}
                        <strong>group code</strong>. Contact us to create a private group.
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Thông tin nào của tôi được hiển thị trong nhóm?"
                        data-en="Q: What information of mine is displayed in the group?"
                      >
                        Q: What information of mine is displayed in the group?
                      </p>
                      <p
                        data-vi="Tên hiển thị, ảnh đại diện, điểm số và streak sẽ chỉ hiển thị với các thành viên trong cùng nhóm đó, không bao giờ hiển thị công khai."
                        data-en="Display name, profile picture, scores, and streak will only be shown to members of the same group, never publicly."
                      >
                        Display name, profile picture, scores, and streak will only be shown
                        to members of the same group, never publicly.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Technical Support */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 uppercase tracking-widest flex items-center">
                    <i className="fas fa-gears text-black dark:text-white mr-3"></i>
                    <span data-vi="Lỗi & Sự cố kỹ thuật" data-en="Technical Support">
                      Technical Support
                    </span>
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Ứng dụng bị treo hoặc crash, tôi phải làm gì?"
                        data-en="Q: The app is frozen or crashed, what should I do?"
                      >
                        Q: The app is frozen or crashed, what should I do?
                      </p>
                      <p
                        data-vi="Thử đóng và mở lại ứng dụng, kiểm tra cập nhật, hoặc khởi động lại thiết bị. Nếu không hết, hãy gỡ và cài lại ứng dụng (dữ liệu sẽ được khôi phục sau khi đăng nhập)."
                        data-en="Try closing and reopening the app, checking for updates, or restarting your device. If it persists, uninstall and reinstall the app (data will be restored after login)."
                      >
                        Try closing and reopening the app, checking for updates, or restarting
                        your device. If it persists, uninstall and reinstall the app (data
                        will be restored after login).
                      </p>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-2"
                        data-vi="Q: Điểm phát âm của tôi luôn thấp mặc dù tôi đọc đúng?"
                        data-en="Q: My pronunciation score is always low even though I read correctly?"
                      >
                        Q: My pronunciation score is always low even though I read correctly?
                      </p>
                      <p
                        data-vi="Đảm bảo môi trường yên tĩnh, giữ thiết bị cách miệng 15-20cm và đọc rõ ràng. Nếu vẫn thấp, hãy báo cáo từ vựng đó qua email cho chúng tôi."
                        data-en="Ensure a quiet environment, keep the device 15-20cm from your mouth, and speak clearly. If still low, report that vocabulary to us via email."
                      >
                        Ensure a quiet environment, keep the device 15-20cm from your mouth,
                        and speak clearly. If still low, report that vocabulary to us via
                        email.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            {/* Contact Support */}
            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="Liên hệ Hỗ trợ"
                data-en="Contact Support"
              >
                Contact Support
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black/10 dark:border-white/10 text-sm">
                  <tbody>
                    <tr className="bg-black/5 dark:bg-white/5 uppercase tracking-widest font-bold">
                      <th
                        className="border border-black/10 dark:border-white/10 p-4 text-left"
                        data-vi="Kênh liên hệ"
                        data-en="Channel"
                      >
                        Channel
                      </th>
                      <th
                        className="border border-black/10 dark:border-white/10 p-4 text-left"
                        data-vi="Thông tin"
                        data-en="Information"
                      >
                        Information
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-black/10 dark:border-white/10 p-4 font-bold">
                        <i className="fas fa-envelope text-black dark:text-white mr-3"></i>
                        <span data-vi="Email hỗ trợ" data-en="Support Email">
                          Support Email
                        </span>
                      </td>
                      <td className="border border-black/10 dark:border-white/10 p-4">
                        <a href="mailto:ankhang.nguyen0704@gmail.com" className="underline">
                          ankhang.nguyen0704@gmail.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 dark:border-white/10 p-4 font-bold">
                        <i className="fas fa-globe text-black dark:text-white mr-3"></i>
                        <span data-vi="Trang chủ" data-en="Home Page">
                          Home Page
                        </span>
                      </td>
                      <td className="border border-black/10 dark:border-white/10 p-4">
                        <a href="/fm-dictionary/" className="underline">
                          ankhang0704.github.io/fm-dictionary/
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black/10 dark:border-white/10 p-4 font-bold">
                        <i className="fas fa-clock text-black dark:text-white mr-3"></i>
                        <span data-vi="Thời gian làm việc" data-en="Working Hours">
                          Working Hours
                        </span>
                      </td>
                      <td
                        className="border border-black/10 dark:border-white/10 p-4"
                        data-vi="Thứ Hai – Thứ Sáu, 8:00 – 17:30 (GMT+7)"
                        data-en="Monday – Friday, 8:00 – 17:30 (GMT+7)"
                      >
                        Monday – Friday, 8:00 – 17:30 (GMT+7)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="Khi gửi email, vui lòng cung cấp"
                data-en="When emailing, please provide"
              >
                When emailing, please provide
              </h2>
              <div className="p-8 border border-black/10 dark:border-white/10 space-y-4 text-lg">
                <p data-vi="• <strong>Tiêu đề:</strong> Mô tả ngắn gọn vấn đề." data-en="• <strong>Subject:</strong> Brief description of the issue.">
                  • <strong>Subject:</strong> Brief description of the issue.
                </p>
                <p data-vi="• <strong>Thiết bị:</strong> Tên máy và phiên bản hệ điều hành (iOS/Android)." data-en="• <strong>Device:</strong> Model name and OS version (iOS/Android).">
                  • <strong>Device:</strong> Model name and OS version (iOS/Android).
                </p>
                <p data-vi="• <strong>Mô tả:</strong> Thao tác bạn đã thực hiện dẫn đến lỗi." data-en="• <strong>Description:</strong> Steps you took leading to the error.">
                  • <strong>Description:</strong> Steps you took leading to the error.
                </p>
                <p data-vi="• <strong>Ảnh chụp:</strong> Ảnh chụp màn hình lỗi (nếu có)." data-en="• <strong>Screenshot:</strong> Screenshot of the error (if any).">
                  • <strong>Screenshot:</strong> Screenshot of the error (if any).
                </p>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h3
                className="font-display text-xl font-bold mb-4 uppercase tracking-widest"
                data-vi="Về FM Dictionary"
                data-en="About FM Dictionary"
              >
                About FM Dictionary
              </h3>
              <p
                data-vi="FM Dictionary là ứng dụng từ vựng cao cấp giúp cộng đồng Quản lý Cơ sở vật chất và bất kỳ ai quan tâm đến lĩnh vực này làm chủ hơn 1.800 thuật ngữ FM chuyên ngành — được xây dựng bằng Flutter cho iOS & Android."
                data-en="FM Dictionary is a premium vocabulary app helping the Facilities Management community and anyone interested in the field master 1,800+ specialized FM terms — built with Flutter for iOS & Android."
              >
                FM Dictionary is a premium vocabulary app helping the Facilities Management
                community and anyone interested in the field master 1,800+ specialized FM
                terms — built with Flutter for iOS & Android.
              </p>
            </section>

            <p
              className="text-xs opacity-50 italic text-center py-10"
              data-vi="<em>Cảm ơn bạn đã tin tưởng và sử dụng FM Dictionary. Chúng tôi cam kết đồng hành cùng bạn trên mọi chặng đường chinh phục kiến thức chuyên ngành.</em>"
              data-en="<em>Thank you for trusting and using FM Dictionary. We are committed to accompanying you on every journey to master specialized knowledge.</em>"
            >
              <em>
                Thank you for trusting and using FM Dictionary. We are committed to
                accompanying you on every journey to master specialized knowledge.
              </em>
            </p>
          </div>
        </div>
      </main>

      <FMFooter />
    </>
  );
}
