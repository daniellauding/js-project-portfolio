import { Icon } from '@/components/Icon'
import { ProjectCardProps } from './Projects.types'
import {
  ProjectCard as Card,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectActions,
  ProjectLink
} from './Projects.styled'

export const ProjectCard = ({ project, ...props }: ProjectCardProps) => {
  if (!project) return null

  const { name, description, image, tags, netlify, github } = project

  const hasContent = name || description || image
  if (!hasContent) return null

  return (
    <Card role="listitem" {...props}>
      {image && (
        <ProjectImage 
          $backgroundImage={image} 
          role="img"
          aria-label={`Screenshot of ${name || 'project'}`}
        />
      )}
      <ProjectContent>
        {name && (
          <ProjectTitle role="heading" aria-level={3}>
            {name}
          </ProjectTitle>
        )}
        {description && (
          <ProjectDescription aria-describedby={name ? `${name}-description` : undefined}>
            {description}
          </ProjectDescription>
        )}
        {tags && tags.length > 0 && (
          <ProjectTags 
            role="list" 
            aria-label="Technologies used"
          >
            {tags.map((tag, index) => (
              <ProjectTag key={index} role="listitem">
                {tag}
              </ProjectTag>
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