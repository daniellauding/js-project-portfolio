export interface TagProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onRemove?: () => void;
  selected?: boolean;
  disabled?: boolean;
  role?: string;
  ariaDescribedBy?: string;
  ariaPressed?: boolean;
  ariaSelected?: boolean;
  variant?: 'default' | 'chip';
}