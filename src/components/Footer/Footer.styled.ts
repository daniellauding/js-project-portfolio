import styled from 'styled-components'

export const ContactInfo = styled.div`
  margin-bottom: var(--spacing-xl);
`

export const ContactLink = styled.a`
  color: #000;
  text-decoration: none;
  
  &:hover {
    opacity: 0.7;
  }
  
  &:focus {
    outline: 2px solid #0b24f5;
    outline-offset: 2px;
  }
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  color: #D0D0D0;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const FooterMarquee = styled.div`
  background: #ff4575;
  color: white;
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