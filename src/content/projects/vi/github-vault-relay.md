---
title: "GitHub Vault Relay"
code: "PRJ-02"
category: "tools"
status: "MÃ NGUỒN MỞ · COMMUNITY"
year: "2026"
summary: "Cầu nối đồng bộ GitHub open source, mobile-first cho Obsidian Mobile và desktop, dùng HTTPS API mà không chạy Git trên điện thoại. Sync do người dùng kích hoạt và giữ lại các thay đổi không rõ để review."
featured: true
techStack:
  - "TypeScript"
  - "Obsidian API"
  - "GitHub REST API"
  - "Git Data API"
  - "Mobile-First"
specs:
  - "Plugin Cộng đồng Obsidian"
  - "Đồng bộ Tree qua HTTPS"
  - "Không Máy chủ Trung gian"
  - "Lưu Token An toàn Nội bộ"
image: "/github-vault-relay-cover.webp"
externalHref: "https://community.obsidian.md/plugins/github-vault-relay"
externalLabel: "Xem trên Obsidian ↗"
canonicalPath: "/github-vault-relay/"
---

# GitHub Vault Relay — Plugin Cộng Đồng Obsidian

Cầu nối đồng bộ hóa mã nguồn mở, gọn nhẹ và có tính dự đoán tuyệt đối giữa thư mục ghi chú Obsidian Vault với kho lưu trữ GitHub trên mọi hệ điều hành: iOS, Android, macOS, Windows và Linux. Nhờ sử dụng trực tiếp GitHub Git Data REST API, plugin cho phép người dùng đồng bộ mượt mà trên điện thoại mà không cần cài Git CLI hay môi trường dòng lệnh phức tạp.

## Các Chỉ Số Kiến Trúc Nổi Bật

- **Quy Trình Đồng Bộ 6 Giai Đoạn Tuyến Tính**: Trình tự đồng bộ chặt chẽ giúp loại bỏ triệt để hiện tượng xung đột dữ liệu ngầm (silent overwrite) hoặc lỗi tranh chấp tài nguyên (race condition).
- **Giao Thức HTTPS Trực Tiếp**: Khai thác lớp mạng chuẩn `requestUrl()` của Obsidian để giao tiếp trực tiếp với các điểm cuối API của GitHub.
- **Không Thông Qua Máy Chủ Trung Gian**: Dữ liệu ghi chú di chuyển thẳng giữa thiết bị cá nhân của bạn và repository GitHub cá nhân.
- **Chủ Động 100% Theo Thao Tác Người Dùng**: Chỉ chạy khi người dùng chủ động bấm đồng bộ, tránh xung đột bất ngờ khi đang chỉnh sửa dở dang.

## Quy Trình Đồng Bộ 6 Giai Đoạn Tuyến Tính

Sơ đồ quy trình tương tác phía trên trình bày chi tiết luồng xử lý và dữ liệu vào/ra. Dưới đây là bảng tóm tắt 6 giai đoạn tuần tự:

| Giai đoạn           | Thao tác kỹ thuật                       | Trọng tâm xử lý      | Tính bất biến bảo đảm                         |
| :------------------ | :-------------------------------------- | :------------------- | :-------------------------------------------- |
| **01. Kiểm kê**     | Quét toàn Vault & lập bảng SHA-256      | Nhận diện tệp vật lý | Chỉ đọc; tuyệt đối không thay đổi đĩa         |
| **02. Đối soát**    | So khớp 3 chiều (Local / Base / Remote) | Phân loại trạng thái | Ghi chú xung đột được giữ cả 2 bản            |
| **03. Kéo dữ liệu** | Tải Blob & ghi nhật ký rollback         | Tải về an toàn       | Mất mạng sẽ tự động khôi phục bản cũ          |
| **04. Kiểm tra**    | Quét đĩa xác thực toàn vẹn              | Thẩm định mã băm     | Dừng quy trình nếu phát hiện sai lệch băm     |
| **05. Đẩy dữ liệu** | Dựng Git Tree & tạo commit mới          | Git Data API         | Dựng cây nguyên tử; chỉ cho phép fast-forward |
| **06. Ghi nhận**    | Cập nhật mốc vào `state.json`           | Hoàn tất chu kỳ      | Chỉ cập nhật sau khi push thành công 100%     |

### Giai đoạn 01: Kiểm kê Vault (Discovery & Tree Traversal)

Quét đệ quy toàn bộ các file markdown và tệp đính kèm trong Vault được chỉ định. Thiết lập bảng băm SHA-256 trên bộ nhớ RAM phản ánh chính xác trạng thái vật lý trên đĩa.

### Giai đoạn 02: Đối soát phân nhánh (Three-Way State Comparison)

So sánh độc lập ba chiều giữa bảng băm local, mốc chuẩn baseline `state.json` và cây đối tượng nhánh remote trên GitHub. Phân loại từng file vào các nhóm trạng thái rõ ràng:

- `LOCAL_ONLY`: File mới tạo ở máy cá nhân, sẵn sàng được đẩy lên GitHub.
- `REMOTE_ONLY`: File mới được thêm trên GitHub, chuẩn bị được tải về máy.
- `LOCAL_CHANGED`: File ở local đã có chỉnh sửa trong khi remote vẫn giữ nguyên.
- `REMOTE_CHANGED`: File trên GitHub đã cập nhật mới trong khi bản local chưa thay đổi.
- `POTENTIAL_CONFLICT`: Cả hai bên cùng sửa đổi phân kỳ. Giữ nguyên cả hai phiên bản vào thư mục review thay vì ghi đè mất dữ liệu.
- `UNCHANGED`: Mã băm nội dung hoàn toàn trùng khớp ở cả 3 phía.

### Giai đoạn 03: Kéo dữ liệu (Verified Remote Ingestion)

Tải về các blob remote đã chỉnh sửa kèm nhật ký giao dịch phục hồi (rollback journal). Nếu kết nối mạng đứt gãy giữa chừng, trạng thái cũ được khôi phục nguyên vẹn.

### Giai đoạn 04: Kiểm tra bất biến (Post-Pull Integrity Invariant)

Sau khi ghi file, `UnifiedSyncEngine` quét lại toàn bộ ổ đĩa vật lý để cam kết rằng dữ liệu thực tế khớp 100% với cây Git commit trước khi cho phép bước đẩy tiếp tục.

### Giai đoạn 05: Đẩy dữ liệu (Atomic Git Commit & Tree Push)

Tạo các blob dữ liệu mới trên GitHub qua Git Data API, dựng đối tượng Git tree liên kết với commit cha, và tạo một commit nguyên khối duy nhất.

### Giai đoạn 06: Cập nhật con trỏ (Atomic Baseline Cursor Advance)

Chỉ sau khi nhận được phản hồi thành công từ GitHub, `StorageManager` mới ghi đè mã commit SHA mới vào `state.json`.

## Ranh Giới An Toàn & Bảo Mật

1. **Một Thư Mục Đích Duy Nhất**: Chỉ thao tác trên một repository, nhánh và thư mục Vault mà người dùng chỉ định.
2. **Chỉ Dùng Kết Nối HTTPS Trực Tiếp**: Loại bỏ hoàn toàn máy chủ chuyển tiếp (relay server) bên thứ ba.
3. **Bảo Mật Tuyệt Đối Token Cá Nhân**: GitHub PAT được lưu trong `SecretStorage` nội bộ của Obsidian và tự động lọc sạch khỏi nhật ký lỗi.
