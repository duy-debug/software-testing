import React, { useState } from 'react';
import type { Question } from '../types/quiz';
import { useQuizSession } from '../hooks/useQuizSession';
import { scoreQuestion } from '../lib/scoring';
import { QuestionCard } from './QuestionCard';
import { FeedbackBanner } from './FeedbackBanner';
import { ExplanationPanel } from './ExplanationPanel';
import { QuestionNavigator } from './QuestionNavigator';
import { ProgressBar } from './ProgressBar';
import { ScoreSummary } from './ScoreSummary';
import { ConfirmDialog } from './ConfirmDialog';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Home,
  Check,
} from 'lucide-react';

export interface PracticeRunnerProps {
  deckId?: 'review' | 'slides';
  title?: string;
  subtitle?: string;
  badge?: string;
  questions: Question[];
  onExit: () => void;
}

export const PracticeRunner: React.FC<PracticeRunnerProps> = ({
  deckId = 'review',
  title = 'Ôn Tập Kiến Thức Kiểm Thử Phần Mềm',
  subtitle = 'Chế độ ôn tập gồm các câu hỏi trắc nghiệm chuyên sâu. Bạn sẽ nhận phản hồi đúng/sai tức thì và lời giải thích chi tiết ngay sau mỗi câu trả lời.',
  badge = 'Phản hồi tức thì',
  questions,
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
    resetSession,
    scoreResult,
  } = useQuizSession(deckId, 'practice', questions);

  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Màn hình 1: Giới thiệu (idle)
  if (state.status === 'idle') {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fadeIn">
        <div className="p-8 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl text-center">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-lg">
            <BookOpen className="w-8 h-8" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            {title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            {subtitle} (Tổng cộng <strong>{questions.length} câu hỏi</strong>).
          </p>

          <div className="grid grid-cols-2 gap-3 text-left mb-8 max-w-md mx-auto">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
              ⚡ <strong>Phản hồi tức thì:</strong> Biết ngay đáp án đúng/sai
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
              💡 <strong>Lời giải chi tiết:</strong> Dẫn chứng cơ sở lý thuyết
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={startSession}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg shadow-indigo-600/30 transition cursor-pointer"
            >
              Bắt đầu ôn tập
            </button>
            <button
              type="button"
              onClick={onExit}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm border border-slate-700 transition cursor-pointer"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Màn hình 2: Đã nộp / Kết thúc ôn tập (submitted)
  if (state.status === 'submitted' && scoreResult) {
    return (
      <div className="py-8 px-4">
        <ScoreSummary
          scoreResult={scoreResult}
          onRetry={resetSession}
          onHome={onExit}
        />
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="text-center py-12 text-slate-400">
        Không tìm thấy câu hỏi.
      </div>
    );
  }

  const selectedKeys = state.answers[currentQuestion.id] || [];
  const isAnswered = selectedKeys.length > 0;
  const isSingle = currentQuestion.type === 'single';

  // Câu hỏi bị khóa sau khi đã trả lời
  const isQuestionLocked = isAnswered;

  // Đánh giá đúng/sai từng câu
  const currentResult = isAnswered
    ? scoreQuestion(currentQuestion, selectedKeys)
    : null;

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 space-y-6">
      {/* Thanh Header phiên làm bài */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition border border-slate-700/60 cursor-pointer"
            title="Thoát ôn tập"
          >
            <Home className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              <span>{title}</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {badge}
              </span>
            </h1>
            <p className="text-xs text-slate-400">
              Câu {state.currentIndex + 1} / {totalCount}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-64">
          <ProgressBar answered={answeredCount} total={totalCount} />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowSubmitConfirm(true)}
            className="px-4 py-2 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white font-semibold text-xs transition border border-indigo-500/40 cursor-pointer shadow-md"
          >
            Kết thúc ôn tập
          </button>
        </div>
      </div>

      {/* Nội dung chính: 2 cột trên Desktop (QuestionCard bên trái, Navigator bên phải) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3 space-y-4">
          {/* Card câu hỏi */}
          <QuestionCard
            question={currentQuestion}
            selectedKeys={selectedKeys}
            locked={isQuestionLocked}
            revealAnswer={isAnswered}
            onSelect={(key) => selectOption(currentQuestion.id, key, isSingle)}
          />

          {/* Phản hồi ngay & Giải thích sau khi trả lời */}
          {isAnswered && currentResult && (
            <div className="space-y-4">
              <FeedbackBanner isCorrect={currentResult.isCorrect} />
              <ExplanationPanel explanation={currentQuestion.explanation} />
            </div>
          )}

          {/* Thanh điều hướng Trước / Sau */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              disabled={state.currentIndex === 0}
              onClick={prevQuestion}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-200 text-sm font-semibold border border-slate-700 transition flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed"
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
                onClick={submitSession}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-emerald-600/30 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Xem kết quả tổng kết</span>
              </button>
            )}
          </div>
        </div>

        {/* Lưới câu hỏi bên phải */}
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
        title="Thoát chế độ ôn tập?"
        message="Bạn có chắc chắn muốn quay về trang chủ? Tiến độ ôn tập của bạn đã được lưu lại tự động."
        confirmLabel="Về trang chủ"
        cancelLabel="Ở lại"
        onConfirm={() => {
          setShowExitConfirm(false);
          onExit();
        }}
        onCancel={() => setShowExitConfirm(false)}
      />

      {/* Dialog xác nhận kết thúc */}
      <ConfirmDialog
        isOpen={showSubmitConfirm}
        title="Kết thúc phiên ôn tập?"
        message="Bạn có muốn xem bảng tổng kết kết quả ôn tập ngay bây giờ không?"
        confirmLabel="Xem kết quả"
        cancelLabel="Tiếp tục làm"
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
