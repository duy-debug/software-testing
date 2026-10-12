# Skill 03 — Data Source Analysis

## 1. Mục đích

Là "sự thật duy nhất về dữ liệu": mô tả **chính xác 100%** định dạng thực tế của hai file
Markdown nguồn, dựa trên việc **đọc trực tiếp file thật** — không suy đoán, không bịa format.
Mọi quyết định parse (Skill 04) và test dữ liệu (Skill 11) đều dựa trên Skill này.

## 2. Đọc khi nào

- Trước khi thiết kế parser (Skill 04) và trước khi Agent viết bất kỳ code nào đọc dữ liệu.
- Đọc lại khi parser báo lỗi không khớp format — đối chiếu với đặc tả trước khi sửa parser.

## 3. Đầu vào cần thiết

- Hai file Markdown thật trong workspace (đường dẫn do Skill 12 / chủ sản phẩm cung cấp;
  mặc định: file ôn tập 40 câu và file `80_cau_trac_nghiem_sot357.md`).
- Đáp án câu hỏi mở #1 (tên file nguồn chính thức cho chế độ ôn tập).

## 4. Quy tắc bắt buộc

### MUST

- **MUST** đọc toàn bộ nội dung thật của cả hai file trước khi chốt đặc tả.
- **MUST** xác nhận tên file nguồn chính thức với con người (câu hỏi mở #1) vì tên trong
  yêu cầu (`gk_quiz (2).md`) khác tên file thực tế quan sát được (`gk_quiz__2.md`).
- **MUST** ghi lại đặc tả vào `references/format-spec.md`, trong đó **mỗi khẳng định về
  format đều kèm ví dụ trích nguyên văn từ file thật**.
- **MUST** ghi nhận đầy đủ các điểm rủi ro dưới đây và chuyển cho Skill 04 xử lý:

  1. **Số lượng lựa chọn không cố định** (quan sát: 4–5 options) → parser đếm động.
  2. **Câu nhiều đáp án đúng** (`Select one or more`) tồn tại ở cả hai file → UI và scoring
     phải hỗ trợ chọn nhiều (cách tính điểm chờ câu hỏi mở #3).
  3. **Stem chứa bảng Markdown** (đã thấy bảng RTM) → stem phải render dưới dạng Markdown,
     không phải text thuần.
  4. **File B tách câu hỏi (Phần 1) và đáp án (Phần 2)** → parser phải ghép theo cặp
     `(đề, số câu)`; số thứ tự câu hỏi **đánh lại từ 1 trong mỗi đề**.
  5. **Ký tự `✅` là emoji** đi kèm `*(giải thích ngắn)*` ngay trong dòng option đúng.
  6. **Dòng ground-truth** `The correct answer is: ...` / `The correct answers are: ...`
     trong khối blockquote `>` — là chuẩn đối chiếu đáp án.

### MUST NOT

- **MUST NOT** suy đoán format ("có lẽ là...", "chắc là...") — chưa đọc thì ghi là chưa xác minh.
- **MUST NOT** tự ý chuẩn hóa / sửa nội dung nguồn cho "đẹp" trước khi parse.
- **MUST NOT** giả định mọi câu hỏi đều có đúng 4 lựa chọn hoặc đều là chọn một đáp án.

### Tóm tắt đặc tả đã xác minh (chi tiết đầy đủ xem format-spec.md)

| Đặc điểm | File A — ôn tập (40 câu) | File B — 2 đề thi (80 câu) |
|---|---|---|
| Tiêu đề file | `# Bài quiz — Kiểm thử phần mềm` | `# Bài quiz — Kiểm thử phần mềm (SOT357): 80 câu, 2 đề` |
| Heading câu hỏi | `## Question N` (N = 1..40) | `#### Question N` (đánh lại từ 1 theo từng đề) |
| Ngăn cách câu hỏi | Dòng `---` | Dòng `---` |
| Loại câu hỏi | `**Select one:**` / `**Select one or more:**` | Giống File A |
| Dòng lựa chọn | `- a. ...`, `- b. ...`, ... (4–5 options) | Giống File A |
| Đánh dấu đáp án đúng | Inline `✅ *(...)*` ngay trong câu hỏi | **Chỉ có ở Phần 2** (`### Đáp án Đề 1/2`); Phần 1 không có |
| Khối giải thích | Dòng blockquote `>` + dòng ground-truth | Giống File A (ở Phần 2) |

## 5. Đầu ra mong đợi

File `references/format-spec.md` hoàn chỉnh: đặc tả format của cả hai file, mỗi điểm đều có
ví dụ trích nguyên văn, kèm danh sách rủi ro và cách xử lý đề xuất cho Skill 04.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] `format-spec.md` tồn tại; mọi khẳng định format đều có ví dụ trích từ file thật.
- [ ] Không còn từ ngữ suy đoán ("có lẽ", "có thể", "chắc là") trong đặc tả.
- [ ] Tên file nguồn chính thức đã được con người xác nhận (câu hỏi mở #1 → ĐÃ TRẢ LỜI).
- [ ] 6 điểm rủi ro ở §4 đều được liệt kê với hướng xử lý.

## 7. Liên kết Skill

- Skill `04-markdown-parser` — tiêu thụ toàn bộ đặc tả này để viết parser.
- Skill `11-testing-validation` — dùng đặc tả để viết test case parser từ dữ liệu thật.
- `shared/open-questions.md` — câu hỏi mở #1.

## 8. Câu hỏi mở

- #1 (tên file nguồn chính thức): Skill này **không thể hoàn thành** nếu chưa có đáp án.
