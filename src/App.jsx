import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "./lottie/Welcome.json"
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster
        duration={3000}
        position='top-center'
        richColors
      />
      <div id='home' className={location.pathname !== '/' ? 'yellow-bg' : 'white-bg'}>
        <div className='welcome-modal'>
          <div className={`left ${location.pathname === '/' ? '' : 'hide-medium-device'}`}>
            <Lottie
              animationData={Welcome}
              loop={true}
            />
          </div>

          <div className='right'>
            <Routes>
              <Route path='/' element={
                <>
                  <h1>Auth Page</h1>
                  <h2>Project 1: Login & Signup Page</h2>
                  <div className='auth-btns'>
                    <Link to='/login'>LOGIN</Link>
                    <Link to='/signup'>SIGNUP</Link>
                  </div>
                </>
              } />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>

          {location.pathname === '/' && (
            <div className='footer'>
              <p>Made with ❤️ by</p>
              <a href="https://github.com/Shubham-Lal">Shubham Lal</a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
