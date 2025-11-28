import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Image'
import { Text, Title } from '@/components/Typography'
import { HeroProps } from './Hero.types'
import { 
  HeroGrid, 
  HeroAvatar, 
  HeroIntro, 
  HeroRole,
  HeroDesc,
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
      title="About me"
      hideTitle={true}
      alignItems="center"
    >
      <HeroGrid>
        {avatar_url && (
          <HeroAvatar>
              <Avatar
                src={avatar_url}
                alt={name ? `${name}'s profile picture` : 'Profile picture'}
                width="164px"
                height="164px"
                className="section__avatar"
              />
          </HeroAvatar>
        )}

        {intro && (
          <HeroIntro>
            <Title size="md" as="h3" weight="medium" className="section__title section__title--intro" color="#000000">
              {intro}
            </Title>
          </HeroIntro>
        )}

        {role && (
          <HeroRole>
            <Title size="xl" as="h3" color="#0B24F5" className="section__title section__title--role">
              {role}
            </Title>
          </HeroRole>
        )}

        {desc && (
          <HeroDesc>
            <div role="region" aria-label="About">
              {Array.isArray(desc) ? (
                desc.map((p, i) => (
                  <Text key={i} size="lg" className="section__desc">
                    {p}
                  </Text>
                ))
              ) : (
                <Text size="lg" className="section__desc">
                  {desc}
                </Text>
              )}
            </div>
          </HeroDesc>
        )}
      </HeroGrid>


      <Button
        href="#tech"
        aria-label="Scroll to tech section"
        className="section__scroll--button"
        variant="ghost"
        icon="ArrowDown"
        size="lg"
        iconOnly
      />
      
    </Section>
  )
}
