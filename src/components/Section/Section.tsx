import { Title, Text } from '@/components/Typography'
import { StyledSection, Container } from './Section.styled'
import { SectionProps } from './Section.types'

export const Section = ({
  children,
  variant,
  layout = 'default',
  flexDirection = 'column',
  alignItems,
  justifyContent,
  gap = 'md',
  title,
  text,
  id,
  className = '',
}: SectionProps) => {
  const bemClass = `section ${variant ? `section--${variant}` : ''} ${layout ? `section--${layout}` : ''}`.trim()
  const fullClassName = `${bemClass} ${className}`.trim()

  return (
    <StyledSection
      id={id}
      $variant={variant}
      $layout={layout}
      $justifyContent={justifyContent}
      className={fullClassName}
    >
      <Container
        $layout={layout}
        $flexDirection={flexDirection}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $gap={gap}
        className={`section__container ${variant ? `section__container--${variant}` : ''}`}
      >
        {title && <Title>{title}</Title>}
        {text && <Text>{text}</Text>}
        {children}
      </Container>
    </StyledSection>
  )
}
