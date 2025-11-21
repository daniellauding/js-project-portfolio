  import { Card } from '@/components/Card'

  export const ProjectCard = ({ project }) => {
    return (
      <Card>
        <Card.Image src={project.image} alt={project.name} />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Tags>{project.tags}</Card.Tags>
        </Card.Body>
        <Card.Actions>
          <a href={project.netlify}>Live</a>
          <a href={project.github}>Code</a>
        </Card.Actions>
      </Card>
    )
  }