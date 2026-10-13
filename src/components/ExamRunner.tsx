import React, { useState, useEffect } from 'react';
import type { Question } from '../types/quiz';
import { useQuizSession } from '../hooks/useQuizSession';
import { useTimer } from '../hooks/useTimer';
import { QuestionCard } from './QuestionCard';
import { QuestionNavigator } from './QuestionNavigator';
import { ProgressBar } from './ProgressBar';
import { TimerDisplay } from './TimerDisplay';
import { ScoreSummary } from './ScoreSummary';
import { ReviewList } from './ReviewList';
import { ConfirmDialog } from './ConfirmDialog';
import { ThemeToggle } from './ThemeToggle';
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Send,
  Home,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

export interface ExamRunnerProps {
  deckId: 'exam1' | 'exam2';
  title: string;
  questions: Question[];
  durationSec?: number; // Mặc định 40 phút = 2400 giây (đã chốt #2)
  onExit: () => void;
}

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  deckId,
  title,
  questions,
  durationSec = 2400,
  onExit,
}) => {
  const {
    state,
    currentQuestion,
    answeredMap,
    answeredCount,
    totalCount,
    startSession,
    selectOption,
    jumpToQuestion,
    nextQuestion,
    prevQuestion,
    submitSession,
    startReview,
    resetSession,
    scoreResult,
  } = useQuizSession(deckId, 'exam', questions);

  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showTimeExpiredNotice, setShowTimeExpiredNotice] = useState(false);

  // Hook timer từ Skill 09
  const { secondsLeft, start: startTimer, stop: stopTimer, reset: resetTimer } = useTimer(
    durationSec,
    () => {
      // Callback tự động nộp bài khi hết giờ
      submitSession();
      setShowTimeExpiredNotice(true);
    }
  );

  // Bắt đầu timer khi session chuyển sang in_progress
  useEffect(() => {
    if (state.status === 'in_progress') {
      startTimer();
    } else {
      stopTimer();
    }
  }, [state.status, startTimer, stopTimer]);

  const timeTakenSec = durationSec - secondsLeft;

  const handleStartExam = () => {
    resetTimer(durationSec);
    startSession();
  };

  const handleRetryExam = () => {
    resetTimer(durationSec);
    resetSession();
  };

  // Màn hình 1: Giới thiệu đề thi (idle)
  if (state.status === 'idle') {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fadeIn">
        <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-xl text-center transition-colors duration-200">
          <div className="absolute top-5 right-5">
            <ThemeToggle />
          </div>

          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-purple-500/10 dark:bg-purple-600/20 border border-purple-500/20 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-md">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            Đề thi mô phỏng chuẩn kỳ thi giữa kỳ / kết thúc học phần Kiểm thử phần mềm.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center mb-8 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Số lượng</span>
              <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">{questions.length} câu</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Thời gian</span>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mt-0.5">{Math.floor(durationSec / 60)} phút</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Thang điểm</span>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">10.0 điểm</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 text-left text-xs text-slate-700 dark:text-slate-300 mb-8 max-w-lg mx-auto space-y-2">
            <div>📌 <strong>Quy chế thi:</strong></div>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
              <li>Bạn có thể tự do thay đổi đáp án các câu trước khi bấm Nộp bài.</li>
              <li>Đáp án và lời giải chi tiết sẽ được bảo mật tuyệt đối cho đến khi nộp bài.</li>
              <li>Khi hết 40 phút, hệ thống sẽ tự động khóa và thu bài thi.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleStartExam}
              className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-base shadow-lg shadow-purple-600/30 transition cursor-pointer"
            >
              Bắt đầu làm bài thi
            </button>
            <button
              type="button"
              onClick={onExit}
              className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm border border-slate-300 dark:border-slate-700 transition cursor-pointer"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Màn hình 2: Đã nộp bài (submitted) - Bảng kết quả
  if (state.status === 'submitted' && scoreResult) {
    return (
      <div className="py-8 px-4">
        {showTimeExpiredNotice && (
          <div className="max-w-2xl mx-auto mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-500/50 text-amber-900 dark:text-amber-200 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0" />
            <span className="text-sm font-semibold">
              Đã hết giờ làm bài! Bài thi của bạn đã được hệ thống tự động nộp.
            </span>
          </div>
        )}

        <ScoreSummary
          scoreResult={scoreResult}
          timeTakenSec={timeTakenSec}
          onReview={startReview}
          onRetry={handleRetryExam}
          onHome={onExit}
        />
      </div>
    );
  }

  // Màn hình 3: Xem lại bài làm sau khi nộp (reviewing)
  if (state.status === 'reviewing' && scoreResult) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl transition-colors duration-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Xem lại bài thi: {title}</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Điểm số: <strong className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">{scoreResult.totalScore}/10</strong> ({scoreResult.correctCount}/{totalCount} câu đúng)
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <button
              type="button"
              onClick={handleRetryExam}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Thi lại</span>
            </button>
            <button
              type="button"
              onClick={onExit}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Trang chủ</span>
            </button>
          </div>
        </div>

        <ReviewList
          questions={questions}
          answers={state.answers}
          scoreResult={scoreResult}
        />
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="text-center py-12 text-slate-500 dark:text-slate-400">Không tìm thấy câu hỏi.</div>;
  }

  const selectedKeys = state.answers[currentQuestion.id] || [];
  const isSingle = currentQuestion.type === 'single';

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 space-y-6">
      {/* Thanh Header kỳ thi */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 backdrop-blur-md shadow-md dark:shadow-xl transition-colors duration-200">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition border border-slate-300 dark:border-slate-700/60 cursor-pointer"
            title="Thoát bài thi"
          >
            <Home className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{title}</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Câu {state.currentIndex + 1} / {totalCount}
            </p>
          </div>
        </div>

        {/* Timer hiển thị mm:ss */}
        <div>
          <TimerDisplay secondsLeft={secondsLeft} totalDurationSec={durationSec} />
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setShowSubmitConfirm(true)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 transition flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Nộp bài thi</span>
          </button>
        </div>
      </div>

      {/* Thanh tiến độ */}
      <div className="px-1">
        <ProgressBar answered={answeredCount} total={totalCount} />
      </div>

      {/* Thân bài thi */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3 space-y-4">
          {/* Card câu hỏi: locked = false (được đổi đáp án), revealAnswer = false (bảo mật) */}
          <QuestionCard
            question={currentQuestion}
            selectedKeys={selectedKeys}
            locked={false}
            revealAnswer={false}
            onSelect={(key) => selectOption(currentQuestion.id, key, isSingle)}
          />

          {/* Điều hướng Trước / Sau */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              disabled={state.currentIndex === 0}
              onClick={prevQuestion}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-100 dark:disabled:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold border border-slate-300 dark:border-slate-700 transition flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Câu trước</span>
            </button>

            {state.currentIndex < totalCount - 1 ? (
              <button
                type="button"
                onClick={nextQuestion}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition flex items-center gap-2 shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Nộp bài thi</span>
              </button>
            )}
          </div>
        </div>

        {/* Lưới câu hỏi */}
        <div className="lg:col-span-1">
          <QuestionNavigator
            total={totalCount}
            currentIndex={state.currentIndex}
            questionIds={state.questionIds}
            answeredMap={answeredMap}
            onJump={jumpToQuestion}
          />
        </div>
      </div>

      {/* Dialog xác nhận thoát */}
      <ConfirmDialog
        isOpen={showExitConfirm}
        title="Thoát khỏi bài thi?"
        message="Bạn có chắc chắn muốn rời khỏi phòng thi? Tiến độ làm bài của bạn sẽ được lưu lại để tiếp tục sau."
        confirmLabel="Rời khỏi"
        cancelLabel="Tiếp tục làm bài"
        onConfirm={() => {
          setShowExitConfirm(false);
          onExit();
        }}
        onCancel={() => setShowExitConfirm(false)}
      />

      {/* Dialog xác nhận nộp bài */}
      <ConfirmDialog
        isOpen={showSubmitConfirm}
        title="Xác nhận nộp bài thi?"
        message="Khi nộp bài, toàn bộ đáp án sẽ được khóa và hệ thống tiến hành chấm điểm ngay."
        confirmLabel="Đồng ý nộp bài"
        cancelLabel="Kiểm tra lại"
        unansweredCount={totalCount - answeredCount}
        onConfirm={() => {
          setShowSubmitConfirm(false);
          submitSession();
        }}
        onCancel={() => setShowSubmitConfirm(false)}
      />
    </div>
  );
};
