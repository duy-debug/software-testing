# Skill 08 — Exam Mode (Chế độ thi thử)

## 1. Mục đích

Định nghĩa hành vi chi tiết của hai chế độ thi thử (`exam1`, `exam2` — mỗi đề 40 câu từ File B):
làm bài **có tính giờ**, **nộp bài mới biết kết quả**, có xác nhận khi nộp và tự động nộp khi hết giờ.

## 2. Đọc khi nào

- Khi triển khai chế độ thi thử (bước 7 của Skill 12), sau khi đã có component (Skill 05),
  hook session (Skill 06) và timer/scoring dùng chung (Skill 09).

## 3. Đầu vào cần thiết

- Skill 01, 05, 06 (`useQuizSession` chế độ `exam`), 09 (`useTimer` + scoring), 10.
- Dữ liệu deck `exam1` / `exam2` đã parse (Skill 04).
- Đáp án câu hỏi mở #2 (thời lượng timer) — **chưa có thì chưa được coi là hoàn thiện**.

## 4. Quy tắc bắt buộc

### Luồng hành vi chuẩn

1. **Bắt đầu:** màn hình giới thiệu đề thi (tên đề, số câu 40, thời lượng, quy tắc tính điểm
   tóm tắt, nút "Bắt đầu làm bài") → session `idle` → `in_progress`, timer chạy.
2. **Làm bài:** người dùng chọn đáp án từng câu, **được đổi đáp án thoải mái** trước khi nộp;
   **KHÔNG** hiện đúng/sai, **KHÔNG** hiện giải thích trong lúc làm bài.
   `TimerDisplay` luôn hiển thị; `QuestionNavigator` cho thấy câu nào đã làm/chưa làm.
3. **Nộp bài:** nút "Nộp bài" → `ConfirmDialog` liệt kê số câu chưa làm (nếu có) để xác nhận →
   session → `submitted`, dừng timer, gọi scoring (Skill 09).
4. **Hết giờ:** timer về 0 → **tự động nộp bài** với đáp án hiện tại (không cần xác nhận),
   hiển thị thông báo "Đã hết giờ, bài thi đã được nộp tự động".
5. **Kết quả:** `ScoreSummary` — tổng điểm, số câu đúng/sai/bỏ trống, thời gian đã dùng.
6. **Xem lại (review):** nếu câu hỏi mở #6 được duyệt — màn hình `reviewing` duyệt từng câu:
   đáp án người dùng vs answer key + `ExplanationPanel`. Nếu chưa duyệt thì không implement.
7. **Thoát giữa chừng:** nút thoát → `ConfirmDialog` cảnh báo mất bài làm → về `idle`.

### MUST

- **MUST** dùng `useTimer` của Skill 09 — **MUST NOT** tự implement timer riêng trong mode này.
- **MUST** có dialog xác nhận khi người dùng chủ động nộp bài, nêu rõ số câu chưa làm.
- **MUST** tự động nộp bài khi hết giờ (không chờ người dùng).
- **MUST NOT** tiết lộ đáp án đúng / giải thích dưới bất kỳ hình thức nào trước khi nộp bài
  (kể cả tooltip, console log, hay text ẩn trong DOM).
- **MUST** hai đề `exam1` và `exam2` dùng chung toàn bộ logic, chỉ khác dữ liệu đầu vào —
  **MUST NOT** copy-paste thành hai implementation riêng.

### MUST NOT

- **MUST NOT** cho đổi đáp án sau khi đã nộp bài.
- **MUST NOT** tính điểm trong mode này — gọi Skill 09.

## 5. Đầu ra mong đợi

`ExamRunner` + `ExamPage` hoạt động cho cả hai đề với dữ liệu thật: tính giờ, nộp bài
(thủ công + tự động), kết quả, xem lại (nếu được duyệt), thoát an toàn.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Bắt đầu đề thi → timer chạy đúng thời lượng đã chốt (#2).
- [ ] Đổi đáp án nhiều lần trước khi nộp → chỉ đáp án cuối cùng được chấm.
- [ ] Nộp bài khi còn câu chưa làm → dialog cảnh báo nêu đúng số câu chưa làm.
- [ ] Hết giờ → tự động nộp, thông báo rõ ràng, đáp án được giữ nguyên để chấm.
- [ ] Sau khi nộp: không thể đổi đáp án; điểm số khớp với tính toán thủ công trên dữ liệu mẫu.
- [ ] Không có cách nào xem được đáp án/giải thích trước khi nộp (kiểm tra DOM + network).
- [ ] Hai đề dùng chung code, chỉ khác `deckId` đầu vào.
- [ ] Pass checklist exam-mode trong `acceptance-checklists.md` (Skill 11) cho **cả hai đề**.

## 7. Liên kết Skill

- Skill `06-state-management` — hook session (chế độ `exam`, các trạng thái `submitted`/`reviewing`).
- Skill `09-timer-scoring` — **single-owner** của timer và scoring (bắt buộc dùng, cấm tự làm).
- Skill `05-component-design` — `ExamRunner`, `TimerDisplay`, `ConfirmDialog`, `ScoreSummary`...
- Skill `10-ui-ux-guidelines` — chuẩn hiển thị.
- Skill `11-testing-validation` — checklist nghiệm thu.

## 8. Câu hỏi mở

- #2 (thời lượng timer): **chặn hoàn thiện** — chưa chốt thì dùng giá trị tạm để dev
  nhưng ghi rõ là TẠM, không được coi là xong.
- #3 (cách tính điểm câu nhiều đáp án): ảnh hưởng `ScoreSummary` — phụ thuộc Skill 09.
- #6 (có cho xem lại sau khi nộp không): chưa duyệt thì bỏ bước reviewing.
