import styled from 'styled-components'

export const StyledAvatar = styled.img`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '200px'};
  border-radius: 50%;
  object-fit: cover;
`
