import { ReactNode, MouseEvent } from 'react'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

export type ButtonProps = {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  fullWidth?: boolean
  icon?: ReactNode | string
  iconOnly?: boolean
  target?: string
  className?: string
  ariaLabel?: string;
  ariaDescribedBy?: string;
  loading?: boolean;
  rel?: string;
  iconColor?: string;
}
