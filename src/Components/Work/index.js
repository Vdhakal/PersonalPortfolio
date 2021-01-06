import React from 'react'
import './styles.scss'
import {WorkContatiner} from './Workelements.js';
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

const Work = () => {
    return (
        <WorkContatiner>
          <div class="cursor"></div>
          <div class="shapes">
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
          </div>
          <div class="Workcontent">
          <div class="h1">Hello there!</div>
          </div>
        </WorkContatiner>
    )
}
export default Work;