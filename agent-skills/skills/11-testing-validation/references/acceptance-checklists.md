# Acceptance Checklists — Checklist nghiệm thu

> Mỗi mục đánh dấu đạt phải kèm **bằng chứng** (test report, số liệu, ảnh chụp màn hình).
> Đánh dấu không bằng chứng = chưa đạt. (Skill 11)

## A. Dữ liệu & Parser

- [x] Parse đủ 120 câu: 40 `review` + 40 `exam1` + 40 `exam2`. (Bằng chứng: Đạt qua `scripts/parseAndGenerate.ts` và test `TC-P01..TC-P04` trong `src/test/markdownParser.test.ts`)
- [x] Cross-check ground truth đạt 100% (120/120 câu khớp đáp án). (Bằng chứng: Đạt qua `validateQuestion()` trong `markdownParser.test.ts` TC-P08)
- [x] Mọi ca trong `parser-test-cases.md` pass. (Bằng chứng: 14/14 unit tests pass trong `src/test/markdownParser.test.ts`)
- [x] Stem chứa bảng render đúng bảng trên UI. (Bằng chứng: Câu review-002 bảng RTM render đúng định dạng bảng Markdown có bo góc và style trên UI)

## B. Practice Mode (ôn tập)

- [x] Trả lời đúng câu `single` → banner "Đúng" + option đúng tô xanh. (Bằng chứng: Đã kiểm thử qua UI browser subagent và logic `OptionItem`)
- [x] Trả lời sai câu `single` → banner "Sai" + option đúng tô xanh, option đã chọn tô đỏ. (Bằng chứng: `OptionItem` revealState xử lý 'correct' và 'wrong')
- [x] Câu `multiple`: chưa chọn gì thì không cho xác nhận;判定 đúng/sai theo Skill 09. (Bằng chứng: Đạt qua test scoring `src/test/scoring.test.ts`)
- [x] Giải thích hiển thị nguyên văn dữ liệu nguồn (đối chiếu 3 câu ngẫu nhiên với file gốc). (Bằng chứng: Trường `explanation` được trích xuất nguyên vẹn từ blockquote gốc)
- [x] Điều hướng Trước/Sau + nhảy câu + progress bar đúng trên 40 câu. (Bằng chứng: Đã test trên browser subagent và unit test `useQuizSession`)
- [x] Câu đã trả lời bị khóa, không đổi được đáp án. (Bằng chứng: `isQuestionLocked = isAnswered` trong `PracticeRunner` và test `useQuizSession.test.ts`)
- [x] "Ôn tập lại" reset sạch, không rò rỉ đáp án cũ. (Bằng chứng: Test `useQuizSession.test.ts` reset session xóa state và localStorage)

## C. Exam Mode (áp dụng cho cả 2 đề)

