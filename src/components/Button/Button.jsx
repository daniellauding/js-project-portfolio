import styled from 'styled-components'

const StyledButton = styled.button`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s;
  
  /* Sizes */
  padding: ${props => {
    if (props.$size === 's') return '0.25rem 0.75rem';
    if (props.$size === 'l') return '0.75rem 2rem';
    return '0.5rem 1rem'; // default 'm'
  }};
  
  /* Variants */
  background: ${props => {
    if (props.$secondary) return 'transparent';
    if (props.$tertiary) return 'transparent';
    return '#000'; // primary
  }};
  
  color: ${props => {
    if (props.$secondary) return '#000';
    if (props.$tertiary) return '#666';
    return '#fff'; // primary
  }};
  
  border: ${props => props.$secondary ? '2px solid #000' : 'none'};
  
  /* Icon only */
  ${props => props.$iconOnly && `
    padding: 0.5rem;
    aspect-ratio: 1;
  `}
  
  &:hover {
    opacity: 0.8;
  }
`

export const Button = ({ 
  children,
  icon,
  iconOnly = false,
  href,
  onClick,
  size = 'm', // s, m, l
  primary = false,
  secondary = false, 
  tertiary = false,
  target,
  ...props 
}) => {
  // Build content
  const content = (
    <>
      {icon && <span>{icon}</span>}
      {!iconOnly && children}
    </>
  )

  // Link or button
  if (href) {
    return (
      <StyledButton
        as="a"
        href={href}
        target={target}
        $size={size}
        $secondary={secondary}
        $tertiary={tertiary}
        $iconOnly={iconOnly}
        {...props}
      >
        {content}
      </StyledButton>
    )
  }

  return (
    <StyledButton
      onClick={onClick}
      $size={size}
      $secondary={secondary}
      $tertiary={tertiary}
      $iconOnly={iconOnly}
      {...props}
    >
      {content}
    </StyledButton>
  )
}