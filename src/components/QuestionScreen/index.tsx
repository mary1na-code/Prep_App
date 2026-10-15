import { FC, useEffect, useState } from 'react'
import { AppLogo, CheckIcon, Next, TimerIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { useTimer } from '../../hooks'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import ModalWrapper from '../ui/ModalWrapper'
import PageCenter from '../ui/PageCenter'
import Question from './Question'
import QuizHeader from './QuizHeader'

const QuestionScreen: FC = () => {
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)

  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
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
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]

  // Guard against undefined if questions are empty or loading
  if (!currentQuestion) {
    return null
  }

  const { question, choices, code, image, correctAnswers, rationale } = currentQuestion

  const getOptionClass = (choice: string) => {
    if (!isAnswered) return ''
    const isCorrectChoice = correctAnswers.includes(choice)
    const wasSelected = selectedChoice === choice
    if (isCorrectChoice) return 'correct'
    if (wasSelected && !isCorrectChoice) return 'wrong'
    return ''
  }

  const onClickNext = () => {
    const isMatch = selectedChoice !== null && correctAnswers.includes(selectedChoice)
    const selectedAnswer = selectedChoice ? [selectedChoice] : []

    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }])

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
      setSelectedChoice(null)
      setIsAnswered(false)
      setIsTimerPaused(false)
    } else {
      const timeTaken = quizDetails.totalTime - timer
      setEndTime(timeTaken)
      setShowResultModal(true)
    }
  }

  const handleAnswerSelection = (choice: string) => {
    if (isAnswered) return
    setSelectedChoice(choice)
    setIsAnswered(true)
  }

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen)
    document.body.style.overflow = 'auto'
  }

  const handlePauseToggle = () => {
    setIsTimerPaused((prev) => !prev)
  }

  const handleBack = () => {
    setActiveQuestion((prev) => Math.max(prev - 1, 0))
    setSelectedChoice(null)
    setIsAnswered(false)
  }

  const cancelToHome = () => {
    clearQuizSession()
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showTimerModal, showResultModal])

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (activeQuestion > 0 || isAnswered) {
        event.preventDefault()
        event.returnValue = 'You will lose your progress if you reload the page.'
      }
    }

    const handleUnload = () => {
      window.localStorage.removeItem('prepora_quiz_session')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('unload', handleUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('unload', handleUnload)
    }
  }, [activeQuestion, isAnswered])

  useTimer(
    timer,
    quizDetails,
    setEndTime,
    setTimer,
    setShowTimerModal,
    showResultModal,
    isTimerPaused,
  )

  return (
    <PageCenter>
      <div className="text-app-logo mt-3 mb-5 text-center md:my-12">
        <AppLogo className="w-[185px] md:w-[270px]" />
      </div>

      <div className="bg-card-bg relative mb-16 min-h-[500px] w-full rounded-sm p-4 pb-20 md:w-[900px] md:px-14 md:pt-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <QuizHeader
            activeQuestion={activeQuestion}
            totalQuestions={quizDetails.totalQuestions}
            timer={timer}
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button
              text={isTimerPaused ? 'Resume' : 'Pause'}
              onClick={handlePauseToggle}
              outline
              bold
            />
          </div>
        </div>

        {/* Question */}
        <Question
          question={question}
          code={code}
          image={image}
          choices={choices}
          selected={selectedChoice}
          isAnswered={isAnswered}
          handleAnswerSelection={handleAnswerSelection}
          getOptionClass={getOptionClass}
          correctAnswers={correctAnswers}
          rationale={rationale}
        />

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col gap-3 rounded-lg border border-border bg-card-bg p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {activeQuestion === 0 ? (
              <Button text="Cancel" onClick={cancelToHome} outline bold />
            ) : (
              <Button text="Back" onClick={handleBack} outline bold />
            )}
          </div>

          <div className="flex justify-end">
            <Button
              text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              onClick={onClickNext}
              icon={<Next />}
              iconPosition="right"
              disabled={!isAnswered}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
  )
}

export default QuestionScreen