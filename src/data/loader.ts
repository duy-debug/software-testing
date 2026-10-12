import type { Question } from '../types/quiz';
import reviewData from './questions.review.json';
import exam1Data from './questions.exam1.json';
import exam2Data from './questions.exam2.json';
import slidesData from './questions.slides.json';

export const reviewQuestions = reviewData as Question[];
export const exam1Questions = exam1Data as Question[];
export const exam2Questions = exam2Data as Question[];
export const slidesQuestions = slidesData as Question[];

export function getQuestionsByDeck(deck: 'review' | 'exam1' | 'exam2' | 'slides'): Question[] {
  switch (deck) {
    case 'review':
      return reviewQuestions;
    case 'exam1':
      return exam1Questions;
    case 'exam2':
      return exam2Questions;
    case 'slides':
      return slidesQuestions;
    default:
      return [];
  }
}
