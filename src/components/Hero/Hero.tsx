import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Image'
import { Text, Title } from '@/components/Typography'
import { useTheme } from '@/contexts/ThemeContext'
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

  const { theme } = useTheme()
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


      <Button
        href="/"
        className="section__logo"
        variant="ghost"
        iconColor="var(--color-primary)"
        icon="Logo"
        size="lg"
        style={{width: '90px', height: '90px', marginLeft: '-16px', marginRight: 'auto' }}
        iconOnly
        ariaLabel="Go to homepage"
      />

      <HeroGrid>
        
        {avatar_url && (
          <HeroAvatar>
              <Avatar
                src={avatar_url}
                alt={name ? `${name}'s profile picture` : 'Profile picture'}
                width="164px"
                height="164px"
                className="section__avatar"
                loading="eager"
                fetchPriority="high"
              />
          </HeroAvatar>
        )}

        {intro && (
          <HeroIntro>
            <Title size="md" as="h3" weight="semibold" className="section__title section__title--intro" color={theme === 'dark' ? '#fff' : '#000'}>
              {intro}
            </Title>
          </HeroIntro>
        )}

        {role && (
          <HeroRole>
            <Title size="xl" as="h3" className="section__title section__title--role">
              {role}
            </Title>
          </HeroRole>
        )}

        {desc && (
          <HeroDesc role="region" aria-label="About">
            {Array.isArray(desc) ? (
              desc.map((p, i) => (
                <Text key={i} weight="normal" size="lg" className="section__desc">
                  {p}
                </Text>
              ))
            ) : (
              <Text size="lg" weight="normal" className="section__desc">
                {desc}
              </Text>
            )}
          </HeroDesc>
        )}
      </HeroGrid>

      <Button
        href="#tech"
        aria-label="Scroll to tech section"
        className="section__scroll--button"
        variant="ghost"
        iconColor={theme === 'dark' ? '#fff' : 'var(--color-secondary)'}
        icon="ArrowDown"
        size="lg"
        iconOnly
      />
      
    </Section>
  )
}
