import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BookOpen } from 'lucide-react';

export interface ExplanationPanelProps {
  explanation: string;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ explanation }) => {
  if (!explanation) return null;

  return (
    <div className="mt-6 p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-sm animate-fadeIn">
      <div className="flex items-center gap-2.5 text-indigo-700 dark:text-indigo-400 font-semibold text-sm mb-3">
        <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <span>Giải thích chi tiết & Cơ sở lý thuyết</span>
      </div>

      <div className="markdown-content text-slate-700 dark:text-slate-300 text-sm md:text-base overflow-x-auto leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {explanation}
        </ReactMarkdown>
      </div>
    </div>
  );
};
