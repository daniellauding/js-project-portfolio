export interface TagProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onRemove?: () => void;
  selected?: boolean;
  disabled?: boolean;
  ariaDescribedBy?: string;
  ariaPressed?: boolean;
  ariaSelected?: boolean;
}