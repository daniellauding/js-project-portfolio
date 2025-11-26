import { StyledAvatar } from './Avatar.styled'

type AvatarProps = {
  src?: string
  alt?: string
  width?: string
  height?: string
  [key: string]: unknown
}

const Avatar = ({ src, alt = 'Avatar', width, height, ...props }: AvatarProps) => {
  return <StyledAvatar src={src} alt={alt} width={width} height={height} {...props} />
}

export { Avatar }
