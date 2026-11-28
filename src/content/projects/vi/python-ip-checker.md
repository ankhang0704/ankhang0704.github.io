---
title: "Python IP Checker"
code: "PRJ-05"
category: "tools"
status: "CÔNG CỤ NỘI BỘ CNTT"
year: "2026"
summary: "Tiện ích Python đa luồng quét dải IP, kiểm tra cổng dịch vụ và xuất báo cáo CSV cho vận hành CNTT."
featured: false
techStack:
  - "Python 3"
  - "Socket API"
  - "Quét Subnet"
  - "Đa luồng"
  - "Xuất CSV"
specs:
  - "Python 3 Socket/Ping"
  - "Quét Subnet"
  - "Xuất file CSV"
image: "/python-ip-checker-cover.webp"
externalHref: "https://github.com/ankhang0704/python-ip-checker"
externalLabel: "GitHub ↗"
canonicalPath: "/python-ip-checker/"
---

# Python IP Checker — Tiện Ích IT Thực Tế

Tiện ích tự động hóa viết bằng Python hỗ trợ công việc kiểm tra tình trạng kết nối mạng hàng loạt thay vì phải ping kiểm tra thủ công từng địa chỉ IP. Công cụ ra đời từ chính nhu cầu vận hành hạ tầng CNTT thực tế trong môi trường doanh nghiệp và bệnh viện.

## Quy Trình Thực Thi

| Giai đoạn                | Thành phần Python        | Nhiệm vụ xử lý                                | Kết quả đầu ra                                   |
| :----------------------- | :----------------------- | :-------------------------------------------- | :----------------------------------------------- |
| **01. Phân tích dải IP** | Thư viện chuẩn / CLI     | Mở rộng dải CIDR hoặc danh sách IP mục tiêu   | Danh sách host chuẩn hóa, tránh gõ nhầm thủ công |
| **02. Thăm dò đa luồng** | Threading + Socket API   | Chạy song song kiểm tra ping & kết nối cổng   | Xác thực nhanh DNS, HTTP, SMB, RDP               |
| **03. Xuất báo cáo**     | Module `csv` + Timestamp | Tổng hợp trạng thái online/offline và cổng mở | Tệp CSV gắn mốc thời gian phục vụ kiểm kê        |

## Các Tính Năng Nổi Bật

- **Quét Dải IP Đa Luồng**: Tận dụng cơ chế đa luồng (threading) giúp kiểm tra hàng trăm máy trạm, máy in và thiết bị mạng trong vài giây.
- **Xác Thực Dịch Vụ Mạng**: Kiểm tra độ phản hồi của các cổng phổ biến trong mạng nội bộ (DNS, HTTP, SMB, RDP) để khoanh vùng sự cố nhanh.
- **Xuất Báo Cáo CSV Tự Động**: Tạo tệp báo cáo tổng hợp kèm mốc thời gian phục vụ công tác kiểm kê và bảo trì hạ tầng định kỳ.
