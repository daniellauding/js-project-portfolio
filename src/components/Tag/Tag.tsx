import { TagProps } from './Tag.types';
import { StyledTag } from './Tag.styled';
import { Text } from '@/components/Typography';

export const Tag = ({
  children,
  className,
  onClick,
  selected,
  disabled,
  role,
  ariaDescribedBy,
  ariaPressed,
  ariaSelected,
  variant = 'default',
}: TagProps) => {
  return (
    <StyledTag
      className={className}
      $clickable={!!onClick}
      $selected={selected}
      $disabled={disabled}
      $variant={variant}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      role={role || (onClick ? 'button' : 'listitem')}
      tabIndex={disabled ? -1 : onClick ? 0 : undefined}
      aria-label={typeof children === 'string' ? children : undefined}
      aria-pressed={role === 'button' ? (ariaPressed !== undefined ? ariaPressed : selected) : undefined}
      aria-selected={role === 'tab' ? (ariaSelected !== undefined ? ariaSelected : selected) : undefined}
      aria-disabled={disabled}
      aria-describedby={ariaDescribedBy}
    >
      <Text size="md" weight="medium" className="tag__text">
        {children}
      </Text>
    </StyledTag>
  );
};

export default Tag;