"use client";

import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Icons } from "../../../components/Icons";

export default function TermsOfServicePage() {

  return (
    <>
      <Header variant="fm" />

      <main className="pt-40 pb-32 overflow-x-hidden w-full max-w-[100vw]">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl break-words">
          {/* Hero */}
          <div className="mb-20" data-aos="fade-up">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 border-b border-black dark:border-white inline-block pb-1"
              data-en="Legal Document"
              data-vi="Văn bản pháp lý"
            >
              Legal Document
            </p>
            <h1
              className="font-display text-5xl md:text-8xl font-bold mb-8"
              data-en="Terms of Service"
              data-vi="Điều khoản Dịch vụ"
            >
              Terms of Service
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest opacity-80 font-medium">
              <span>
                <Icons.Calendar size={12} className="inline mr-2" />
                <span data-en="Effective: Jan 01, 2026" data-vi="Ngày hiệu lực: 01/01/2026">
                  Effective: Jan 01, 2026
                </span>
              </span>
              <span>
                <Icons.Refresh size={12} className="inline mr-2" />
                <span data-en="Updated: June 01, 2026" data-vi="Cập nhật lần cuối: 01/06/2026">
                  Updated: June 01, 2026
                </span>
              </span>
              <span>
                <Icons.Building size={12} className="inline mr-2" />
                <span data-en="An Khang Studio" data-vi="Đơn vị vận hành: An Khang Studio">
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
                data-vi="Chào mừng bạn đến với <strong>FM Dictionary</strong> (&quot;Ứng dụng&quot;). Ứng dụng được phát triển bởi <strong>An Khang Studio</strong> và vận hành dựa trên nền tảng nội dung chuyên môn thuộc sở hữu độc quyền của <strong>Thúy Tạ</strong>."
                data-en="Welcome to <strong>FM Dictionary</strong> (&quot;the App&quot;). The app is developed by <strong>An Khang Studio</strong> and operates based on specialized content platform exclusively owned by <strong>Thuy Ta</strong>."
              >
                Welcome to <strong>FM Dictionary</strong> (&quot;the App&quot;). The app is developed by{" "}
                <strong>An Khang Studio</strong> and operates based on specialized content
                platform exclusively owned by <strong>Thuy Ta</strong>.
              </p>
              <p
                data-vi="Bằng việc tải xuống, cài đặt, truy cập hoặc sử dụng Ứng dụng trên các hệ điều hành iOS và Android, bạn khẳng định rằng bạn đã đọc, hiểu và đồng ý chịu sự ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ điều khoản nào dưới đây, vui lòng ngừng sử dụng và gỡ cài đặt Ứng dụng ngay lập tức."
                data-en="By downloading, installing, accessing, or using the App on iOS and Android operating systems, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to any of the terms below, please stop using and uninstall the App immediately."
              >
                By downloading, installing, accessing, or using the App on iOS and Android
                operating systems, you confirm that you have read, understood, and agree to be
                bound by these Terms of Service. If you do not agree to any of the terms
                below, please stop using and uninstall the App immediately.
              </p>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="1. Sở hữu Trí tuệ và Bản quyền Nội dung"
                data-en="1. Intellectual Property and Content Copyright"
              >
                1. Intellectual Property and Content Copyright
              </h2>
              <p
                className="mb-6"
                data-vi="Toàn bộ tài nguyên và cấu trúc bên trong Ứng dụng được bảo hộ nghiêm ngặt bởi pháp luật sở hữu trí tuệ hiện hành:"
                data-en="All resources and structures within the App are strictly protected by current intellectual property laws:"
              >
                All resources and structures within the App are strictly protected by current
                intellectual property laws:
              </p>
              <ul className="space-y-6">
                <li>
                  <span
                    data-vi="<strong>Bản quyền nội dung học tập:</strong> Toàn bộ cơ sở dữ liệu từ điển, định nghĩa từ vựng, ví dụ minh họa, hệ thống bài học, thuật ngữ chuyên ngành và các tài liệu giáo dục đi kèm được tích hợp trong Ứng dụng thuộc quyền sở hữu trí tuệ hợp pháp, duy nhất và toàn vẹn của <strong>Thúy Tạ</strong>."
                    data-en="<strong>Learning Content Copyright:</strong> The entire dictionary database, vocabulary definitions, illustrative examples, lesson systems, specialized terminology, and accompanying educational materials integrated in the App are the legal, sole, and entire intellectual property of <strong>Thuy Ta</strong>."
                  >
                    <strong>Learning Content Copyright:</strong> The entire dictionary
                    database, vocabulary definitions, illustrative examples, lesson systems,
                    specialized terminology, and accompanying educational materials
                    integrated in the App are the legal, sole, and entire intellectual
                    property of <strong>Thuy Ta</strong>.
                  </span>
                </li>
                <li>
                  <span
                    data-vi="<strong>Giới hạn quyền sử dụng nội dung:</strong> Người dùng chỉ được cấp quyền truy cập phi thương mại, mang tính cá nhân để phục vụ mục đích học tập cá nhân. Nghiêm cấm mọi hành vi cào dữ liệu (data scraping/crawling), sao chép, trích xuất, chỉnh sửa, phân phối, chuyển nhượng hoặc tái xuất bản một phần hay toàn bộ kho nội dung dữ liệu của Ứng dụng dưới mọi hình thức khi chưa có sự đồng ý bằng văn bản từ chủ sở hữu bản quyền."
                    data-en="<strong>Content Usage Limits:</strong> Users are only granted personal, non-commercial access for personal learning purposes. All acts of data scraping/crawling, copying, extracting, editing, distributing, transferring, or republishing part or all of the App's data content in any form without written consent from the copyright owner are strictly prohibited."
                  >
                    <strong>Content Usage Limits:</strong> Users are only granted personal,
                    non-commercial access for personal learning purposes. All acts of data
                    scraping/crawling, copying, extracting, editing, distributing,
                    transferring, or republishing part or all of the App&apos;s data content in
                    any form without written consent from the copyright owner are strictly
                    prohibited.
                  </span>
                </li>
                <li>
                  <span
                    data-vi="<strong>Bản quyền phần mềm:</strong> Toàn bộ mã nguồn, thiết kế giao diện đồ họa, biểu tượng (logos), cấu trúc chức năng và các công nghệ cốt lõi của Ứng dụng thuộc quyền sở hữu độc quyền của <strong>An Khang Studio</strong>."
                    data-en="<strong>Software Copyright:</strong> All source code, graphic interface design, icons (logos), functional structures, and core technologies of the App are the exclusive property of <strong>An Khang Studio</strong>."
                  >
                    <strong>Software Copyright:</strong> All source code, graphic interface
                    design, icons (logos), functional structures, and core technologies of the
                    App are the exclusive property of <strong>An Khang Studio</strong>.
                  </span>
                </li>
              </ul>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="2. Điều kiện Độ tuổi và Tài khoản Người dùng"
                data-en="2. Age Requirements and User Accounts"
              >
                2. Age Requirements and User Accounts
              </h2>
              <div className="space-y-8">
                <div>
                  <h3
                    className="font-display text-xl font-bold mb-4 uppercase tracking-widest"
                    data-vi="2.1. Giới hạn độ tuổi"
                    data-en="2.1. Age Limits"
                  >
                    2.1. Age Limits
                  </h3>
                  <p
                    data-vi="Bạn phải từ mười ba (13) tuổi trở lên (hoặc độ tuổi tối thiểu theo quy định của pháp luật tại quốc gia sở tại) để tự đăng ký tài khoản và sử dụng các tính năng tương tác của Ứng dụng. Trẻ em dưới 13 tuổi chỉ được phép sử dụng Ứng dụng dưới sự giám sát và đồng ý trực tiếp từ cha mẹ hoặc người giám hộ hợp pháp."
                    data-en="You must be thirteen (13) years of age or older (or the minimum age required by law in your home country) to register for an account and use the App's interactive features. Children under 13 are only allowed to use the App under the direct supervision and consent of a parent or legal guardian."
                  >
                    You must be thirteen (13) years of age or older (or the minimum age
                    required by law in your home country) to register for an account and use
                    the App&apos;s interactive features. Children under 13 are only allowed to use
                    the App under the direct supervision and consent of a parent or legal
                    guardian.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display text-xl font-bold mb-4 uppercase tracking-widest"
                    data-vi="2.2. Quản lý và Bảo mật tài khoản"
                    data-en="2.2. Account Management and Security"
                  >
                    2.2. Account Management and Security
                  </h3>
                  <p
                    className="mb-4"
                    data-vi="Để đồng bộ hóa tiến độ học tập và tham gia các nhóm học tập, Ứng dụng yêu cầu người dùng đăng nhập thông qua các phương thức xác thực của bên thứ ba được hỗ trợ (Google Sign-In hoặc Apple Sign-In)."
                    data-en="To sync learning progress and participate in study groups, the App requires users to log in through supported third-party authentication methods (Google Sign-In or Apple Sign-In)."
                  >
                    To sync learning progress and participate in study groups, the App
                    requires users to log in through supported third-party authentication
                    methods (Google Sign-In or Apple Sign-In).
                  </p>
                  <ul className="space-y-4">
                    <li
                      data-vi="Bạn có trách nhiệm hoàn toàn trong việc bảo mật tài khoản cá nhân và các thiết bị cài đặt ứng dụng của mình."
                      data-en="You are fully responsible for maintaining the security of your personal account and the devices on which the app is installed."
                    >
                      You are fully responsible for maintaining the security of your personal
                      account and the devices on which the app is installed.
                    </li>
                    <li
                      data-vi="Chúng tôi có quyền tạm khóa hoặc chấm dứt vĩnh viễn quyền truy cập tài khoản của bạn mà không cần báo trước nếu phát hiện bất kỳ hành vi gian lận kỹ thuật, phá hoại hệ thống hoặc vi phạm nghiêm trọng các quy định tại văn bản này."
                      data-en="We reserve the right to temporarily suspend or permanently terminate your account access without prior notice if we detect any technical fraud, system sabotage, or serious violation of the regulations in this document."
                    >
                      We reserve the right to temporarily suspend or permanently terminate
                      your account access without prior notice if we detect any technical
                      fraud, system sabotage, or serious violation of the regulations in
                      this document.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="3. Quy định về Nội dung do Người dùng tạo (UGC) và Tính năng Cộng đồng"
                data-en="3. Regulations on User-Generated Content (UGC) and Community Features"
              >
                3. Regulations on User-Generated Content (UGC) and Community Features
              </h2>
              <p
                className="mb-8 italic opacity-70"
                data-vi="(Mục này được thiết lập nhằm tuân thủ nghiêm ngặt Hướng dẫn kiểm duyệt ứng dụng của Apple — App Store Guideline 1.2 về User-Generated Content và các quy định an toàn của Google Play)."
                data-en="(This section is established to strictly comply with Apple's App Review Guidelines — App Store Guideline 1.2 on User-Generated Content and Google Play safety regulations)."
              >
                (This section is established to strictly comply with Apple&apos;s App Review
                Guidelines — App Store Guideline 1.2 on User-Generated Content and Google
                Play safety regulations).
              </p>
              <p
                className="mb-6"
                data-vi="Ứng dụng cung cấp tính năng &quot;Nhóm học tập (Social Learning)&quot;, cho phép người dùng hiển thị tên, ảnh đại diện và tiến trình học tập cá nhân trong các nhóm học tập nội bộ. Để đảm bảo môi trường học tập lành mạnh, chúng tôi áp dụng chính sách <strong>&quot;Không khoan nhượng&quot; (Zero Tolerance)</strong> đối với nội dung phản cảm và hành vi lạm dụng:"
                data-en="The App provides a &quot;Social Learning Groups&quot; feature, allowing users to display their name, profile picture, and individual learning progress within internal study groups. To ensure a healthy learning environment, we apply a <strong>&quot;Zero Tolerance&quot;</strong> policy for offensive content and abusive behavior:"
              >
                The App provides a &quot;Social Learning Groups&quot; feature, allowing users to display
                their name, profile picture, and individual learning progress within internal
                study groups. To ensure a healthy learning environment, we apply a{" "}
                <strong>&quot;Zero Tolerance&quot;</strong> policy for offensive content and abusive
                behavior:
              </p>
              <div className="space-y-8">
                <div>
                  <h3
                    className="font-display text-xl font-bold mb-4 uppercase tracking-widest"
                    data-vi="3.1. Hành vi bị nghiêm cấm"
                    data-en="3.1. Prohibited Behavior"
                  >
                    3.1. Prohibited Behavior
                  </h3>
                  <p
                    className="mb-4"
                    data-vi="Khi tham gia tính năng cộng đồng, bạn tuyệt đối không được thực hiện các hành vi sau:"
                    data-en="When participating in community features, you must absolutely not engage in the following behaviors:"
                  >
                    When participating in community features, you must absolutely not engage
                    in the following behaviors:
                  </p>
                  <ul className="space-y-4">
                    <li
                      data-vi="Đặt tên hiển thị hoặc đăng tải các thông tin mang tính chất thô tục, khiêu dâm, xúc phạm, bôi nhọ, đe dọa hoặc quấy rối các thành viên khác."
                      data-en="Using a display name or posting information that is vulgar, pornographic, offensive, defamatory, threatening, or harassing to other members."
                    >
                      Using a display name or posting information that is vulgar,
                      pornographic, offensive, defamatory, threatening, or harassing to
                      other members.
                    </li>
                    <li
                      data-vi="Chia sẻ, truyền bá các nội dung kích động bạo lực, phân biệt chủng tộc, tôn giáo, vùng miền hoặc vi phạm pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam và luật pháp quốc tế."
                      data-en="Sharing or spreading content that incites violence, racism, religious or regional discrimination, or violates the laws of the Socialist Republic of Vietnam and international law."
                    >
                      Sharing or spreading content that incites violence, racism, religious or
                      regional discrimination, or violates the laws of the Socialist
                      Republic of Vietnam and international law.
                    </li>
                    <li
                      data-vi="Vi phạm quyền sở hữu trí tuệ hoặc quyền bảo mật của bất kỳ cá nhân hay tổ chức nào khác."
                      data-en="Violating the intellectual property rights or privacy rights of any other individual or organization."
                    >
                      Violating the intellectual property rights or privacy rights of any
                      other individual or organization.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="font-display text-xl font-bold mb-4 uppercase tracking-widest"
                    data-vi="3.2. Cơ chế giám sát và Xử lý vi phạm"
                    data-en="3.2. Monitoring and Violation Handling Mechanism"
                  >
                    3.2. Monitoring and Violation Handling Mechanism
                  </h3>
                  <ul className="space-y-4">
                    <li
                      data-vi="Chúng tôi có toàn quyền chủ động sàng lọc, kiểm tra và gỡ bỏ ngay lập tức bất kỳ thông tin nào do người dùng tạo ra nếu xác định nội dung đó vi phạm quy định pháp luật hoặc tiêu chuẩn cộng đồng của Ứng dụng."
                      data-en="We reserve the full right to proactively screen, inspect, and immediately remove any user-generated information if we determine that content violates legal regulations or the App's community standards."
                    >
                      We reserve the full right to proactively screen, inspect, and
                      immediately remove any user-generated information if we determine that
                      content violates legal regulations or the App&apos;s community standards.
                    </li>
                    <li
                      data-vi="Ứng dụng tích hợp sẵn cơ chế cho phép người dùng báo cáo (Report) các hành vi vi phạm hoặc người dùng độc hại trực tiếp từ giao diện nhóm. Ban quản trị cam kết thẩm định và xử lý các báo cáo vi phạm trong vòng tối đa hai mươi tư (24) giờ."
                      data-en="The App includes a built-in mechanism that allows users to report (Report) violations or malicious users directly from the group interface. The administration team is committed to reviewing and processing violation reports within a maximum of twenty-four (24) hours."
                    >
                      The App includes a built-in mechanism that allows users to report
                      (Report) violations or malicious users directly from the group
                      interface. The administration team is committed to reviewing and
                      processing violation reports within a maximum of twenty-four (24)
                      hours.
                    </li>
                    <li
                      data-vi="Người dùng có hành vi vi phạm sẽ bị khóa tài khoản vĩnh viễn và cấm truy cập vào mọi tính năng tương tác của Ứng dụng mà không nhận được bất kỳ sự thông báo hay bồi hoàn nào."
                      data-en="Users who commit violations will have their accounts permanently locked and be banned from all interactive features of the App without receiving any notice or reimbursement."
                    >
                      Users who commit violations will have their accounts permanently locked
                      and be banned from all interactive features of the App without
                      receiving any notice or reimbursement.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="4. Tính năng Phân tích Phát âm bằng Trí tuệ Nhân tạo (AI)"
                data-en="4. AI Pronunciation Analysis Feature"
              >
                4. AI Pronunciation Analysis Feature
              </h2>
              <p
                className="mb-6"
                data-vi="Ứng dụng tích hợp công nghệ Trí tuệ nhân tạo (AI) giúp phân tích âm thanh và đánh giá phát âm tiếng Anh của người dùng. Tính năng này yêu cầu quyền truy cập vào Microphone trên thiết bị của bạn:"
                data-en="The App integrates Artificial Intelligence (AI) technology to help analyze audio and evaluate users' English pronunciation. This feature requires access to the Microphone on your device:"
              >
                The App integrates Artificial Intelligence (AI) technology to help analyze
                audio and evaluate users&apos; English pronunciation. This feature requires access
                to the Microphone on your device:
              </p>
              <ul className="space-y-4 mb-6">
                <li
                  data-vi="Ứng dụng chỉ thực hiện thu âm khi bạn chủ động cấp quyền hệ thống và nhấn giữ nút ghi âm trong các bài học cụ thể."
                  data-en="The App only performs audio recording when you actively grant system permissions and press and hold the record button in specific lessons."
                >
                  The App only performs audio recording when you actively grant system
                  permissions and press and hold the record button in specific lessons.
                </li>
                <li
                  data-vi="Bạn hiểu và đồng ý rằng các kết quả nhận diện, chấm điểm, đánh giá và phản hồi lỗi sai từ hệ thống AI chỉ mang tính chất tham khảo, hỗ trợ cải thiện kỹ năng cá nhân. Kết quả này <strong>không mang giá trị chứng nhận pháp lý, không tương đương hoặc thay thế cho kết quả thi khảo thí chính thức</strong> của các tổ chức giáo dục toàn cầu."
                  data-en="You understand and agree that the recognition, scoring, evaluation, and error feedback results from the AI system are for reference and personal skill improvement support only. These results <strong>do not hold legal certification value, are not equivalent to, or a substitute for official examination results</strong> from global educational organizations."
                >
                  You understand and agree that the recognition, scoring, evaluation, and
                  error feedback results from the AI system are for reference and personal
                  skill improvement support only. These results{" "}
                  <strong>
                    do not hold legal certification value, are not equivalent to, or a
                    substitute for official examination results
                  </strong>{" "}
                  from global educational organizations.
                </li>
              </ul>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="5. Cam kết Dịch vụ Miễn phí"
                data-en="5. Free Service Commitment"
              >
                5. Free Service Commitment
              </h2>
              <p
                className="mb-6"
                data-vi="Ở phiên bản hiện tại, <strong>FM Dictionary được cung cấp hoàn toàn miễn phí</strong> cho tất cả người dùng tải về và sử dụng các tính năng cốt lõi. Chúng tôi cam kết:"
                data-en="In the current version, <strong>FM Dictionary is provided completely free of charge</strong> for all users to download and use core features. We commit:"
              >
                In the current version, <strong>FM Dictionary is provided completely free of charge</strong> for all users to download and use core features. We commit:
              </p>
              <ul className="space-y-4">
                <li
                  data-vi="Không thu bất kỳ khoản phí ẩn hay yêu cầu đăng ký gói thành viên trả phí nào trong suốt quá trình người dùng học tập và vận hành ứng dụng."
                  data-en="Not to collect any hidden fees or require paid membership subscriptions throughout the user's learning and app operation process."
                >
                  Not to collect any hidden fees or require paid membership subscriptions
                  throughout the user&apos;s learning and app operation process.
                </li>
                <li
                  data-vi="Toàn bộ kho từ vựng và tiến trình học tập được mở khóa tự động mà không yêu cầu người dùng phải thực hiện giao dịch tài chính hay liên kết thẻ thanh toán."
                  data-en="The entire vocabulary warehouse and learning progress are automatically unlocked without requiring users to perform financial transactions or link payment cards."
                >
                  The entire vocabulary warehouse and learning progress are automatically
                  unlocked without requiring users to perform financial transactions or link
                  payment cards.
                </li>
              </ul>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="6. Giới hạn Trách nhiệm Pháp lý"
                data-en="6. Limitation of Liability"
              >
                6. Limitation of Liability
              </h2>
              <p
                className="mb-6"
                data-vi="Trong phạm vi tối đa được pháp luật cho phép, <strong>An Khang Studio</strong> và <strong>Thúy Tạ</strong> sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hoặc hệ quả nào phát sinh từ:"
                data-en="To the maximum extent permitted by law, <strong>An Khang Studio</strong> and <strong>Thuy Ta</strong> will not be liable for any direct, indirect, incidental, or consequential damages arising from:"
              >
                To the maximum extent permitted by law, <strong>An Khang Studio</strong> and{" "}
                <strong>Thuy Ta</strong> will not be liable for any direct, indirect,
                incidental, or consequential damages arising from:
              </p>
              <ul className="space-y-4">
                <li
                  data-vi="Việc người dùng sử dụng hoặc không thể sử dụng Ứng dụng do các lỗi kỹ thuật khách quan từ phía thiết bị cá nhân."
                  data-en="User use or inability to use the App due to objective technical errors from individual devices."
                >
                  User use or inability to use the App due to objective technical errors from
                  individual devices.
                </li>
                <li
                  data-vi="Sự gián đoạn dịch vụ, mất kết nối, lỗi hệ thống máy chủ hoặc mất mát dữ liệu tạm thời do các nhà cung cấp dịch vụ hạ tầng bên thứ ba gây ra (bao gồm Google Firebase và Cloudflare)."
                  data-en="Service disruption, disconnection, server system errors, or temporary data loss caused by third-party infrastructure service providers (including Google Firebase and Cloudflare)."
                >
                  Service disruption, disconnection, server system errors, or temporary data
                  loss caused by third-party infrastructure service providers (including
                  Google Firebase and Cloudflare).
                </li>
                <li
                  data-vi="Bất kỳ sai sót, thiếu sót không cố ý nào về mặt nội dung định nghĩa từ điển (dù chúng tôi luôn nỗ lực tối đa để đảm bảo tính chính xác và cập nhật liên tục)."
                  data-en="Any unintentional errors or omissions in terms of dictionary definition content (although we always make our best efforts to ensure accuracy and continuous updates)."
                >
                  Any unintentional errors or omissions in terms of dictionary definition
                  content (although we always make our best efforts to ensure accuracy and
                  continuous updates).
                </li>
              </ul>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="7. Luật áp dụng và Giải quyết tranh chấp"
                data-en="7. Applicable Law and Dispute Resolution"
              >
                7. Applicable Law and Dispute Resolution
              </h2>
              <ul className="space-y-4 mb-6">
                <li
                  data-vi="Các Điều khoản Dịch vụ này được điều chỉnh, giải thích và thực thi hoàn toàn theo quy định của <strong>Pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam</strong>."
                  data-en="These Terms of Service are governed, interpreted, and enforced entirely in accordance with the laws of the <strong>Socialist Republic of Vietnam</strong>."
                >
                  These Terms of Service are governed, interpreted, and enforced entirely in
                  accordance with the laws of the <strong>Socialist Republic of Vietnam</strong>
                  .
                </li>
                <li
                  data-vi="Mọi tranh chấp, khiếu nại phát sinh từ hoặc liên quan đến việc sử dụng Ứng dụng trước hết sẽ được giải quyết thông qua tinh thần thương lượng, hòa giải thiện chí giữa các bên."
                  data-en="Any disputes or complaints arising from or related to the use of the App will first be resolved through a spirit of negotiation and good-faith reconciliation between the parties."
                >
                  Any disputes or complaints arising from or related to the use of the App
                  will first be resolved through a spirit of negotiation and good-faith
                  reconciliation between the parties.
                </li>
                <li
                  data-vi="Trong trường hợp không thể đạt được thỏa thuận chung bằng thương lượng trong vòng sáu mươi (60) ngày kể từ ngày phát sinh tranh chấp, vụ việc sẽ được đưa ra giải quyết tại Tòa án nhân dân có thẩm quyền tại Việt Nam để phân xử theo luật định."
                  data-en="In the event that a mutual agreement cannot be reached through negotiation within sixty (60) days from the date the dispute arose, the case will be brought for resolution at a competent People's Court in Vietnam for adjudication according to the law."
                >
                  In the event that a mutual agreement cannot be reached through negotiation
                  within sixty (60) days from the date the dispute arose, the case will be
                  brought for resolution at a competent People&apos;s Court in Vietnam for
                  adjudication according to the law.
                </li>
              </ul>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <section data-aos="fade-up" className="text-black dark:text-white">
              <h2
                className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter"
                data-vi="8. Thay đổi Điều khoản và Thông tin Liên hệ"
                data-en="8. Changes to Terms and Contact Information"
              >
                8. Changes to Terms and Contact Information
              </h2>
              <div className="p-8 md:p-12 border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5">
                <p
                  className="mb-6"
                  data-vi="Chúng tôi có quyền sửa đổi, bổ sung hoặc cập nhật các Điều khoản Dịch vụ này bất kỳ lúc nào để đáp ứng các thay đổi về công nghệ, tính năng vận hành hoặc quy định pháp lý mới từ Google và Apple. Phiên bản cập nhật mới nhất sẽ được đăng tải trực tiếp công khai trên hệ thống và ghi nhận ngày cập nhật ở phần đầu văn bản."
                  data-en="We reserve the right to modify, supplement, or update these Terms of Service at any time to accommodate technological changes, operational features, or new legal regulations from Google and Apple. The latest updated version will be posted publicly on the system and will note the update date at the beginning of the document."
                >
                  We reserve the right to modify, supplement, or update these Terms of Service
                  at any time to accommodate technological changes, operational features, or
                  new legal regulations from Google and Apple. The latest updated version will
                  be posted publicly on the system and will note the update date at the
                  beginning of the document.
                </p>
                <p
                  className="mb-6 font-bold"
                  data-vi="Thông tin liên hệ chính thức và tiếp nhận phản ánh:"
                  data-en="Official contact information and feedback reception:"
                >
                  Official contact information and feedback reception:
                </p>
                <ul className="space-y-4 font-bold">
                  <li>
                    <span
                      data-vi="Đơn vị phát triển kỹ thuật: An Khang Studio"
                      data-en="Technical Developer: An Khang Studio"
                    >
                      Technical Developer: An Khang Studio
                    </span>
                  </li>
                  <li>
                    <span
                      data-vi="Chủ sở hữu bản quyền nội dung: Thúy Tạ (Thuy Ta)"
                      data-en="Content Copyright Owner: Thuy Ta"
                    >
                      Content Copyright Owner: Thuy Ta
                    </span>
                  </li>
                  <li>
                    <span
                      data-vi="Email hỗ trợ & Tiếp nhận báo cáo vi phạm: "
                      data-en="Support Email & Violation Reporting: "
                    >
                      Support Email & Violation Reporting:{" "}
                    </span>
                    <a href="mailto:ankhang.nguyen0704@gmail.com" className="underline break-all">
                      ankhang.nguyen0704@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-black/10 dark:border-white/10" />

            <p
              className="text-xs opacity-50 italic text-center py-10"
              data-vi="<em>Văn bản này được thiết lập nhằm tuân thủ các nguyên tắc kiểm duyệt và bảo vệ quyền sở hữu trí tuệ nghiêm ngặt của Apple App Store và Google Play Store.</em>"
              data-en="<em>This document is established to comply with the strict review guidelines and intellectual property protection of the Apple App Store and Google Play Store.</em>"
            >
              <em>
                This document is established to comply with the strict review guidelines and
                intellectual property protection of the Apple App Store and Google Play Store.
              </em>
            </p>
          </div>
        </div>
      </main>

      <Footer variant="fm" />
    </>
  );
}
