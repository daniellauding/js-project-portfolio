import { FC } from 'react'
import { StyledButton } from './Button.styled'
import { ButtonProps } from './Button.types'
import { Icon } from '@/components/Icon'

export const Button: FC<ButtonProps> = ({
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
  loading = false,
  style,
  rel,
  iconColor
}) => {
  // BEM classname
  const bemClass = `button button--${variant} button--${size} ${fullWidth ? 'button--full' : ''} ${iconOnly ? 'button--icon-only' : ''}`.trim()
  const fullClassName = `${bemClass} ${className}`.trim()

  const renderIcon = () => {
    if (!icon) return null

    // Extract width/height from style prop to pass to icon container
    const iconStyle = style && (style.width || style.height) 
      ? { width: style.width, height: style.height }
      : undefined

    // Calculate icon size for custom sizing
    const getIconSize = () => {
      if (style?.width && style?.height) {
        // Use the smaller of width/height to ensure icon fits
        const width = typeof style.width === 'string' ? parseInt(style.width) : style.width
        const height = typeof style.height === 'string' ? parseInt(style.height) : style.height
        const minSize = Math.min(width, height)
        return `${minSize * 0.6}px` // Use 60% of button size for icon
      }
      return undefined
    }

    if (typeof icon === 'string') {
      return (
        <span
          className="button__icon"
          style={iconStyle}
          aria-label={iconOnly ? ariaLabel || 'Button' : undefined}
          aria-describedby={ariaDescribedBy}
          aria-busy={loading}
        >
          <Icon 
            name={icon} 
            color={iconColor} 
            customSize={getIconSize()}
          />
        </span>
      )
    }

    return (
      <span className="button__icon" style={iconStyle}>
        {icon}
      </span>
    )
  }

  const content = (
    <>
      {renderIcon()}
      {!iconOnly && <span className="button__text">{children}</span>}
    </>
  )

  if (href) {
    // Ensure icon-only links always have accessible text
    const accessibleLabel = iconOnly && !ariaLabel 
      ? (typeof icon === 'string' ? `${icon} link` : 'Link')
      : ariaLabel

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
        rel={rel}
        style={style}
        aria-label={accessibleLabel}
        aria-describedby={ariaDescribedBy}
        aria-busy={loading}
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
      rel={rel}
      style={style}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-busy={loading}
    >
      {content}
    </StyledButton>
  )
}
