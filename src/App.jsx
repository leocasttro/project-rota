import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css'
import Game from './pages/Game';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
