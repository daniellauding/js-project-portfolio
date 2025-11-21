import { Title, Text } from '@/components/Typography';
import { Avatar } from '@/components/Image';
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

export const Header = (props) => {
  return (
    <Section fullWidth innerContainer>
      <Avatar src={props.avatar_url} alt="Profile picture" />
      <Title>{props.intro}</Title>
      <Title>{props.role}</Title>
      <Text>{props.desc}</Text>
      <Button icon={<Icon name="ArrowDown" />} iconOnly />
    </Section>
  )
}