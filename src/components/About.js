import React, { useState, useEffect } from 'react';

export default function About() {

  return (
    <div className="center" id='about'>
      <h2>About Me</h2>
        <div className="about_content">
          <h3>Get to know me!</h3>
          <p>
            Hi, I'm Darien
          </p>
        </div>
        <div className="about_content">
          <h3>mai skillz</h3>
          <div className="skillls">
            <div className="skills_skill">HTML</div>
            <div className="skills_skill">CSS</div>
            <div className="skills_skill">JavaScript</div>
            <div className="skills_skill">React</div>
          </div>
        </div>
    </div>
  )
}