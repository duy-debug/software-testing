# Skill 07 — Practice Mode (Chế độ ôn tập)

## 1. Mục đích

Định nghĩa hành vi chi tiết của chế độ ôn tập kiến thức: nguồn dữ liệu là deck `review`
(40 câu từ File A), người dùng làm từng câu và **nhận phản hồi đúng/sai ngay lập tức**
kèm giải thích gốc từ dữ liệu.

## 2. Đọc khi nào

- Khi triển khai chế độ ôn tập (bước 7 của Skill 12), sau khi đã có component (Skill 05),
  hook session (Skill 06) và scoring dùng chung (Skill 09).

## 3. Đầu vào cần thiết

- Skill 01 (phạm vi), 05 (component), 06 (`useQuizSession`), 09 (scoring), 10 (chuẩn giao diện).
- Dữ liệu deck `review` đã parse (Skill 04).

## 4. Quy tắc bắt buộc

### Luồng hành vi chuẩn

1. **Bắt đầu:** màn hình giới thiệu ngắn (tên chế độ, số câu 40, nút "Bắt đầu ôn tập")
   → session chuyển `idle` → `in_progress`.
2. **Trả lời từng câu:** người dùng chọn đáp án trên `QuestionCard`.
   - Câu `single`: chọn 1 option → khóa ngay câu đó.
   - Câu `multiple`: chọn nhiều option → có nút "Trả lời" để xác nhận, sau đó khóa.
3. **Phản hồi ngay:** sau khi khóa, hiển thị `FeedbackBanner` (đúng/sai) +
   `ExplanationPanel` với **giải thích gốc từ dữ liệu** (trường `explanation`).
   Đồng thời tô màu option đúng (xanh) và option người dùng chọn sai (đỏ) qua
   `revealState` của `OptionItem`.
4. **Điều hướng:** nút Trước/Sau + `QuestionNavigator` để nhảy tới câu bất kỳ;
   `ProgressBar` hiển thị tiến độ đã trả lời.
5. **Kết thúc:** khi đã trả lời hết 40 câu (hoặc người dùng chọn "Kết thúc"),
   hiển thị `ScoreSummary` (tổng số câu đúng — tính qua Skill 09).
6. **Làm lại:** nút "Ôn tập lại" reset session về `idle` (Skill 06).

### MUST

- **MUST** hiển thị giải thích **nguyên văn từ dữ liệu nguồn** (`explanation`),
  **MUST NOT** tự viết lại, tóm tắt hay "làm dễ hiểu hơn" nội dung giải thích.
- **MUST** dùng hàm scoring của Skill 09 để判定 đúng/sai từng câu —
  **MUST NOT** tự viết logic so sánh đáp án trong mode này.
- **MUST** khóa câu hỏi sau khi đã trả lời (không cho đổi đáp án để "cày" đúng).
- **MUST** hiển thị đúng `answerKey` từ dữ liệu (không hiển thị ground-truth text
  dành cho cross-check nội bộ ra UI người dùng).

### MUST NOT

- **MUST NOT** áp dụng timer gây áp lực trong practice mode, trừ khi câu hỏi mở #5
  được trả lời là "có" (mặc định: không timer).
- **MUST NOT** cho phép xem trước đáp án của câu chưa trả lời.

## 5. Đầu ra mong đợi

`PracticeRunner` + `PracticePage` hoạt động đầy đủ với dữ liệu thật: trả lời → phản hồi ngay
→ giải thích → điều hướng → tổng kết → làm lại.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Trả lời 1 câu `single` đúng → banner đúng + option đúng tô xanh.
- [ ] Trả lời 1 câu `single` sai → banner sai + option đúng tô xanh, option đã chọn tô đỏ.
- [ ] Câu `multiple`: phải chọn ít nhất 1 option mới cho xác nhận;判定 đúng/sai theo Skill 09.
- [ ] Giải thích hiển thị nguyên văn dữ liệu (đối chiếu với file nguồn).
- [ ] Điều hướng Trước/Sau + nhảy câu + progress bar hoạt động đúng trên 40 câu.
- [ ] "Ôn tập lại" reset sạch, không rò rỉ đáp án cũ.
- [ ] Pass checklist practice-mode trong `acceptance-checklists.md` (Skill 11).

## 7. Liên kết Skill

- Skill `06-state-management` — hook session (chế độ `practice`).
- Skill `09-timer-scoring` —判定 đúng/sai từng câu, tổng kết điểm.
- Skill `05-component-design` — `PracticeRunner`, `QuestionCard`, `ExplanationPanel`...
- Skill `10-ui-ux-guidelines` — chuẩn hiển thị.
- Skill `11-testing-validation` — checklist nghiệm thu.

## 8. Câu hỏi mở

- #5 (practice có giới hạn thời gian không): mặc định KHÔNG; nếu đáp án là "có" thì tích
  hợp timer của Skill 09 ở chế độ hiển thị (không tự nộp bài).
- #4 (shuffle): áp dụng chung qua Skill 06 nếu được duyệt.
