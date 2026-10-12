# Skill 12 — Implementation Workflow

## 1. Mục đích

Là **bản đồ điều phối duy nhất** cho AI Agent: quy định thứ tự 10 bước triển khai từ lúc
tiếp nhận dự án đến khi bàn giao, mỗi bước ghi rõ Skill cần đọc, việc cần làm, đầu ra,
và **gate (điều kiện bắt buộc)** mới được sang bước tiếp theo. Agent làm theo Skill này
thì không cần con người nhắc từng bước.

## 2. Đọc khi nào

- Đọc **ngay sau Skill 01** — trước khi làm bất cứ việc gì khác.
- Tra cứu lại ở đầu mỗi bước để biết mình đang ở đâu và gate của bước là gì.

## 3. Đầu vào cần thiết

- Skill 01 (phạm vi) và toàn bộ các Skill khác (để ánh xạ bước ↔ Skill).
- `shared/open-questions.md` — kiểm tra trước mỗi bước.

## 4. Quy tắc bắt buộc — 10 bước triển khai

### Bước 1 — Đọc hướng dẫn chung, xác định phạm vi

- **Đọc:** Skill 01, Skill 12 (chính nó), `shared/glossary.md`, `shared/open-questions.md`.
- **Làm:** tóm tắt phạm vi (3 chế độ, nguồn dữ liệu, IN/OUT); phân loại mọi yêu cầu
  thành "đã rõ" hoặc "cần hỏi".
