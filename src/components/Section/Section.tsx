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

    // Check if section is already visible on mount (common on mobile)
    const checkInitialVisibility = () => {
      if (!sectionRef.current) return false
      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      // Check if section is in viewport
      return rect.top < viewportHeight && rect.bottom > 0
    }

    const triggerAnimation = (element: HTMLElement) => {
      element.classList.add('animate__animated', `animate__${animationType}`)
      if (animationDelay > 0) {
        element.style.setProperty('--animate-delay', `${animationDelay}s`)
      }
    }

    // If already visible, animate immediately (mobile fallback)
    if (sectionRef.current && checkInitialVisibility()) {
      const timer = setTimeout(() => {
        if (sectionRef.current) {
          triggerAnimation(sectionRef.current)
        }
      }, 150)
      return () => clearTimeout(timer)
    }

    // Set up Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            triggerAnimation(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        // More lenient for mobile - trigger when any part is visible
        threshold: 0,
        // Smaller rootMargin for mobile to trigger earlier
        rootMargin: '0px 0px -30px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [animate, animationType, variant, animationDelay])

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
