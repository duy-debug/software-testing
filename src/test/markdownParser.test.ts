import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  parseReviewMarkdown,
  parseExamsMarkdown,
  validateQuestion,
} from '../lib/markdownParser';

const rootDir = process.cwd();
const fileAPath = path.join(rootDir, 'docs', 'gk_quiz (2).md');
const fileBPath = path.join(rootDir, 'docs', '80_cau_trac_nghiem_sot357.md');

const contentA = fs.readFileSync(fileAPath, 'utf-8');
const contentB = fs.readFileSync(fileBPath, 'utf-8');

describe('Markdown Parser & Data Validation (Skill 04 & 11)', () => {
  const reviewResult = parseReviewMarkdown(contentA);
  const examsResult = parseExamsMarkdown(contentB);

  describe('Nhóm 1 — Số lượng và cấu trúc', () => {
    it('TC-P01: Parse File A đúng 40 questions, deck = "review", id review-001..review-040', () => {
      expect(reviewResult.errors).toHaveLength(0);
      expect(reviewResult.questions).toHaveLength(40);
      reviewResult.questions.forEach((q, idx) => {
        expect(q.deck).toBe('review');
        expect(q.number).toBe(idx + 1);
        expect(q.id).toBe(`review-${String(idx + 1).padStart(3, '0')}`);
      });
    });

    it('TC-P02: Parse File B — Đề 1 đúng 40 questions, deck = "exam1", id exam1-001..exam1-040', () => {
      expect(examsResult.exam1.errors).toHaveLength(0);
      expect(examsResult.exam1.questions).toHaveLength(40);
      examsResult.exam1.questions.forEach((q, idx) => {
        expect(q.deck).toBe('exam1');
        expect(q.number).toBe(idx + 1);
        expect(q.id).toBe(`exam1-${String(idx + 1).padStart(3, '0')}`);
      });
    });

    it('TC-P03: Parse File B — Đề 2 đúng 40 questions, deck = "exam2", id exam2-001..exam2-040', () => {
      expect(examsResult.exam2.errors).toHaveLength(0);
      expect(examsResult.exam2.questions).toHaveLength(40);
      examsResult.exam2.questions.forEach((q, idx) => {
        expect(q.deck).toBe('exam2');
        expect(q.number).toBe(idx + 1);
        expect(q.id).toBe(`exam2-${String(idx + 1).padStart(3, '0')}`);
      });
    });

    it('TC-P04: Tổng toàn bộ 120 questions, không trùng id', () => {
      const allQuestions = [
        ...reviewResult.questions,
        ...examsResult.exam1.questions,
        ...examsResult.exam2.questions,
      ];
      expect(allQuestions).toHaveLength(120);
      const idSet = new Set(allQuestions.map((q) => q.id));
      expect(idSet.size).toBe(120);
    });

    it('TC-P05: Mỗi câu hỏi có ít nhất 1 option isCorrect = true (120/120 đạt)', () => {
      const allQuestions = [
        ...reviewResult.questions,
        ...examsResult.exam1.questions,
        ...examsResult.exam2.questions,
      ];
      for (const q of allQuestions) {
        const correctOpts = q.options.filter((o) => o.isCorrect);
        expect(correctOpts.length).toBeGreaterThanOrEqual(1);
      }
    });

    it('TC-P06 & TC-P07: type = "multiple" có > 1 đáp án đúng, "single" có đúng 1 đáp án đúng', () => {
      const allQuestions = [
        ...reviewResult.questions,
        ...examsResult.exam1.questions,
        ...examsResult.exam2.questions,
      ];
      for (const q of allQuestions) {
        const correctOpts = q.options.filter((o) => o.isCorrect);
        if (q.type === 'multiple') {
          expect(correctOpts.length).toBeGreaterThan(1);
        } else {
          expect(correctOpts.length).toBe(1);
        }
      }
    });
  });

  describe('Nhóm 2 — Cross-check đáp án (ground truth)', () => {
    it('TC-P08: 120/120 câu khớp ground truth (answerKey)', () => {
      const allQuestions = [
        ...reviewResult.questions,
        ...examsResult.exam1.questions,
        ...examsResult.exam2.questions,
      ];
      for (const q of allQuestions) {
        const valErrors = validateQuestion(q);
        expect(valErrors).toEqual([]);
      }
    });

    it('TC-P09: note của option đúng nằm trong *(...)*; option sai note = null', () => {
      const allQuestions = [
        ...reviewResult.questions,
        ...examsResult.exam1.questions,
        ...examsResult.exam2.questions,
      ];
      for (const q of allQuestions) {
        for (const opt of q.options) {
          if (!opt.isCorrect) {
            expect(opt.note).toBeNull();
          }
        }
      }
    });

    it('TC-P10: explanation không chứa dòng "Chính xác!" và không chứa dòng ground-truth', () => {
      const allQuestions = [
        ...reviewResult.questions,
        ...examsResult.exam1.questions,
        ...examsResult.exam2.questions,
      ];
      for (const q of allQuestions) {
        expect(q.explanation).not.toMatch(/^Chính xác!?$/m);
        expect(q.explanation).not.toMatch(/^The correct answers? (?:is|are):/m);
      }
    });
  });

  describe('Nhóm 3 — Trường hợp đặc biệt', () => {
    it('TC-P11: Câu có stem chứa bảng Markdown (File A Question 2)', () => {
      const q2 = reviewResult.questions.find((q) => q.id === 'review-002');
      expect(q2).toBeDefined();
      expect(q2?.stem).toContain('| Mã YC | Mô tả | Test Case |');
      expect(q2?.stem).toContain('| REQ-01 |');
    });

    it('TC-P12: Câu có 5 options (File A Question 1)', () => {
      const q1 = reviewResult.questions.find((q) => q.id === 'review-001');
      expect(q1?.options).toHaveLength(5);
      expect(q1?.options.map((o) => o.key)).toEqual(['a', 'b', 'c', 'd', 'e']);
    });

    it('TC-P13: Câu có 4 options (File A Question 2)', () => {
      const q2 = reviewResult.questions.find((q) => q.id === 'review-002');
      expect(q2?.options).toHaveLength(4);
      expect(q2?.options.map((o) => o.key)).toEqual(['a', 'b', 'c', 'd']);
    });
  });

  describe('Nhóm 4 — Xử lý lỗi (Edge cases)', () => {
    it('TC-P17: File thiếu dòng Select one: ở 1 câu -> báo lỗi', () => {
      const invalidMd = `
## Question 1
Stem không có dòng loại câu hỏi
- a. Opt A ✅
- b. Opt B
> The correct answer is: Opt A
`;
      const res = parseReviewMarkdown(invalidMd);
      expect(res.errors.length).toBeGreaterThan(0);
      expect(res.errors[0]).toContain('Thiếu dòng chỉ định loại câu hỏi');
    });

    it('TC-P19: Câu không có option nào ✅ -> báo lỗi validation', () => {
      const noCorrectMd = `
## Question 1
Stem câu hỏi
**Select one:**
- a. Opt A
- b. Opt B
> The correct answer is: Opt A
`;
      const res = parseReviewMarkdown(noCorrectMd);
      expect(res.errors.length).toBeGreaterThan(0);
      expect(res.errors.some((e) => e.includes('Không có đáp án đúng'))).toBe(true);
    });
  });
});
