export interface IconProps {
  name: string
  size?: 's' | 'm' | 'l'
  customSize?: string
  color?: string
  [key: string]: unknown
  decorative?: boolean;
  title?: string;
  ariaLabel?: string;
}