import { StyledButton } from './Button.styled'
import { ButtonProps } from './Button.types'
import { Icon } from '@/components/Icon'

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconOnly = false,
  target,
  className = '',
  ariaLabel,
  ariaDescribedBy,
  loading,
}: ButtonProps) => {
  // BEM classname
  const bemClass = `button button--${variant} button--${size} ${fullWidth ? 'button--full' : ''} ${iconOnly ? 'button--icon-only' : ''}`.trim()
  const fullClassName = `${bemClass} ${className}`.trim()

  const renderIcon = () => {
    if (!icon) return null

    if (typeof icon === 'string') {
      return (
        <span
          className="button__icon"
          aria-label={iconOnly ? ariaLabel || 'Button' : undefined}
          aria-describedby={ariaDescribedBy}
          aria-busy={loading}
        >
          <Icon name={icon} />
        </span>
      )
    }

    return <span className="button__icon">{icon}</span>
  }

  const content = (
    <>
      {renderIcon()}
      {!iconOnly && <span className="button__text">{children}</span>}
    </>
  )

  if (href) {
    return (
      <StyledButton
        as="a"
        href={href}
        target={target}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        $iconOnly={iconOnly}
        className={fullClassName}
      >
        {content}
      </StyledButton>
    )
  }

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $iconOnly={iconOnly}
      className={fullClassName}
    >
      {content}
    </StyledButton>
  )
}
