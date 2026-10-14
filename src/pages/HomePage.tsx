import React from 'react';
import { ModeCard } from '../components/ModeCard';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  BookOpen,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileText,
  ClipboardCheck,
  Code2,
} from 'lucide-react';
import type { ViewMode } from '../App';

export interface HomePageProps {
  onSelectMode: (mode: ViewMode) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectMode }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
        {/* Top Bar with brand & ThemeToggle */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white tracking-wide">
                SOT357 QUIZ
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Kiểm Thử Phần Mềm — ĐH Nha Trang
              </div>
            </div>
          </div>

          <ThemeToggle showLabel={true} />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Học phần SOT357 — ĐH Nha Trang</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-5">
            Hệ Thống Ôn Tập & Thi Thử <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
              Kiểm Thử Phần Mềm
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Bộ ngân hàng <strong>224 câu hỏi trắc nghiệm</strong> chuẩn hóa: gồm 40 câu ôn tập tổng hợp, 24 câu slide bài giảng, <strong>2 đề bài tập thực hành 80 câu</strong> (bộ mới phát triển từ đề giữa kỳ GK), và 2 đề thi thử bấm giờ bám sát chuẩn ISTQB.
          </p>

          {/* Quick stats badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 text-xs font-medium text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>224 Câu hỏi chuẩn hóa (6 bộ đề)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Đối chiếu Ground Truth 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              <span>Chấm điểm All-or-nothing</span>
            </div>
          </div>
        </div>

        {/* Section 1: Luyện Tập & Bài Tập Thực Hành */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-slate-200 dark:border-slate-800/60">
            <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
              Luyện Tập & Bài Tập Thực Hành (Phản Hồi Tức Thì)
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-medium">
              4 Bộ đề • 144 câu
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <ModeCard
              title="Đề Thực Hành 1 (Bộ mới GK)"
              description="40 câu trắc nghiệm thực hành tình huống mới: kiểm thử luồng, Error/Defect/Failure, 7 nguyên lý cốt lõi, chu trình SDLC, các cấp độ & kiểm thử tĩnh."
              badge="Bài tập mới GK"
              questionCount={40}
              duration="Tự do suy nghĩ"
              icon={<ClipboardCheck className="w-6 h-6" />}
              gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
              buttonText="Làm đề thực hành 1"
              onSelect={() => onSelectMode('practice1')}
            />

            <ModeCard
              title="Đề Thực Hành 2 (Bộ mới GK)"
              description="40 câu trắc nghiệm thực hành tình huống mới: Phân vùng tương đương, BVA, Bảng quyết định, Quản lý kiểm thử, CI/CD, API & AI testing."
              badge="Bài tập mới GK"
              questionCount={40}
              duration="Tự do suy nghĩ"
              icon={<Code2 className="w-6 h-6" />}
              gradient="bg-gradient-to-br from-amber-500 to-orange-600"
              buttonText="Làm đề thực hành 2"
              onSelect={() => onSelectMode('practice2')}
            />

            <ModeCard
              title="Ôn Tập Kiến Thức Tổng Hợp"
              description="Làm từng câu không giới hạn thời gian. Nhận phản hồi đúng/sai tức thì kèm cơ sở lý thuyết chi tiết sau mỗi câu."
              badge="Khuyên dùng đầu tiên"
              questionCount={40}
              duration="Tự do suy nghĩ"
              icon={<BookOpen className="w-6 h-6" />}
              gradient="bg-gradient-to-br from-indigo-500 to-blue-600"
              buttonText="Bắt đầu ôn tập"
              onSelect={() => onSelectMode('practice')}
            />

            <ModeCard
              title="Trắc Nghiệm Slide Bài Giảng"
              description="Luyện riêng 24 câu hỏi trắc nghiệm cuối buổi 1, 2, 3 từ slide bài giảng: BVA/EP, Bảng quyết định, Trạng thái & Hộp trắng."
              badge="Bài tập trên lớp"
              questionCount={24}
              duration="3 Buổi học"
              icon={<FileText className="w-6 h-6" />}
              gradient="bg-gradient-to-br from-teal-500 to-emerald-600"
              buttonText="Luyện tập slide"
              onSelect={() => onSelectMode('slides')}
            />
          </div>
        </div>

        {/* Section 2: Đề Thi Thử Bấm Giờ */}
        <div>
          <div className="flex items-center gap-2.5 mb-5 pb-2 border-b border-slate-200 dark:border-slate-800/60">
            <GraduationCap className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
              Phòng Thi Thử Bấm Giờ (Mô Phỏng Đề Thi 40 Phút)
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium">
              2 Bộ đề • 80 câu
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <ModeCard
              title="Đề Thi Thử 1"
              description="Tổng quan kiểm thử, chu trình SDLC, kiểm thử tĩnh & kỹ thuật phát hiện lỗi theo chuẩn ISTQB."
              badge="Thi thử bấm giờ"
              questionCount={40}
              duration="40 phút"
              icon={<GraduationCap className="w-6 h-6" />}
              gradient="bg-gradient-to-br from-purple-500 to-indigo-600"
              buttonText="Làm đề thi thử 1"
              onSelect={() => onSelectMode('exam1')}
            />

            <ModeCard
              title="Đề Thi Thử 2"
              description="Kỹ thuật thiết kế Test Case (Phân vùng tương đương, BVA, Bảng quyết định) & Quy trình kiểm thử nâng cao."
              badge="Thi thử bấm giờ"
              questionCount={40}
              duration="40 phút"
              icon={<Award className="w-6 h-6" />}
              gradient="bg-gradient-to-br from-pink-500 to-purple-600"
              buttonText="Làm đề thi thử 2"
              onSelect={() => onSelectMode('exam2')}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-slate-200 dark:border-slate-800/80 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Hệ thống ôn tập trắc nghiệm Kiểm thử phần mềm (SOT357)</span>
          <span className="text-slate-500 dark:text-slate-400">Kiến trúc chuẩn ReactJS • Single-Owner • 224 Câu hỏi</span>
        </div>
      </footer>
    </div>
  );
};
