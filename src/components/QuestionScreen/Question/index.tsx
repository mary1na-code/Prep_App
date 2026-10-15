import { FC } from 'react'

import CodeSnippet from '../../ui/CodeSnippet'
import QuizImage from '../../ui/QuizImage'
import Answer from '../Answer'

interface QuestionTypes {
  question: string
  code?: string
  image?: string
  choices: string[]
  selected: string | null
  isAnswered: boolean
  handleAnswerSelection: (choice: string) => void
  getOptionClass: (choice: string) => string
  correctAnswers: string[]
  rationale: string
}

const Question: FC<QuestionTypes> = ({
  question,
  code,
  image,
  choices,
  selected,
  isAnswered,
  handleAnswerSelection,
  getOptionClass,
  correctAnswers,
  rationale,
}) => {
  const userWasCorrect = selected !== null && correctAnswers.includes(selected)

  return (
    <div className="mt-8 mb-10 max-w-full md:max-w-[88%]">
      <h2 className="text-primary-text mb-6 text-[18px] leading-[1.3] font-medium sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
        {question}
      </h2>
      {/* if question contains code snippet then show code */}
      {code && <CodeSnippet code={code} language="javascript" />}
      {/* if question contains an image */}
      {image && <QuizImage image={image} />}
      <div className="max-w-full md:max-w-[78%]">
        {choices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={() => handleAnswerSelection(choice)}
            selected={selected}
            status={getOptionClass(choice)}
          />
        ))}
      </div>
      {isAnswered && (
        <div className={`mt-6 rounded-2xl border p-4 text-base leading-relaxed ${userWasCorrect ? 'rationale-correct' : 'rationale-wrong'}`}>
          <strong>{userWasCorrect ? 'Correct!' : 'Not quite.'}</strong>
          <p className="mt-2">{rationale}</p>
        </div>
      )}
    </div>
  )
}

export default Question
