import './App.css';
import { Routes, Route } from 'react-router-dom';
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
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App
