import { StyledTitle } from './Typography.styled'
import { TypographyProps } from './Typography.types'

export const Title = ({
  children,
  size = 'md',
  weight = 'bold',
  color,
  align = 'left',
  className = '',
  role,
  as,
  lang,
  'aria-level': ariaLevel,
  ...rest
}: TypographyProps & { role?: string; 'aria-level'?: number }) => {
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
      role={role}
      aria-level={ariaLevel}
      as={as || 'h2'}
      lang={lang}
      {...rest}
    >
      {children}
    </StyledTitle>
  )
}
