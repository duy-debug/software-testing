import React, { useState, useMemo } from 'react';
import type { Question, SessionScoreResult } from '../types/quiz';
import { ReviewItem } from './ReviewItem';
import { Filter, ArrowUp } from 'lucide-react';

export interface ReviewListProps {
  questions: Question[];
  answers: Record<string, string[]>;
  scoreResult: SessionScoreResult;
}

export const ReviewList: React.FC<ReviewListProps> = ({
  questions,
  answers,
  scoreResult,
}) => {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'blank'>('all');

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const selected = answers[q.id] || [];
      const res = scoreResult.perQuestion[q.id];

      if (filter === 'all') return true;
      if (filter === 'blank') return selected.length === 0;
      if (filter === 'correct') return res && res.isCorrect;
      if (filter === 'wrong') return selected.length > 0 && res && !res.isCorrect;
      return true;
    });
  }, [questions, answers, scoreResult, filter]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      {/* Bộ lọc câu hỏi */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-900/80 border border-slate-800 rounded-2xl">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
          <Filter className="w-4 h-4 text-indigo-400" />
          <span>Lọc câu hỏi:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Tất cả ({questions.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('correct')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Đúng ({scoreResult.correctCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('wrong')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filter === 'wrong'
                ? 'bg-rose-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Sai ({scoreResult.answeredCount - scoreResult.correctCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('blank')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              filter === 'blank'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Chưa làm ({questions.length - scoreResult.answeredCount})
          </button>
        </div>
      </div>

      {/* Danh sách câu đã lọc */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => (
          <ReviewItem
            key={q.id}
            question={q}
            selectedKeys={answers[q.id] || []}
            result={scoreResult.perQuestion[q.id] || { isCorrect: false, score: 0 }}
          />
        ))}
      </div>

      {/* Nút cuộn lên đầu */}
      <div className="text-center pt-4">
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 cursor-pointer transition"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Lên đầu trang</span>
        </button>
      </div>
    </div>
  );
};
