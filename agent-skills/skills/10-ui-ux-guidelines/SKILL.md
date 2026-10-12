# Skill 10 — UI/UX Guidelines

## 1. Mục đích

Định nghĩa chuẩn giao diện và trải nghiệm người dùng thống nhất cho cả 3 chế độ:
bố cục, responsive, các trạng thái (loading/empty/error), ngôn ngữ hiển thị, và cách render
nội dung Markdown (đặc biệt là bảng trong stem/giải thích).

## 2. Đọc khi nào

- Khi hoàn thiện giao diện (bước 9 của Skill 12).
- Đọc trước khi Agent tự ý chọn màu sắc, font chữ, hay copy text cho UI.

## 3. Đầu vào cần thiết

- Skill 01, Skill 05 (component cần style).
- Đáp án câu hỏi mở #9 (ngôn ngữ giao diện, breakpoints responsive).

## 4. Quy tắc bắt buộc

### Bố cục chuẩn từng màn hình

- **HomePage:** tiêu đề ứng dụng + 3 `ModeCard` (ôn tập / đề thi thử 1 / đề thi thử 2),
  mỗi thẻ ghi rõ số câu (40) và mô tả ngắn về chế độ.
- **Màn hình làm bài (chung):** header (tên chế độ + `TimerDisplay` nếu có + nút thoát),
  thân (`QuestionCard` + `QuestionNavigator` bên cạnh/dưới), footer (Trước/Sau + Nộp bài/Trả lời).
- **Màn hình kết quả:** `ScoreSummary` nổi bật + nút "Xem lại" (nếu được duyệt) + "Làm lại" + "Về trang chủ".

### MUST

- **MUST** render `stem` và `explanation` dưới dạng **Markdown đầy đủ**:
  bảng phải hiển thị đúng cột (cho phép cuộn ngang trên màn hình hẹp thay vì vỡ layout),
  in đậm/nghiêng/code inline giữ nguyên ý nghĩa.
- **MUST** có đầy đủ 4 trạng thái cho màn hình tải dữ liệu:
  `loading` (đang parse/tải câu hỏi), `empty` (deck không có câu hỏi — báo lỗi rõ),
  `error` (parse thất bại — hiện thông điệp, không trắng trang), `ready`.
- **MUST** ngữ nghĩa màu sắc nhất quán toàn app:
  - Xanh lá: đáp án đúng / phản hồi đúng.
  - Đỏ: đáp án sai người dùng đã chọn.
  - Xám/trung tính: chưa trả lời / bị khóa mà chưa reveal.
  **MUST NOT** dùng màu sắc làm kênh thông tin duy nhất — luôn kèm text hoặc icon
  (vd: "Đúng"/"Sai", dấu ✓/✗).
- **MUST** mọi nút bấm có label rõ ràng bằng ngôn ngữ đã chốt (#9);
  **MUST NOT** để text tiếng Anh lẫn trong UI nếu đã chốt tiếng Việt
  (ngoại trừ thuật ngữ chuyên môn trong nội dung câu hỏi gốc).
- **MUST** `TimerDisplay` hiển thị `mm:ss`, đổi trạng thái cảnh báo (vd: màu đỏ)
  khi còn dưới 10% thời gian hoặc dưới 5 phút (lấy ngưỡng nhỏ hơn).
- **MUST** hỗ trợ bàn phím cơ bản: Tab di chuyển giữa các option, Enter/Space để chọn.

### MUST NOT

- **MUST NOT** để bảng trong stem/giải thích tràn vỡ layout trên mobile —
  bọc trong container cuộn ngang.
- **MUST NOT** dùng popup/alert mặc định của trình duyệt cho xác nhận nộp bài —
  dùng `ConfirmDialog` (Skill 05).

### Responsive (chi tiết chờ câu hỏi mở #9)

- Mặc định: desktop-first với `QuestionNavigator` cạnh câu hỏi; trên màn hình hẹp,
  navigator thu gọn thành dropdown hoặc thanh cuộn ngang phía trên câu hỏi.
- Chưa chốt #9 thì implement theo mặc định trên và ghi rõ là TẠM.

## 5. Đầu ra mong đợi

Giao diện 3 chế độ + các màn hình phụ (kết quả, xem lại) nhất quán, render đúng Markdown,
đầy đủ trạng thái, dùng được trên các kích thước màn hình đã chốt.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Bảng trong stem/giải thích hiển thị đúng trên desktop và mobile (cuộn ngang khi cần).
- [ ] Đủ 4 trạng thái loading/empty/error/ready, không có màn hình trắng khi lỗi.
- [ ] Ngữ nghĩa màu sắc nhất quán + luôn kèm text/icon, không phụ thuộc mỗi màu sắc.
- [ ] Không còn text tiếng Anh lạc trong UI (nếu đã chốt tiếng Việt).
- [ ] Checklist giao diện của Skill 11 pass.

## 7. Liên kết Skill

- Skill `05-component-design` — các presentational component cần áp chuẩn này.
- Skill `11-testing-validation` — `acceptance-checklists.md` phần giao diện.
- Câu hỏi mở #9 trong `shared/open-questions.md`.

## 8. Câu hỏi mở

- #9 (ngôn ngữ UI + breakpoints): chưa chốt thì dùng mặc định ở §4 và ghi rõ là TẠM.
