import React from 'react';
import { Timer, AlertTriangle } from 'lucide-react';

export interface TimerDisplayProps {
  secondsLeft: number;
  totalDurationSec?: number;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  secondsLeft,
  totalDurationSec = 2400, // 40 phút mặc định
}) => {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Cảnh báo khi còn dưới 10% hoặc dưới 4 phút (240s)
  const isWarning = secondsLeft <= Math.min(300, totalDurationSec * 0.1);
  const isUrgent = secondsLeft <= 60;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono transition-all duration-200 select-none ${
        isUrgent
          ? 'bg-rose-950/80 border-rose-500 text-rose-200 animate-pulse shadow-lg shadow-rose-900/40 ring-1 ring-rose-500'
          : isWarning
          ? 'bg-amber-950/60 border-amber-500/80 text-amber-200 shadow-sm'
          : 'bg-slate-800/80 border-slate-700 text-slate-200'
      }`}
    >
      {isUrgent ? (
        <AlertTriangle className="w-4 h-4 text-rose-400" />
      ) : (
        <Timer className={`w-4 h-4 ${isWarning ? 'text-amber-400' : 'text-indigo-400'}`} />
      )}
      <span className="text-sm md:text-base font-bold tracking-wider">{formattedTime}</span>
    </div>
  );
};
