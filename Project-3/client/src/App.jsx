import './App.css'
import { useState } from 'react'

function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <>
      <div className="top-banner">
        <div className="container">
          <div className="small-bold-text banner-text">🥳 New to Usability Hub: Open and Closed card sorting</div>
        </div>
      </div>


      <nav>
        <div className="container main-nav flex">
          <a href="#" className="company-logo">
            <img src="./assets/asset 1.png" alt="company logo" />
          </a>
          <div className={`nav-links ${toggleNavbar ? 'active' : ''}`} id="nav-links">
            <ul className="flex">
              <li><a href="#" className="hover-link">Products</a></li>
              <li><a href="#" className="hover-link">Customer</a></li>
              <li><a href="#" className="hover-link">Pricing</a></li>
              <li><a href="#" className="hover-link">Resources</a></li>
              <li><a href="#" className="hover-link secondary-button">Sign in</a></li>
              <li><a href="#" className="hover-link primary-button">Sign up</a></li>
            </ul>
          </div>
          <a href="#" className="nav-toggle hover-link" id="nav-toggle" onClick={() => setToggleNavbar(!toggleNavbar)}>
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </nav>


      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>Design Confidently</h1>
            <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
            <a href="#" className="primary-button get-started-btn">Get Started</a>
          </div>
          <div className="header-right">
            <img src="./assets/asset 2.png" alt="hero image" />
          </div>
        </div>
      </header>


      <section className="companies-section">
        <div className="container">
          <div className="small-bold-text companies-header">The world’s best companies rely on UsabilityHub to make better design decisions.</div>
          <div className="logos flex">
            <img className="logo" src="./assets/asset 3.png" alt="" />
            <img className="logo" src="./assets/asset 4.png" alt="" />
            <img className="logo" src="./assets/asset 5.png" alt="" />
            <img className="logo" src="./assets/asset 6.png" alt="" />
            <img className="logo" src="./assets/asset 7.png" alt="" />
            <img className="logo" src="./assets/asset 8.svg" alt="" />
            <img className="logo" src="./assets/asset 9.png" alt="" />
          </div>
        </div>
      </section>


      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">Your user research Swiss Army knife</h2>
            <a href="#" className="secondary-button">See all features <i className="fa-solid fa-right-long"></i></a>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img src="./assets/asset 11.svg" alt="" />
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#" className="secondary-button">Learn More <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="./assets/asset 13.svg" alt="" />
              <h3>Prototype tests</h3>
              <p>Discover how people navigate your Figma prototypes.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="./assets/asset 14.svg" alt="" />
              <h3>First click tests</h3>
              <p>Test interaction with first click and navigation tests.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="./assets/asset 15.svg" alt="" />
              <h3>Design surveys</h3>
              <p>Get feedback on images, videos or audio files.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="./assets/asset 16.svg" alt="" />
              <h3>Preference tests</h3>
              <p>Find out which designs users prefer and why.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="./assets/asset 17.svg" alt="" />
              <h3>Five second tests</h3>
              <p>Test comprehensibility by measuring first impressions.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
          </div>
        </div>
      </section>


      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src="./assets/asset 18.png" alt="" />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>


      <section className="big-feature-section">
        <div className="container flex big-feature-container" id="second-big-feature">
          <div className="feature-img">
            <img src="./assets/asset 21.png" alt="" />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>


      <section className="big-feature-section">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src="./assets/asset 24.png" alt="" />
          </div>
          <div className="feature-desc flex">
            <h4>Effortless validation for</h4>
            <h3>Design professionals</h3>
            <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
          </div>
        </div>
      </section>


      <section className="examples-section">
        <div className="container">
          <div className="examples-header flex">
            <h2 className="examples-heading-text">One platform, endless possibilities</h2>
            <a href="#" className="secondary-button">See more examples <i className="fa-solid fa-right-long"></i></a>
          </div>
          <div className="examples-area flex">
            <a href="#" className="examples-card">
              <h3 className="card-text">Can user complete a task in my software interface?</h3>
            </a>
            <a className="examples-card" href="#" style={{ background: 'linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.8)), url("./assets/asset\ 34.jpeg")', backgroundSize: 'cover' }}>
              <h3 className="card-text">Can users find important pages on my website?</h3>
            </a>
            <a className="examples-card" href="#">
              <h3 className="card-text">Is my website’s intended audience clear? </h3>
            </a>
            <a className="examples-card" href="#">
              <h3 className="card-text">Do visitors understand what a page is about?</h3>
            </a>
          </div>
        </div>
      </section>


      <section className="cta-section">
        <div className="container flex cta-section-container">
          <h2>Start testing today</h2>
          <p>Take the guesswork out of design decisions</p>
          <a href="#" className="primary-button">Get Started</a>
        </div>
      </section>


      <footer>
        <div className="container flex footer-container">
          <a href="#" className="company-logo">
            <img src="./assets/asset 1.png" alt="company logo" />
          </a>
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">Usability Hub</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
          <div className="link-column flex">
            <h4>Methodology</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">Usability Hub</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
          <div className="link-column flex">
            <h4>Resources</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">Usability Hub</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
        </div>
      </footer>


      <div className="subfooter">
        <div className="container flex subfooter-container">
          <a className="hover-link" href="#">Privacy policy</a>
          <a className="hover-link" href="#">Terms & Condition</a>
          <a className="hover-link" href="#">Security Information</a>
          <a className="hover-link" href="#"><i className="fa-brands fa-facebook"></i></a>
          <a className="hover-link" href="#"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </>
  )
}

export default App