import { useState } from 'react'
import Header from './components/Header'
import './index.css'
import { Outlet } from 'react-router'
import { ThemeContext } from './contexts/useTheme'

const App = () => {
  const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <ThemeContext.Provider value={[isDark,setIsDark]}>
      <Header />
      <Outlet />
    
    </ThemeContext.Provider>
  )
}

export default App