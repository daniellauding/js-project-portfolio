export interface FooterData {
  name?: string
  title?: string
  phone?: string
  email?: string
  avatar_url?: string
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
    stackoverflow?: string
    instagram?: string
  }
}

export interface FooterProps {
  data?: FooterData
}