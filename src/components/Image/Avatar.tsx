import { StyledAvatar } from './Avatar.styled'

type AvatarProps = {
  src?: string
  alt?: string
  width?: string
  height?: string
  className?: string
  role?: string
  'aria-label'?: string
  [key: string]: unknown
  decorative?: boolean;
  loading?: 'lazy' | 'eager';
}

const Avatar = ({ src, alt = 'Avatar', width, height, decorative = false, loading = 'lazy', ...props }: AvatarProps) => {
  return <StyledAvatar src={src} alt={decorative ? '' : (alt || 'Image')} width={width} height={height} loading={loading} {...props} />
}

export { Avatar }
