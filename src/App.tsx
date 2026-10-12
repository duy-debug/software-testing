import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { PracticePage } from './pages/PracticePage';
import { ExamPage } from './pages/ExamPage';

type ViewMode = 'home' | 'practice' | 'exam1' | 'exam2';

export function App() {
  const [view, setView] = useState<ViewMode>('home');

  const handleBackToHome = () => {
    setView('home');
  };

  const handleSelectMode = (mode: 'practice' | 'exam1' | 'exam2') => {
    setView(mode);
  };

  switch (view) {
    case 'practice':
      return <PracticePage onBackToHome={handleBackToHome} />;
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
