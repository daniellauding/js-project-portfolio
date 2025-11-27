import { ReactNode } from 'react'

export type SectionVariant = 'hero' | 'tech' | 'projects' | 'articles' | 'skills' | 'footer'

export type SectionLayout = 'default' | 'container' | 'centered' | 'full'

export type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch'
export type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type Gap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type SectionProps = {
  children: ReactNode
  variant?: SectionVariant
  layout?: SectionLayout
  flexDirection?: FlexDirection
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  gap?: Gap
  title?: string
  text?: string
  id?: string
  className?: string
  role?: 'main' | 'section' | 'aside' | 'article';
  ariaLabelledBy?: string;
  hideTitle?: boolean;  // Hide title visually but keep for screen readers
}
