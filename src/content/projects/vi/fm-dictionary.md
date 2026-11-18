---
title: "FM Dictionary"
code: "PRJ-01"
category: "mobile"
status: "SẢN PHẨM · APP STORE"
year: "2026"
summary: "Ứng dụng học từ vựng FM bằng Flutter với 1.847 thuật ngữ, learning core local-first, ranh giới Firebase được ghi nhận, proxy Cloudflare và các luồng phát âm/STT."
featured: true
techStack:
  - "Flutter"
  - "Dart"
  - "Hive"
  - "Cloudflare Workers"
  - "Firebase"
  - "STT / Audio"
specs:
  - "1.847 Thuật ngữ"
  - "v1.1.4 Production"
  - "Hive Offline (< 5ms)"
  - "Cloudflare STT Proxy"
  - "27 Unit/Widget Test"
image: "/fm-dictionary-editorial-cover.webp"
externalHref: "https://fm-dictionary.pages.dev/"
externalLabel: "Website ↗"
secondaryExternalHref: "https://apps.apple.com/us/app/fm-dictionary/id6774868353"
secondaryExternalLabel: "App Store ↗"
canonicalPath: "/fm-dictionary/"
---

# FM Dictionary — Báo Cáo Kiến Trúc Sản Phẩm

Ứng dụng di động chuyên biệt phục vụ việc tra cứu và ôn luyện từ vựng ngành Quản lý Cơ sở vật chất (Facilities Management) trên nền tảng iOS và Android. Xây dựng bằng Flutter, ứng dụng kết hợp giữa nhân tra cứu ngoại tuyến (Local-First) độ trễ cực thấp với hệ thống Cloud proxy an toàn tại biên mạng.

## Chỉ Số Kỹ Thuật Trọng Yếu

- **1.847 Thuật Ngữ Chuyên Ngành FM**: Bao quát đầy đủ các phân ngành: bảo trì tòa nhà, hệ thống HVAC, cơ điện MEP, an toàn PCCC và quản trị vòng đời tài sản.
- **Độ Trễ Tra Cứu Dưới 5ms**: Tra cứu nhị phân độc lập hoàn toàn với mạng thông qua hộp lưu trữ Hive biên soạn sẵn.
- **50 Bài Kiểm Tra Đánh Giá Năng Lực**: Bộ kịch bản ôn luyện chuẩn hóa kiểm tra mức độ ghi nhớ và phản xạ từ vựng.
- **27 Bài Kiểm Thử Tự Động**: Đảm bảo tính bất biến của bộ băm dữ liệu, thuật toán ngắt quãng Leitner và khả năng tự hồi phục khi proxy gặp sự cố.

## Kiến Trúc Phân Tầng 3 Lớp (3-Tier Architecture)

```
┌────────────────────────────────────────────────────────┐
│ TẦNG 01: CLIENT RUNTIME (Flutter + Dart)               │
│ • Kho nhị phân Hive (Lưu sẵn 1.847 thuật ngữ)          │
│ • Máy trạng thái thuật toán Spaced-Repetition Leitner   │
│ • Bộ chấm điểm phát âm ngữ âm Rule-Based tại thiết bị  │
└──────────────────────────┬─────────────────────────────┘
                           │ (Luồng xác thực mã bảo mật)
                           ▼
┌────────────────────────────────────────────────────────┐
│ TẦNG 02: EDGE GATEWAY (Cloudflare Workers)             │
│ • Bộ đệm âm thanh tại biên (CDN phân tán toàn cầu)     │
│ • Cô lập API Key & Giới hạn tần suất gọi dịch vụ       │
│ • Tự động chuyển tuyến dự phòng khi suy giảm tốc độ   │
└──────────────────────────┬─────────────────────────────┘
                           │ (Đồng bộ bất đồng bộ không nghẽn)
                           ▼
┌────────────────────────────────────────────────────────┐
│ TẦNG 03: RANH GIỚI ĐỒNG BỘ (Firebase Services)         │
│ • Đăng nhập ẩn danh và nâng cấp liên kết Email Auth    │
│ • Đồng bộ Firestore ngầm cho sổ từ và độ thành thạo    │
│ • Bảng xếp hạng Realtime Database (RTDB) siêu nhẹ      │
└────────────────────────────────────────────────────────┘
```

### 1. Client Runtime (Flutter + Dart) — Hoạt Động 100% Offline

