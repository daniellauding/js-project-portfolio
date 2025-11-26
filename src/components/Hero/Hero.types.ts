export type HeroData = {
  intro?: string
  name?: string
  role?: string
  desc?: string | string[]
  avatar_url?: string
}

export type HeroProps = {
  data: HeroData
}
