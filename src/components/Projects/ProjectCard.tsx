import { Icon } from '@/components/Icon'
import { Text, Title } from '@/components/Typography'
import { Tag } from '@/components/Tag/Tag'
import { ProjectCardProps } from './Projects.types'
import {
  ProjectCard as Card,
  ProjectImage,
  StyledImage,
  ProjectContent,
  ProjectTags,
  ProjectActions,
  ProjectLink
} from './Projects.styled'

export const ProjectCard = ({ project, ...props }: ProjectCardProps) => {
  if (!project) return null

  const { name, description, image, tags, netlify, github, date } = project

  const hasContent = name || description || image
  if (!hasContent) return null

  return (
    <Card className="project-card" role="listitem" {...props}>
      {image && (
        <ProjectImage className="project-card__media">
          <StyledImage
            src={image}
            alt={`Screenshot of ${name || 'project'}`}
            className="project-card__image"
          />
        </ProjectImage>
      )}
      <ProjectContent className="project-card__content">
        {name && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <Title size="md" weight="semibold" className="project-card__title" color="#000000" as="h3" style={{ margin: 0 }}>
              {name}
            </Title>
            {date && (
              <span style={{
                padding: '0.25rem 0.625rem',
                fontSize: '0.75rem',
                borderRadius: '12px',
                backgroundColor: '#f0f0f0',
                color: '#666',
                fontWeight: '500'
              }}>
                {date}
              </span>
            )}
          </div>
        )}
        {description && (
           <Text size="lg" weight="light" className="project-card__desc">
            {description}
           </Text>
        )}
        {tags && tags.length > 0 && (
          <ProjectTags 
            role="list" 
            aria-label="Technologies used"
            className="project-card__tags"
          >
            {tags.map((tag, index) => (
              <Tag 
                key={index} 
                className="project-card__tag"
              >
                {tag}
              </Tag>
            ))}
          </ProjectTags>
        )}
        {(netlify || github) && (
          <ProjectActions aria-label="Project links">
            {netlify && (
              <ProjectLink 
                href={netlify} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View live demo of ${name || 'project'} (opens in new tab)`}
              >
                <Icon name="Globe" aria-hidden="true" />
                Live demo
              </ProjectLink>
            )}
            {github && (
              <ProjectLink 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View source code for ${name || 'project'} (opens in new tab)`}
              >
                <Icon name="Github" aria-hidden="true" />
                View the code
              </ProjectLink>
            )}
          </ProjectActions>
        )}
      </ProjectContent>
    </Card>
  )
}