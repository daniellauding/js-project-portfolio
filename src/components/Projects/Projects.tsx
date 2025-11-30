import { Title } from '@/components/Typography'
import { Section } from '@/components/Section'
import { ProjectCard } from './ProjectCard'
import { ProjectsProps } from './Projects.types'
import { ProjectsContainer, TabsContainer } from './Projects.styled'
import { CV } from '@/components/CV'
import { Tag } from '@/components/Tag'
import { useState } from 'react'

export const Projects = ({ data }: ProjectsProps) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'cv'>('projects')
  
  if (!data) return null
  
  const projects = data?.projects
  if (!projects || !Array.isArray(projects) || projects.length === 0) return null

  const getActiveTitle = () => {
    return activeTab === 'projects' ? 'Featured Projects' : 'Experience & Education'
  }

  const titleId = 'projects-title'

  return (
    <Section 
      variant="projects" 
      id="projects"
      gap="0"
      aria-label="Featured projects and experience showcase"
    >
      <TabsContainer className="section__tabs">
        <Tag
          onClick={() => setActiveTab('projects')}
          selected={activeTab === 'projects'}
          role="button"
          aria-pressed={activeTab === 'projects'}
          variant="chip"
          className="section__tab section__tab--projects"
        >
          Featured Projects
        </Tag>
        <Tag
          onClick={() => setActiveTab('cv')}
          selected={activeTab === 'cv'}
          role="button"
          aria-pressed={activeTab === 'cv'}
          variant="chip"
          className="section__tab section__tab--cv"
          >
          Experience & Education
        </Tag>
      </TabsContainer>

      <Title id={titleId} size="huge" as="h2" className={`section__title section__title--${activeTab}`}>
        {getActiveTitle()}
      </Title>

      {activeTab === 'projects' && (
        <ProjectsContainer 
          role="list"
          aria-label={`${projects.length} featured projects`}
          className="section__projects"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.name || index} 
              project={project} 
              aria-label={`Project: ${project.name}`}
            />
          ))}
        </ProjectsContainer>
      )}

      {activeTab === 'cv' && <CV />}
    </Section>
  )
}