# Skill 01 — Project Overview

## 1. Mục đích

Cung cấp bức tranh toàn cảnh dự án: website ôn tập trắc nghiệm kiểm thử phần mềm (SOT357)
viết bằng ReactJS, để mọi quyết định kỹ thuật sau này đều bám vào cùng một phạm vi thống nhất.
Skill này là **điểm đọc đầu tiên** của Agent trước khi chạm vào bất kỳ Skill nào khác.

## 2. Đọc khi nào

- Bắt buộc đọc **đầu tiên** khi Agent tiếp nhận dự án (bước 1 của Skill 12).
- Đọc lại mỗi khi không chắc một yêu cầu có thuộc phạm vi hay không.

## 3. Đầu vào cần thiết

- Yêu cầu dự án từ chủ sản phẩm (3 chế độ, 2 file dữ liệu Markdown, yêu cầu kiến trúc).
- File `shared/glossary.md` (thuật ngữ) và `shared/open-questions.md` (câu hỏi mở).

## 4. Quy tắc bắt buộc

### MUST

- **MUST** nắm rõ 3 chế độ và nguồn dữ liệu tương ứng trước khi thiết kế bất cứ thứ gì:

  | Chế độ | Deck | Nguồn dữ liệu | Số câu |
  |---|---|---|---|
  | Ôn tập kiến thức (practice mode) | `review` | File A: `gk_quiz (2).md` (xem câu hỏi mở #1 về tên file) | 40 |
  | Đề thi thử 1 (exam mode) | `exam1` | File B: `80_cau_trac_nghiem_sot357.md`, Đề 1 | 40 |
  | Đề thi thử 2 (exam mode) | `exam2` | File B: `80_cau_trac_nghiem_sot357.md`, Đề 2 | 40 |

- **MUST** dùng thuật ngữ đúng như `shared/glossary.md` trong mọi tài liệu và code (tên biến, tên component).
- **MUST** liệt kê mọi yêu cầu chưa rõ vào `shared/open-questions.md`, **MUST NOT** tự giả định đáp án.
- **MUST** tôn trọng ranh giới phạm vi dưới đây khi có yêu cầu phát sinh thêm.

### MUST NOT

- **MUST NOT** thêm chế độ làm bài thứ 4, thêm nguồn dữ liệu mới, hoặc mở rộng sang môn học khác
  khi chưa được chủ sản phẩm phê duyệt (ghi đề xuất vào `open-questions.md` thay vì tự làm).
- **MUST NOT** tự tạo, tự sửa, hoặc "làm đẹp" nội dung câu hỏi / đáp án / giải thích từ dữ liệu nguồn.

### Phạm vi IN / OUT

**IN (thuộc phạm vi):**

- 3 chế độ làm bài trắc nghiệm trên nền web ReactJS.
- Parse 2 file Markdown thành dữ liệu câu hỏi có cấu trúc.
- Timer, chấm điểm, nộp bài, xem kết quả, xem lại bài làm (xem lại phụ thuộc câu hỏi mở #6).
- Giao diện responsive theo yêu cầu đã chốt (câu hỏi mở #9).

**OUT (ngoài phạm vi — cấm tự làm):**

- Backend, database server, đăng nhập / quản lý người dùng.
- Trang quản trị (thêm/sửa/xóa câu hỏi).
- Chấm điểm tự luận hoặc bất kỳ dạng câu hỏi nào ngoài trắc nghiệm chọn đáp án.

## 5. Đầu ra mong đợi

Agent có khả năng trả lời đúng các câu hỏi: "dự án này làm gì?", "có mấy chế độ, dữ liệu từ đâu?",
"cái gì không được làm?", "khi nào phải dừng để hỏi người?".

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Agent liệt kê đúng 3 chế độ và nguồn dữ liệu tương ứng (đối chiếu bảng ở §4).
- [ ] Mọi yêu cầu chưa rõ đã được ghi vào `shared/open-questions.md`, không còn giả định ngầm.
- [ ] Không có kế hoạch công việc nào vượt ra ngoài danh sách IN khi chưa được phê duyệt.

## 7. Liên kết Skill

- `shared/glossary.md` — thuật ngữ bắt buộc dùng chung.
- `shared/open-questions.md` — danh sách câu hỏi chờ con người quyết định.
- Skill `12-implementation-workflow` — quy trình 10 bước triển khai toàn dự án.
- Skill `02-architecture-rules` — đọc ngay sau Skill này để nắm nguyên tắc kiến trúc.

## 8. Câu hỏi mở

Xem đầy đủ tại `shared/open-questions.md`. Các mục then chốt phải được trả lời
trước khi Agent bắt đầu code: #1 (file nguồn), #2 (thời lượng timer),
#3 (cách tính điểm câu nhiều đáp án), #8 (tech stack).
