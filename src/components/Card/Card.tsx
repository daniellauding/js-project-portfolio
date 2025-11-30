import { Title, Text } from '@/components/Typography'
import { Image } from '@/components/Image'
import { CardProps } from './Card.types'
import { StyledCard, TagsContainer, Tag, LinksContainer } from './Card.styled'

export const Card = ({ image, title, desc, tags, netlify, github, role }: CardProps) => {
  return (
    <StyledCard role={role}>
      {image && <Image src={image} alt="Thumbnail" />}
      {title && <Title>{title}</Title>}
      {desc && <Text>{desc}</Text>}

      {tags && (
        <TagsContainer>
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      )}

      {(netlify || github) && (
        <LinksContainer>
          {netlify && <Text>{netlify}</Text>}
          {github && <Text>{github}</Text>}
        </LinksContainer>
      )}
    </StyledCard>
  )
}