import React from 'react';
import { getQuestionsByDeck } from '../data/loader';
import { ExamRunner } from '../components/ExamRunner';

export interface ExamPageProps {
  deckId: 'exam1' | 'exam2';
  onBackToHome: () => void;
}

export const ExamPage: React.FC<ExamPageProps> = ({ deckId, onBackToHome }) => {
  const questions = getQuestionsByDeck(deckId);
  const title =
    deckId === 'exam1'
      ? 'Đề thi thử 1 — Tổng quan, SDLC & Kiểm thử tĩnh'
      : 'Đề thi thử 2 — Kỹ thuật kiểm thử & Thiết kế Test Case';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ExamRunner
        deckId={deckId}
        title={title}
        questions={questions}
        durationSec={2400} // 40 phút
        onExit={onBackToHome}
      />
    </div>
  );
};
