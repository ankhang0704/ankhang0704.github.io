---
title: "Python IP Checker"
code: "PRJ-05"
category: "tools"
status: "CÔNG CỤ NỘI BỘ CNTT"
year: "2026"
summary: "Tiện ích Python thực tế cho IT, kiểm tra IP theo batch thay vì kiểm tra thủ công từng địa chỉ."
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
canonicalPath: "/projects/"
---

# Python IP Checker — Tiện Ích IT Thực Tế

Tiện ích tự động hóa viết bằng Python hỗ trợ công việc kiểm tra tình trạng kết nối mạng hàng loạt thay vì phải ping kiểm tra thủ công từng địa chỉ IP. Công cụ ra đời từ chính nhu cầu vận hành hạ tầng CNTT thực tế trong môi trường doanh nghiệp và bệnh viện.

## Các Tính Năng Nổi Bật

- **Quét Dải IP Đa Luồng**: Tận dụng cơ chế đa luồng (threading) giúp kiểm tra hàng trăm máy trạm và thiết bị mạng trong vài giây.
- **Xác Thực Dịch Vụ Mạng**: Kiểm tra độ phản hồi của các cổng phổ biến trong mạng nội bộ (DNS, HTTP, SMB, RDP).
- **Xuất Báo Cáo CSV Tự Động**: Tạo tệp báo cáo tổng hợp kèm mốc thời gian phục vụ công tác kiểm kê và bảo trì hạ tầng định kỳ.
