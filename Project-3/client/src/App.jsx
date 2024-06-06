import './App.css'
import { Toaster } from 'sonner';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Toaster
        duration={3000}
        position='top-center'
        richColors
      />

      <Navbar />

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

      <Contact />

      <Footer />
    </>
  )
}

export default App