import { createElement } from 'react'
import type { ImgHTMLAttributes } from 'react'
import PreporaLogo from '../assets/icons/prepora_logo.png'
import CheckIcon from '../assets/icons/check.svg?react'
import Next from '../assets/icons/next.svg?react'
import Refresh from '../assets/icons/refresh.svg?react'
import TimerIcon from '../assets/icons/timer.svg?react'
import StartIcon from '../assets/icons/start.svg?react'
import Sun from '../assets/icons/sun.svg?react'
import Moon from '../assets/icons/moon.svg?react'

export const AppLogo = (props: ImgHTMLAttributes<HTMLImageElement>) =>
  createElement('img', {
    src: PreporaLogo,
    alt: 'Prepora logo',
    ...props,
  })

export { CheckIcon, Next, Refresh, TimerIcon, StartIcon, Sun, Moon }
