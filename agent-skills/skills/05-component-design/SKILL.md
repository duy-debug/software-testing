# Skill 05 — Component Design

## 1. Mục đích

Thiết kế hệ thống React Component cho toàn bộ ứng dụng: danh mục component đầy đủ,
props contract rõ ràng cho từng component, và ranh giới trách nhiệm giữa các component.
Mục tiêu: không có component "đa trách nhiệm", không có màn hình nào thiếu component phục vụ.

## 2. Đọc khi nào

- Khi bắt đầu thiết kế UI (bước 5–6 của Skill 12), sau khi đã có schema dữ liệu (Skill 04)
  và nắm quy tắc kiến trúc (Skill 02).

## 3. Đầu vào cần thiết

- Skill 02 (phân tầng, luật phụ thuộc), Skill 04 (schema `Question`), Skill 01 (3 chế độ).

## 4. Quy tắc bắt buộc

### Inventory component (danh sách chuẩn — được phép điều chỉnh tên nhưng phải bao phủ đủ vai trò)

**Pages** (`src/pages/` — chỉ compose, theo Skill 02):

| Page | Vai trò |
|---|---|
| `HomePage` | Chọn chế độ: 3 thẻ (ôn tập / đề thi thử 1 / đề thi thử 2) |
| `PracticePage` | Bố cục chế độ ôn tập: dùng `PracticeRunner` |
| `ExamPage` | Bố cục chế độ thi thử: dùng `ExamRunner` theo deck `exam1`/`exam2` |

**Containers** (điều phối một luồng làm bài, dùng hook session):

| Component | Props chính | Vai trò |
|---|---|---|
| `PracticeRunner` | `questions: Question[]` | Luồng ôn tập: câu hiện tại, phản hồi ngay, điều hướng |
| `ExamRunner` | `questions: Question[]`, `durationSec: number` | Luồng thi: tính giờ, nộp bài, kết quả, xem lại |

**Presentational** (thuần hiển thị, nhận props + callback):

| Component | Props chính | Vai trò |
|---|---|---|
| `ModeCard` | `title`, `description`, `questionCount`, `onSelect` | Thẻ chọn chế độ ở HomePage |
| `QuestionCard` | `question: Question`, `selectedKeys: string[]`, `locked: boolean`, `onSelect(key)` | Render stem (Markdown) + danh sách lựa chọn |
| `OptionItem` | `option`, `selected`, `locked`, `revealState: 'none'|'correct'|'wrong'`, `onSelect` | Một lựa chọn; hỗ trợ radio (single) / checkbox (multiple) |
| `ExplanationPanel` | `explanation: string` (markdown) | Hiện giải thích sau khi trả lời (practice) hoặc khi xem lại (exam) |
| `QuestionNavigator` | `total`, `currentIndex`, `answeredMap`, `onJump(index)` | Lưới số câu để nhảy nhanh + trạng thái đã làm/chưa làm |
| `ProgressBar` | `answered`, `total` | Tiến độ làm bài |
| `TimerDisplay` | `secondsLeft: number` | Hiển thị mm:ss, cảnh báo khi sắp hết giờ |
| `ConfirmDialog` | `title`, `message`, `onConfirm`, `onCancel` | Xác nhận nộp bài / thoát giữa chừng |
| `FeedbackBanner` | `result: 'correct'|'wrong'` | Phản hồi ngay đúng/sai (practice mode) |
| `ScoreSummary` | `result: SessionResult` | Tổng điểm, số câu đúng/sai/bỏ trống sau khi nộp |
| `ReviewList` / `ReviewItem` | `questions`, `answers`, `results` | Xem lại từng câu: đáp án người dùng vs answer key + giải thích |

### MUST

- **MUST** mỗi component chỉ đảm nhận **một trách nhiệm**; props contract (tên prop, kiểu,
  bắt buộc/không) được ghi rõ trước khi code.
- **MUST** `QuestionCard` render `stem` và `explanation` dưới dạng **Markdown**
  (hỗ trợ bảng — Skill 10), không render text thuần.
- **MUST** `OptionItem` phân biệt hành vi `single` (radio — chọn 1, chọn lại thì đổi)
  và `multiple` (checkbox — bật/tắt từng option).
- **MUST NOT** để component chứa logic scoring, timer-core, parse, hay state machine
  phiên làm bài — những thứ đó thuộc Skill 06/09 (hook/module).
- **MUST NOT** truyền props quá 3 tầng (props drilling sâu) — khi đó phải dùng hook
  session (Skill 06) hoặc tách component.

### Quy tắc tách component mới

Được tách component mới khi: (a) một khối JSX được dùng lại ở ≥ 2 nơi, hoặc
(b) một component hiện tại phải xử lý thêm một trách nhiệm mới không liên quan đến
trách nhiệm cũ. Không tách chỉ vì "cho đẹp".

## 5. Đầu ra mong đợi

Cây component đầy đủ cho 3 chế độ, mỗi component có props contract; không có màn hình nào
thiếu component, không có component thừa không dùng.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Mọi màn hình của 3 chế độ đều được bao phủ bởi component trong inventory.
- [ ] Mỗi component có props contract được ghi lại (tên, kiểu, required/optional).
- [ ] Không component nào chứa logic scoring/timer/parse/state-machine.
- [ ] Không có props drilling quá 3 tầng.

## 7. Liên kết Skill

- Skill `02-architecture-rules` — phân tầng Page/Component/Hook/Module (tiền đề).
- Skill `04-markdown-parser` — schema `Question` dùng trong props.
- Skill `06-state-management` — hook session mà container dùng.
- Skill `10-ui-ux-guidelines` — chuẩn hiển thị cho presentational components.

## 8. Câu hỏi mở

- #9 (responsive): ảnh hưởng layout của `QuestionNavigator`, `QuestionCard` trên mobile.
