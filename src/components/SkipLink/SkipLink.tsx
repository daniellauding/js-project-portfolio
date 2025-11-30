import { SkipLinkProps } from './SkipLink.types';
import { StyledSkipLink } from './SkipLink.styled';

export const SkipLink = ({ href, children, className }: SkipLinkProps) => {
  const hasValidChildren = children && String(children).trim().length > 0;
  const linkText = hasValidChildren ? children : 'Skip link';
  
  const ariaLabel = hasValidChildren 
    ? String(children).trim() 
    : `Skip to ${href.replace('#', '')}`;

  return (
    <StyledSkipLink 
      href={href} 
      className={`skip-link ${className || ''}`.trim()}
      aria-label={ariaLabel}
    >
      {linkText}
    </StyledSkipLink>
  );
};

export default SkipLink;