# Skill 09 — Timer & Scoring

## 1. Mục đích

Là **nơi duy nhất (single-owner)** chứa logic tính giờ và chấm điểm cho toàn bộ ứng dụng.
Mọi chế độ (practice, exam1, exam2) đều phải dùng Skill này — cấm tuyệt đối tự implement
timer/scoring riêng ở nơi khác. Điều này ngăn lỗi "mỗi chế độ tính điểm một kiểu".

## 2. Đọc khi nào

- Trước khi code bất kỳ chế độ nào (bước 6 của Skill 12).
- Bất kỳ khi nào cần tính giờ, chấm điểm, hoặc hiển thị kết quả.

## 3. Đầu vào cần thiết

- Skill 02 (tầng Hook/Module), Skill 04 (schema `Question`).
- Đáp án câu hỏi mở #2 (thời lượng timer) và #3 (cách tính điểm câu nhiều đáp án).

## 4. Quy tắc bắt buộc

### Timer

- **MUST** cung cấp hook `useTimer(durationSec, onExpire)` với contract:

  ```text
  useTimer(durationSec, onExpire) → {
    secondsLeft: number,   // số giây còn lại, >= 0
    isExpired: boolean,
    start(): void,
    stop(): void,
    reset(newDurationSec?): void
  }
  ```

- **MUST** đảm bảo `onExpire` được gọi **đúng một lần** khi hết giờ, kể cả khi component
  re-render nhiều lần; dọn dẹp interval khi unmount (không rò rỉ timer).
- **MUST** tính giờ dựa trên timestamp (Date.now) chứ không đếm số lần tick —
  tránh sai số khi tab bị ẩn / interval bị trì hoãn.
- **MUST NOT** tự ý pause timer khi người dùng chuyển tab (trừ khi có yêu cầu được duyệt).

### Scoring

- **MUST** cung cấp các hàm thuần trong `src/lib/scoring.js` (không phụ thuộc React):

  ```text
  scoreQuestion(question, selectedKeys: string[])
    → { isCorrect: boolean, score: number }   // score: 0..1 cho từng câu

  scoreSession(questions: Question[], answers: Record<questionId, string[]>)
    → {
        totalQuestions: number,
        answeredCount: number,     // số câu đã chọn ít nhất 1 đáp án
        correctCount: number,      // số câu isCorrect
        totalScore: number,         // tổng score (thang 10 hoặc 100 — chốt theo yêu cầu)
        perQuestion: Record<questionId, { isCorrect, score }>
      }
  ```

- **Quy tắc chấm từng câu:**
  - Câu `single`: `isCorrect = true` khi và chỉ khi `selectedKeys` có đúng 1 phần tử
    và trùng với option `isCorrect`. Không chọn gì → sai (score 0).
  - Câu `multiple`: áp dụng theo đáp án câu hỏi mở #3.
    **Mặc định khi chưa có đáp án:** all-or-nothing — đúng khi tập `selectedKeys`
    trùng khớp hoàn toàn tập answer key (không thiếu, không thừa).
    Khi #3 được trả lời, cập nhật quy tắc tại đây và sửa test tương ứng.
- **MUST** xử lý biên: `selectedKeys` rỗng, `selectedKeys` chứa key không tồn tại
  trong question (dữ liệu lỗi) → tính là sai, không throw exception làm sập app.

### MUST NOT

- **MUST NOT** để bất kỳ file nào ngoài Skill này chứa logic tính giờ hoặc chấm điểm
  (kiểm tra bằng tìm kiếm: chỉ `src/lib/scoring*` và hook timer được phép có logic này).
- **MUST NOT** lưu kết quả chấm điểm vào state phiên (Skill 06) — tính khi cần, không lưu.
- **MUST NOT** làm tròn điểm theo cách không được định nghĩa — quy tắc làm tròn
  (nếu có) phải được ghi rõ tại đây.

## 5. Đầu ra mong đợi

Hook `useTimer` + module `scoring` hoàn chỉnh, được cả 3 chế độ dùng chung;
quy tắc chấm điểm được tài liệu hóa rõ ràng kể cả trường hợp câu hỏi mở #3 chưa có đáp án.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] `onExpire` gọi đúng 1 lần; không rò rỉ interval sau unmount.
- [ ] Test scoring pass 100% trên ma trận: single (đúng/sai/bỏ trống) × multiple
  (đúng hết/thiếu/thừa/không chọn) × key lạ.
- [ ] Quy tắc câu `multiple` khớp với đáp án #3 (hoặc ghi rõ đang dùng mặc định all-or-nothing).
- [ ] Không tồn tại logic scoring/timer thứ hai ở bất kỳ file nào khác.
- [ ] Điểm tổng khớp với tính toán thủ công trên ít nhất 1 bộ đáp án mẫu mỗi deck.

## 7. Liên kết Skill

- Skill `06-state-management` — cung cấp `answers`, nhận tín hiệu hết giờ để submit.
- Skill `07-practice-mode` — dùng `scoreQuestion` cho phản hồi ngay.
- Skill `08-exam-mode` — dùng `useTimer` + `scoreSession` khi nộp bài.
- Skill `11-testing-validation` — test timer & scoring.

## 8. Câu hỏi mở

- #2 (thời lượng timer): Skill 08 bị chặn nếu chưa chốt; Skill này định nghĩa cơ chế
  chung nên không bị chặn, nhưng giá trị mặc định phải ghi rõ là TẠM.
- #3 (cách tính điểm câu nhiều đáp án): ảnh hưởng trực tiếp `scoreQuestion` —
  chưa có đáp án thì dùng mặc định all-or-nothing và ghi rõ trong tài liệu.
