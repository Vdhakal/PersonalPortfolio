import React, { useEffect } from 'react';
import {Filler} from './AboutElements';
import './about.css';
import $ from 'jquery';

const About = () => {

    $(window).on("load",function() {
        var $x=$(window).scrollTop()/400+1;
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".linewrap").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).fadeTo(900,1);
            }
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
          });
        }).scroll(); //invoke scroll-handler on page-load
      });
    
    const aboutMeData = [
        {aboutMeTitle: 'About Me'},
        {data: "I'm an allrounder MotherFucker in Programming"},
        {data: "You Know What I mean, Dont't You?"},
        {data: "Stupid Ass piece of shit!!!"},
        {data: "I'm cool tho' :D"},
        {data: '<---------->'}
    ]
        
    

    useEffect(() => {
      
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleWindowResize);

        const spansSlow = document.querySelectorAll('.spanSlow');
        const spansFast = document.querySelectorAll('.spanFast');

        let width = window.innerWidth;

        function handleMouseMove(e) {
        let normalizedPosition = e.pageX / (width/2) - 1;
        let speedSlow = 100 * normalizedPosition;
        let speedFast = 200 * normalizedPosition;
        spansSlow.forEach((span) => {
            span.style.transform = `translate(${speedSlow}px)`;
        });
        spansFast.forEach((span) => {
            span.style.transform = `translate(${speedFast}px)`
        })
        }
        //we need to recalculate width when the window is resized
        function handleWindowResize() {
        width = window.innerWidth;
        }
         
    }, []);

    
    
    return (
        <>
            <Filler /> 
            <div class="linewrap">
                    <div class="line">
                        <div class="left">
                            <div class="content">
                            <span class="spanSlow" id='aboutMeTitle'>{aboutMeData[0].aboutMeTitle}</span>
                            </div>
                        </div>
                        
                        <div class="right">
                            <div class="content">
                            <span class="spanSlow" id='aboutMeTitle'>{aboutMeData[0].aboutMeTitle}</span>
                            </div>
                        </div>
                    </div>
            </div>

            <br/><br/><br/>
            
            <div class="linewrap">

                {aboutMeData.map((line) => (
                    <div class="line">
                    <div class="left">
                        <div class="content">
                            <span class="spanSlow">{line.data}</span>
                        </div>
                    </div>
                
                    <div class="right">
                        <div class="content">
                            <span class="spanSlow">{line.data}  </span>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
             <Filler style={{ 'height':'50vh'}}/>
        </>
    )
}
export default About;