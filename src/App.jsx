import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';



function App() {

  
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
