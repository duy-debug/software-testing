# Glossary — Thuật ngữ thống nhất

> Mọi Skill trong bộ này PHẢI dùng các thuật ngữ dưới đây với đúng nghĩa đã định nghĩa.
> Khi cần thêm thuật ngữ mới, bổ sung vào file này thay vì tự định nghĩa rải rác trong từng Skill.

| Thuật ngữ | Nghĩa |
|---|---|
| **Deck** | Một bộ câu hỏi hoàn chỉnh. Có 3 deck: `review` (ôn tập, 40 câu), `exam1` (đề thi thử 1, 40 câu), `exam2` (đề thi thử 2, 40 câu). |
| **Question** | Một câu hỏi trắc nghiệm, tuân theo schema trong `04-markdown-parser/references/schema.question.json`. |
| **Stem** | Thân câu hỏi — nội dung câu hỏi dưới dạng Markdown (có thể chứa bảng, in đậm/nghiêng, code inline). |
| **Option** | Một lựa chọn trả lời: gồm `key` (a/b/c/...), `text`, `isCorrect`, `note` (giải thích ngắn đi kèm `✅`, có thể null). |
| **Answer key** | Tập hợp các option có `isCorrect = true` của một câu hỏi. |
| **Ground truth** | Dòng `The correct answer is: ...` / `The correct answers are: ...` trong khối blockquote của dữ liệu nguồn. Dùng để cross-check đáp án, KHÔNG phải để hiển thị cho người dùng cuối. |
| **Single / Multiple** | Loại câu hỏi: `single` = `Select one` (chọn 1 đáp án), `multiple` = `Select one or more` (chọn nhiều đáp án). |
| **Session** | Một phiên làm bài: từ lúc bắt đầu một deck đến lúc nộp bài / thoát. Mỗi session thuộc đúng một deck và một mode. |
| **Practice mode** | Chế độ ôn tập: làm từng câu, phản hồi đúng/sai ngay, hiện giải thích sau mỗi câu. |
| **Exam mode** | Chế độ thi thử: làm bài có tính giờ, nộp bài mới biết kết quả. |
| **Answer (user)** | Đáp án người dùng đã chọn cho một câu hỏi trong session: danh sách các `key` (1 phần tử với câu `single`, nhiều phần tử với câu `multiple`). |
| **Scoring** | Logic chấm điểm — CHỈ tồn tại trong Skill `09-timer-scoring`, không implement ở nơi khác. |
| **Timer** | Logic tính giờ — CHỈ tồn tại trong Skill `09-timer-scoring`, không implement ở nơi khác. |
| **Submit** | Hành động nộp bài: khóa mọi đáp án, chuyển session sang trạng thái đã nộp, kích hoạt chấm điểm. |
| **Review** | Màn hình xem lại sau khi nộp: từng câu hỏi kèm đáp án người dùng, answer key và giải thích. |
| **Gate** | Điều kiện bắt buộc phải đạt mới được chuyển sang bước tiếp theo trong workflow (Skill 12). Không đạt gate = không được đi tiếp. |
| **Definition of Done (DoD)** | Checklist nghiệm thu của một Skill / một bước — mỗi mục phải có bằng chứng (test report, số liệu, checklist đã đánh dấu). |
| **Single-owner** | Nguyên tắc: mỗi quy tắc chỉ có đúng một Skill sở hữu. Skill khác cần dùng thì tham chiếu, không copy nội dung. |
