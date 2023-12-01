import React from 'react';
import './portfolio.css';
import project1 from '../images/project-1.png';
import ronjones from '../images/ronjones.png';
import goldengrid from '../images/goldengrid.png';
import bullseye from '../images/bullseye.png';
import mighty from '../images/mighty-furnitures.png';
import fastlane from '../images/fastlane.png';
import chippy from '../images/chippy.png';
import profile from '../images/aparna.png';
import arrow from '../images/arrow-up.svg';
import { Link } from 'react-router-dom';




const Portfolio= () =>{


return(
<>

  {/* <!-- ***** Header ***** --> */}
  {/* <header className="header" role="banner" id="top">
    <div className="row">
      <nav className="nav" role="navigation">
        <ul className="nav__items">
          <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
          <li className="nav__item"><a href="#clients" className="nav__link">Clients</a></li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header> */}
 

  <main role='main'>

  <section className="aparna" id="aparna">
    <div className="row">
      <div className="header__text-box">
        <div className="header__text">
          <h1 className="heading-primary">
            {/* <!-- Replace the following name with your name --> */}
            <span>Aparna</span>
          </h1>
          {/* <!-- Put a small paragraph about yourself --> */}
          <p>A Web Developer based in Kerala, India.</p>
          <a href="#contact" className="btn btn--pink">Get in touch</a>
        </div>
      </div>
    </div>
  </section>




    {/* <!-- ***** Work ***** --> */}

    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">

          {/* <!-- Each div with the work__box class is a project. --> */}

          <div className="work__box">
            <div className="work__text">
              <h3>Portfolio Template</h3>
              <p>
                A free Open Source Portfolio for anyone to use for free.
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>

           
            </div>
            <div className="work__image-box">
              <img src={project1} className="work__image" alt="Project 1" />
            </div>
          </div> 
           
          </div>
        </div>
      
    </section>

    {/* <!-- ***** Clients ***** --> */}

    <section className="client" id="clients">
      <div className="row">
        <h2>Clients</h2>
        <div className="client__logos">
          {/* <!-- Add logos of the clients or companies you'have worked with. --> */}
          <img src={ronjones} className="client__logo" alt="Company 2" />
          <img src={goldengrid} className="client__logo" alt="Company 3" />
          <img src={bullseye} className="client__logo" alt="Company 1" />
          <img src={mighty} className="client__logo" alt="Company 1" />
          <img src={fastlane} className="client__logo" alt="Company 3" />
          <img src={chippy} className="client__logo" alt="Company 1" />
        </div>
      </div>
    </section>

    {/* <!-- ***** About ***** --> */}

    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            {/* <!-- Replace the below paragraph with info about yourself --> */}
            <p>
              My name is Aparna, and I'm a budding coder based in the beautiful city of Kochi, Kerala. 
              I'm enthusiastic about delving into the realm of programming and exploring the endless possibilities it offers.
               Kerala's vibrant culture and serene surroundings have always inspired me to pursue my passion for technology. 
               I'm eager to learn and grow in this dynamic field, and I'm excited to see where this coding journey takes me. 
               If you have any tips or advice for a newcomer like me, I'd be grateful to hear them.
            </p>
            {/* <!-- Provide a link to your resume --> */}
            <a href="#" className="btn">My Resume</a>
          </div>

          <div className="about__photo-container">
            {/* <!-- Add a nice photo of yourself --> */}
            <img className="about__photo" src={profile} alt="" />
          </div>
        </div>
      </div>
    </section>


  {/* <!-- ***** Contact ***** --> */}

  <section className="contact" id="contact">
    <div className="row">
      <h2>Get in Touch</h2>
      <div className="contact__info">
        <p>
          Are you looking for a fast-performing and user-friendly website to
          represent your product or business? or looking for any kind of
          consultation? or want to ask questions? or have some advice for me
          or just want to say "Hi 👋" in any case feel free to Let me know. I
          will do my best to respond back. 😊 
        </p>
        {/* <!-- Replace the email with yours --> */}

        {/* <Link to="/contact" className="btn">Contact</Link> */}
        <a href="ContactForm.tsx" className="btn">Contact Me</a>
      </div>
    </div>
  </section>
  </main>

  {/* <!-- ***** Footer ***** --> */}

  <footer role="contentinfo" className="footer">
    <div className="row">
      
      <p>
        &copy; 2023 - Template designed & developed by Aparna.
      </p>
      <a href="#top" className="back-to-top" title="Back to Top">
    <img src={arrow} alt="Back to Top" className="back-to-top__image"/>
  </a>
      
    </div>
  </footer>


  {/* <script src="./server.js"></script> */}

</>
)
}

export default Portfolio
