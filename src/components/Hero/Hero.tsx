import { Section } from '@/components/Section'
import { Avatar } from '@/components/Image'
import { Text, Title } from '@/components/Typography'
import { Icon } from '@/components/Icon'
import { HeroProps } from './Hero.types'
import { 
  HeroGrid, 
  HeroAvatar, 
  HeroIntro, 
  HeroRole,
  HeroDesc,
  HeroScrollButton 
} from './Hero.styled'

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null

  const { intro, name, role, desc, avatar_url } = data

  const hasContent = intro || name || role || desc || avatar_url
  if (!hasContent) return null

  return (
    <Section
      variant="hero"
      layout="full"
      id="hero"
      aria-label="Hero section"
      gap="xxl"
      justifyContent="flex-end"
    >
      <HeroGrid>
        {avatar_url && (
          <HeroAvatar>
              <Avatar
                src={avatar_url}
                alt={name ? `${name}'s profile picture` : 'Profile picture'}
                width="164px"
                height="164px"
              />
          </HeroAvatar>
        )}

        {intro && (
          <HeroIntro>
            <Title size="md" weight="medium" className="hero__intro" color="#000000">
              {intro}
            </Title>
          </HeroIntro>
        )}

        {role && (
          <HeroRole>
            <Title size="xl" color="#0B24F5" className="hero__role">
              {role}
            </Title>
          </HeroRole>
        )}

        {desc && (
          <HeroDesc>
            <div role="region" aria-label="About">
              {Array.isArray(desc) ? (
                desc.map((p, i) => (
                  <Text key={i} size="lg" className="hero__desc">
                    {p}
                  </Text>
                ))
              ) : (
                <Text size="lg" className="hero__desc">
                  {desc}
                </Text>
              )}
            </div>
          </HeroDesc>
        )}
      </HeroGrid>

      <HeroScrollButton href="#tech" aria-label="Scroll to tech section">
        <Icon name="ArrowDown" />
      </HeroScrollButton>
    </Section>
  )
}
