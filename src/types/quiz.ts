export type QuestionType = 'single' | 'multiple';

export interface Option {
  key: string;
  text: string;
  isCorrect: boolean;
  note: string | null;
}

export interface Question {
  id: string; // e.g., "review-001", "exam1-040"
  deck: 'review' | 'exam1' | 'exam2';
  number: number;
  type: QuestionType;
  stem: string;
  options: Option[];
  explanation: string;
  answerKey: string;
}

export type QuizMode = 'practice' | 'exam';

export type SessionStatus = 'idle' | 'in_progress' | 'submitted' | 'reviewing';

export interface QuizSessionState {
  deckId: 'review' | 'exam1' | 'exam2';
  mode: QuizMode;
  status: SessionStatus;
  questionIds: string[];
  answers: Record<string, string[]>; // questionId -> selectedKeys[]
  currentIndex: number;
  startedAt: number | null;
  submittedAt: number | null;
}

export interface QuestionScoreResult {
  isCorrect: boolean;
  score: number;
}

export interface SessionScoreResult {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  totalScore: number; // Thang điểm 10 (mỗi câu 0.25đ trên 40 câu)
  percentage: number;
  perQuestion: Record<string, QuestionScoreResult>;
}
