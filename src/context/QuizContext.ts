import { createContext, useContext } from 'react'
import { QuizContextTypes, ScreenTypes } from '../types'

export const initialState: QuizContextTypes = {
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: () => {},
  quizTopic: 'GST 112',
  selectQuizTopic: () => {},
  questions: [],
  setQuestions: () => {},
  result: [],
  setResult: () => {},
  timer: 15,
  setTimer: () => {},
  endTime: 0,
  setEndTime: () => {},
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: 'GST 112',
  },
  activeQuestion: 0,
  setActiveQuestion: () => {},
  selectedChoice: null,
  setSelectedChoice: () => {},
  isAnswered: false,
  setIsAnswered: () => {},
  isTimerPaused: false,
  setIsTimerPaused: () => {},
  clearQuizSession: () => {},
}

export const QuizContext = createContext<QuizContextTypes>(initialState)

export function useQuiz() {
  return useContext(QuizContext)
}
