import React, { useState, useEffect } from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';

export default function App() {

  return (
    <div>
      <header className="header">
        <div className="header_content">
          <div className="header_logo_container">
            <div className="header_logo_img_container">
              <img src="" alt="Darien Chang Logo" className="header_logo_image"></img>
            </div>
            <span className="header_name"> Darien Chang</span>
          </div>
          <div className="header_main">
            <ul className="header_links">
              <li className="header_link_wrapper">
                <a href="./" className="header_link"> Home </a>
              </li>
              <li className="header_link_wrapper">
                <a href="/#about" className="header_link"> About </a>
              </li>
              <li className="header_link_wrapper">
                <a href="/#project" className="header_link"> Projects </a>
              </li>
              <li className="header_link_wrapper">
                <a href="/#contact" className="header_link"> Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* <Navbar /> */}
      <div className="home" id="home">
        <div className="home_content">
          <h1 className="home_intro">Hey, I'm Darien Chang</h1>
          <div className="home_info">
            <p className="home_text">Whats up?</p>
          </div>
          <div className="home_socials">
            <div className="home_social">
            <a href="https://www.linkedin.com/in/darien-chang-10598a203/" className="home_social_icon_link" rel="noreferrer" target="_blank">
              <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Darien Chang Linkedin Profile"></img>
            </a>
            </div>
            <div>
              <a href="https://github.com/dchang1010" className="home_social_icon_link" rel="noreferrer" target="_blank">
                <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="Darien Chang Github Profile"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}