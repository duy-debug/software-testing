# Agent Skills — Website ôn tập trắc nghiệm ReactJS

Bộ hướng dẫn kỹ thuật có cấu trúc để AI Agent tự triển khai website ôn tập trắc nghiệm
(3 chế độ: ôn tập kiến thức, đề thi thử 1, đề thi thử 2) mà không cần con người hướng dẫn lại từ đầu.

## Cách dùng (dành cho AI Agent)

1. Đọc `01-project-overview/SKILL.md` trước tiên để nắm phạm vi.
2. Đọc `12-implementation-workflow/SKILL.md` để biết thứ tự 10 bước triển khai.
3. Làm theo từng bước: mỗi bước chỉ đọc đúng Skill được chỉ định, tạo đầu ra,
   tự kiểm tra theo Definition of Done rồi mới sang bước tiếp theo.
4. Khi gặp mục `CHƯA TRẢ LỜI` trong `shared/open-questions.md`: **dừng và hỏi con người**,
   không tự giả định.

## Danh mục Skill

| # | Skill | Nhóm |
|---|---|---|
| 01 | `01-project-overview` — mục tiêu, phạm vi, thuật ngữ, câu hỏi mở | Nền tảng |
| 02 | `02-architecture-rules` — nguyên tắc React, phân tầng Page/Component/Hook/Module | Nền tảng |
| 03 | `03-data-source-analysis` — phân tích thực tế 2 file Markdown | Nền tảng |
| 04 | `04-markdown-parser` — quy tắc parse Markdown → dữ liệu câu hỏi | Nền tảng |
| 05 | `05-component-design` — inventory component + props contract | Nghiệp vụ |
| 06 | `06-state-management` — state machine phiên làm bài | Nghiệp vụ |
| 07 | `07-practice-mode` — quy tắc chế độ ôn tập | Nghiệp vụ |
| 08 | `08-exam-mode` — quy tắc 2 chế độ thi thử | Nghiệp vụ |
| 09 | `09-timer-scoring` — timer + chấm điểm dùng chung (single-owner) | Nghiệp vụ |
| 10 | `10-ui-ux-guidelines` — chuẩn giao diện | Chất lượng |
| 11 | `11-testing-validation` — kiểm thử + checklist nghiệm thu | Chất lượng |
| 12 | `12-implementation-workflow` — quy trình 10 bước tự triển khai | Nền tảng |

Tài liệu dùng chung: `shared/glossary.md` (thuật ngữ), `shared/open-questions.md` (câu hỏi chờ người quyết định).

## Quy tắc sắt

- Mỗi quy tắc chỉ có **một Skill sở hữu** (single-owner); Skill khác tham chiếu, không copy.
- Đáp án **chỉ** lấy từ dữ liệu nguồn (`✅` + dòng ground-truth); cấm tự tạo/sửa đáp án.
- Không tuyên bố hoàn thành khi còn test đỏ hoặc checklist thiếu bằng chứng.
