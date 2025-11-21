import styled from 'styled-components'
import icons from '@/data/icons.json'

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* Sizes */
  width: ${props => {
    if (props.$size === 's') return '16px';
    if (props.$size === 'l') return '32px';
    return '24px'; // default 'm'
  }};
  
  height: ${props => {
    if (props.$size === 's') return '16px';
    if (props.$size === 'l') return '32px';
    return '24px'; // default 'm'
  }};
  
  /* Custom size */
  ${props => props.$customSize && `
    width: ${props.$customSize};
    height: ${props.$customSize};
  `}
  
  /* Color */
  color: ${props => props.$color || 'inherit'};
  
  /* SVG styling */
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const Icon = ({ 
  name, 
  size = 'm', // s, m, l
  customSize,
  color,
  ...props 
}) => {
  const iconSvg = icons[name]
  
  if (!iconSvg) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  
  return (
    <StyledIcon 
      $size={size}
      $customSize={customSize}
      $color={color}
      {...props}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    />
  )
}