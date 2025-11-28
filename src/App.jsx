import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/theme'
import { Home } from '@/views/Home'
import { StyleGuide } from '@/views/StyleGuide'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styleguide" element={<StyleGuide />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}