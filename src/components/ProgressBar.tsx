import React from 'react';

export interface ProgressBarProps {
  answered: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ answered, total }) => {
  const percentage = total > 0 ? Math.min(100, Math.round((answered / total) * 100)) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5 font-medium">
        <span>Tiến độ hoàn thành</span>
        <span className="font-mono text-indigo-400 font-semibold">{percentage}% ({answered}/{total})</span>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden border border-slate-700/60 p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
