import { describe, it, expect } from 'vitest';
import { scoreQuestion, scoreSession } from '../lib/scoring';
import type { Question } from '../types/quiz';

describe('Scoring Logic (Skill 09 & 11)', () => {
  const singleQuestion: Question = {
    id: 'test-single',
    deck: 'review',
    number: 1,
    type: 'single',
    stem: 'Câu hỏi một đáp án',
    options: [
      { key: 'a', text: 'Sai 1', isCorrect: false, note: null },
      { key: 'b', text: 'Đúng', isCorrect: true, note: 'Ghi chú' },
      { key: 'c', text: 'Sai 2', isCorrect: false, note: null },
    ],
    explanation: 'Giải thích',
    answerKey: 'The correct answer is: Đúng',
  };

  const multipleQuestion: Question = {
    id: 'test-multiple',
    deck: 'review',
    number: 2,
    type: 'multiple',
    stem: 'Câu hỏi nhiều đáp án',
    options: [
      { key: 'a', text: 'Đúng 1', isCorrect: true, note: 'Ghi chú 1' },
      { key: 'b', text: 'Sai 1', isCorrect: false, note: null },
      { key: 'c', text: 'Đúng 2', isCorrect: true, note: 'Ghi chú 2' },
      { key: 'd', text: 'Sai 2', isCorrect: false, note: null },
    ],
    explanation: 'Giải thích',
    answerKey: 'The correct answers are: Đúng 1, Đúng 2',
  };

  describe('Ma trận câu hỏi Single', () => {
    it('Chọn đúng đáp án duy nhất -> isCorrect = true, score = 1', () => {
      const res = scoreQuestion(singleQuestion, ['b']);
      expect(res.isCorrect).toBe(true);
      expect(res.score).toBe(1);
    });

    it('Chọn sai đáp án -> isCorrect = false, score = 0', () => {
      const res = scoreQuestion(singleQuestion, ['a']);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });

    it('Bỏ trống (chưa chọn) -> isCorrect = false, score = 0', () => {
      const res = scoreQuestion(singleQuestion, []);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });

    it('Chọn nhiều hơn 1 đáp án cho câu single -> isCorrect = false, score = 0', () => {
      const res = scoreQuestion(singleQuestion, ['b', 'a']);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });

    it('Chọn key lạ không tồn tại -> isCorrect = false, score = 0, không throw', () => {
      const res = scoreQuestion(singleQuestion, ['z']);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });
  });

  describe('Ma trận câu hỏi Multiple (All-or-nothing theo #3)', () => {
    it('Chọn đúng và đủ tất cả đáp án đúng (a, c) -> isCorrect = true, score = 1', () => {
      const res = scoreQuestion(multipleQuestion, ['a', 'c']);
      expect(res.isCorrect).toBe(true);
      expect(res.score).toBe(1);
    });

    it('Thứ tự chọn ngược (c, a) -> vẫn isCorrect = true, score = 1', () => {
      const res = scoreQuestion(multipleQuestion, ['c', 'a']);
      expect(res.isCorrect).toBe(true);
      expect(res.score).toBe(1);
    });

    it('Thiếu đáp án (chỉ chọn a) -> isCorrect = false, score = 0', () => {
      const res = scoreQuestion(multipleQuestion, ['a']);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });

    it('Thừa đáp án sai (chọn a, b, c) -> isCorrect = false, score = 0', () => {
      const res = scoreQuestion(multipleQuestion, ['a', 'b', 'c']);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });

    it('Bỏ trống -> isCorrect = false, score = 0', () => {
      const res = scoreQuestion(multipleQuestion, []);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });

    it('Chọn key lạ (a, c, x) -> isCorrect = false, score = 0, không throw', () => {
      const res = scoreQuestion(multipleQuestion, ['a', 'c', 'x']);
      expect(res.isCorrect).toBe(false);
      expect(res.score).toBe(0);
    });
  });

  describe('Chấm điểm toàn session (scoreSession)', () => {
    it('Chấm phiên với 2 câu: 1 đúng, 1 sai -> tổng kết quả chuẩn xác', () => {
      const questions = [singleQuestion, multipleQuestion];
      const answers = {
        'test-single': ['b'], // Đúng
        'test-multiple': ['a'], // Sai (thiếu c)
      };

      const sessionRes = scoreSession(questions, answers);
      expect(sessionRes.totalQuestions).toBe(2);
      expect(sessionRes.answeredCount).toBe(2);
      expect(sessionRes.correctCount).toBe(1);
      expect(sessionRes.totalScore).toBe(5); // 1/2 * 10
      expect(sessionRes.percentage).toBe(50);
      expect(sessionRes.perQuestion['test-single'].isCorrect).toBe(true);
      expect(sessionRes.perQuestion['test-multiple'].isCorrect).toBe(false);
    });

    it('Tính điểm trên đề 40 câu đúng hết -> đạt 10/10 điểm, 100%', () => {
      const dummyQuestions: Question[] = Array.from({ length: 40 }, (_, i) => ({
        id: `q-${i + 1}`,
        deck: 'exam1',
        number: i + 1,
        type: 'single',
        stem: `Question ${i + 1}`,
        options: [
          { key: 'a', text: 'Đúng', isCorrect: true, note: null },
          { key: 'b', text: 'Sai', isCorrect: false, note: null },
        ],
        explanation: 'Exp',
        answerKey: 'The correct answer is: Đúng',
      }));

      const allCorrectAnswers: Record<string, string[]> = {};
      dummyQuestions.forEach((q) => {
        allCorrectAnswers[q.id] = ['a'];
      });

      const res = scoreSession(dummyQuestions, allCorrectAnswers);
      expect(res.totalQuestions).toBe(40);
      expect(res.correctCount).toBe(40);
      expect(res.totalScore).toBe(10);
      expect(res.percentage).toBe(100);
    });
  });
});
