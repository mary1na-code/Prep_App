import { Dispatch, SetStateAction } from 'react'
import { type Question } from '../data/QuizQuestions'

export enum ScreenTypes {
  SplashScreen,
  SignupForm,
  QuizTopicsScreen,
  QuizDetailsScreen,
  QuestionScreen,
  ResultScreen,
}

export interface Result extends Question {
  selectedAnswer: string[]
  isMatch: boolean
}

export type QuizSession = {
  currentScreen: ScreenTypes
  quizTopic: string
  result: Result[]
  timer: number
  endTime: number
  activeQuestion: number
  selectedChoice: string | null
  isAnswered: boolean
  isTimerPaused: boolean
}

export type QuizContextTypes = {
  currentScreen: ScreenTypes
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>
  quizTopic: string
  selectQuizTopic: (type: string) => void
  questions: Question[]
  setQuestions: Dispatch<SetStateAction<Question[]>>
  result: Result[]
  setResult: Dispatch<SetStateAction<Result[]>>
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  endTime: number
  setEndTime: (type: number) => void
  quizDetails: {
    totalQuestions: number
    totalScore: number
    totalTime: number
    selectedQuizTopic: string
  }
  activeQuestion: number
  setActiveQuestion: Dispatch<SetStateAction<number>>
  selectedChoice: string | null
  setSelectedChoice: Dispatch<SetStateAction<string | null>>
  isAnswered: boolean
  setIsAnswered: Dispatch<SetStateAction<boolean>>
  isTimerPaused: boolean
  setIsTimerPaused: Dispatch<SetStateAction<boolean>>
  clearQuizSession: () => void
}
