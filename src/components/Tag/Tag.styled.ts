import styled from 'styled-components'

export const StyledTag = styled.span<{ 
  $clickable?: boolean;
  $selected?: boolean;
  $disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: ${props => 
    props.$selected ? 'var(--title-color)' : 
    props.$disabled ? 'var(--border-color)' : 
    'var(--card-bg)'
  };
  border: 1px solid ${props => 
    props.$selected ? 'var(--title-color)' : 'var(--border-color)'
  };
  border-radius: 12px;
  line-height: 1;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  opacity: ${props => props.$disabled ? 0.6 : 1};

  /* Text color override for selected/disabled states */
  .tag__text {
    color: ${props => 
      props.$selected ? 'var(--bg-color)' : 
      props.$disabled ? 'var(--text-muted)' : 
      'inherit'
    } !important;
  }

  ${props => (props.$clickable && !props.$disabled) && `
    &:hover {
      background-color: ${
        props.$selected ? 'var(--title-color)' : 'var(--border-color)'
      };
    }
  `}

  ${props => props.$clickable && !props.$disabled && `
    cursor: pointer;
  `}

  ${props => props.$disabled && `
    cursor: not-allowed;
  `}

  &:focus-visible {
    outline: 2px solid var(--title-color);
    outline-offset: 2px;
  }
`