import { Avatar } from '@/components/Image'
import { Title, Text } from '@/components/Typography'
import { Section } from '@/components/Section'
import { FooterProps } from './Footer.types'
import {
  ContactInfo,
  ContactLink,
  SocialLinks,
  FooterMarquee,
  MarqueeTrack,
  MarqueeText
} from './Footer.styled'
import { Button } from '../Button'

export const SOCIAL_ICON_MAP: Record<string, string> = {
  linkedin: "LinkedIn",
  github: "Github",
  twitter: "Twitter",
  instagram: "Instagram",
  stackoverflow: "StackOverflow"
}

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null

  const { name, phone, email, avatar_url, socialLinks } = data

  const hasContent = avatar_url || name || phone || email || socialLinks
  if (!hasContent) return null

  return (
    <>
      <Section
        variant="footer"
        id="footer"
        aria-label="Contact information and social links"
        title="Let's talk"
        alignItems="center"
      >
        
        <Avatar
          src={avatar_url}
          alt={name ? `${name}'s profile picture` : 'Profile picture'}
          width="164px"
          height="164px"
          className="section__avatar"
        />
        
        <ContactInfo className="section__contact">
          {name && (
            <Text size="huge" weight="semibold" align="center" color="#000000" className="section__name">{name}</Text>
          )}

          {phone && (
            <Text size="huge" weight="semibold" align="center" color="#000000" className="section__phone">
              <ContactLink 
                href={`tel:${phone}`}
                aria-label={`Call ${phone}`}
              >
                {phone}
              </ContactLink>
            </Text>
          )}

          {email && (
            <Text size="huge" weight="semibold" align="center" color="#000000" className="section__email">
              <ContactLink 
                href={`mailto:${email}`}
                aria-label={`Email ${email}`}
              >
                {email}
              </ContactLink>  
            </Text>
          )}
        </ContactInfo>

        <SocialLinks className="footer__social" role="list">
          {data.socialLinks && Object.entries(data.socialLinks).map(([name, url]) => {
            if (!url) return null

            const iconName = SOCIAL_ICON_MAP[name]

            return (
              <li key={name} className="footer__social-item footer__social-item--${name}" role="listitem">
                <Button
                  className={`footer__social-button footer__social-button--${name} icon`}
                  href={url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${name} profile (opens in new tab)`}
                  variant="ghost"
                  icon={iconName}
                  size="lg"
                  iconOnly
                />
              </li>
            )
          })}
        </SocialLinks>
      </Section>
      
      <FooterMarquee aria-hidden="true">
        <MarqueeTrack>
          <MarqueeText>
            <Text size="huge" weight="semibold" color="#fff" className="section__misc-text">
              Daniel Lauding • Design Engineer • Daniel Lauding • Design Engineer • Daniel Lauding • Design Engineer • Daniel Lauding • Design Engineer •
            </Text>
          </MarqueeText>
          <MarqueeText>
            <Text size="huge" weight="semibold" color="#fff" className="section__misc-text">
              Daniel Lauding • Design Engineer • Daniel Lauding • Design Engineer • Daniel Lauding • Design Engineer • Daniel Lauding • Design Engineer •
            </Text>
          </MarqueeText>
        </MarqueeTrack>
      </FooterMarquee>
    </>
  )
}