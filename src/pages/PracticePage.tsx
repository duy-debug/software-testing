import React from 'react';
import { getQuestionsByDeck } from '../data/loader';
import { PracticeRunner } from '../components/PracticeRunner';
import type { DeckId } from '../types/quiz';

export interface PracticePageProps {
  deckId?: 'review' | 'practice1' | 'practice2';
  onBackToHome: () => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  deckId = 'review',
  onBackToHome,
}) => {
  const questions = getQuestionsByDeck(deckId as DeckId);

  let title = 'Ôn Tập Kiến Thức Tổng Hợp';
  let subtitle =
    'Chế độ ôn tập gồm các câu hỏi trắc nghiệm chuyên sâu. Bạn sẽ nhận phản hồi đúng/sai tức thì và lời giải thích chi tiết ngay sau mỗi câu trả lời.';
  let badge = 'Phản hồi tức thì';

  if (deckId === 'practice1') {
    title = 'Đề Thực Hành 1 — Tổng quan, SDLC & Kiểm thử tĩnh';
    subtitle =
      '40 câu trắc nghiệm thực hành tình huống (Bộ mới từ đề giữa kỳ GK): kiểm thử luồng, Error/Defect/Failure, 7 nguyên lý, chu trình SDLC, các cấp độ & kỹ thuật kiểm thử tĩnh.';
    badge = 'Bài tập thực hành 1';
  } else if (deckId === 'practice2') {
    title = 'Đề Thực Hành 2 — Kỹ thuật thiết kế, Quản lý & Tự động hoá';
    subtitle =
      '40 câu trắc nghiệm thực hành tình huống (Bộ mới từ đề giữa kỳ GK): Phân vùng tương đương, BVA, Bảng quyết định, Quản lý kiểm thử, CI/CD, API & AI testing.';
    badge = 'Bài tập thực hành 2';
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <PracticeRunner
        deckId={deckId}
        title={title}
        subtitle={subtitle}
        badge={badge}
        questions={questions}
        onExit={onBackToHome}
      />
    </div>
  );
};
