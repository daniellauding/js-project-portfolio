import styled from 'styled-components'

export const HeroGrid = styled.div`
  display: grid;
  width: 100%;
  gap: var(--spacing-lg);

  grid-template-columns: 1fr;
  grid-template-areas:
    "avatar"
    "intro"
    "role"
    "desc";

  ${props => props.theme.media.tablet} {
    grid-template-columns: minmax(0, auto) 1fr;
    grid-template-areas:
      "intro intro"
      "role role"
      "avatar desc";
  }

  ${props => props.theme.media.desktop} {
    grid-template-columns: minmax(0, auto) 1fr;
    grid-template-areas:
      "intro intro"
      "role role"
      "avatar desc";
  }
`

export const HeroAvatar = styled.div`
  grid-area: avatar;
`

export const HeroIntro = styled.div`
  grid-area: intro;
`

export const HeroRole = styled.div`
  grid-area: role;
`

export const HeroDesc = styled.div`
  grid-area: desc;
`

export const HeroScrollButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 12px;
  margin-top: var(--spacing-lg);
  align-self: center;

  background: transparent;
  color: #ff4575;
  border: 0px;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    transform: translateY(4px);
  }

  &:focus-visible {
    outline: 2px solid #ff4575;
    outline-offset: 2px;
  }
`


