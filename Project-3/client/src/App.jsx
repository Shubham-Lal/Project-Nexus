import './App.css'
import { useState } from 'react'
import About from './About';

function App() {
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


      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>Grow your Business with Nexus Info</h1>
            <p>We develop websites for your business, bringing your vision to life and propelling your business into the digital realm.</p>
            <a href="#" className="primary-button get-started-btn">Get Started</a>
          </div>
          <div className="header-right">
            <img src="/assets/asset2.png" alt="hero image" />
          </div>
        </div>
      </header>


      <section className="companies-section" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="small-bold-text companies-header">We approach every project with a carefully selected platform/technology and assign an appropriate team of designers, solutions specialists, developers, and testers. </div>
          <div className="logos flex">
            <img className="logo" src="/assets/asset3.png" alt="" />
            <img className="logo" src="/assets/asset4.png" alt="" />
            <img className="logo" src="/assets/asset5.png" alt="" />
            <img className="logo" src="/assets/asset6.png" alt="" />
            <img className="logo" src="/assets/asset7.png" alt="" />
            <img className="logo" src="/assets/asset8.svg" alt="" />
            <img className="logo" src="/assets/asset9.png" alt="" />
          </div>
        </div>
      </section>

      <About />

      <section className="features-section" id="service">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">Glimpse of Our Services</h2>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img src="/assets/asset11.svg" alt="" />
              <h3>Card Sorting</h3>
              <p>Discover how people group and label information.</p>
              <a href="#" className="secondary-button">Learn More <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="/assets/asset13.svg" alt="" />
              <h3>Prototype tests</h3>
              <p>Discover how people navigate your Figma prototypes.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="/assets/asset14.svg" alt="" />
              <h3>First click tests</h3>
              <p>Test interaction with first click and navigation tests.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="/assets/asset15.svg" alt="" />
              <h3>Design surveys</h3>
              <p>Get feedback on images, videos or audio files.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="/assets/asset16.svg" alt="" />
              <h3>Preference tests</h3>
              <p>Find out which designs users prefer and why.</p>
              <a href="#" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src="/assets/asset17.svg" alt="" />
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
            <img src="/assets/asset18.png" alt="" />
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
            <img src="/assets/asset21.png" alt="" />
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
            <img src="/assets/asset24.png" alt="" />
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
            <a className="examples-card" href="#" style={{ background: 'linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.8)), url("/assets/asset34.jpeg")', backgroundSize: 'cover' }}>
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

      <section className="contact-us" id="contact">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer>
        <div className="container flex footer-container">
          <a href="#" className="company-logo">
            <img src="/logo-large.png" alt="company logo" />
          </a>
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
          <div className="link-column flex">
            <h4>Methodology</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>
          <div className="link-column flex">
            <h4>Resources</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
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