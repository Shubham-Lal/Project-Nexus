import { useState } from 'react'

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    return (
        <>
            <div className="top-banner">
                <div className="container">
                    <div className="small-bold-text banner-text">🥳 Get free ideas for your business growth and learn why a website is important for your business</div>
                </div>
            </div>


            <nav>
                <div className="container main-nav flex">
                    <a href="#" className="company-logo">
                        <img src="/logo-large.png" alt="company logo" />
                    </a>
                    <div className={`nav-links ${toggleNavbar ? 'active' : ''}`} id="nav-links">
                        <ul className="flex">
                            <li><a href="#" className="hover-link" onClick={() => setToggleNavbar(false)}>Home</a></li>
                            <li><a href="#about" className="hover-link" onClick={() => setToggleNavbar(false)}>About Us</a></li>
                            <li><a href="#service" className="hover-link" onClick={() => setToggleNavbar(false)}>Services</a></li>
                            <li><a href="#contact" className="hover-link" onClick={() => setToggleNavbar(false)}>Contact Us</a></li>
                            <li><a href="#" className="hover-link secondary-button" onClick={() => setToggleNavbar(false)}>Sign in</a></li>
                            <li><a href="#" className="hover-link primary-button" onClick={() => setToggleNavbar(false)}>Sign up</a></li>
                        </ul>
                    </div>
                    <div className="nav-toggle hover-link" id="nav-toggle" onClick={() => setToggleNavbar(!toggleNavbar)}>
                        {toggleNavbar ? (
                            <img src="/assets/asset41.svg" width={18} height={18} alt="" />
                        ) : (
                            <img src="/assets/asset40.svg" width={18} height={18} alt="" />
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar