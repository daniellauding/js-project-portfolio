import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  gap: ${props => props.gap || '1rem'};
  
  /* Column variants */
  ${props => props.cols && `
    grid-template-columns: repeat(${props.cols}, 1fr);
  `}
  
  ${props => props.responsive && `
    grid-template-columns: repeat(auto-fit, minmax(${props.minWidth || '300px'}, 1fr));
  `}
  
  /* Responsive columns */
  @media (max-width: 768px) {
    grid-template-columns: ${props => props.colsMobile ? `repeat(${props.colsMobile}, 1fr)` : '1fr'};
  }
`

const GridItem = styled.div`
  ${props => props.colSpan && `grid-column: span ${props.colSpan};`}
  ${props => props.rowSpan && `grid-row: span ${props.rowSpan};`}
  ${props => props.colStart && `grid-column-start: ${props.colStart};`}
  ${props => props.colEnd && `grid-column-end: ${props.colEnd};`}
  ${props => props.rowStart && `grid-row-start: ${props.rowStart};`}
  ${props => props.rowEnd && `grid-row-end: ${props.rowEnd};`}
`

export const Grid = ({ 
  cols,
  colsMobile,
  gap,
  responsive,
  minWidth,
  className,
  children 
}) => {
  return (
    <StyledGrid 
      cols={cols}
      colsMobile={colsMobile}
      gap={gap}
      responsive={responsive}
      minWidth={minWidth}
      className={className}
    >
      {children}
    </StyledGrid>
  )
}

Grid.Item = GridItem

// import { Grid } from '@/components/Grid'

// // Fixed columns
// <Grid cols={3} gap="2rem">
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
// </Grid>

// // Responsive grid
// <Grid responsive minWidth="250px">
//   <div>Auto fits</div>
//   <div>Auto fits</div>
// </Grid>

// // Different columns on mobile
// <Grid cols={4} colsMobile={2}>
//   <div>1</div>
//   <div>2</div>
//   <div>3</div>
//   <div>4</div>
// </Grid>

// // With Grid.Item for spanning
// <Grid cols={3}>
//   <Grid.Item colSpan={2}>Takes 2 columns</Grid.Item>
//   <div>Normal</div>
//   <Grid.Item colStart={1} colEnd={4}>Full width</Grid.Item>
//   <Grid.Item rowSpan={2}>Takes 2 rows</Grid.Item>
// </Grid>