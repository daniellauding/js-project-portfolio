import { Section } from '@/components/Section'
import { Text, Title } from '@/components/Typography'
import { TechStackProps } from './TechStack.types'

export const TechStack = ({ data }: TechStackProps) => {
  if (!data) return null

  const { title, desc } = data

  const hasContent = title || desc
  if (!hasContent) return null

  return (
    <Section
      variant="tech"
      layout="full"
      flexDirection="row"
      alignItems="center"
      gap="xxl"
      justifyContent="center"
      id="tech"
      aria-labelledby="tech-heading"
      role="region"
    >
      {title && (
        <Title 
          size="xl" 
          id="tech-heading"
          role="heading" 
          aria-level={2}
          className="techstack__title"
        >
          {title}
        </Title>
      )}

      {desc && (
        <Text 
          size="huge" 
          className="techstack__desc"
          aria-describedby={title ? "tech-heading" : undefined}
        >
          {desc}
        </Text>
      )}
    </Section>
  )
}

