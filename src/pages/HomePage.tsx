import React from 'react';
import { ModeCard } from '../components/ModeCard';
import { BookOpen, GraduationCap, Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export interface HomePageProps {
  onSelectMode: (mode: 'practice' | 'exam1' | 'exam2') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectMode }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 w-full">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Học phần SOT357 — ĐH Nha Trang</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Hệ Thống Ôn Tập & Thi Thử <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Kiểm Thử Phần Mềm
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Bộ ngân hàng <strong>120 câu hỏi trắc nghiệm</strong> chuẩn hóa, bám sát giáo trình & chuẩn ISTQB Foundation Level. Tối ưu trải nghiệm ôn tập với phản hồi tức thì và đề thi bấm giờ.
          </p>

          {/* Quick stats badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-slate-800/60 text-xs font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>120 Câu hỏi chuẩn hóa</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Đối chiếu Ground Truth 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Chấm điểm All-or-nothing</span>
            </div>
          </div>
        </div>

        {/* 3 Chế độ làm bài (ModeCards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <ModeCard
            title="Ôn Tập Kiến Thức"
            description="Làm từng câu không giới hạn thời gian. Nhận phản hồi đúng/sai tức thì kèm cơ sở lý thuyết chi tiết sau mỗi câu."
            badge="Khuyên dùng đầu tiên"
            questionCount={40}
            duration="Không giới hạn"
            icon={<BookOpen className="w-6 h-6" />}
            gradient="bg-gradient-to-br from-indigo-500 to-blue-600"
            buttonText="Bắt đầu ôn tập"
            onSelect={() => onSelectMode('practice')}
          />

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

      {/* Footer */}
      <footer className="relative border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Hệ thống ôn tập trắc nghiệm Kiểm thử phần mềm (SOT357)</span>
          <span className="text-slate-400">Kiến trúc chuẩn ReactJS • Single-Owner • 0 Lỗi Parse</span>
        </div>
      </footer>
    </div>
  );
};
