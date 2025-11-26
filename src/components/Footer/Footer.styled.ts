import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: #f8f8f8;
  padding: var(--spacing-xxl) var(--spacing-lg);
  text-align: center;
`

export const FooterTitle = styled.h2`
  font-family: var(--title-font-family);
  font-size: var(--title-xl);
  font-weight: var(--weight-bold);
  color: #0b24f5;
  margin: 0 0 var(--spacing-xl) 0;
`

export const ContactInfo = styled.div`
  margin-bottom: var(--spacing-xl);
`

export const ContactName = styled.h3`
  font-family: var(--title-font-family);
  font-size: var(--title-md);
  font-weight: var(--weight-bold);
  color: #000;
  margin: 0 0 var(--spacing-md) 0;
`

export const ContactDetail = styled.p`
  font-family: var(--text-font-family);
  font-size: var(--text-lg);
  color: #000;
  margin: var(--spacing-sm) 0;
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

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #999;
  transition: color 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    color: #0b24f5;
  }
  
  &:focus {
    outline: 2px solid #0b24f5;
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`

export const FooterMarquee = styled.div`
  background: #ff4575;
  color: white;
  padding: var(--spacing-md) 0;
  overflow: hidden;
  white-space: nowrap;
`

export const MarqueeText = styled.div`
  display: inline-block;
  font-family: var(--text-font-family);
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  animation: marquee 20s linear infinite;
  
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`