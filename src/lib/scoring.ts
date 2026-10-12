import type {
  Question,
  QuestionScoreResult,
  SessionScoreResult,
} from '../types/quiz';

/**
 * Chấm điểm cho 1 câu hỏi đơn lẻ (Single-owner theo Skill 09)
 * Áp dụng quy tắc:
 * - Single: đúng 1 đáp án và trùng với đáp án đúng -> 1 điểm, ngược lại -> 0
 * - Multiple: All-or-nothing (đã chốt #3) -> đúng đủ toàn bộ đáp án đúng, không thiếu, không thừa -> 1 điểm, ngược lại -> 0
 */
export function scoreQuestion(
  question: Question,
  selectedKeys: string[] = []
): QuestionScoreResult {
  if (!question || !question.options) {
    return { isCorrect: false, score: 0 };
  }

  // Lọc tập key đáp án đúng
  const correctKeys = question.options
    .filter((o) => o.isCorrect)
    .map((o) => o.key)
    .sort();

  // Chuẩn hóa tập key người dùng chọn (loại bỏ trùng lặp và sắp xếp)
  const uniqueSelected = Array.from(new Set(selectedKeys || [])).sort();

  if (uniqueSelected.length === 0) {
    return { isCorrect: false, score: 0 };
  }

  // Kiểm tra key lạ không tồn tại trong options
  const validKeys = new Set(question.options.map((o) => o.key));
  const hasInvalidKey = uniqueSelected.some((k) => !validKeys.has(k));
  if (hasInvalidKey) {
    return { isCorrect: false, score: 0 };
  }

  if (question.type === 'single') {
    if (uniqueSelected.length === 1 && uniqueSelected[0] === correctKeys[0]) {
      return { isCorrect: true, score: 1 };
    }
    return { isCorrect: false, score: 0 };
  }

  // Với multiple (All-or-nothing theo quyết định mở #3)
  if (uniqueSelected.length !== correctKeys.length) {
    return { isCorrect: false, score: 0 };
  }

  const isAllMatch = uniqueSelected.every((key, idx) => key === correctKeys[idx]);
  return {
    isCorrect: isAllMatch,
    score: isAllMatch ? 1 : 0,
  };
}

/**
 * Chấm điểm toàn bộ phiên làm bài
 */
export function scoreSession(
  questions: Question[],
  answers: Record<string, string[]> = {}
): SessionScoreResult {
  const totalQuestions = questions.length;
  let answeredCount = 0;
  let correctCount = 0;
  const perQuestion: Record<string, QuestionScoreResult> = {};

  for (const q of questions) {
    const selected = answers[q.id] || [];
    if (selected.length > 0) {
      answeredCount++;
    }

    const result = scoreQuestion(q, selected);
    perQuestion[q.id] = result;

    if (result.isCorrect) {
      correctCount++;
    }
  }

  // Thang điểm 10 (mỗi câu 0.25 điểm trên đề 40 câu)
  const rawScore = totalQuestions > 0 ? (correctCount / totalQuestions) * 10 : 0;
  const totalScore = Math.round(rawScore * 100) / 100;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return {
    totalQuestions,
    answeredCount,
    correctCount,
    totalScore,
    percentage,
    perQuestion,
  };
}
