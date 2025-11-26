import styled from 'styled-components'

type StyledProps = {
  $columns?: string
  $gap?: string
}

export const StyledGrid = styled.div<StyledProps>`
  display: grid;
  width: 100%;

  gap: var(--spacing-${props => props.$gap || 'md'});

  grid-template-columns: 1fr;

  ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(${props => props.$columns || '1'}, 1fr);
  }
`

