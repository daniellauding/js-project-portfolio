import { StyledText } from './Typography.styled'
import { TypographyProps } from './Typography.types'

export const Text = ({
  children,
  size = 'md',
  weight = 'normal',
  color,
  align = 'left',
  className = '',
  role,
  ariaDescribedby,
  ariaLevel,
  ...rest
}: TypographyProps & { 
  role?: string
}) => {
  // BEM classname
  const bemClass = `text text--${size} text--${weight} text--${align}`
  const fullClassName = `${bemClass} ${className}`.trim()

  return (
    <StyledText
      $size={size}
      $weight={weight}
      $color={color}
      $align={align}
      className={fullClassName}
      role={role}
      aria-level={ariaLevel}
      aria-describedby={ariaDescribedby}
      {...rest}
    >
      {children}
    </StyledText>
  )
}
