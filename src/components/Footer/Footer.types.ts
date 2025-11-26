export interface FooterData {
  name?: string
  title?: string
  phone?: string
  email?: string
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
    instagram?: string
  }
}

export interface FooterProps {
  data?: FooterData
}