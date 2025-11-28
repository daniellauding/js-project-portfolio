import styled from 'styled-components'

export const HeroGrid = styled.div`
  display: grid;
  width: 100%;
  gap: var(--spacing-xs);

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
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.media.tablet} {
    margin-right: var(--spacing-md);
  }
`

export const HeroIntro = styled.div`
  grid-area: intro;
`

export const HeroRole = styled.div`
  grid-area: role;
  margin-bottom: var(--spacing-md);
`

export const HeroDesc = styled.div`
  grid-area: desc;
  gap: var(--spacing-lg);
  display: flex;
  flex-direction: column;
`


