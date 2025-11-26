import { StyledGrid } from './Grid.styled'
import { GridProps } from './Grid.types'

export const Grid = ({ children, columns = '1', gap = 'md', className = '' }: GridProps) => {
  // BEM classname
  const bemClass = `grid grid--${columns}-col grid--gap-${gap}`
  const fullClassName = `${bemClass} ${className}`.trim()

  return (
    <StyledGrid $columns={columns} $gap={gap} className={fullClassName}>
      {children}
    </StyledGrid>
  )
}

