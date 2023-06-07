import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css'
import Home from './pages/Home';
import Convert from './pages/Convert';
import Divider from './pages/Divider'
import Game from './pages/Game';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/convert' element={<Convert />}/>
          <Route path='/divider' element={<Divider />}/>
          <Route path='/game' element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
