import { Title, Text } from '@/components/Typography';
import styled from 'styled-components'

const StyledSection = styled.div`
  width: 100%;
  background: ${props => props.bgColor || 'transparent'};
  
  ${props => !props.fullWidth && `
    max-width: 1200px;
    margin: 0 auto;
  `}
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  ${props => props.flex && `
    display: flex;
    flex-direction: ${props.direction || 'column'};
    justify-content: ${props.justify || 'flex-start'};
    align-items: ${props.align || 'stretch'};
    gap: ${props.gap || '1rem'};
  `}
`

export const Section = ({ 
  className = '', 
  fullWidth = false,
  innerContainer = false,
  bgColor,
  title,
  text,
  // Layout shortcuts
  row = false,
  column = false,
  center = false,
  spaceBetween = false,
  spaceAround = false,
  // Flex props (if needed for fine control)
  flex = false,
  direction,
  justify,
  align,
  gap,
  children
}) => {
  // Apply shortcuts
  const flexEnabled = flex || row || column
  const flexDirection = direction || (row ? 'row' : 'column')
  const justifyContent = justify || (spaceBetween ? 'space-between' : spaceAround ? 'space-around' : center ? 'center' : 'flex-start')
  const alignItems = align || (center ? 'center' : 'stretch')
  return (
    <StyledSection 
      className={className ? `section ${className}` : 'section'}
      fullWidth={fullWidth}
      bgColor={bgColor}
    >
      {innerContainer ? (
        <Container 
          flex={flexEnabled}
          direction={flexDirection}
          justify={justifyContent}
          align={alignItems}
          gap={gap}
        >
          {title && <Title>{title}</Title>}
          {text && <Text>{text}</Text>}
          {children}
        </Container>
      ) : (
        <>
          {title && <Title>{title}</Title>}
          {text && <Text>{text}</Text>}
          {children}
        </>
      )}
    </StyledSection>
  )
}

// Simple row with space between
// <Section innerContainer row spaceBetween>
//   <Logo />
//   <Navigation />
// </Section>

// // Centered content
// <Section innerContainer center>
//   <Title>Centered</Title>
//   <Text>All centered</Text>
// </Section>

// // Row with centered items
// <Section innerContainer row center>
//   <Avatar />
//   <div>Content</div>
// </Section>

// // Column with space around
// <Section innerContainer column spaceAround>
//   <Card />
//   <Card />
//   <Card />
// </Section>

// // Still can use detailed props if needed
// <Section innerContainer flex direction="row-reverse" justify="flex-end">
//   <Button />
// </Section>