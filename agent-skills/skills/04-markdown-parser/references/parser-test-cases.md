# Parser Test Cases — Ca kiểm thử parser từ dữ liệu thật

> Mọi ca kiểm thử chạy trên **2 file Markdown thật**, không dùng dữ liệu bịa.
> Parser chỉ được coi là xong khi **100% ca pass**.

## Nhóm 1 — Số lượng và cấu trúc

| ID | Mô tả | Kỳ vọng |
|---|---|---|
| TC-P01 | Parse File A | Đúng 40 questions, deck = `review`, id `review-001`..`review-040` |
| TC-P02 | Parse File B — Đề 1 | Đúng 40 questions, deck = `exam1`, id `exam1-001`..`exam1-040` |
| TC-P03 | Parse File B — Đề 2 | Đúng 40 questions, deck = `exam2`, id `exam2-001`..`exam2-040` |
| TC-P04 | Tổng toàn bộ | 120 questions, không trùng `id` |
| TC-P05 | Mỗi câu hỏi có ít nhất 1 option `isCorrect = true` | 120/120 đạt |
| TC-P06 | `type = "multiple"` khi và chỉ khi nguồn ghi `Select one or more` | Khớp 100% |
| TC-P07 | Câu `multiple` có > 1 option đúng; câu `single` có đúng 1 option đúng | Khớp 100% |

## Nhóm 2 — Cross-check đáp án (ground truth)

| ID | Mô tả | Kỳ vọng |
|---|---|---|
| TC-P08 | Với mỗi câu: tập text của option `✅` khớp với dòng `The correct answer(s) is/are:` (chuẩn hóa khoảng trắng) | 120/120 khớp |
| TC-P09 | `note` của option đúng = nội dung trong `*(...)*` sau `✅`; option sai có `note = null` | Khớp 100% |
| TC-P10 | `explanation` không chứa dòng `Chính xác!` đơn lẻ và không chứa dòng ground-truth | Khớp 100% |

## Nhóm 3 — Trường hợp đặc biệt

| ID | Mô tả | Kỳ vọng |
|---|---|---|
| TC-P11 | Câu có stem chứa bảng Markdown (vd: File A Question 2 — bảng RTM) | `stem` giữ nguyên bảng, parse không lỗi |
| TC-P12 | Câu có 5 options (vd: File A Question 1, a–e) | Parse đủ 5 options, đúng key a–e |
| TC-P13 | Câu có 4 options (vd: File A Question 2, a–d) | Parse đủ 4 options |
| TC-P14 | File B Phần 1: option không có `✅` | Mọi option Phần 1 có `isCorrect` tạm thời = false trước khi ghép |
| TC-P15 | File B ghép (đề, số câu): stem Phần 1 vs Phần 2 | Trùng khớp nguyên văn 80/80 sau chuẩn hóa khoảng trắng |
| TC-P16 | Ký tự `✅` xuất hiện trong text thường (nếu có) không ở cuối dòng option | Không bị nhận nhầm thành đánh dấu đáp án |

## Nhóm 4 — Xử lý lỗi

| ID | Mô tả | Kỳ vọng |
|---|---|---|
| TC-P17 | Giả lập file thiếu dòng `Select one:` ở 1 câu | Parser báo lỗi đúng câu đó, vẫn parse các câu còn lại, báo cáo lỗi đầy đủ |
| TC-P18 | Giả lập File B ghép lệch (đề, số câu) | Báo lỗi ghép, không tự đoán cặp |
| TC-P19 | Giả lập 1 câu không có option nào `✅` | Báo lỗi validation, không âm thầm coi là đúng hết/sai hết |
