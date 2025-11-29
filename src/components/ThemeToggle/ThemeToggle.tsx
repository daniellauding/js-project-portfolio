import { useTheme } from '@/contexts/ThemeContext'
import { ToggleButton, IconWrapper } from './ThemeToggle.styled'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ToggleButton 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <IconWrapper>
        {theme === 'light' ? '🌙' : '☀️'}
      </IconWrapper>
    </ToggleButton>
  )
}