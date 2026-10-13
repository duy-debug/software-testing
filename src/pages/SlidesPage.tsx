import React from 'react';
import { getQuestionsByDeck } from '../data/loader';
import { PracticeRunner } from '../components/PracticeRunner';

export interface SlidesPageProps {
  onBackToHome: () => void;
}

export const SlidesPage: React.FC<SlidesPageProps> = ({ onBackToHome }) => {
  const questions = getQuestionsByDeck('slides');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <PracticeRunner
        deckId="slides"
        title="Trắc Nghiệm Bài Giảng Slide"
        subtitle="24 câu hỏi bài tập trọng tâm trên lớp gồm: Buổi 1 (BVA & Phân vùng tương đương), Buổi 2 (Bảng quyết định & Chuyển đổi trạng thái), Buổi 3 (Bao phủ lệnh & Bao phủ nhánh)."
        badge="Bài tập slide"
        questions={questions}
        onExit={onBackToHome}
      />
    </div>
  );
};
