import React from 'react';
import type { SessionScoreResult } from '../types/quiz';
import { Trophy, CheckCircle, XCircle, HelpCircle, Clock, RotateCcw, Eye, Home } from 'lucide-react';

export interface ScoreSummaryProps {
  scoreResult: SessionScoreResult;
  timeTakenSec?: number;
  onReview?: () => void;
  onRetry: () => void;
  onHome: () => void;
}

export const ScoreSummary: React.FC<ScoreSummaryProps> = ({
  scoreResult,
  timeTakenSec,
  onReview,
  onRetry,
  onHome,
}) => {
  const { totalQuestions, correctCount, answeredCount, totalScore, percentage } = scoreResult;
  const incorrectCount = answeredCount - correctCount;
  const blankCount = totalQuestions - answeredCount;

  // Đánh giá xếp loại
  let gradeText = 'Cần ôn tập thêm';
  let gradeColor = 'text-rose-600 dark:text-rose-400';
  let badgeBg = 'bg-rose-500/10 dark:bg-rose-500/20 border-rose-500/25 dark:border-rose-500/30';

  if (totalScore >= 8.5) {
    gradeText = 'Xuất sắc! Nắm vững kiến thức';
    gradeColor = 'text-emerald-600 dark:text-emerald-400';
    badgeBg = 'bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500/25 dark:border-emerald-500/30';
  } else if (totalScore >= 7.0) {
    gradeText = 'Khá giỏi! Kết quả tốt';
    gradeColor = 'text-indigo-600 dark:text-indigo-400';
    badgeBg = 'bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/25 dark:border-indigo-500/30';
  } else if (totalScore >= 5.0) {
    gradeText = 'Đạt yêu cầu (Trung bình)';
    gradeColor = 'text-amber-600 dark:text-amber-400';
    badgeBg = 'bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/25 dark:border-amber-500/30';
  }

  // Định dạng thời gian
  let formattedTime = '';
  if (timeTakenSec !== undefined) {
    const mins = Math.floor(timeTakenSec / 60);
    const secs = timeTakenSec % 60;
    formattedTime = `${mins} phút ${secs} giây`;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-2xl backdrop-blur-xl animate-fadeIn transition-colors duration-200">
      {/* Icon cúp và tiêu đề */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
          <Trophy className="w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Kết Quả Làm Bài
        </h2>
        <div className={`inline-block mt-2.5 px-4 py-1 rounded-full border text-xs md:text-sm font-semibold ${badgeBg} ${gradeColor}`}>
          {gradeText}
        </div>
      </div>

      {/* Điểm số nổi bật */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-4 text-center">
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Điểm số</span>
          <div className="text-3xl md:text-4xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400 mt-1">
            {totalScore.toFixed(1)} <span className="text-base text-slate-400 dark:text-slate-500">/ 10</span>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-4 text-center">
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Tỷ lệ đúng</span>
          <div className="text-3xl md:text-4xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
            {percentage}%
          </div>
        </div>
      </div>

      {/* Bảng chi tiết thống kê */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 rounded-xl p-3 flex items-center gap-2.5">
          <CheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Đúng</div>
            <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-100">{correctCount} câu</div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 rounded-xl p-3 flex items-center gap-2.5">
          <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 flex-shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Sai</div>
            <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-100">{incorrectCount} câu</div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 rounded-xl p-3 flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Chưa làm</div>
            <div className="text-base font-bold font-mono text-slate-800 dark:text-slate-100">{blankCount} câu</div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 rounded-xl p-3 flex items-center gap-2.5">
          <Clock className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Thời gian</div>
            <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-100 truncate">{formattedTime || '--'}</div>
          </div>
        </div>
      </div>

      {/* Nút hành động */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        {onReview && (
          <button
            type="button"
            onClick={onReview}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Xem lại bài làm</span>
          </button>
        )}

        <button
          type="button"
          onClick={onRetry}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Làm lại đề này</span>
        </button>

        <button
          type="button"
          onClick={onHome}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700/60 transition cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Về trang chủ</span>
        </button>
      </div>
    </div>
  );
};
