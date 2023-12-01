import React from 'react';
import './layout.css';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    {/* <!-- ***** Header ***** --> */}
    <header className="header" role="banner" id="top">
        <div className="row">
          <nav className="nav" role="navigation">
            <ul className="nav__items">
              <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
              <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
              <li className="nav__item"><a href="#clients" className="nav__link">Clients</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
              <li className="nav__item"><Link to="/contactlist" className="nav__link">Card</Link></li>
            </ul>
          </nav>
        </div>
      </header>
<Outlet/>
</>
  )
}

export default Layout
