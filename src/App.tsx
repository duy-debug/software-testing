import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { PracticePage } from './pages/PracticePage';
import { SlidesPage } from './pages/SlidesPage';
import { ExamPage } from './pages/ExamPage';

export type ViewMode =
  | 'home'
  | 'practice'
  | 'slides'
  | 'practice1'
  | 'practice2'
  | 'exam1'
  | 'exam2';

export function App() {
  const [view, setView] = useState<ViewMode>('home');

  const handleBackToHome = () => {
    setView('home');
  };

  const handleSelectMode = (mode: ViewMode) => {
    setView(mode);
  };

  switch (view) {
    case 'practice':
      return <PracticePage deckId="review" onBackToHome={handleBackToHome} />;
    case 'slides':
      return <SlidesPage onBackToHome={handleBackToHome} />;
    case 'practice1':
      return <PracticePage deckId="practice1" onBackToHome={handleBackToHome} />;
    case 'practice2':
      return <PracticePage deckId="practice2" onBackToHome={handleBackToHome} />;
    case 'exam1':
      return <ExamPage deckId="exam1" onBackToHome={handleBackToHome} />;
    case 'exam2':
      return <ExamPage deckId="exam2" onBackToHome={handleBackToHome} />;
    case 'home':
    default:
      return <HomePage onSelectMode={handleSelectMode} />;
  }
}

export default App;
