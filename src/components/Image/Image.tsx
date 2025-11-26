interface ImageProps {
  src: string
  alt?: string
  size?: string | number
  width?: string | number
  height?: string | number
  [key: string]: unknown
}

export const Image = ({ src, alt, size, width, height, ...props }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt || 'Image'}
      width={width || size || 50}
      height={height || size || 50}
      {...props}
    />
  )
}