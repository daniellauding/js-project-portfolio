import { useEffect, useRef } from 'react'
import { Title, Text } from '@/components/Typography'
import { StyledSection, Container } from './Section.styled'
import { SectionProps } from './Section.types'

export const Section = ({
  children,
  variant,
  layout = 'default',
  flexDirection = 'column',
  alignItems,
  justifyContent,
  gap = 'md',
  title,
  text,
  id,
  className = '',
  hideTitle = false,
  animate = true,
  animationType = 'fadeIn',
  animationDelay = 0,
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    if (!animate || !sectionRef.current) {
      if (sectionRef.current) {
        sectionRef.current.style.opacity = '1'
      }
      return
    }

    if (variant === 'hero' && sectionRef.current) {
      const timer = setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.classList.add('animate__animated', 'animate__fadeIn')
          sectionRef.current.style.setProperty('--animate-delay', `${animationDelay || 0.3}s`)
        }
      }, 100)
      
      return () => clearTimeout(timer)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('animate__animated', `animate__${animationType}`)
            if (animationDelay > 0) {
              entry.target.style.setProperty('--animate-delay', `${animationDelay}s`)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [animate, animationType, variant])

  const bemClass = `section ${variant ? `section--${variant}` : ''} ${layout ? `section--${layout}` : ''}`.trim()
  const fullClassName = `${bemClass} ${className}`.trim()
  const titleId = title ? `${id}-title` : undefined;
  const titleClassName = [
    "section__title",
    variant ? `section__title--${variant}` : "",
    hideTitle ? "sr-only" : ""
  ].join(" ").trim();

  return (
    <StyledSection
      ref={sectionRef}
      id={id}
      $variant={variant}
      $layout={layout}
      $justifyContent={justifyContent}
      className={fullClassName}
      aria-labelledby={titleId}
    >
      <Container
        $layout={layout}
        $flexDirection={flexDirection}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $gap={gap}
        className={`section__container ${variant ? `section__container--${variant}` : ''}`}
      >
        {title && <Title id={titleId} size="huge" as="h2" className={titleClassName}>{title}</Title>}
        {text && <Text>{text}</Text>}
        {children}
      </Container>
    </StyledSection>
  )
}
