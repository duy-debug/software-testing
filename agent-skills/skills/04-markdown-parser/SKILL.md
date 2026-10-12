# Skill 04 — Markdown Parser

## 1. Mục đích

Định nghĩa quy tắc duy nhất để biến hai file Markdown nguồn thành dữ liệu câu hỏi có cấu trúc
theo schema thống nhất. Parser là **cửa ngõ dữ liệu**: mọi câu hỏi vào ứng dụng đều phải đi qua
nó, và nó phải chứng minh được mình parse đúng bằng validation trên dữ liệu thật.

## 2. Đọc khi nào

- Khi bắt đầu xử lý dữ liệu (bước 4 của Skill 12), sau khi đã đọc Skill 03.
- Đọc lại mỗi khi dữ liệu nguồn thay đổi hoặc parser báo lỗi.

## 3. Đầu vào cần thiết

- Skill 03 + `references/format-spec.md` (đặc tả format đã xác minh).
- Hai file Markdown thật trong workspace.
- Đáp án câu hỏi mở #1 (file nguồn chính thức).

## 4. Quy tắc bắt buộc

### Thiết kế parser

- **MUST** implement parser dưới dạng **hàm thuần** (pure function) trong `src/lib/`
  (theo Skill 02): nhận chuỗi Markdown → trả về mảng `Question[]` + báo cáo lỗi.
  Không đọc file trực tiếp, không gọi mạng, không phụ thuộc React.
- **MUST** tuân thủ schema tại `references/schema.question.json`. Tóm tắt:

  ```text
  Question {
    id: string            // duy nhất toàn cục: "review-001" | "exam1-001" | "exam2-001"
    deck: "review" | "exam1" | "exam2"
    number: number        // số thứ tự trong deck
    type: "single" | "multiple"   // từ "Select one" / "Select one or more"
    stem: string          // markdown gốc của thân câu hỏi (giữ nguyên bảng, format)
    options: [{ key, text, isCorrect, note }]  // key: "a" | "b" | ...; note: text trong *(...)* sau ✅, hoặc null
    explanation: string   // markdown từ khối blockquote (loại bỏ dòng "Chính xác!")
    answerKey: string     // nguyên văn dòng "The correct answer(s) is/are:" — chỉ dùng để cross-check
  }
  ```

- **MUST** xử lý đặc thù File B: parse Phần 1 (câu hỏi) và Phần 2 (đáp án) riêng,
  sau đó **ghép theo cặp `(đề, số câu)`**; kiểm tra nội dung stem trùng khớp nguyên văn
  giữa hai phần, lệch thì báo lỗi — **MUST NOT** tự đoán cặp ghép.
- **MUST** thu thập **toàn bộ lỗi** parse thành báo cáo (câu nào lỗi, lỗi gì),
  không dừng ở lỗi đầu tiên.

### Validation bắt buộc (gate của bước 4, Skill 12)

- **MUST** parse thử **toàn bộ 120 câu** trước khi viết bất kỳ code UI nào, và đạt:
  1. Số lượng: đúng **40** (`review`) / **40** (`exam1`) / **40** (`exam2`).
  2. Mỗi câu hỏi có **ít nhất 1** option `isCorrect = true`.
  3. Số option `isCorrect` > 1 **khi và chỉ khi** `type = "multiple"`.
  4. **Cross-check ground truth 100%**: nội dung text của các option `✅`
     phải khớp với dòng `The correct answer(s) is/are:` (so khớp chuẩn hóa khoảng trắng).
  5. `id` duy nhất toàn cục, không trùng.
- **MUST NOT** tuyên bố parser xong khi bất kỳ kiểm tra nào ở trên chưa đạt.

### MUST NOT

- **MUST NOT** chỉnh sửa, "làm đẹp", hoặc diễn giải lại nội dung đáp án/giải thích nguồn.
  Parser chỉ chuyển định dạng, không thay đổi ngữ nghĩa.
- **MUST NOT** hard-code số lượng lựa chọn (4 hay 5) — đếm động từ dữ liệu.
- **MUST NOT** hard-code `id` câu hỏi — sinh theo quy tắc `deck-number` có padding
  (vd: `review-001`).
- **MUST NOT** bỏ qua ký tự `✅` nếu nó nằm trong text thường của câu hỏi
  (chỉ công nhận `✅` ở **cuối dòng option** theo format-spec).

## 5. Đầu ra mong đợi

- Parser hoàn chỉnh trong `src/lib/` + `references/schema.question.json` đã chốt.
- 3 file dữ liệu JSON (`review`, `exam1`, `exam2`) + báo cáo validation đạt 100%.
- `references/parser-test-cases.md`: các ca kiểm thử parser lấy từ dữ liệu thật.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Parser là hàm thuần trong `src/lib/`, không phụ thuộc React/DOM.
- [ ] Parse đủ 120 câu, đúng 40/40/40 theo deck.
- [ ] Cross-check ground truth đạt 100% (không có câu nào lệch đáp án).
- [ ] Mọi ca trong `parser-test-cases.md` đều pass.
- [ ] Báo cáo lỗi parse trống (0 lỗi) trên dữ liệu hiện tại.

## 7. Liên kết Skill

- Skill `03-data-source-analysis` — đặc tả format (tiền đề bắt buộc).
- `references/schema.question.json` — schema chốt.
- `references/parser-test-cases.md` — ca kiểm thử từ dữ liệu thật.
- Skill `05-component-design` — tiêu thụ schema để thiết kế component.
- Skill `11-testing-validation` — chạy test parser ở gate bước 4 và bước 8.

## 8. Câu hỏi mở

- #1 (file nguồn chính thức): chưa chốt thì parser cho `review` chưa thể coi là xong.
