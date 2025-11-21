export const Text = ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <div>
        {children.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    )
  }
  
  return <p>{children}</p>
}