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
      gap="huge"
      justifyContent="center"
      id="tech"
    >
      {title && (
        <Title 
          size="xl" 
          as="h2"
          className="section__title section__title--tech"
        >
          {title}
        </Title>
      )}

      {desc && (
        <Text 
          size="huge" 
          className="section__text section__desc section__desc--tech"
          weight='semibold'
        >
          {desc}
        </Text>
      )}
    </Section>
  )
}