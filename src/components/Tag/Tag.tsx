import { TagProps } from './Tag.types';
import { StyledTag } from './Tag.styled';
import { Text } from '@/components/Typography';

export const Tag = ({
  children,
  className,
  onClick,
  selected,
  disabled,
  ariaDescribedBy,
  ariaPressed,
  ariaSelected,
}: TagProps) => {
  return (
    <StyledTag
      className={className}
      $clickable={!!onClick}
      $selected={selected}
      $disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onKeyDown={(e) => {
        if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      role={onClick ? 'button' : 'listitem'}
      tabIndex={disabled ? -1 : onClick ? 0 : undefined}
      aria-label={typeof children === 'string' ? children : undefined}
      aria-pressed={ariaPressed}
      aria-selected={selected}
      aria-disabled={disabled}
      aria-describedby={ariaDescribedBy}
    >
      <Text size="sm" weight="medium" className="tag__text">
        {children}
      </Text>
    </StyledTag>
  );
};

export default Tag;