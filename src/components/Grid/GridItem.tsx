import styled from 'styled-components'

type GridItemProps = {
  span?: string
  className?: string
  children: React.ReactNode
}

const StyledGridItem = styled.div<{ $span?: string }>`

  ${props => props.$span === 'full' && `grid-column: 1 / -1;`}
  ${props => props.$span === '2' && `grid-column: span 2;`}
  ${props => props.$span === '3' && `grid-column: span 3;`}
  ${props => props.$span === '4' && `grid-column: span 4;`}
`

export const GridItem = ({ span, className = '', children }: GridItemProps) => {
  const bemClass = `grid__item ${span ? `grid__item--span-${span}` : ''}`
  const fullClassName = `${bemClass} ${className}`.trim()

  return (
    <StyledGridItem $span={span} className={fullClassName}>
      {children}
    </StyledGridItem>
  )
}