- **Kho Lưu Trữ Nhị Phân Hive**: Toàn bộ từ điển và 50 bài kiểm tra năng lực nằm trọn vẹn trong các binary box trên máy, triệt tiêu hoàn toàn thời gian tải qua mạng.
- **Động Cơ Ôn Tập Spaced Repetition**: Máy trạng thái theo mô hình Leitner điều phối chu kỳ ôn tập, mức độ ghi nhớ và chuỗi ngày học tập (streak) mà không cần phụ thuộc vào server.
- **Chấm Điểm Ngữ Âm Trực Tiếp**: So khớp văn bản phiên âm trực tiếp với mẫu phát âm chuyên ngành trên thiết bị, cho phản hồi ngay lập tức đến người học.

### 2. Edge Gateway (Cloudflare Workers) — Proxy Có Xác Thực

- **Lưu Bộ Đệm Phát Âm Tại Biên**: Các đoạn âm thanh phát âm chuẩn được cache ngay tại các máy chủ biên Cloudflare trên toàn cầu, giảm thiểu tối đa độ trễ và tiết kiệm chi phí băng thông gốc.
- **Bảo Vệ Bí Mật API**: Thiết bị người dùng không bao giờ nắm giữ API key của dịch vụ âm thanh bên thứ ba; mọi yêu cầu đều được xác thực và kiểm soát tần suất qua Cloudflare Worker.
- **Chuyển Kênh Dự Phòng Mềm Dẻo**: Hệ thống tự động chuyển đổi sang provider dự phòng nếu kênh phát âm chính gặp sự cố hoặc quá tải.

### 3. Ranh Giới Đồng Bộ (Firebase) — Bất Đồng Bộ & Không Gây Nghẽn

- **Xác Thực Người Dùng Mềm**: Cho phép trải nghiệm học tức thì ở chế độ khách; người dùng có thể đồng bộ vĩnh viễn sang tài khoản email bất kỳ khi nào muốn.
- **Đồng Bộ Dữ Liệu Ngầm Firestore**: Danh sách từ đánh dấu sao và chỉ số chuyên cần được đồng bộ ngầm khi thiết bị có kết nối mạng ổn định.
- **Bảng Xếp Hạng Nhóm**: Sử dụng Realtime Database với cấu trúc tối giản để đếm ngày học liên tiếp, tạo động lực cạnh tranh lành mạnh trong cộng đồng sinh viên và kỹ sư.

## Ranh Giới Kỹ Thuật & Tính Bất Biến

1. **Lõi Độc Lập Không Phụ Thuộc**: Mọi thao tác tìm kiếm, giải nghĩa và làm bài kiểm tra hoạt động bình thường ngay cả khi bật chế độ máy bay.
2. **Cập Nhật Schema Nguyên Khối (Atomic)**: Bản cập nhật từ điển từ xa luôn được kiểm định trên hộp lưu tạm (rollback box) trước khi áp dụng, ngăn ngừa tuyệt đối lỗi hỏng cơ sở dữ liệu.
3. **Cô Lập Tuyệt Đối Lỗi Dịch Vụ Mây**: Việc Firebase hoặc nhà cung cấp speech API gặp sự cố sẽ không bao giờ làm treo hay gián đoạn trải nghiệm của người dùng.
4. **Tôn Trọng Tuyệt Đối Dữ Liệu Cá Nhân**: Ứng dụng không tích hợp bất kỳ SDK quảng cáo hay theo dõi thương mại nào.

## Lịch Sử Phát Triển & Cột Mốc

- **22/03/2026 (Git `6cd2c76`)**: Thiết lập nền móng học tập offline độc lập: Flashcard, cơ chế lưu Hive và Text-to-Speech cơ bản.
- **19/05/2026 (Git `a6b69ed`)**: Tách biệt kiến trúc dịch vụ giọng nói, chuyển từ xử lý nặng trên máy sang Edge Proxy có xác thực tại Cloudflare.
- **31/05/2026 (Git tag `v1.0.0`)**: Phát hành phiên bản chính thức đầu tiên trên App Store cùng trọn bộ 1.847 thuật ngữ FM.
- **05/06/2026 (Git tag `v1.1.0`)**: Cập nhật tính năng nhóm học tập, bảng xếp hạng và tối ưu hóa khả năng tiếp cận (Accessibility).
- **06/09/2026 (Bản phát hành `v1.1.4`)**: Cập nhật phiên bản sản xuất trên App Store & Google Play — ổn định đồng bộ ngoại tuyến, tối ưu tìm kiếm và cải thiện khả năng tiếp cận.
