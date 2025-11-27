import { Title, Text } from '@/components/Typography'
import { Image } from '@/components/Image'

interface CardProps {
  image?: string
  title?: string
  desc?: string
  tags?: string[]
  netlify?: string
  github?: string
  role?: string
}

export const Card = ({ image, title, desc, tags, netlify, github, role }: CardProps) => {
  return (
    <div role={role}>
      {image && <Image src={image} alt="Thumbnail" />}
      {title && <Title>{title}</Title>}
      {desc && <Text>{desc}</Text>}

      {tags && (
        <div>
          {tags.map(tag => (
            <Text key={tag}>{tag}</Text>
          ))}
        </div>
      )}

      {netlify && <Text>{netlify}</Text>}
      {github && <Text>{github}</Text>}
    </div>
  )
}