import styled from 'styled-components'

export const ContactInfo = styled.div`
  margin-bottom: var(--spacing-xl);
`

export const ContactLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  
  &:hover {
    opacity: 0.7;
  }
  
  &:focus {
    outline: 2px solid var(--title-color);
    outline-offset: 2px;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  color: var(--color-icon);
  list-style: none;
  margin: 0;
  padding: 0;
`

export const FooterMarquee = styled.div`
  background: var(--bg-marquee);
  color: var(--bg-color);
  padding: var(--spacing-md) 0;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`

export const MarqueeTrack = styled.div`
  display: flex;
  animation: marquee 30s linear infinite;
  
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`

export const MarqueeText = styled.div`
  display: inline-block;
  font-family: var(--text-font-family);
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  padding-right: 50px;
  flex-shrink: 0;
`