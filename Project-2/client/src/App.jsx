import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/navbar';
import Home from './pages/home';
import Auth from './pages/auth';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/signup' element={<Auth />} />
      </Routes>

      <Toaster
        duration={3000}
        position='top-center'
        richColors
      />
    </>
  )
}

export default App
