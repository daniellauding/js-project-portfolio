import styled from 'styled-components'

type StyledProps = {
  $variant?: string
  $size?: string
  $fullWidth?: boolean
  $iconOnly?: boolean
}

export const StyledButton = styled.button<StyledProps>`
  font-family: ${props => props.theme.fonts.text};
  font-weight: ${props => props.theme.weights.semibold};
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  border: 2px solid transparent;

  padding: var(--spacing-sm) var(--spacing-md);
  font-size: ${props => props.theme.textSizes.md};

  /* Small */
  ${props => props.$size === 'sm' && `
    padding: 6px 12px;
    font-size: ${props.theme.textSizes.sm};
  `}

  /* Large */
  ${props => props.$size === 'lg' && `
    padding: 10px 20px;
    font-size: ${props.theme.textSizes.lg};
  `}

  /* Default: primary */
  background: ${props => props.theme.colors.primary};
  color: white;
  border-color: ${props => props.theme.colors.primary};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  /* Secondary variant */
  ${props => props.$variant === 'secondary' && `
    background: #000000;
    color: white;
    border-color: #000000;
  `}

  /* Outline variant */
  ${props => props.$variant === 'outline' && `
    background: transparent;
    color: ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${props.theme.colors.primary};
      color: white;
    }
  `}

  /* Ghost variant */
  ${props => props.$variant === 'ghost' && `
    background: transparent;
    color: ${props.theme.colors.primary};
    border-color: transparent;
    
    &:hover:not(:disabled) {
      background: rgba(11, 36, 245, 0.1);
    }
  `}

  /* Full width */
  ${props => props.$fullWidth && `
    width: 100%;
  `}

  /* Icon only (square shape) */
  ${props => props.$iconOnly && `
    padding: var(--spacing-sm);
    aspect-ratio: 1;
    width: 48px;
    height: 48px;
  `}

  /* === STATES === */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`
