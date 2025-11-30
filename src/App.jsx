import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as CustomThemeProvider } from '@/contexts/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import { theme } from '@/theme'
import { Home } from '@/views/Home'

// Lazy load StyleGuide as it's not on the main page
const StyleGuide = lazy(() => import('@/views/StyleGuide').then(module => ({ default: module.StyleGuide })))

export const App = () => {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollIndicator />
          <ThemeToggle />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/styleguide" element={<StyleGuide />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </CustomThemeProvider>
  )
}