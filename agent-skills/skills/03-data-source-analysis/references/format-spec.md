# Format Spec — Đặc tả định dạng thực tế của 2 file dữ liệu

> Tài liệu này được lập bằng cách **đọc trực tiếp** 2 file Markdown nguồn.
> Mọi khẳng định đều kèm ví dụ trích nguyên văn. Parser (Skill 04) phải tuân thủ đặc tả này.

## 1. File A — Chế độ ôn tập (40 câu)

**Định danh:** file tiêu đề `# Bài quiz — Kiểm thử phần mềm`, câu hỏi dạng `## Question N`.

### 1.1. Cấu trúc tổng thể

```text
# Bài quiz — Kiểm thử phần mềm        ← tiêu đề file (1 dòng)

## Question 1                          ← heading câu hỏi, N = 1..40

<stem: markdown tự do, nhiều đoạn>

**Select one:**                         ← hoặc **Select one or more:**
<option lines>

> <blockquote giải thích nhiều dòng>

---                                     ← phân cách giữa các câu hỏi

## Question 2
...
```

### 1.2. Heading câu hỏi

- Pattern: `^## Question (\d+)\s*$`
- Đánh số liên tục 1..40 trong toàn file.
- Ví dụ trích nguyên văn: `## Question 1`

### 1.3. Stem (thân câu hỏi)

- Markdown tự do: đoạn văn, `**in đậm**`, `*in nghiêng*`, `` `code inline` ``.
- **Có thể chứa bảng Markdown.** Ví dụ trích nguyên văn (Question 2):

  ```text
  Cho trích đoạn ma trận truy vết yêu cầu (RTM):

  | Mã YC | Mô tả | Test Case |
  |-------|-------|-----------|
  | REQ-01 | Đăng nhập bằng email | TC-01, TC-02 |
  | REQ-02 | Khóa tài khoản sau 3 lần sai | TC-03 |
  | REQ-03 | Đổi mật khẩu | (trống) |

  Thông tin quan trọng nhất mà RTM này cho thấy là gì?
  ```

- Stem kết thúc ngay trước dòng loại câu hỏi (`**Select one:**`).

### 1.4. Dòng loại câu hỏi

- Pattern: `^\*\*Select one:\*\*\s*$` → `type = "single"`
- Pattern: `^\*\*Select one or more:\*\*\s*$` → `type = "multiple"`
- Ví dụ trích nguyên văn: `**Select one or more:**` (Question 1), `**Select one:**` (Question 2)

### 1.5. Dòng lựa chọn (option)

- Pattern cơ bản: `^- ([a-z])\. (.*)$` — key là chữ cái thường, text theo sau.
- **Số lượng option không cố định**: quan sát thấy 4 options (a–d, Question 2) và
  5 options (a–e, Question 1). Parser đếm động, không hard-code.
- Option đúng được đánh dấu bằng hậu tố `✅ *(ghi chú ngắn)*` ở **cuối dòng**.
  Pattern: `/^(.+?)\s+✅\s+\*(.+)\*\s*$/` → group 1 = text, group 2 = note.
- Ví dụ trích nguyên văn (Question 3):

  ```text
  - c. 17, 18, 60, 61 ✅ *(Chính xác: mỗi biên lấy giá trị trên biên và giá trị liền kề phía ngoài vùng.)*
  ```

- Ví dụ option sai (không có hậu tố): `- a. 15, 30, 65`

### 1.6. Khối blockquote (giải thích + ground truth)

- Các dòng bắt đầu bằng `>`. Pattern: `^> ?(.*)$`.
- Nội dung gồm: dòng `Chính xác!`, các đoạn giải thích, và dòng ground-truth cuối cùng.
- Pattern ground-truth (trên text đã bỏ `> `):
  `/^The correct answers? (is|are): (.+)$/` → group 2 là chuẩn đối chiếu.
- Ví dụ trích nguyên văn (Question 1):

  ```text
  > Chính xác!
  >
  > Rủi ro dự án ảnh hưởng khả năng hoàn thành dự án đúng hạn; rủi ro sản phẩm ảnh hưởng chất lượng phần mềm. Rủi ro = Xác suất × Mức độ ảnh hưởng.
  >
  > The correct answers are: Hệ thống tính sai tiền học phí của khách hàng có thể bị rò rỉ
  ```

  (Câu nhiều đáp án: ground-truth liệt kê nhiều đáp án, phân cách bằng dấu phẩy.)
- Ví dụ câu một đáp án (Question 3):

  ```text
  > The correct answer is: 17, 18, 60, 61
  ```

### 1.7. Phân cách câu hỏi

- Dòng `---` (pattern `^---\s*$`) ngăn cách các câu hỏi.

---

## 2. File B — Hai đề thi thử (80 câu)

