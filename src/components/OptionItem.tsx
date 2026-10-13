import React from 'react';
import type { Option } from '../types/quiz';
import { Check, X, CheckSquare, Square, Disc, Circle } from 'lucide-react';

export interface OptionItemProps {
  option: Option;
  selected: boolean;
  locked: boolean;
  isSingle: boolean;
  revealState?: 'none' | 'correct' | 'wrong';
  onSelect: (key: string) => void;
}

export const OptionItem: React.FC<OptionItemProps> = ({
  option,
  selected,
  locked,
  isSingle,
  revealState = 'none',
  onSelect,
}) => {
  // Xác định màu sắc và viền dựa trên trạng thái
  let borderClasses =
    'border-slate-200 dark:border-slate-700/80 hover:border-indigo-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 shadow-xs dark:shadow-none';
  let badgeClasses =
    'bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent';

  if (revealState === 'correct') {
    borderClasses =
      'border-emerald-500/80 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 shadow-sm shadow-emerald-500/10 dark:shadow-emerald-900/30';
    badgeClasses = 'bg-emerald-600 text-white font-bold';
  } else if (revealState === 'wrong') {
    borderClasses =
      'border-rose-500/80 bg-rose-50/90 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100 shadow-sm shadow-rose-500/10 dark:shadow-rose-900/30';
    badgeClasses = 'bg-rose-600 text-white font-bold';
  } else if (selected) {
    borderClasses =
      'border-indigo-500 bg-indigo-50/90 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-100 ring-1 ring-indigo-500/40';
    badgeClasses = 'bg-indigo-600 text-white font-semibold';
  }

  const handleClick = () => {
    if (!locked) {
      onSelect(option.key);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!locked && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onSelect(option.key);
    }
  };

  return (
    <div
      role={isSingle ? 'radio' : 'checkbox'}
      aria-checked={selected}
      aria-disabled={locked}
      tabIndex={locked ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`group relative flex items-start gap-3.5 p-4 rounded-xl border transition-all duration-150 select-none ${
        locked ? 'cursor-default' : 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:translate-x-0.5'
      } ${borderClasses}`}
    >
      {/* Icon hiển thị checkbox / radio */}
      <div className="flex-shrink-0 mt-0.5">
        {revealState === 'correct' ? (
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        ) : revealState === 'wrong' ? (
          <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shadow">
            <X className="w-3.5 h-3.5 stroke-[3]" />
          </div>
        ) : isSingle ? (
          selected ? (
            <Disc className="w-5 h-5 text-indigo-600 dark:text-indigo-400 fill-indigo-500/30" />
          ) : (
            <Circle className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
          )
        ) : selected ? (
          <CheckSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400 fill-indigo-500/20" />
        ) : (
          <Square className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400" />
        )}
      </div>

      {/* Label chữ cái a, b, c... */}
      <span
        className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-mono uppercase transition-colors ${badgeClasses}`}
      >
        {option.key}
      </span>

      {/* Nội dung text option */}
      <div className="flex-1 text-sm md:text-base leading-relaxed">
        <span>{option.text}</span>

        {/* Ghi chú khi ở trạng thái reveal đúng */}
        {revealState === 'correct' && option.note && (
          <div className="mt-2 text-xs md:text-sm font-medium text-emerald-700 dark:text-emerald-300/90 italic flex items-center gap-1.5">
            <span>💡</span> {option.note}
          </div>
        )}
      </div>
    </div>
  );
};
