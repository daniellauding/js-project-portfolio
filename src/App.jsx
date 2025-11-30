import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as CustomThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { theme } from '@/theme'
import { Home } from '@/views/Home'
import { StyleGuide } from '@/views/StyleGuide'

export const App = () => {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollIndicator />
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/styleguide" element={<StyleGuide />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}