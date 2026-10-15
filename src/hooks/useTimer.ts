import { Dispatch, SetStateAction, useEffect } from 'react'

interface QuizDetails {
  totalTime: number
}

const useTimer = (
  timer: number,
  quizDetails: QuizDetails,
  setEndTime: (time: number) => void,
  setTimer: Dispatch<SetStateAction<number>>,
  setShowTimerModal: (value: boolean) => void,
  showResultModal: boolean,
  isPaused: boolean
) => {
  useEffect(() => {
    if (timer <= 0) {
      const timeTaken = quizDetails.totalTime
      setEndTime(timeTaken)
      setShowTimerModal(true)
      setTimer(0)
    }
  }, [timer, quizDetails.totalTime, setEndTime, setShowTimerModal, setTimer])

  useEffect(() => {
    if (showResultModal || isPaused) {
      return
    }

    const countTimer = window.setTimeout(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)

    return () => window.clearTimeout(countTimer)
  }, [timer, setTimer, showResultModal, isPaused])
}

export default useTimer
