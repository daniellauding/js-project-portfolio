import { Text, Title } from '@/components/Typography'
import { Tag } from '@/components/Tag/Tag'
import { Button } from '@/components/Button'
import { useTheme } from '@/contexts/ThemeContext'
import { ProjectCardProps } from './Projects.types'
import {
  ProjectCard as Card,
  ProjectImage,
  StyledImage,
  ProjectContent,
  ProjectTags,
  ProjectActions,
  ProjectDateBadge
} from './Projects.styled'

export const ProjectCard = ({ project, ...props }: ProjectCardProps) => {
  if (!project) return null

  const { theme } = useTheme()

  const { name, description, image, tags, netlify, github, date, link, codepen } = project

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
        {date && (
          <ProjectDateBadge>
            <Text size="sm" weight="normal" className="article-card__date-text">
              {date}
            </Text>
          </ProjectDateBadge>
        )}
        {name && (
          <Title size="md" weight="semibold" className="project-card__title" color={theme === 'dark' ? '#fff' : '#000'} as="h3" style={{ margin: 0 }}>
            {name}
          </Title>
        )}
        {description && (
           <Text size="lg" weight="normal" className="project-card__desc">
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
                role="listitem"
                aria-label={tag}
                className="project-card__tag"
              >
                {tag}
              </Tag>
            ))}
          </ProjectTags>
        )}
        {(netlify || github || link || codepen) && (
          <ProjectActions aria-label="Project links">
            {netlify && (
              <Button
                href={netlify} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="tertiary"
                size="lg"
                icon="Globe"
                ariaLabel={`View live demo of ${name || 'project'} (opens in new tab)`}
                className="project-card__button project-card__button--netlify"
              >
                Live demo
              </Button>
            )}
            {github && (
              <Button
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="tertiary"
                size="lg"
                icon="Github"
                ariaLabel={`View source code for ${name || 'project'} (opens in new tab)`}
                className="project-card__button project-card__button--github"
              >
                View the code
              </Button>
            )}
            {link && (
              <Button
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variant="tertiary"
                size="lg"
                icon="External"
                ariaLabel={`View project: ${name || 'project'} (opens in new tab)`}
              >
                View project
              </Button>
            )}
            {codepen && (
              <Button
                href={codepen}
                target="_blank"
                rel="noopener noreferrer"
                variant="tertiary"
                size="lg"
                icon="External"
              >
                View on CodePen
              </Button>
            )}
          </ProjectActions>
        )}
      </ProjectContent>
    </Card>
  )
}