import { StyledTitle } from './Typography.styled'
import { TypographyProps } from './Typography.types'

export const Title = ({
  children,
  size = 'md',
  weight = 'bold',
  color,
  align = 'left',
  className = '',
}: TypographyProps) => {
  // BEM classname
  const bemClass = `title title--${size} title--${weight} title--${align}`
  const fullClassName = `${bemClass} ${className}`.trim()

  return (
    <StyledTitle
      $size={size}
      $weight={weight}
      $color={color}
      $align={align}
      className={fullClassName}
    >
      {children}
    </StyledTitle>
  )
}
