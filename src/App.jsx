import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "./lottie/Welcome.json"
import Login from "./Login";
import Signup from "./Signup";
import Success from "./Success";

function App() {
  const location = useLocation();

  return (
    <div id='home'>
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
            <Route path='/success' element={<Success />} />
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
  )
}

export default App
