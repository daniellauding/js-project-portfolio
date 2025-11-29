import { Title } from '@/components/Typography'
import { Section } from '@/components/Section'
import { ProjectCard } from './ProjectCard'
import { ProjectsProps } from './Projects.types'
import { ProjectsContainer } from './Projects.styled'
import { CV } from '@/components/CV'
import { useState } from 'react'

export const Projects = ({ data }: ProjectsProps) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'cv'>('projects')
  
  if (!data) return null
  
  const projects = data?.projects
  if (!projects || !Array.isArray(projects) || projects.length === 0) return null

  return (
    <Section 
      variant="projects" 
      id="projects"
      aria-label="Featured projects and experience showcase"
    >
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('projects')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: 'none',
            background: activeTab === 'projects' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'projects' ? 'white' : '#333',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'projects' ? '600' : '400',
            transition: 'all 0.2s ease'
          }}
        >
          Featured Projects
        </button>
        <button
          onClick={() => setActiveTab('cv')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: 'none',
            background: activeTab === 'cv' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'cv' ? 'white' : '#333',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: activeTab === 'cv' ? '600' : '400',
            transition: 'all 0.2s ease'
          }}
        >
          Experience & Education
        </button>
      </div>

      {activeTab === 'projects' && (
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
      )}

      {activeTab === 'cv' && <CV />}
    </Section>
  )
}