import React from 'react';
import type { QuestionScoreResult } from '../types/quiz';
import { LayoutGrid } from 'lucide-react';

export interface QuestionNavigatorProps {
  total: number;
  currentIndex: number;
  questionIds: string[];
  answeredMap: Record<string, boolean>;
  perQuestionResult?: Record<string, QuestionScoreResult>;
  onJump: (index: number) => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  total,
  currentIndex,
  questionIds,
  answeredMap,
  perQuestionResult,
  onJump,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 md:p-5 shadow-lg dark:shadow-xl backdrop-blur-md transition-colors duration-200">
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
          <LayoutGrid className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          <span>Danh sách câu hỏi</span>
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          {Object.values(answeredMap).filter(Boolean).length}/{total} đã làm
        </span>
      </div>

      {/* Lưới câu hỏi */}
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-5 gap-2 max-h-[360px] overflow-y-auto pr-1">
        {Array.from({ length: total }, (_, i) => {
          const qId = questionIds[i];
          const isCurrent = i === currentIndex;
          const isAnswered = answeredMap[qId];
          const result = perQuestionResult ? perQuestionResult[qId] : null;

          let btnClass =
            'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 hover:text-slate-900 dark:hover:text-slate-200';

          if (result) {
            // Review mode: Hiện đúng/sai
            if (result.isCorrect) {
              btnClass =
                'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-400 dark:border-emerald-600 font-bold';
            } else {
              btnClass =
                'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-400 dark:border-rose-600 font-bold';
            }
          } else if (isAnswered) {
            btnClass =
              'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 border-indigo-300 dark:border-indigo-500 font-medium';
          }

          if (isCurrent) {
            btnClass +=
              ' ring-2 ring-indigo-500 dark:ring-indigo-400 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 scale-105 shadow-md z-10';
          }

          return (
            <button
              key={i}
              type="button"
              onClick={() => onJump(i)}
              className={`h-9 rounded-lg border text-xs font-mono transition-all flex items-center justify-center cursor-pointer ${btnClass}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Chú thích màu sắc */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400 justify-center">
        {perQuestionResult ? (
          <>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-600 inline-block" />
              <span>Đúng</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-rose-600 inline-block" />
              <span>Sai / Bỏ</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-indigo-600 inline-block" />
              <span>Đã làm</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 inline-block" />
              <span>Chưa làm</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
