import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Question } from '../types/quiz';
import { OptionItem } from './OptionItem';
import { Sparkles, Layers } from 'lucide-react';

export interface QuestionCardProps {
  question: Question;
  selectedKeys: string[];
  locked: boolean;
  revealAnswer?: boolean;
  onSelect: (key: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedKeys = [],
  locked,
  revealAnswer = false,
  onSelect,
}) => {
  const isSingle = question.type === 'single';

  return (
    <div className="bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 md:p-7 shadow-lg dark:shadow-xl backdrop-blur-md transition-colors duration-200">
      {/* Header câu hỏi */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/25 dark:border-indigo-500/30 font-mono text-sm font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Câu {question.number}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            ID: {question.id}
          </span>
          {question.topic && (
            <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/25 dark:border-purple-500/30 text-xs font-medium hidden sm:inline-block">
              {question.topic}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700/60">
          <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
          <span>{isSingle ? 'Chọn 1 đáp án' : 'Chọn nhiều đáp án'}</span>
        </div>
      </div>

      {/* Thân câu hỏi (Stem) - Render Markdown đầy đủ, bọc chống vỡ layout bảng trên mobile */}
      <div className="markdown-content text-slate-800 dark:text-slate-100 text-base md:text-lg leading-relaxed mb-6 overflow-x-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {question.stem}
        </ReactMarkdown>
      </div>

      {/* Danh sách lựa chọn (Options) */}
      <div className="space-y-3">
        {question.options.map((opt) => {
          const isSelected = selectedKeys.includes(opt.key);
          let revealState: 'none' | 'correct' | 'wrong' = 'none';

          if (revealAnswer) {
            if (opt.isCorrect) {
              revealState = 'correct';
            } else if (isSelected) {
              revealState = 'wrong';
            }
          }

          return (
            <OptionItem
              key={opt.key}
              option={opt}
              selected={isSelected}
              locked={locked}
              isSingle={isSingle}
              revealState={revealState}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
};
