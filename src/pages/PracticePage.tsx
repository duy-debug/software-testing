import React from 'react';
import { getQuestionsByDeck } from '../data/loader';
import { PracticeRunner } from '../components/PracticeRunner';

export interface PracticePageProps {
  onBackToHome: () => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({ onBackToHome }) => {
  const questions = getQuestionsByDeck('review');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <PracticeRunner questions={questions} onExit={onBackToHome} />
    </div>
  );
};
