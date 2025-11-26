import { Title } from '@/components/Typography'
import { Section } from '@/components/Section'
import { ProjectCard } from './ProjectCard'
import { ProjectsProps } from './Projects.types'
import { ProjectsContainer } from './Projects.styled'

export const Projects = ({ data }: ProjectsProps) => {
  if (!data) return null
  
  const projects = data?.projects
  if (!projects || !Array.isArray(projects) || projects.length === 0) return null

  return (
    <Section 
      variant="projects" 
      id="projects"
      aria-label="Featured projects showcase"
    >
      <Title size="xxl">Featured Projects</Title>
      <ProjectsContainer 
        role="list"
        aria-label={`${projects.length} featured projects`}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.name || index} 
            project={project} 
            aria-label={`Project: ${project.name}`}
          />
        ))}
      </ProjectsContainer>
    </Section>
  )
}