**Định danh:** file tiêu đề `# Bài quiz — Kiểm thử phần mềm (SOT357): 80 câu, 2 đề`.

### 2.1. Cấu trúc tổng thể

```text
# Bài quiz — Kiểm thử phần mềm (SOT357): 80 câu, 2 đề

## Phần 1: Đề thi (chưa có đáp án & lời giải)

### Đề 1 — Tổng quan, SDLC & Kiểm thử tĩnh (40 câu)

#### Question 1
<stem>
**Select one:**
<option lines KHÔNG có ✅>
---

#### Question 2
...

### Đề 2 — ... (40 câu)
#### Question 1 ... (đánh số lại từ 1)

## Phần 2: Đáp án & lời giải chi tiết

### Đáp án Đề 1
#### Question 1
<stem — lặp lại nguyên văn>
**Select one:**
<option lines CÓ ✅ *(...)*>
> <blockquote giải thích + ground truth>
---

### Đáp án Đề 2
...
```

### 2.2. Điểm khác biệt then chốt so với File A

| Điểm | Chi tiết |
|---|---|
| Heading câu hỏi | `#### Question N` (4 dấu `#`), pattern `^#### Question (\d+)\s*$` |
| Đánh số | **Đánh lại từ 1 trong mỗi đề** — cặp định danh duy nhất là `(đề, số câu)` |
| Heading đề thi | `### Đề 1 — <tên> (<số> câu)` — pattern `^### Đề (\d+)\s+—\s+(.+)\s+\((\d+)\s+câu\)\s*$` |
| Heading đáp án | `### Đáp án Đề 1` — pattern `^### Đáp án Đề (\d+)\s*$` |
| Đáp án ở Phần 1 | **KHÔNG có** `✅` — parser không được suy đáp án từ Phần 1 |
| Đáp án ở Phần 2 | Có `✅ *(...)*` + blockquote, format giống hệt File A (§1.5, §1.6) |

### 2.3. Quy tắc ghép Phần 1 ↔ Phần 2

1. Parse Phần 1 thành danh sách câu hỏi (chưa có đáp án) theo `(đề, number)`.
2. Parse Phần 2 thành danh sách đáp án theo `(đề, number)`.
3. Ghép theo khóa `(đề, number)`. **Sau đó kiểm tra:** stem của hai bên phải trùng khớp
   nguyên văn (chuẩn hóa khoảng trắng). Lệch → báo lỗi, dừng, không tự đoán.
4. Đáp án cuối cùng của câu hỏi lấy từ Phần 2 (dấu `✅` + ground-truth cross-check).

### 2.4. Ví dụ trích nguyên văn (Đề 1, Phần 1, Question 1)

```text
#### Question 1

Trong buổi họp dự án, một thành viên mới phát biểu: *"Kiểm thử phần mềm là chạy ứng dụng lên để xem nó có chạy được hay không."* Theo định nghĩa tổng quát trong slide (Chương 1), cách hiểu nào sau đây là **đúng nhất**?

**Select one:**

- a. Kiểm thử là chạy ứng dụng để xác nhận nó chạy được như mong đợi của developer
- b. Kiểm thử là quá trình kiểm tra xem phần mềm có đúng 100% yêu cầu của khách hàng hay không
- c. Kiểm thử chỉ nhằm ngăn ngừa lỗi ngay từ giai đoạn phân tích yêu cầu
- d. Kiểm thử là tiến trình thực thi một chương trình với mục đích tìm lỗi và đánh giá các đặc tính của sản phẩm


---
```

(Cùng câu hỏi ở Phần 2 có thêm `✅ *(...)*` ở option d và khối `>` giải thích.)

---

## 3. Danh sách rủi ro và cách xử lý (tóm tắt cho Skill 04)

| # | Rủi ro | Cách xử lý |
|---|---|---|
| R1 | Số option không cố định (4–5) | Đếm động; không hard-code |
| R2 | Câu `multiple` cần UI + scoring đặc biệt | Nhận diện qua `Select one or more`; scoring theo Skill 09 |
| R3 | Stem chứa bảng Markdown | Giữ nguyên markdown gốc; UI render bằng Markdown renderer (Skill 10) |
| R4 | File B đánh số lại theo đề | Khóa ghép là `(đề, number)`; `id` toàn cục sinh theo `exam1-001`... |
| R5 | `✅` là emoji | Chỉ công nhận ở cuối dòng option; regex chặt ở §1.5 |
| R6 | Ground-truth nhiều đáp án phân cách bằng dấu phẩy | Tách chuỗi, trim, so khớp từng phần tử với option `✅` |
| R7 | Dòng trống/khoảng trắng thừa (vd: 2 dòng trống trước `---` ở File B) | Chuẩn hóa khi parse; không coi dòng trống là lỗi |
