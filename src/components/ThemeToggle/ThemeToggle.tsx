import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/Button'
import { ThemeToggleWrapper } from './ThemeToggle.styled'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeToggleWrapper>
      <Button
        onClick={toggleTheme}
        variant="ghost"
        size="md"
        icon={theme === 'light' ? 'Moon' : 'Sun'}
        iconOnly
        ariaLabel={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        className="theme-toggle__button"
      />
    </ThemeToggleWrapper>
  )
}