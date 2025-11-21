export const Image = ({src, alt, size, ...props}) => {
  return (
    <img src={src} alt={alt || "Avatar"} width={size || 50} height={size || 50} {...props} />
  )
}
