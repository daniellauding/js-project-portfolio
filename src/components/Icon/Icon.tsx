import icons from '@/data/icons.json'
import { IconProps } from './Icon.types'
import { StyledIcon } from './Icon.styled'

export const Icon = ({
  name,
  size = 'm',
  customSize,
  color,
  decorative = false,
  title,
  ariaLabel,
  ...props
}: IconProps) => {
  const iconSvg = (icons as Record<string, string>)[name]

  if (!iconSvg) {
    if (import.meta.env.DEV) {
      console.warn(`Icon "${name}" not found`)
    }
    return null
  }

  return (
    <StyledIcon
      $size={size}
      $customSize={customSize}
      $color={color}
      role={decorative ? 'presentation' : 'img'}
      aria-hidden={decorative}
      aria-label={!decorative ? ariaLabel : undefined}
      title={title}
      {...props}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    />
  )
}