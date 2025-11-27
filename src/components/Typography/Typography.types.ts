import { ReactNode } from 'react'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge'

export type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

export type Align = 'left' | 'center' | 'right'

export type TypographyProps = {
  children: ReactNode
  size?: Size
  weight?: Weight
  color?: string
  align?: Align
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  lang?: string
  id?: string
  ariaDescribedby?: string
  ariaLevel?: number
}
