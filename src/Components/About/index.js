import React from 'react'
import '../../App.css'
import {Filler} from './AboutElements';
const About = () => {
    return (
        <>
        <Filler /> 
        {/* <div class="next" />  */}
      <section id="about">
      <div className="row">
         <div className="three columns">
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>sdweqew</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>sadsad</span><br />
						   <span>wqwe<br />
						         sdaasd sadsadsa,21321
                   </span><br />
						   <span>12312</span><br />
                     <span>sadsadwsad</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href='rweqre' className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
        </>
    )
}
export default About;