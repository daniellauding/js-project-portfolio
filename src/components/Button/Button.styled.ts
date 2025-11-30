import styled from 'styled-components'
import { ButtonVariant, ButtonSize } from './Button.types'

interface StyledButtonProps {
  $variant?: ButtonVariant
  $size?: ButtonSize
  $fullWidth?: boolean
  $iconOnly?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
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
  color: var(--bg-color);
  border-color: ${props => props.theme.colors.primary};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  /* Secondary variant */
  ${props => props.$variant === 'secondary' && `
    background: var(--text-color);
    color: var(--bg-color);
    border-color: var(--text-color);
  `}

  /* Outline variant */
  ${props => props.$variant === 'outline' && `
    background: transparent;
    color: ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};
    
    &:hover:not(:disabled) {
      background: ${props.theme.colors.primary};
      color: var(--bg-color);
    }
  `}

  /* Ghost variant */
  ${props => props.$variant === 'ghost' && `
    background: transparent;
    color: ${props.theme.colors.primary};
    border-color: transparent;
    
    &:hover:not(:disabled) {
      background: var(--card-shadow);
    }
  `}

  /* Tertiary variant */
  ${props => props.$variant === 'tertiary' && `
    background: var(--color-tertiary);
    color: var(--text-color);
    border-color: transparent;
    border-radius: 999px;
    
    [data-theme="dark"] & {
      background: ${props.theme.colors.primary};
      color: #fff;
      svg {
        color: #fff;
      }
    }
    
    &:hover:not(:disabled) {
      background: var(--color-primary);
      color: #fff;
      svg {
        color: #fff;
      }
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
    border-radius: 999px;
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

  /* === ICON STYLING === */
  .button__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    /* Icon should follow button height for height, and maintain aspect ratio */
    svg, img {
      width: auto;
      height: 1em; /* Follow text line-height */
      max-width: 100%;
      max-height: 100%;
    }

    /* When custom width/height is set via style prop, let icon fill the container */
    &[style*="width"], &[style*="height"] {
      width: 100%;
      height: 100%;
      
      svg, img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  /* Icon-only buttons - icon fills the button */
  ${props => props.$iconOnly && `
    .button__icon {
      width: 100%;
      height: 100%;
      
      svg, img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  `}
`
