import { useState, useEffect, useCallback, useMemo } from 'react';
import type {
  Question,
  QuizMode,
  QuizSessionState,
} from '../types/quiz';
import { scoreSession } from '../lib/scoring';

const STORAGE_PREFIX = 'quiz_session_';

export function getStorageKey(mode: QuizMode, deckId: string): string {
  return `${STORAGE_PREFIX}${mode}_${deckId}`;
}

export interface UseQuizSessionReturn {
  state: QuizSessionState;
  currentQuestion: Question | undefined;
  answeredMap: Record<string, boolean>;
  answeredCount: number;
  totalCount: number;
  isCurrentAnswered: boolean;
  scoreResult: ReturnType<typeof scoreSession> | null;
  startSession: () => void;
  selectOption: (questionId: string, optionKey: string, isSingle: boolean) => void;
  confirmAnswer: (questionId: string) => void;
  jumpToQuestion: (index: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  submitSession: () => void;
  startReview: () => void;
  resetSession: () => void;
}

export function useQuizSession(
  deckId: 'review' | 'exam1' | 'exam2',
  mode: QuizMode,
  questions: Question[]
): UseQuizSessionReturn {
  const storageKey = useMemo(() => getStorageKey(mode, deckId), [mode, deckId]);

  const initialQuestionIds = useMemo(
    () => questions.map((q) => q.id),
    [questions]
  );

  const [state, setState] = useState<QuizSessionState>(() => {
    // Thử khôi phục từ localStorage (đã chốt ở #7)
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as QuizSessionState;
        if (
          parsed.deckId === deckId &&
          parsed.mode === mode &&
          Array.isArray(parsed.questionIds) &&
          parsed.questionIds.length === questions.length
        ) {
          return parsed;
        }
      }
    } catch {
      // Bỏ qua lỗi parse storage
    }

    return {
      deckId,
      mode,
      status: 'idle',
      questionIds: initialQuestionIds,
      answers: {},
      currentIndex: 0,
      startedAt: null,
      submittedAt: null,
    };
  });

  // Tự động lưu localStorage khi state thay đổi
  useEffect(() => {
    try {
      if (state.status === 'idle') {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, JSON.stringify(state));
      }
    } catch {
      // Bỏ qua lỗi storage
    }
  }, [state, storageKey]);

  // Map câu hỏi theo id để tra cứu nhanh
  const questionMap = useMemo(() => {
    const map = new Map<string, Question>();
    for (const q of questions) {
      map.set(q.id, q);
    }
    return map;
  }, [questions]);

  const currentQuestionId = state.questionIds[state.currentIndex];
  const currentQuestion = questionMap.get(currentQuestionId);

  // Map trạng thái đã làm
  const answeredMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const qId of state.questionIds) {
      const ans = state.answers[qId];
      map[qId] = !!(ans && ans.length > 0);
    }
    return map;
  }, [state.questionIds, state.answers]);

  const answeredCount = useMemo(
    () => Object.values(answeredMap).filter(Boolean).length,
    [answeredMap]
  );

  const totalCount = state.questionIds.length;
  const isCurrentAnswered = !!(
    currentQuestionId && answeredMap[currentQuestionId]
  );

  // Bắt đầu làm bài
  const startSession = useCallback(() => {
    setState({
      deckId,
      mode,
      status: 'in_progress',
      questionIds: initialQuestionIds,
      answers: {},
      currentIndex: 0,
      startedAt: Date.now(),
      submittedAt: null,
    });
  }, [deckId, mode, initialQuestionIds]);

  // Chọn option cho câu hỏi
  const selectOption = useCallback(
    (questionId: string, optionKey: string, isSingle: boolean) => {
      setState((prev) => {
        // Nếu đã nộp bài thì không được thay đổi
        if (prev.status !== 'in_progress') return prev;

        const currentAns = prev.answers[questionId] || [];

        // Trong Practice mode, nếu đã trả lời thì không được đổi đáp án
        if (prev.mode === 'practice' && currentAns.length > 0) {
          return prev;
        }

        let nextAns: string[];
        if (isSingle) {
          nextAns = [optionKey];
        } else {
          // Checkbox toggle
          if (currentAns.includes(optionKey)) {
            nextAns = currentAns.filter((k) => k !== optionKey);
          } else {
            nextAns = [...currentAns, optionKey].sort();
          }
        }

        return {
          ...prev,
          answers: {
            ...prev.answers,
            [questionId]: nextAns,
          },
        };
      });
    },
    []
  );

  // Xác nhận trả lời cho câu multiple trong practice mode
  const confirmAnswer = useCallback((_questionId: string) => {
    // Không cần đổi state ngoài việc đáp án đã được chọn
  }, []);

  const jumpToQuestion = useCallback((index: number) => {
    setState((prev) => {
      if (index < 0 || index >= prev.questionIds.length) return prev;
      return { ...prev, currentIndex: index };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.currentIndex < prev.questionIds.length - 1) {
        return { ...prev, currentIndex: prev.currentIndex + 1 };
      }
      return prev;
    });
  }, []);

  const prevQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.currentIndex > 0) {
        return { ...prev, currentIndex: prev.currentIndex - 1 };
      }
      return prev;
    });
  }, []);

  // Nộp bài
  const submitSession = useCallback(() => {
    setState((prev) => {
      if (prev.status !== 'in_progress') return prev;
      return {
        ...prev,
        status: 'submitted',
        submittedAt: Date.now(),
      };
    });
  }, []);

  // Bắt đầu xem lại (Review mode)
  const startReview = useCallback(() => {
    setState((prev) => {
      if (prev.status !== 'submitted') return prev;
      return {
        ...prev,
        status: 'reviewing',
      };
    });
  }, []);

  // Làm lại từ đầu
  const resetSession = useCallback(() => {
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // Bỏ qua
    }
    setState({
      deckId,
      mode,
      status: 'idle',
      questionIds: initialQuestionIds,
      answers: {},
      currentIndex: 0,
      startedAt: null,
      submittedAt: null,
    });
  }, [storageKey, deckId, mode, initialQuestionIds]);

  // Tính điểm dẫn xuất (Derived state qua scoring module)
  const scoreResult = useMemo(() => {
    if (state.status === 'submitted' || state.status === 'reviewing') {
      return scoreSession(questions, state.answers);
    }
    return null;
  }, [state.status, questions, state.answers]);

  return {
    state,
    currentQuestion,
    answeredMap,
    answeredCount,
    totalCount,
    isCurrentAnswered,
    scoreResult,
    startSession,
    selectOption,
    confirmAnswer,
    jumpToQuestion,
    nextQuestion,
    prevQuestion,
    submitSession,
    startReview,
    resetSession,
  };
}
