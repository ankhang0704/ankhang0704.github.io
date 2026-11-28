---
title: "Hotel Management"
code: "PRJ-03"
category: "backend"
status: "ĐỒ ÁN TỐT NGHIỆP"
year: "2025"
summary: "Hệ thống quản lý đặt phòng và tồn kho bằng Django, tích hợp trợ lý RAG tra cứu chính sách nội bộ trên FAISS."
featured: true
techStack:
  - "Django 5.x"
  - "Python"
  - "SQLite + WAL"
  - "Server-Rendered"
  - "FAISS Vector RAG"
  - "HuggingFace Embeddings"
specs:
  - "Django 5 + SQLite"
  - "FAISS Vector RAG"
  - "Monolith Server-Rendered"
  - "Phân Quyền Vai Trò Nghiệp Vụ"
image: "/hotel-management-editorial-cover.webp"
externalHref: "https://github.com/ankhang0704/QuanLyKhachSan_AI"
externalLabel: "GitHub ↗"
canonicalPath: "/hotel-management/"
---

# Hotel Management — Báo Cáo Đồ Án Tốt Nghiệp

Hệ thống quản lý khách sạn và vận hành buồng phòng hoàn chỉnh, được xây dựng như một đồ án capstone chất lượng cao bằng nền tảng Django monolith server-rendered. Hệ thống kết hợp cơ sở dữ liệu SQLite tối ưu với một trợ lý tri thức RAG (Retrieval-Augmented Generation) độc lập phục vụ tra cứu chính sách khu nghỉ dưỡng.

## Sơ Đồ Kiến Trúc Hệ Thống

Sơ đồ kiến trúc tương tác phía trên minh họa chi tiết các tầng vận hành và bus AI độc lập. Dưới đây là bảng phân lập các tầng kỹ thuật:

| Tầng                              | Công nghệ & Động cơ             | Trách nhiệm kiến trúc                   | Ranh giới an toàn & Tính bất biến                |
| :-------------------------------- | :------------------------------ | :-------------------------------------- | :----------------------------------------------- |
| **Tầng 01: Giao diện máy trạm**   | HTML Server-Rendered tốc độ cao | Hiển thị < 50ms, phân quyền vai trò     | Cookie HTTPOnly, bắt buộc kiểm tra CSRF          |
| **Tầng 02: Lõi Monolith**         | Django 5.x, Python 3.12         | Ma trận giao thoa ngày & máy trạng thái | Khóa dòng nguyên tử qua `select_for_update`      |
| **Tầng 03A: Cơ sở dữ liệu chính** | SQLite 3 chế độ WAL             | Đọc ghi tốc độ cao, giao dịch ACID      | Write-Ahead Logging; không cần cài đặt daemon DB |
| **Tầng 03B: Trợ lý AI ngữ nghĩa** | Kho vector FAISS + HuggingFace  | Hỏi đáp chính sách khách sạn nội bộ     | 100% ngoại tuyến trong RAM; không rò rỉ dữ liệu  |

## Các Trụ Cột Kỹ Thuật Chính

### 1. Động Cơ Tồn Kho Phòng Theo Ngày

Quản lý lịch phòng chi tiết tới từng số phòng vật lý và loại phòng. Mỗi khoảng thời gian lưu trú được đối chiếu nguyên khối nhằm ngăn chặn triệt để tình trạng trùng phòng (double booking) khi nhiều nhân viên cùng thao tác.

### 2. Máy Trạng Thái Vòng Đời Đặt Phòng

Mô hình hóa chặt chẽ toàn bộ chu trình: Tạo đơn mới, trừ tồn kho phòng tức thời, lưu thông tin cọc, làm thủ tục nhận phòng (Check-in), thanh toán trả phòng (Check-out) và tự động hoàn trả phòng về trạng thái trống khi đơn bị hủy.

### 3. Tối Ưu Hóa Truy Vấn ORM

Loại bỏ hoàn toàn bài toán N+1 truy vấn trên các bảng điều khiển quản trị bằng cách áp dụng có chọn lọc `select_related` cho các quan hệ khóa ngoại (Foreign Key) và `prefetch_related` cho chi tiết hóa đơn dịch vụ.

### 4. Ranh Giới Phân Quyền Vai Trò

Sử dụng các decorator kiểm tra quyền chặt chẽ trên từng view:

- **Quản trị viên**: Thiết lập bảng giá, quản lý tài khoản nhân viên, xem báo cáo doanh thu.
- **Lễ tân**: Đặt phòng, đổi phòng, tạo hóa đơn thanh toán.
- **Bộ phận Buồng phòng**: Cập nhật trạng thái phòng đã dọn dẹp hoặc phòng cần bảo trì.

### 5. Trợ Lý Tri Thức RAG Với FAISS

Xây dựng luồng tìm kiếm ngữ nghĩa độc lập, chuyển đổi nội quy, hướng dẫn lưu trú và chính sách tiện ích thành các vector nhúng (vector embeddings) thông qua mô hình HuggingFace. Lễ tân có thể tra cứu tức thì thông tin chính sách bằng ngôn ngữ tự nhiên.

### 6. An Toàn Giao Dịch ACID Với SQLite WAL

Khai thác SQLite cấu hình chế độ Write-Ahead Logging (WAL) kết hợp các khối `transaction.atomic` của Django, mang lại độ tin cậy giao dịch tối đa mà không phát sinh chi phí bảo trì cơ sở dữ liệu cồng kềnh.

## Lịch Sử Hoàn Thiện

- **28/10/2025**: Khởi tạo kiến trúc nền tảng; thiết kế mô hình cơ sở dữ liệu MVT cho phòng, khách hàng và đơn đặt phòng.
- **19/11/2025**: Hoàn thành toàn bộ quy trình đặt phòng và bộ kiểm thử tự động; xác thực cơ chế phân quyền nhân viên.
- **04/12/2025**: Hoàn tất tích hợp trợ lý tri thức RAG trên nền vector FAISS; kiểm tra độ chuẩn xác của câu trả lời ngữ nghĩa.
