interface ImageProps {
  src: string
  alt?: string
  size?: string | number
  width?: string | number
  height?: string | number
  [key: string]: unknown
  decorative?: boolean;
  loading?: 'lazy' | 'eager';
}

export const Image = ({ src, alt, size, width, height, decorative = false, loading = 'lazy', ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={decorative ? '' : (alt || 'Image')}
      loading={loading}
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
      {...props}
    />
  )
}