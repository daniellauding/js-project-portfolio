import { StyledText } from './Typography.styled'
import { TypographyProps } from './Typography.types'

export const Text = ({
  children,
  size = 'md',
  weight = 'normal',
  color,
  align = 'left',
  className = '',
}: TypographyProps) => {
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
    >
      {children}
    </StyledText>
  )
}
