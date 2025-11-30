import styled from 'styled-components'

export const StyledTag = styled.span<{ 
  $clickable?: boolean;
  $selected?: boolean;
  $disabled?: boolean;
  $variant?: 'default' | 'chip';
}>`
  display: inline-flex;
  align-items: center;
  padding: ${props => 
    props.$variant === 'chip' ? '0.5rem 1rem' : '0 var(--spacing-xs) 0px var(--spacing-xs)'
  };
  height: ${props => 
    props.$variant === 'chip' ? 'auto' : '24px'
  };
  background-color: ${props => {
    if (props.$variant === 'chip') {
      return props.$selected ? 'var(--chip-bg-active)' : 'var(--chip-bg-default)'
    }
    return props.$selected ? 'var(--tag-bg-color)' : 
           props.$disabled ? 'var(--tag-bg-color)' : 
           'var(--tag-bg-color)'
  }};
  border: ${props => 
    props.$variant === 'chip' ? 'none' : 
    `0px solid ${props.$selected ? 'var(--title-color)' : 'var(--border-color)'}`
  };
  border-radius: ${props => 
    props.$variant === 'chip' ? '20px' : '0px'
  };
  line-height: 1;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  opacity: ${props => props.$disabled ? 0.6 : 1};

  .tag__text {
    color: ${props => {
      if (props.$variant === 'chip') {
        return props.$selected ? 'var(--text-color)' : 'var(--text-color)'
      }
      return props.$selected ? 'var(--tag-text-color)' : 
             props.$disabled ? 'var(--tag-text-color)' : 
             '#fff'
    }} !important;
    font-weight: ${props => 
      props.$variant === 'chip' && props.$selected ? '600' : 
      props.$variant === 'chip' ? '400' : 
      'medium'
    };
    font-size: ${props => 
      props.$variant === 'chip' ? '0.9rem' : 'inherit'
    };
  }

  ${props => (props.$clickable && !props.$disabled) && `
    &:hover {
      background-color: ${
        props.$selected ? 'var(--chip-bg-hover)' : 'var(--chip-bg-hover)'
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