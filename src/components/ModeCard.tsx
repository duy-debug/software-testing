import React from 'react';
import { ArrowRight, Clock, Layers } from 'lucide-react';

export interface ModeCardProps {
  title: string;
  description: string;
  badge: string;
  questionCount: number;
  duration?: string;
  icon: React.ReactNode;
  gradient: string;
  buttonText?: string;
  onSelect: () => void;
}

export const ModeCard: React.FC<ModeCardProps> = ({
  title,
  description,
  badge,
  questionCount,
  duration,
  icon,
  gradient,
  buttonText = 'Bắt đầu',
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className="group relative flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-slate-700/80 shadow-md hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden backdrop-blur-xl"
    >
      {/* Background glow gradient */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity ${gradient}`}
      />

      <div>
        {/* Header thẻ: Icon & Badge */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${gradient}`}>
            {icon}
          </div>
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 text-xs font-semibold">
            {badge}
          </span>
        </div>

        {/* Tiêu đề & Mô tả */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors mb-2.5">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Thông tin câu hỏi & Thời lượng */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>{questionCount} câu trắc nghiệm</span>
          </div>
          {duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        {/* Nút bắt đầu */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 text-slate-800 dark:text-slate-200 group-hover:text-white font-semibold text-sm flex items-center justify-center gap-2 border border-slate-300/80 dark:border-slate-700/60 group-hover:border-indigo-500 shadow-xs group-hover:shadow-indigo-500/30 transition-all cursor-pointer"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
