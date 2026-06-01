# FM Dictionary — An Khang Studio

**FM Dictionary** là ứng dụng học từ vựng chuyên ngành cao cấp, được thiết kế chuyên biệt để giúp sinh viên, kỹ sư, ban quản lý tòa nhà và các chuyên gia làm chủ **hơn 1.800 thuật ngữ trọng tâm** trong lĩnh vực **Quản lý cơ sở vật chất (Facility Management - FM)**. Ứng dụng được xây dựng bằng Flutter cho cả hai nền tảng iOS & Android.

## Nền tảng và Thành tựu
*   **Nền tảng hỗ trợ:** iOS & Android (giao diện tương thích mọi kích thước màn hình).
*   **Hệ thống huy hiệu (Gamification):** 8 huy hiệu thành tựu độc đáo có thể mở khóa.
*   **Ngôn ngữ ứng dụng:** Hỗ trợ đầy đủ tiếng Việt (VI) và tiếng Anh (EN).
*   **Khả năng hoạt động:** Thiết kế ưu tiên ngoại tuyến (Offline-First) giúp tra cứu và học từ vựng mọi lúc mọi nơi mà không cần kết nối mạng liên tục.

## Tính năng chính
*   **Từ điển chuyên ngành FM:** Tra cứu nhanh chóng hơn 1.800 từ vựng chuyên ngành Quản lý cơ sở vật chất với định nghĩa chi tiết, phiên âm, ví dụ thực tế và phát âm chuẩn.
*   **Lộ trình học tập (Roadmap):** Lộ trình học được phân chia khoa học theo các chương, giai đoạn với độ khó tăng dần, hỗ trợ người học theo dõi sát sao tiến trình học tập của mình.
*   **Luyện phát âm cùng AI:** Đọc và kiểm tra phát âm thời gian thực. Âm thanh được truyền tải qua cổng proxy bảo mật (Cloudflare Workers) để phân tích phản hồi ngay lập tức và bị xóa vĩnh viễn ngay sau đó nhằm bảo vệ tuyệt đối quyền riêng tư.
*   **Hệ thống học tập thông minh:** Sử dụng flashcard tương tác kết hợp phương pháp lặp lại ngắt quãng (spaced repetition) và các bài kiểm tra trắc nghiệm (quiz) sinh động.
*   **Nhóm học tập (Social Learning):** Cho phép người dùng tham gia các nhóm học tập riêng tư để thi đua, chia sẻ tiến độ học tập và bảng xếp hạng cùng đồng nghiệp/bạn bè.
*   **Đồng bộ đám mây:** Tiến trình học tập, flashcard cá nhân được đồng bộ hóa tức thì và an toàn qua tài khoản Google hoặc Apple lên Firebase Cloud Firestore.

## Công nghệ sử dụng (Tech Stack)
*   **Framework:** Flutter (Mobile)
*   **Language:** Dart
*   **State Management:** Provider
*   **Local Storage:** Hive & SharedPreferences
*   **Cloud Backend:** Firebase Auth, Firestore Database, Realtime Database (đồng bộ nhóm và bảng xếp hạng)
*   **Dependency Injection:** GetIt
*   **Bản địa hóa:** easy_localization
*   **AI Audio Processing:** Cloudflare API (xử lý giọng nói bảo mật)

## Quyền truy cập ứng dụng
*   **Microphone:** Chỉ yêu cầu khi người dùng chủ động sử dụng tính năng luyện phát âm. Âm thanh được xử lý thời gian thực và xóa lập tức, không lưu trữ trên máy chủ.
*   **Kết nối Internet:** Sử dụng để đồng bộ hóa dữ liệu tiến trình học tập, bảng xếp hạng nhóm học tập và tính năng xác thực tài khoản.
*   **Thông báo (Notifications):** Tùy chọn nhắc nhở học tập hàng ngày để duy trì chuỗi ngày học (streak).

## Về dự án
FM Dictionary là ứng dụng giáo dục chuyên ngành cao cấp, được phát triển nhằm mục tiêu xóa bỏ rào cản ngôn ngữ trong ngành Quản lý cơ sở vật chất tại Việt Nam. Toàn bộ nội dung chuyên môn và chương trình thuật ngữ được sở hữu & biên soạn bởi **Thuy Ta (Thủy Tạ)**, và ứng dụng được thiết kế & phát triển bởi **An Khang Studio**. 

**Liên hệ hỗ trợ & Hợp tác:** [ankhang.nguyen0704@gmail.com](mailto:ankhang.nguyen0704@gmail.com)
