import { ReactNode } from 'react'

export type GridColumns = '1' | '2' | '3' | '4' | '6' | '12'

export type GridGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type GridProps = {
  children: ReactNode
  columns?: GridColumns
  gap?: GridGap
  className?: string
}

