import { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode } from 'react'


export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
  children?: ReactNode
  variant: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>
