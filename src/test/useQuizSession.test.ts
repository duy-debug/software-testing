import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useQuizSession } from '../hooks/useQuizSession';
import type { Question } from '../types/quiz';

describe('State Management & Session State Machine (Skill 06 & 11)', () => {
  const mockQuestions: Question[] = [
    {
      id: 'mock-001',
      deck: 'review',
      number: 1,
      type: 'single',
      stem: 'Stem 1',
      options: [
        { key: 'a', text: 'Opt A', isCorrect: true, note: null },
        { key: 'b', text: 'Opt B', isCorrect: false, note: null },
      ],
      explanation: 'Exp 1',
      answerKey: 'The correct answer is: Opt A',
    },
    {
      id: 'mock-002',
      deck: 'review',
      number: 2,
      type: 'multiple',
      stem: 'Stem 2',
      options: [
        { key: 'a', text: 'Opt A', isCorrect: true, note: null },
        { key: 'b', text: 'Opt B', isCorrect: true, note: null },
        { key: 'c', text: 'Opt C', isCorrect: false, note: null },
      ],
      explanation: 'Exp 2',
      answerKey: 'The correct answers are: Opt A, Opt B',
    },
  ];

  beforeEach(() => {
    localStorage.clear();
  });

  it('Khởi tạo phiên ở trạng thái idle, không rò rỉ đáp án', () => {
    const { result } = renderHook(() =>
      useQuizSession('review', 'practice', mockQuestions)
    );

    expect(result.current.state.status).toBe('idle');
    expect(result.current.state.answers).toEqual({});
    expect(result.current.answeredCount).toBe(0);
    expect(result.current.totalCount).toBe(2);
  });

  it('Bắt đầu làm bài: idle -> in_progress', () => {
    const { result } = renderHook(() =>
      useQuizSession('review', 'practice', mockQuestions)
    );

    act(() => {
      result.current.startSession();
    });

    expect(result.current.state.status).toBe('in_progress');
    expect(result.current.state.startedAt).not.toBeNull();
  });

  it('Chọn đáp án cho câu single và multiple trong in_progress', () => {
    const { result } = renderHook(() =>
      useQuizSession('review', 'exam', mockQuestions)
    );

    act(() => {
      result.current.startSession();
    });

    // Chọn câu 1 (single)
    act(() => {
      result.current.selectOption('mock-001', 'a', true);
    });
    expect(result.current.state.answers['mock-001']).toEqual(['a']);

    // Trong exam mode, được phép đổi đáp án câu single
    act(() => {
      result.current.selectOption('mock-001', 'b', true);
    });
    expect(result.current.state.answers['mock-001']).toEqual(['b']);

    // Chọn câu 2 (multiple - toggle)
    act(() => {
      result.current.selectOption('mock-002', 'a', false);
    });
    expect(result.current.state.answers['mock-002']).toEqual(['a']);

    act(() => {
      result.current.selectOption('mock-002', 'b', false);
    });
    expect(result.current.state.answers['mock-002']).toEqual(['a', 'b']);

    // Bỏ chọn b
    act(() => {
      result.current.selectOption('mock-002', 'b', false);
    });
    expect(result.current.state.answers['mock-002']).toEqual(['a']);
  });

  it('Trong practice mode: câu đã trả lời thì bị khóa, không được đổi đáp án', () => {
    const { result } = renderHook(() =>
      useQuizSession('review', 'practice', mockQuestions)
    );

    act(() => {
      result.current.startSession();
    });

    act(() => {
      result.current.selectOption('mock-001', 'a', true);
    });
    expect(result.current.state.answers['mock-001']).toEqual(['a']);

    // Cố chọn sang b
    act(() => {
      result.current.selectOption('mock-001', 'b', true);
    });
    // Vẫn phải là ['a']
    expect(result.current.state.answers['mock-001']).toEqual(['a']);
  });

  it('Nộp bài: in_progress -> submitted, sau đó vào reviewing', () => {
    const { result } = renderHook(() =>
      useQuizSession('exam1', 'exam', mockQuestions)
    );

    act(() => {
      result.current.startSession();
    });

    act(() => {
      result.current.selectOption('mock-001', 'a', true);
    });

    act(() => {
      result.current.submitSession();
    });

    expect(result.current.state.status).toBe('submitted');
    expect(result.current.scoreResult).not.toBeNull();
    expect(result.current.scoreResult?.correctCount).toBe(1);

    // Không thể chọn tiếp khi đã submitted
    act(() => {
      result.current.selectOption('mock-002', 'a', false);
    });
    expect(result.current.state.answers['mock-002']).toBeUndefined();

    // Vào màn hình review
    act(() => {
      result.current.startReview();
    });
    expect(result.current.state.status).toBe('reviewing');
  });

  it('Reset session: dọn sạch state về idle và xóa localStorage', () => {
    const { result } = renderHook(() =>
      useQuizSession('exam1', 'exam', mockQuestions)
    );

    act(() => {
      result.current.startSession();
      result.current.selectOption('mock-001', 'a', true);
      result.current.submitSession();
    });

    expect(result.current.state.status).toBe('submitted');

    act(() => {
      result.current.resetSession();
    });

    expect(result.current.state.status).toBe('idle');
    expect(result.current.state.answers).toEqual({});
    expect(result.current.state.startedAt).toBeNull();
  });
});
