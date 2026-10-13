import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export interface FeedbackBannerProps {
  isCorrect: boolean;
}

export const FeedbackBanner: React.FC<FeedbackBannerProps> = ({ isCorrect }) => {
  return (
    <div
      className={`p-4 rounded-xl flex items-center gap-3 border transition-all animate-fadeIn ${
        isCorrect
          ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-200'
          : 'bg-rose-50 dark:bg-rose-950/50 border-rose-300 dark:border-rose-500/50 text-rose-900 dark:text-rose-200'
      }`}
    >
      {isCorrect ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
      )}
      <div className="text-sm md:text-base font-semibold">
        {isCorrect ? 'Chính xác! Bạn đã chọn đúng đáp án.' : 'Chưa chính xác! Xem giải thích bên dưới để củng cố kiến thức.'}
      </div>
    </div>
  );
};
