import { Title, Text } from '@/components/Typography';
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/Projects'

export const Projects = ({data, props}) => {
  return (
    <Section fullWidth innerContainer>
      {data.projects.map((p, i) => 
        <ProjectCard
          key={i}
          project={p}
        />
      )}
      <Title>{props?.intro}</Title>
      <Title>{props?.role}</Title>
      <Text>{props?.desc}</Text>
    </Section>
  )
}