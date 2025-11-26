import { ReactNode } from 'react'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge'

export type Weight = 'normal' | 'medium' | 'semibold' | 'bold'

export type Align = 'left' | 'center' | 'right'

export type TypographyProps = {
  children: ReactNode
  size?: Size
  weight?: Weight
  color?: string
  align?: Align
  className?: string
}
