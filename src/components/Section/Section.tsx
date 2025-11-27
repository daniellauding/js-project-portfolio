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
  hideTitle = false,
}: SectionProps) => {
  const bemClass = `section ${variant ? `section--${variant}` : ''} ${layout ? `section--${layout}` : ''}`.trim()
  const fullClassName = `${bemClass} ${className}`.trim()
  const titleId = title ? `${id}-title` : undefined;
  const titleClassName = [
    "section__title",
    variant ? `section__title--${variant}` : "",
    hideTitle ? "sr-only" : ""
  ].join(" ").trim();

  return (
    <StyledSection
      id={id}
      $variant={variant}
      $layout={layout}
      $justifyContent={justifyContent}
      className={fullClassName}
      aria-labelledby={titleId}
    >
      <Container
        $layout={layout}
        $flexDirection={flexDirection}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $gap={gap}
        className={`section__container ${variant ? `section__container--${variant}` : ''}`}
      >
        {title && <Title id={titleId} size="huge" as="h2" className={titleClassName}>{title}</Title>}
        {text && <Text>{text}</Text>}
        {children}
      </Container>
    </StyledSection>
  )
}
