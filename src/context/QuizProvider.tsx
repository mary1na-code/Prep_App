import { ReactNode, useEffect, useRef, useState } from 'react'
import { quiz } from '../data/QuizQuestions'
import type { Question } from '../data/QuizQuestions'
import {
  QuizContextTypes,
  QuizSession,
  Result,
  ScreenTypes,
} from '../types'
import { QuizContext, initialState } from './QuizContext'

type QuizProviderProps = {
  children: ReactNode
}

const STORAGE_KEY = 'prepora_quiz_session'

const loadSession = (): QuizSession | null => {
  if (typeof window === 'undefined') return null

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY)
    if (!rawValue) return null

    const parsed = JSON.parse(rawValue) as QuizSession
    const validScreen =
      typeof parsed.currentScreen === 'number' &&
      parsed.currentScreen >= ScreenTypes.SplashScreen &&
      parsed.currentScreen <= ScreenTypes.ResultScreen

    if (
      !validScreen ||
      typeof parsed.quizTopic !== 'string' ||
      !Array.isArray(parsed.result) ||
      typeof parsed.timer !== 'number' ||
      typeof parsed.endTime !== 'number' ||
      typeof parsed.activeQuestion !== 'number' ||
      typeof parsed.isAnswered !== 'boolean' ||
      typeof parsed.isTimerPaused !== 'boolean'
    ) {
      return null
    }

    return parsed
  } catch {
    return null
  }
}

const saveSession = (session: QuizSession) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  } catch {
    // ignore write errors
  }
}

const clearSession = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore remove errors
  }
}

export const clearPersistedQuizSession = clearSession

const QuizProvider = ({ children }: QuizProviderProps) => {
  const session = loadSession()

  const [timer, setTimer] = useState<number>(session?.timer ?? initialState.timer)
  const [endTime, setEndTime] = useState<number>(session?.endTime ?? initialState.endTime)
  const [quizTopic, setQuizTopic] = useState<string>(session?.quizTopic ?? initialState.quizTopic)
  const [result, setResult] = useState<Result[]>(session?.result ?? initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    session?.currentScreen ?? initialState.currentScreen
  )
  const [activeQuestion, setActiveQuestion] = useState<number>(
    session?.activeQuestion ?? 0
  )
  const [selectedChoice, setSelectedChoice] = useState<string | null>(
    session?.selectedChoice ?? null
  )
  const [isAnswered, setIsAnswered] = useState<boolean>(
    session?.isAnswered ?? false
  )
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(
    session?.isTimerPaused ?? false
  )

  const [questions, setQuestions] = useState<Question[]>(
    quiz[session?.quizTopic ?? initialState.quizTopic].questions
  )

  const {
    questions: quizQuestions,
    totalQuestions,
    totalTime,
    totalScore,
  } = quiz[quizTopic]

  const hasHydratedRef = useRef(!!session)
  const initialHistoryRef = useRef(true)
  const poppedStateRef = useRef(false)

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic)
  }

  useEffect(() => {
    setQuestions(quizQuestions)

    if (hasHydratedRef.current) {
      hasHydratedRef.current = false
      return
    }

    setTimer(totalTime)
  }, [quizTopic, quizQuestions, totalTime])

  useEffect(() => {
    if (currentScreen === ScreenTypes.SplashScreen) {
      clearSession()
      return
    }

    saveSession({
      currentScreen,
      quizTopic,
      result,
      timer,
      endTime,
      activeQuestion,
      selectedChoice,
      isAnswered,
      isTimerPaused,
    })
  }, [
    currentScreen,
    quizTopic,
    result,
    timer,
    endTime,
    activeQuestion,
    selectedChoice,
    isAnswered,
    isTimerPaused,
  ])

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const screenState = event.state?.screen
      if (typeof screenState !== 'number') {
        return
      }

      const requestedScreen = screenState as ScreenTypes
      if (requestedScreen === currentScreen) {
        return
      }

      poppedStateRef.current = true
      setCurrentScreen(requestedScreen)
    }

    window.history.replaceState({ screen: currentScreen }, '')
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [currentScreen])

  useEffect(() => {
    if (initialHistoryRef.current) {
      initialHistoryRef.current = false
      return
    }

    if (poppedStateRef.current) {
      poppedStateRef.current = false
      return
    }

    if (currentScreen === ScreenTypes.SplashScreen) {
      window.history.replaceState({ screen: currentScreen }, '')
      return
    }

    window.history.pushState({ screen: currentScreen }, '')
  }, [currentScreen])

  const clearQuizSession = () => {
    clearSession()
    setCurrentScreen(ScreenTypes.SplashScreen)
    setQuizTopic(initialState.quizTopic)
    setQuestions(quiz[initialState.quizTopic].questions)
    setResult(initialState.result)
    setTimer(initialState.timer)
    setEndTime(initialState.endTime)
    setActiveQuestion(0)
    setSelectedChoice(null)
    setIsAnswered(false)
    setIsTimerPaused(false)
  }

  const quizDetails = {
    totalQuestions,
    totalScore,
    totalTime,
    selectedQuizTopic: quizTopic,
  }

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
    activeQuestion,
    setActiveQuestion,
    selectedChoice,
    setSelectedChoice,
    isAnswered,
    setIsAnswered,
    isTimerPaused,
    setIsTimerPaused,
    clearQuizSession,
  }

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}

export default QuizProvider
