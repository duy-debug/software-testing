# Skill 06 — State Management

## 1. Mục đích

Định nghĩa cách quản lý trạng thái của một phiên làm bài (session): state machine rõ ràng,
nơi duy nhất được phép thay đổi state, và ranh giới với scoring/timer (thuộc Skill 09).
Mục tiêu: không rò rỉ state giữa các chế độ, không có hai nơi cùng quản lý đáp án.

## 2. Đọc khi nào

- Cùng lúc với Skill 05, trước khi code logic các chế độ (bước 6 của Skill 12).

## 3. Đầu vào cần thiết

- Skill 02 (tầng Hook), Skill 05 (container nào dùng session), Skill 09 (scoring/timer tách riêng).

## 4. Quy tắc bắt buộc

### State machine của session

```text
idle ──► in_progress ──► submitted ──► reviewing (exam, nếu được duyệt ở #6)
              │
              └──► (practice) answered từng câu, vẫn ở in_progress

in_progress ──► idle (thoát / làm lại — phải qua ConfirmDialog, Skill 08)
```

- `idle`: chưa bắt đầu (màn hình giới thiệu/xác nhận của deck).
- `in_progress`: đang làm bài; đáp án từng câu có thể thay đổi (exam) hoặc bị khóa
  sau khi trả lời (practice — xem Skill 07).
- `submitted`: đã nộp bài; mọi đáp án bị khóa; kích hoạt chấm điểm (Skill 09).
- `reviewing`: xem lại từng câu kèm đáp án đúng và giải thích (phụ thuộc câu hỏi mở #6).

### Hình dạng state (đề xuất — hook được phép tinh chỉnh nhưng phải giữ nguyên tắc)

```text
QuizSessionState {
  deckId: "review" | "exam1" | "exam2"
  mode: "practice" | "exam"
  status: "idle" | "in_progress" | "submitted" | "reviewing"
  questionIds: string[]            // thứ tự câu hỏi trong session (sau khi áp dụng shuffle ở #4, nếu có)
  answers: Record<questionId, string[]>  // key các option người dùng đã chọn
  currentIndex: number
  startedAt: number | null
  submittedAt: number | null
}
```

### MUST

- **MUST** tập trung toàn bộ state phiên vào **một custom hook duy nhất**
  (vd: `useQuizSession(deck, mode)`) — đây là nơi duy nhất được phép thay đổi state phiên.
- **MUST** cập nhật state theo kiểu immutable (không mutate trực tiếp object/array cũ).
- **MUST** chuyển trạng thái chỉ qua các transition hợp lệ trong state machine ở trên;
  transition bất hợp lệ (vd: `submitted` → `in_progress` mà không reset) phải bị từ chối.
- **MUST** reset toàn bộ state khi bắt đầu session mới (không rò rỉ đáp án từ deck/mode cũ).
- **MUST** tách bạch: hook này **quản lý đáp án và trạng thái**, **KHÔNG tính điểm**
  (gọi Skill 09 khi cần), **KHÔNG chạy timer** (Skill 09 cung cấp, hook này chỉ nhận tín hiệu hết giờ).

### MUST NOT

- **MUST NOT** để mỗi component tự quản lý đáp án riêng lẻ (vd: `QuestionCard` tự giữ
  state đáp án rồi "báo cáo" lên — đáp án phải sống trong hook session).
- **MUST NOT** lưu state dẫn xuất (derived state): điểm số, số câu đúng, phần trăm —
  những thứ đó được **tính khi cần** từ `questions + answers` qua Skill 09, không lưu trong state.
- **MUST NOT** dùng state phiên cho UI thuần hiển thị (mở/đóng dialog là state cục bộ của component).

### Shuffle & lưu tiến độ (phụ thuộc câu hỏi mở)

- Câu hỏi mở #4 (shuffle): nếu được duyệt, thứ tự `questionIds` được xáo trộn **một lần**
  khi session bắt đầu và cố định trong suốt session. Không shuffle lại khi chuyển câu.
- Câu hỏi mở #7 (lưu tiến độ): nếu được duyệt, Skill này định nghĩa thêm cơ chế
  persist/restore state qua localStorage. Chưa duyệt thì không implement.

## 5. Đầu ra mong đợi

Hook `useQuizSession` hoàn chỉnh: khởi tạo, chuyển trạng thái, chọn/bỏ chọn đáp án,
nộp bài, reset — với mọi transition tuân thủ state machine.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Mọi thay đổi state phiên đều đi qua đúng một hook duy nhất.
- [ ] Test state machine pass: mọi transition hợp lệ hoạt động, transition bất hợp lệ bị từ chối.
- [ ] Bắt đầu session mới không còn dư đáp án/state của session cũ.
- [ ] Không có điểm số hay dữ liệu dẫn xuất nào bị lưu trong state.

## 7. Liên kết Skill

- Skill `02` (tầng Hook), Skill `05` (container tiêu thụ hook).
- Skill `09-timer-scoring` — nhận tín hiệu hết giờ, gọi scoring khi submit (không tự làm).
- Skill `07-practice-mode`, `08-exam-mode` — định nghĩa hành vi khác nhau trên cùng state machine.
- Skill `11-testing-validation` — test state machine.

## 8. Câu hỏi mở

- #4 (shuffle thứ tự câu hỏi/đáp án), #7 (lưu tiến độ localStorage) — ảnh hưởng trực tiếp
  thiết kế hook. Chưa có đáp án thì implement bản không shuffle, không persist.
