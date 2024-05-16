import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import { useEffect } from 'react';
import { useThemeContext } from './hooks/useThemeContext';



function App() {
  const { theme } = useThemeContext();
    useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
    } else {
      document.body.style.backgroundColor = 'white'
    }
  }, [theme])
  
  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home title="REST Countries | Home" />} />
          <Route path='/Country/:name' element={<Details />} /> 
        </Routes>
      </HashRouter>
  )
}

export default App
