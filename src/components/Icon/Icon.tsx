import styled from 'styled-components'
import icons from '@/data/icons.json'

const StyledIcon = styled.div<{
  $size?: string
  $customSize?: string
  $color?: string
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${props => {
    if (props.$size === 's') return '16px'
    if (props.$size === 'l') return '32px'
    return '24px'
  }};

  height: ${props => {
    if (props.$size === 's') return '16px'
    if (props.$size === 'l') return '32px'
    return '24px'
  }};

  ${props =>
    props.$customSize &&
    `
    width: ${props.$customSize};
    height: ${props.$customSize};
  `}

  color: ${props => props.$color || 'inherit'};

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

interface IconProps {
  name: string
  size?: 's' | 'm' | 'l'
  customSize?: string
  color?: string
  [key: string]: unknown
  decorative?: boolean;
  title?: string;
  ariaLabel?: string;
}

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
    console.warn(`Icon "${name}" not found`)
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