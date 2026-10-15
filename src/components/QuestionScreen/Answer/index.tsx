import cn from 'classnames'
import { FC } from 'react'

interface AnswerProps {
  index: number
  choice: string
  selected: string | null
  status: string
  onChange: () => void
}

const Answer: FC<AnswerProps> = ({ onChange, index, choice, selected, status }) => {
  const label = String.fromCharCode(65 + index)
  const isSelected = selected === choice

  return (
    <div
      className={cn(
        'text-secondary-text mt-[13px] cursor-pointer rounded-2xl border text-[16px] font-medium sm:mt-[14px] md:mt-[15px] md:text-[17px] md:font-normal lg:mt-[16px] lg:text-[18px]',
        isSelected ? 'border-theme-color bg-selected-answer transition-all duration-200 ease-in' : 'border-border bg-answer-bg',
        status === 'correct' && 'border-success bg-success-light text-success',
        status === 'wrong' && 'border-danger bg-danger-light text-danger',
      )}
      onClick={onChange}
    >
      <label className="flex cursor-pointer p-[14px] md:p-[18px]">
        <span>{label}.</span>
        <input
          name={choice}
          type="radio"
          checked={isSelected}
          readOnly
          className="invisible m-0"
        />
        {choice}
      </label>
    </div>
  )
}

export default Answer
