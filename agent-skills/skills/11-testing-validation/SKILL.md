# Skill 11 — Testing & Validation

## 1. Mục đích

Là "người gác cổng" chất lượng: định nghĩa chiến lược kiểm thử, các loại test bắt buộc,
và checklist nghiệm thu cho từng chế độ. **Không có tuyên bố "xong" nào được chấp nhận
khi còn test đỏ hoặc checklist chưa đủ bằng chứng.**

## 2. Đọc khi nào

- Ở mỗi gate của workflow: sau bước 4 (parser), bước 8 (logic/timer/scoring),
  bước 10 (nghiệm thu tổng) của Skill 12.
- Trước khi Agent tuyên bố hoàn thành bất kỳ bước nào.

## 3. Đầu vào cần thiết

- Đặc tả của Skill 03, 04 (để test parser/dữ liệu), 07, 08, 09 (để test logic),
  02 (để kiểm tra kiến trúc).
- Thư viện test đã chốt (câu hỏi mở #8).

## 4. Quy tắc bắt buộc

### Các loại test bắt buộc

1. **Parser & dữ liệu** (dựa trên `references/parser-test-cases.md` của Skill 04):
   - Parse đủ 40/40/40 câu; mỗi câu có ≥ 1 đáp án đúng; cross-check ground truth 100%.
   - Ca biên: câu `multiple`, stem chứa bảng, option 4 vs 5 lựa chọn, File B ghép sai
     (đề, số câu) phải báo lỗi.
2. **Scoring** (Skill 09): ma trận single (đúng/sai/bỏ trống) × multiple
   (đúng hết/thiếu/thừa/không chọn/key lạ) — 100% pass.
3. **Timer**: `onExpire` gọi đúng 1 lần; hết giờ tự nộp bài (test ở mức integration
   với `ExamRunner`); không rò rỉ interval sau unmount.
4. **State machine** (Skill 06): mọi transition hợp lệ hoạt động; transition bất hợp lệ
   bị từ chối; session mới không rò rỉ state cũ.
5. **Kiến trúc** (Skill 02): kiểm tra tĩnh — Page không import từ `src/lib`;
   không tồn tại 2 implementation cho cùng logic scoring/timer.

### Checklist nghiệm thu

- **MUST** sử dụng `references/acceptance-checklists.md` — checklist chi tiết cho
  parser/dữ liệu, practice mode, exam mode (cả 2 đề), timer & scoring, kiến trúc, giao diện.
- **MUST** mỗi mục checklist được đánh dấu đạt **kèm bằng chứng**
  (test report, ảnh chụp màn hình, số liệu đối chiếu). Đánh dấu không bằng chứng = chưa đạt.

### MUST

- **MUST** viết test từ **dữ liệu thật** (120 câu đã parse) — **MUST NOT** bịa test case
  rồi tự pass với dữ liệu giả.
- **MUST** chạy **toàn bộ** test suite trước khi tuyên bố hoàn thành một bước;
  chỉ chạy test của phần mình vừa sửa là không đủ (tránh regression).
- **MUST** mọi lỗi phát hiện đều phải được sửa hoặc ghi nhận thành quyết định chờ người —
  **MUST NOT** bỏ qua lỗi, comment-out test đỏ, hay hạ tiêu chuẩn để "cho qua".

### MUST NOT

- **MUST NOT** tuyên bố hoàn thành khi còn bất kỳ test đỏ nào.
- **MUST NOT** dùng test để "chứng minh code đúng" bằng cách viết test theo code sai —
  test phải viết theo **đặc tả của Skill nghiệp vụ**, độc lập với implementation.

## 5. Đầu ra mong đợi

- Bộ test bao phủ 5 nhóm ở §4, chạy xanh 100%.
- `acceptance-checklists.md` được đánh dấu đầy đủ kèm bằng chứng cho từng mục.
- Báo cáo nghiệm thu cuối (bước 10): những gì đã kiểm tra, kết quả, lỗi đã sửa,
  vấn đề còn tồn chờ con người quyết định.

## 6. Điều kiện hoàn thành (Definition of Done)

- [ ] 100% test pass trên toàn bộ suite (không test nào bị skip/bỏ qua không lý do).
- [ ] 100% mục trong `acceptance-checklists.md` đạt kèm bằng chứng.
- [ ] Không còn lỗi chưa xử lý (đã sửa hết hoặc đã ghi nhận chờ quyết định người).
- [ ] Checklist kiến trúc (§4.5) pass.

## 7. Liên kết Skill

- Skill `03`, `04` — đặc tả và test case parser.
- Skill `07`, `08`, `09` — đặc tả logic để viết test.
- Skill `02` — checklist kiến trúc.
- Skill `10` — checklist giao diện.
- Skill `12` — các gate mà Skill này gác.

## 8. Câu hỏi mở

- #8 (thư viện test): chưa chốt thì đề xuất 1 lựa chọn (vd: Vitest + Testing Library
  nếu dùng Vite) và ghi rõ chờ phê duyệt — không tự chốt ngầm.
