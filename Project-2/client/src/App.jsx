import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<>Login page</>} />
      <Route path='/signup' element={<>Signup page</>} />
    </Routes>
  )
}

export default App
