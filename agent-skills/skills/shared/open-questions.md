# Open Questions — Câu hỏi chờ con người quyết định

> **Quy tắc sắt:** Agent KHÔNG ĐƯỢC tự giả định đáp án cho bất kỳ mục nào dưới đây.
> Khi triển khai mà gặp mục có trạng thái `CHƯA TRẢ LỜI`, Agent phải **dừng lại và hỏi con người**,
> sau đó cập nhật đáp án vào file này trước khi tiếp tục.
>
> Cột "Skill bị chặn" cho biết Skill nào không thể hoàn thiện nếu thiếu đáp án.

| # | Câu hỏi | Trạng thái | Đáp án đã chốt | Skill bị chặn |
|---|---|---|---|---|
| 1 | File nguồn chính thức cho chế độ ôn tập là `gk_quiz (2).md` hay `gk_quiz__2.md`? (Tên trong yêu cầu khác tên file thực tế trong workspace.) | ĐÃ TRẢ LỜI | Dùng file `docs/gk_quiz (2).md` có sẵn trong thư mục docs (2026-10-12) | Không còn chặn |
| 2 | Thời lượng timer cho mỗi đề thi thử là bao lâu? (Ví dụ: 60 phút / 40 câu.) | ĐÃ TRẢ LỜI | 40 phút / đề 40 câu (1 phút/câu) (2026-10-12) | Không còn chặn |
| 3 | Cách tính điểm câu hỏi nhiều đáp án (`multiple`): đúng hết mới được điểm (all-or-nothing) hay tính điểm từng phần? | ĐÃ TRẢ LỜI | All-or-nothing (đúng đủ toàn bộ đáp án mới được điểm câu đó) (2026-10-12) | Không còn chặn |
| 4 | Có xáo trộn (shuffle) thứ tự câu hỏi / thứ tự các lựa chọn khi làm bài không? | ĐÃ TRẢ LỜI | Không xáo trộn (giữ nguyên thứ tự câu hỏi và đáp án từ file gốc) (2026-10-12) | Không còn chặn |
| 5 | Chế độ ôn tập có giới hạn thời gian không? | ĐÃ TRẢ LỜI | Không giới hạn thời gian (tự do suy nghĩ và làm từng câu) (2026-10-12) | Không còn chặn |
| 6 | Sau khi nộp bài thi thử, có cho xem lại đáp án + giải thích từng câu (màn hình Review) không? | ĐÃ TRẢ LỜI | Có, cho phép xem lại từng câu kèm đáp án đúng và giải thích chi tiết (2026-10-12) | Không còn chặn |
| 7 | Có lưu tiến độ làm bài (localStorage) để làm tiếp sau không? | ĐÃ TRẢ LỜI | Có, tự động lưu tiến độ vào localStorage để không mất bài khi tải lại trang (2026-10-12) | Không còn chặn |
| 8 | Tech stack chi tiết: Vite hay CRA (hoặc khác)? TypeScript hay JavaScript? Styling (CSS thuần / Tailwind / ...)? Router? Thư viện test? | ĐÃ TRẢ LỜI | Vite + React + TypeScript + Tailwind CSS + Vitest (2026-10-12) | Không còn chặn |
| 9 | Ngôn ngữ giao diện (tiếng Việt?) và yêu cầu responsive/mobile cụ thể (breakpoints nào)? | ĐÃ TRẢ LỜI | Tiếng Việt, desktop-first hỗ trợ đầy đủ responsive mobile (2026-10-12) | Không còn chặn |
| 10 | Có cần chế độ ôn tập theo chủ đề/chương không? (Dữ liệu Đề 1/Đề 2 đã chia theo chương.) | ĐÃ TRẢ LỜI | Giữ đúng 3 chế độ chuẩn theo Skill 01: Ôn tập (40 câu), Đề 1 (40 câu), Đề 2 (40 câu) (2026-10-12) | Không còn chặn |

## Cách cập nhật

Khi con người trả lời một mục:

1. Đổi trạng thái thành `ĐÃ TRẢ LỜI`.
2. Ghi đáp án vào cột "Đáp án đã chốt" (nguyên văn, không diễn giải lại).
3. Ghi ngày trả lời.
4. Thông báo cho các Skill bị chặn để tiếp tục công việc.