- **Đầu ra:** bản tóm tắt phạm vi + danh sách câu hỏi gửi con người.
- **Gate:** mọi yêu cầu đã được phân loại; không còn giả định ngầm. ⛔ Có câu hỏi mở
  then chốt (#1, #2, #3, #8) chưa trả lời → **dừng và hỏi**, chưa sang bước 2.

### Bước 2 — Kiểm tra cấu trúc dự án hiện tại

- **Đọc:** Skill 01, 02.
- **Làm:** xác định dự án mới hay có code sẵn; chốt tech stack (#8).
- **Đầu ra:** báo cáo hiện trạng + tech stack đã chốt.
- **Gate:** tech stack được con người xác nhận. Chưa chốt #8 → chỉ làm thiết kế logic,
  chưa viết code.

### Bước 3 — Phân tích hai nguồn dữ liệu

- **Đọc:** Skill 03.
- **Làm:** đọc toàn bộ 2 file Markdown thật; ghi đặc tả vào
  `03-data-source-analysis/references/format-spec.md` (mỗi khẳng định kèm ví dụ trích nguyên văn).
- **Đầu ra:** `format-spec.md` hoàn chỉnh.
- **Gate:** DoD của Skill 03 (không còn từ ngữ suy đoán; #1 đã được xác nhận).

### Bước 4 — Xác định và kiểm thử quy tắc parse

- **Đọc:** Skill 03, 04, 11.
- **Làm:** viết parser (hàm thuần trong `src/lib/`); chốt `schema.question.json`;
  parse thử toàn bộ 120 câu; viết `parser-test-cases.md`.
- **Đầu ra:** parser + schema + 3 file JSON dữ liệu + báo cáo validation.
- **Gate:** đúng 40/40/40 câu; cross-check ground truth 100%; test parser pass 100%.
  ⛔ Chưa đạt → sửa trong bước này, không sang bước 5.

### Bước 5 — Thiết lập kiến trúc ReactJS

- **Đọc:** Skill 02, 05.
- **Làm:** dựng cấu trúc `src/` (pages/components/hooks/lib/data);
  chốt inventory component + props contract (Skill 05).
- **Đầu ra:** khung dự án + tài liệu kiến trúc (cây component, props contract).
- **Gate:** checklist kiến trúc (Skill 02 §6) pass trên khung đã dựng.

### Bước 6 — Triển khai Component, hook, module nghiệp vụ

- **Đọc:** Skill 05, 06, 09, 02.
- **Làm:** code presentational components; hook `useQuizSession` (Skill 06);
  hook `useTimer` + module `scoring` (Skill 09).
- **Đầu ra:** component/hook/module theo đúng inventory và props contract.
- **Gate:** không logic nghiệp vụ trong Page; scoring/timer/state mỗi thứ một nơi duy nhất;
  test state machine + scoring + timer pass.

### Bước 7 — Hoàn thiện ba chế độ làm bài

- **Đọc:** Skill 07, 08, 06, 10.
- **Làm:** `PracticeRunner`/`PracticePage`, `ExamRunner`/`ExamPage` (dùng chung cho 2 đề),
  `HomePage`; đấu nối với dữ liệu thật.
- **Đầu ra:** 3 chế độ chạy được với 120 câu thật.
- **Gate:** mỗi chế độ pass checklist chức năng trong `acceptance-checklists.md` (Skill 11).

### Bước 8 — Kiểm thử parser, logic làm bài, timer, tính điểm

- **Đọc:** Skill 11, 04, 09.
- **Làm:** chạy toàn bộ test suite (5 nhóm của Skill 11); sửa lỗi phát hiện được.
- **Đầu ra:** test report xanh 100%.
- **Gate:** 100% test pass, không test đỏ, không lỗi bị bỏ qua. ⛔ Có test đỏ → sửa,
  không sang bước 9.

### Bước 9 — Hoàn thiện giao diện responsive

- **Đọc:** Skill 10, 05.
- **Làm:** áp chuẩn UI/UX: Markdown rendering (bảng), 4 trạng thái, responsive, copy text.
- **Đầu ra:** UI hoàn chỉnh trên các kích thước đã chốt (#9).
- **Gate:** checklist giao diện (Skill 11) pass.

### Bước 10 — Kiểm thử tổng thể, đối chiếu yêu cầu, sửa lỗi

- **Đọc:** Skill 11, 01.
- **Làm:** chạy lại toàn bộ test + checklist nghiệm thu; đối chiếu từng yêu cầu phạm vi (Skill 01);
  sửa mọi lỗi phát hiện; ghi nhận vấn đề cần con người quyết định.
- **Đầu ra:** báo cáo nghiệm thu cuối + website bàn giao.
- **Gate:** 100% `acceptance-checklists.md` đạt kèm bằng chứng; không còn lỗi chưa xử lý.

### Quy tắc chung cho mọi bước

- **MUST** đọc đúng Skill được chỉ định ở đầu mỗi bước trước khi làm.
- **MUST NOT** bỏ qua gate của bất kỳ bước nào. Gate chưa đạt → sửa trong phạm vi
  bước hiện tại, không nhảy bước, không "để sau".
- **MUST** kiểm tra `shared/open-questions.md` ở đầu mỗi bước; gặp mục `CHƯA TRẢ LỜI`
  mà bước đó cần → **dừng và hỏi con người**, cập nhật đáp án rồi mới tiếp tục.
- **MUST NOT** tuyên bố hoàn thành bước/giai đoạn khi chưa có bằng chứng
  (test report, số liệu validation, checklist đã đánh dấu).

## 5. Đầu ra mong đợi

Agent đi hết 10 bước theo đúng thứ tự, mỗi bước có đầu ra và gate rõ ràng,
chỉ dừng để hỏi người khi gặp câu hỏi mở chưa có đáp án.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] Cả 10 bước đều có: Skill cần đọc, việc cần làm, đầu ra, gate kiểm chứng được.
- [ ] Mọi gate đều có cách kiểm tra cụ thể (không phải câu chữ chung chung).
- [ ] Điểm dừng hỏi người được định nghĩa rõ (gặp open question `CHƯA TRẢ LỜI`).
- [ ] Không bước nào cho phép "tự tuyên bố xong" khi thiếu bằng chứng.

## 7. Liên kết Skill

- Điều phối tất cả Skill 01–11 (xem ma trận phụ thuộc trong plan tổng).
- `shared/open-questions.md` — nguồn của mọi điểm dừng bắt buộc.

## 8. Câu hỏi mở

Không có — Skill này là quy trình, không phụ thuộc đáp án cụ thể nào.
Tuy nhiên việc **thực thi** workflow thì phụ thuộc toàn bộ câu hỏi mở của các Skill khác.
