import { Title, Text } from '@/components/Typography';
import { Image } from '@/components/Image';

export const Card = ({image, title, desc, tags, netlify, github}) => {
  return (
    <div>
      <Image src={image} alt="Thumbnail" />
      <Title>{title}</Title>
      <Text>{desc}</Text>

      {tags && (
        <div>
          {tags.map(tag => <Text key={tag}>{tag}</Text>)}
        </div>
      )}

      {netlify && <Text>{netlify}</Text>}
      {github && <Text>{github}</Text>}
      {/* ...Tags as components  */}
      {/* ...Links as components */}
    </div>
  )
}