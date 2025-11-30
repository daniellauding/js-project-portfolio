import { FC, useEffect, useRef } from 'react'
import { StyledScrollIndicator } from './ScrollIndicator.styled'
import { ScrollIndicatorProps } from './ScrollIndicator.types'

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({
  className = '',
  color,
  height = '4px',
  position = 'top'
}) => {
  const indicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScrollProgress = () => {
      if (!indicatorRef.current) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

      indicatorRef.current.style.setProperty('--scroll-progress', scrollProgress.toString())
    }

    const supportsScrollTimeline = CSS.supports('animation-timeline: scroll()')
    
    if (!supportsScrollTimeline) {
      window.addEventListener('scroll', updateScrollProgress, { passive: true })
      updateScrollProgress()
    }

    return () => {
      if (!supportsScrollTimeline) {
        window.removeEventListener('scroll', updateScrollProgress, { passive: true })
      }
    }
  }, [])

  return (
    <StyledScrollIndicator
      ref={indicatorRef}
      className={`scroll-indicator ${className}`.trim()}
      $color={color}
      $height={height}
      $position={position}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  )
}