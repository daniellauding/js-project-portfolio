import styled from 'styled-components'

type StyledProps = {
  $size?: string
  $weight?: string
  $color?: string
  $align?: string
}

export const StyledText = styled.p<StyledProps>`
  font-family: var(--text-font-family);
  font-size: var(--text-${props => props.$size || 'md'});
  font-weight: var(--weight-${props => props.$weight || 'normal'});
  /* Use !important when color prop is provided to override Section variant styles */
  color: ${props => (props.$color ? `${props.$color} !important` : 'var(--text-color)')};
  text-align: ${props => props.$align || 'left'};
  line-height: 1.6;
  margin: 0;
`

export const StyledTitle = styled.h1<StyledProps>`
  font-family: var(--title-font-family);
  font-size: var(--title-${props => props.$size || 'md'});
  font-weight: var(--weight-${props => props.$weight || 'bold'});
  /* Use !important when color prop is provided to override Section variant styles */
  color: ${props => (props.$color ? `${props.$color} !important` : 'var(--title-color)')};
  text-align: ${props => props.$align || 'left'};
  line-height: 1.2;
  margin: 0;

  @media (max-width: 768px) {
    font-size: calc(var(--title-${props => props.$size || 'md'}) * 0.75);
  }
`
