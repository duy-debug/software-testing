# Skill 02 — Architecture Rules

## 1. Mục đích

Định nghĩa nguyên tắc kiến trúc ReactJS bắt buộc cho toàn bộ dự án: phân chia trách nhiệm
giữa Page, Component, custom hook và module; luật phụ thuộc giữa các tầng; quy ước đặt tên
và tổ chức thư mục `src/`. Mọi code Agent viết ra đều phải pass checklist kiến trúc ở §6.

## 2. Đọc khi nào

- Ngay sau Skill 01, **trước khi thiết kế hoặc viết bất kỳ dòng code nào**.
- Đọc lại trước mỗi bước triển khai component/hook/module (bước 5–7 của Skill 12).

## 3. Đầu vào cần thiết

- Skill 01 (phạm vi, thuật ngữ).
- Tech stack đã chốt (câu hỏi mở #8) — nếu chưa chốt thì dừng ở thiết kế kiến trúc logic,
  chưa viết code.

## 4. Quy tắc bắt buộc

### Phân tầng và trách nhiệm

| Tầng | Vị trí | Trách nhiệm | Được phép chứa |
|---|---|---|---|
| **Page** | `src/pages/` | Chỉ **kết nối và bố trí** Component cho một route/màn hình | JSX bố cục, gọi hook session của đúng mode, không có `if/else` nghiệp vụ phức tạp |
| **Component** | `src/components/` | Render UI cho **một trách nhiệm duy nhất** | JSX, props contract rõ ràng, state cục bộ thuần hiển thị (vd: mở/đóng) |
| **Hook** | `src/hooks/` | Logic có trạng thái / vòng đời dùng chung | `useQuizSession`, `useTimer`, quản lý state phiên (Skill 06, 09) |
| **Module (lib)** | `src/lib/` | Logic thuần túy, **không phụ thuộc React** | parser, scoring, timer-core, định dạng điểm, validation |
| **Data** | `src/data/` | Dữ liệu câu hỏi đã parse + loader | JSON theo schema Skill 04, hàm load theo deck |

### Luật phụ thuộc (dependency rules)

```text
Page ──► Component ──► Hook ──► Module (lib)
                  └───────────► Data (qua loader)
```

- Phụ thuộc chỉ đi **một chiều từ trên xuống**. Module trong `lib/` KHÔNG ĐƯỢC import từ
  `components/`, `hooks/`, `pages/`.
- Page KHÔNG ĐƯỢC import trực tiếp từ `lib/` (parser, scoring) — mọi logic nghiệp vụ
  Page cần đều phải đi qua hook hoặc component chuyên trách.

### MUST

- **MUST** đặt data, parser, logic tính điểm, timer, quản lý trạng thái vào đúng tầng
  (hook hoặc module chuyên trách) — mỗi phần một nơi sở hữu duy nhất (single-owner).
- **MUST** tuân thủ quy ước đặt tên:
  - Component: `PascalCase`, tên file trùng tên component (vd: `QuestionCard.jsx`).
  - Hook: `camelCase` bắt đầu bằng `use` (vd: `useQuizSession`).
  - Module lib: `camelCase`, tên diễn đạt hành động (vd: `scoring.js`, `parseMarkdown.js`).
  - Biến/hàm liên quan dữ liệu câu hỏi dùng đúng thuật ngữ glossary (`stem`, `option`, `deck`, `answerKey`...).
- **MUST** tách component ngay khi một component đảm nhận quá một trách nhiệm
  (vừa render danh sách câu hỏi vừa tính điểm, vừa quản lý timer...).
- **MUST** giữ kiến trúc dễ mở rộng: thêm một deck mới (vd: `exam3`) chỉ được thêm dữ liệu
  và cấu hình, KHÔNG được sửa code lõi của parser/scoring/timer.

### MUST NOT

- **MUST NOT** viết logic nghiệp vụ phức tạp trong Page (parse dữ liệu, tính điểm,
  quản lý timer, state machine phiên làm bài).
- **MUST NOT** dồn toàn bộ ứng dụng vào một Component duy nhất.
- **MUST NOT** để hai nơi cùng implement một logic (vd: hai hàm tính điểm khác nhau
  cho practice mode và exam mode) — logic dùng chung phải nằm một chỗ (Skill 06, 09).
- **MUST NOT** để tầng dưới import tầng trên (module lib import component/hook/page).

### Ví dụ minh họa ranh giới

Xem `references/component-boundaries.md` để biết pattern đúng/sai của từng tầng
(mô tả cấu trúc, không phải code hoàn chỉnh để copy).

## 5. Đầu ra mong đợi

Cấu trúc thư mục `src/` và mọi file code đều nằm đúng tầng, phụ thuộc một chiều,
Page chỉ compose. Ví dụ cấu trúc mục tiêu:

```text
src/
├── pages/            # HomePage, PracticePage, ExamPage — chỉ bố cục
├── components/       # theo inventory của Skill 05
├── hooks/            # useQuizSession, useTimer, ...
├── lib/              # parser, scoring, timer-core (thuần JS, không React)
├── data/             # questions.review.json, questions.exam1.json, ...
└── styles/
```

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Không Page nào import trực tiếp từ `src/lib` (kiểm tra bằng tìm kiếm import).
- [ ] Không Component nào chứa logic scoring / timer / parse (đối chiếu Skill 09, 04).
- [ ] Không tồn tại 2 implementation cho cùng một logic nghiệp vụ (điểm, timer, state phiên).
- [ ] Luồng import tuân thủ một chiều Page → Component → Hook → Module.
- [ ] Thêm deck mới (giả lập) không yêu cầu sửa code trong `lib/` hay hook dùng chung.

## 7. Liên kết Skill

- Skill `01` — phạm vi và thuật ngữ (tiền đề).
- Skill `05-component-design` — inventory component tuân thủ tầng Component/Page.
- Skill `06-state-management` — tầng Hook cho state phiên.
- Skill `09-timer-scoring` — tầng Hook/Module cho timer và scoring.
- Skill `11-testing-validation` — checklist kiến trúc dùng để phát hiện vi phạm.

## 8. Câu hỏi mở

- #8 (tech stack): ảnh hưởng trực tiếp đến cấu trúc file (`.jsx` vs `.tsx`, CSS modules vs Tailwind...).
  Chưa chốt thì chỉ thiết kế kiến trúc logic, chưa viết code.
