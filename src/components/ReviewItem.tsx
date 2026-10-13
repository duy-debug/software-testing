import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Question, QuestionScoreResult } from '../types/quiz';
import { OptionItem } from './OptionItem';
import { ExplanationPanel } from './ExplanationPanel';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export interface ReviewItemProps {
  question: Question;
  selectedKeys: string[];
  result: QuestionScoreResult;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({
  question,
  selectedKeys = [],
  result,
}) => {
  const isSingle = question.type === 'single';
  const isBlank = selectedKeys.length === 0;

  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 md:p-7 shadow-md dark:shadow-lg transition-colors duration-200">
      {/* Header câu trong Review */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 font-mono text-sm font-bold">
            Câu {question.number}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{question.id}</span>
        </div>

        {/* Trạng thái kết quả */}
        {isBlank ? (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 text-xs font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Chưa trả lời</span>
          </div>
        ) : result.isCorrect ? (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Chính xác (+1.0đ)</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-500/40 text-rose-800 dark:text-rose-300 text-xs font-semibold">
            <XCircle className="w-3.5 h-3.5" />
            <span>Sai (0đ)</span>
          </div>
        )}
      </div>

      {/* Thân câu hỏi */}
      <div className="markdown-content text-slate-800 dark:text-slate-100 text-base mb-5 overflow-x-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {question.stem}
        </ReactMarkdown>
      </div>

      {/* Lựa chọn với trạng thái reveal đầy đủ */}
      <div className="space-y-3">
        {question.options.map((opt) => {
          const isSelected = selectedKeys.includes(opt.key);
          let revealState: 'none' | 'correct' | 'wrong' = 'none';

          if (opt.isCorrect) {
            revealState = 'correct';
          } else if (isSelected) {
            revealState = 'wrong';
          }

          return (
            <OptionItem
              key={opt.key}
              option={opt}
              selected={isSelected}
              locked={true}
              isSingle={isSingle}
              revealState={revealState}
              onSelect={() => {}}
            />
          );
        })}
      </div>

      {/* Giải thích chi tiết */}
      <ExplanationPanel explanation={question.explanation} />
    </div>
  );
};
