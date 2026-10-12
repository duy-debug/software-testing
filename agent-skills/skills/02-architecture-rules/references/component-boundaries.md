# Component Boundaries — Minh họa ranh giới Page / Component / Hook / Module

> Tài liệu **mô tả cấu trúc**, không phải code hoàn chỉnh để copy-paste.
> Các đoạn mã dưới đây là khung minh họa (pseudo-structure) cho pattern đúng/sai.

## 1. Page — chỉ kết nối và bố trí

**ĐÚNG:** Page lấy dữ liệu qua hook, xếp component vào layout, không có logic nghiệp vụ.

```text
PracticePage:
  - const { questions } = useReviewDeck()      // lấy dữ liệu qua hook/loader
  - return <Layout>
             <PracticeRunner questions={questions} />
           </Layout>
  - KHÔNG có: parse, tính điểm, setInterval, if/else chấm điểm
```

**SAI:** Page tự fetch file markdown, tự parse, tự tính điểm rồi truyền xuống.

```text
PracticePage (SAI):
  - tự đọc file .md, tự tách câu hỏi bằng regex trong Page
  - tự viết hàm tinhDiem() trong Page
  → VI PHẠM: logic nghiệp vụ nằm trong Page (Skill 02 MUST NOT)
```

## 2. Component — một trách nhiệm, nhận props

**ĐÚNG:** `QuestionCard` chỉ render: nhận `question`, `selectedKeys`, `locked`, `onSelect`
qua props; không biết scoring, không biết deck nào.

**SAI:** `QuestionCard` tự import hàm chấm điểm để tự判定 đúng/sai rồi tự tô màu
→ VI PHẠM: component chứa logic scoring (thuộc Skill 09).

## 3. Hook — logic có trạng thái dùng chung

**ĐÚNG:** `useQuizSession(deckId, mode)` là nơi duy nhất giữ `answers`, `status`,
`currentIndex`; component gọi hook để đọc và dispatch hành động (`selectOption`,
`submit`, `reset`).

**SAI:** mỗi `QuestionCard` tự `useState` đáp án của mình rồi "báo cáo" lên trên
→ VI PHẠM: state phiên phân tán (Skill 06 MUST NOT).

## 4. Module (lib) — hàm thuần, không React

**ĐÚNG:** `src/lib/scoring.js` export `scoreQuestion(question, selectedKeys)` —
hàm thuần, input là dữ liệu, output là kết quả; test được mà không cần render React.

**SAI:** file scoring import React hoặc đọc trực tiếp từ component state
→ VI PHẠM: luật phụ thuộc một chiều (Skill 02).

## 5. Checklist nhanh khi review code

- [ ] Page có import gì từ `src/lib/` không? → Có là sai.
- [ ] Component có chứa từ khóa `score`, `setInterval`, `parse` không? → Có là đáng ngờ,
      đối chiếu Skill 09/04.
- [ ] Có 2 hàm làm cùng một việc ở 2 file khác nhau không? → Gộp về single-owner.
- [ ] Module trong `lib/` có import từ `components/`/`hooks/`/`pages/` không? → Có là sai.
