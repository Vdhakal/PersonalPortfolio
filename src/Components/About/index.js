import React from 'react'
import './aboutStyles.scss'
import {AboutSection, Filler} from './AboutElements.js';
import {gsap} from 'gsap';

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  })
  
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})

const About = () => {
    return (
        <>
        
        <Filler />
        <AboutSection id="about">
        <br/><br/><br/><br/>
          <div class="cursor"></div>
          <div class="shapes">
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
          </div>
          <div class="Aboutcontent">
          <div class="h1">Hello There!<br/><br/>I'm a software developer with over 4 years of experience in designing and programming UI and web. I’m also a game developer. I hold a Bachelors degree in Computer Science with a minor in Mathematics. I live in lovely Monroe, LA. I’m currently open to job position related, but not limited, to software, web and game development.</div>
          
          </div>
          
        <br/><br/><br/><br/><br/><br/>
        </AboutSection>
        </>
    )
}
export default About;