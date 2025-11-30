import styled from 'styled-components'

interface StyledScrollIndicatorProps {
  $color?: string
  $height?: string
  $position?: 'top' | 'bottom'
}

export const StyledScrollIndicator = styled.div<StyledScrollIndicatorProps>`
  position: fixed;
  ${props => props.$position === 'bottom' ? 'bottom: 0;' : 'top: 0;'}
  left: 0;
  right: 0;
  height: ${props => props.$height || '4px'};
  background-color: ${props => props.$color || props.theme.colors.primary};
  z-index: 9999;
  transform-origin: 0% 50%;
  
  /* CSS Scroll-driven animation */
  animation: scroll-progress linear;
  animation-timeline: scroll();
  animation-duration: 1ms; /* Required for Firefox */

  @keyframes scroll-progress {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  /* Fallback for browsers that don't support scroll-driven animations */
  @supports not (animation-timeline: scroll()) {
    transform: scaleX(var(--scroll-progress, 0));
    transition: transform 0.1s ease-out;
  }
`