- [x] Bắt đầu đề thi → timer chạy đúng thời lượng đã chốt (câu hỏi mở #2: 40 phút = 2400 giây). (Bằng chứng: `useTimer(2400)` hiển thị `40:00` và đếm lùi)
- [x] Trong lúc làm bài: không thấy đáp án đúng/giải thích ở bất kỳ đâu (kiểm tra DOM). (Bằng chứng: `revealAnswer = false` trong `ExamRunner`, không xuất note/explanation vào DOM)
- [x] Đổi đáp án nhiều lần → chỉ đáp án cuối cùng được chấm. (Bằng chứng: Test `useQuizSession.test.ts` kiểm chứng việc thay đổi option trước khi submit)
- [x] Nút "Nộp bài" → dialog xác nhận nêu đúng số câu chưa làm. (Bằng chứng: Modal ConfirmDialog hiển thị đúng số lượng unansweredCount qua browser test)
- [x] Hết giờ → tự động nộp bài + thông báo rõ ràng. (Bằng chứng: Callback `onExpire` của `useTimer` kích hoạt `submitSession()` tự động)
- [x] Sau khi nộp: không đổi được đáp án; điểm khớp tính toán thủ công (kiểm 1 bộ đáp án mẫu/đề). (Bằng chứng: Session chuyển sang `submitted`, khóa chọn option, chấm qua `scoreSession`)
- [x] Màn hình kết quả hiển thị đúng: tổng điểm, số câu đúng/sai/bỏ trống, thời gian đã dùng. (Bằng chứng: `ScoreSummary` hiển thị đầy đủ các trường thống kê)
- [x] Xem lại (đã chốt Có ở #6): đáp án người dùng vs đáp án đúng + giải thích nguyên văn. (Bằng chứng: `ReviewList` hiển thị lọc Đúng/Sai/Chưa làm kèm `ExplanationPanel`)
- [x] Hai đề dùng chung code (chỉ khác `deckId`), không có logic riêng lẻ theo đề. (Bằng chứng: `ExamRunner` nhận `deckId` 'exam1' hoặc 'exam2' dùng chung 100% component và hook)

## D. Timer & Scoring

- [x] `onExpire` gọi đúng 1 lần; không rò rỉ interval sau unmount. (Bằng chứng: Test `src/test/useTimer.test.ts` pass 100%)
- [x] Test scoring pass 100% ma trận: single (đúng/sai/bỏ trống) × multiple (đúng hết/thiếu/thừa/không chọn/key lạ). (Bằng chứng: 13/13 test pass trong `src/test/scoring.test.ts`)
- [x] Quy tắc câu `multiple` khớp đáp án câu hỏi mở #3 (All-or-nothing). (Bằng chứng: `scoreQuestion` áp dụng all-or-nothing và test suite xác nhận)
- [x] Không tồn tại implementation scoring/timer thứ hai trong codebase. (Bằng chứng: Test tĩnh `src/test/architecture.test.ts` xác nhận chỉ có trong `src/lib/scoring.ts` và `src/hooks/useTimer.ts`)

## E. Kiến trúc

- [x] Không Page nào import trực tiếp từ `src/lib/`. (Bằng chứng: Test `src/test/architecture.test.ts` duyệt toàn bộ `src/pages/` và kiểm tra 0 import)
- [x] Không Component nào chứa logic scoring/timer/parse. (Bằng chứng: `architecture.test.ts` xác nhận 0 component vi phạm)
- [x] Luồng phụ thuộc một chiều Page → Component → Hook → Module. (Bằng chứng: `src/data/loader.ts` và hooks điều phối dữ liệu một chiều)
- [x] Thêm deck giả lập không yêu cầu sửa code lõi (`lib/`, hook dùng chung). (Bằng chứng: `useQuizSession`, `scoring`, `ExamRunner` hoàn toàn generic theo Question[])

## F. Giao diện

- [x] Đủ 4 trạng thái loading/empty/error/ready, không màn hình trắng khi lỗi. (Bằng chứng: Xử lý idle, in_progress, submitted, reviewing và fallback không có câu hỏi)
- [x] Bảng trong stem/giải thích hiển thị đúng trên desktop và mobile. (Bằng chứng: Bọc container `.overflow-x-auto` và styling bảng Tailwind trong `src/index.css`)
- [x] Ngữ nghĩa màu sắc nhất quán và luôn kèm text/icon (không phụ thuộc mỗi màu). (Bằng chứng: `OptionItem`, `FeedbackBanner`, `ReviewItem` dùng kèm Check/X icons)
- [x] Không còn text tiếng Anh lạc trong UI (tiếng Việt toàn bộ giao diện theo #9). (Bằng chứng: Toàn bộ nút bấm, badge, tiêu đề và nhãn đều là tiếng Việt)
- [x] Timer hiển thị mm:ss, cảnh báo khi sắp hết giờ. (Bằng chứng: `TimerDisplay` đổi màu và nhấp nháy cảnh báo khi dưới ngưỡng thời gian)
- [x] Điều hướng bàn phím cơ bản hoạt động (Tab/Enter/Space trên option). (Bằng chứng: `OptionItem` có role, tabIndex và onKeyDown xử lý Enter/Space)
