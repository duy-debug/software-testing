import type { Question, DeckId } from '../types/quiz';
import reviewData from './questions.review.json';
import exam1Data from './questions.exam1.json';
import exam2Data from './questions.exam2.json';
import slidesData from './questions.slides.json';
import practice1Data from './questions.practice1.json';
import practice2Data from './questions.practice2.json';

export const reviewQuestions = reviewData as Question[];
export const exam1Questions = exam1Data as Question[];
export const exam2Questions = exam2Data as Question[];
export const slidesQuestions = slidesData as Question[];
export const practice1Questions = practice1Data as Question[];
export const practice2Questions = practice2Data as Question[];

export function getQuestionsByDeck(deck: DeckId): Question[] {
  switch (deck) {
    case 'review':
      return reviewQuestions;
    case 'exam1':
      return exam1Questions;
    case 'exam2':
      return exam2Questions;
    case 'slides':
      return slidesQuestions;
    case 'practice1':
      return practice1Questions;
    case 'practice2':
      return practice2Questions;
    default:
      return [];
  }
}
