import { useEffect, type ReactNode } from 'react'

import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'

import QuestionScreen from '../QuestionScreen'
import QuizDetailsScreen from '../QuizDetailsScreen'
import QuizTopicsScreen from '../QuizTopicsScreen'
import ResultScreen from '../ResultScreen'
import SplashScreen from '../SplashScreen'

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    if (currentScreen !== ScreenTypes.SplashScreen) {
      return
    } // side effect logic to transition from SplashScreen to QuizTopicsScreen after a delay

    const timeout = setTimeout(() => {
        setCurrentScreen(ScreenTypes. QuizTopicsScreen)
      }, 1000) // This means that currentScreen will always be set to QuizTopicsScreen after 1 second, regardless of the current value of currentScreen

      return () => clearTimeout(timeout) 
        // cleanup function to clear the timeout if the currentScreen changes
  }, [setCurrentScreen, currentScreen] 
        // dependency array to ensure the effect runs when setCurrentScreen or currentScreen changes
    )

  const screenComponents: Partial<Record<ScreenTypes, ReactNode>> = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  }

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />

  return <>{ComponentToRender}</>
}

export default Main
