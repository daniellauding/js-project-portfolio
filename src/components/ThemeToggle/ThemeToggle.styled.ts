import styled from 'styled-components'

export const ThemeToggleWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  .theme-toggle__button {
    // box-shadow: 0 2px 8px var(--card-shadow);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1) rotate(15deg);
      box-shadow: 0 4px 12px var(--card-shadow);
      border-color: ${props => props.theme.colors.primary} !important;
      
      svg {
        color: ${props => props.theme.colors.primary};
      }
    }

    &:active {
      transform: scale(0.95);
    }

    /* Smooth transition for the SVG icon */
    svg {
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;

    .theme-toggle__button {
      width: 44px !important;
      height: 44px !important;
    }
  }
`