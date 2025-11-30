import { ReactNode, MouseEvent, CSSProperties } from 'react'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary'

export type ButtonTarget = '_blank' | '_self' | '_parent' | '_top'

export type ButtonRel = 'noopener' | 'noreferrer' | 'nofollow' | 'noopener noreferrer'

export interface ButtonProps {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  fullWidth?: boolean
  icon?: ReactNode | string
  iconOnly?: boolean
  target?: ButtonTarget | string
  className?: string
  ariaLabel?: string
  ariaDescribedBy?: string
  loading?: boolean
  rel?: ButtonRel | string
  iconColor?: string
  style?: CSSProperties
}
