import React, { useEffect } from 'react';
import '../../App.css';
import {Filler} from './AboutElements';
import './about.css';


const About = () => {


    const aboutMeData = {
        aboutMeTitle: 'About Me',
        line1: "I'm an allrounder MotherFucker in Programming",
        line2: "You Know What I mean, Dont't You?",
        line3: "Stupid Ass piece of shit!!!",
        line4: "I'm cool tho' :D",
        line5: '<---------->'
    }

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
            <div class="wrap">
                    <div class="line">
                        <div class="left">
                            <div class="content">
                            <span class="spanSlow" id='aboutMeTitle'>{aboutMeData.aboutMeTitle}</span>
                            </div>
                        </div>
                        
                        <div class="right">
                            <div class="content">
                            <span class="spanSlow" id='aboutMeTitle'>{aboutMeData.aboutMeTitle}</span>
                            </div>
                        </div>
                    </div>
            </div>

            <br/><br/><br/>




            <div class="wrap">
                <div class="line">
                    <div class="left">
                        <div class="content">
                        <span class="spanSlow">{aboutMeData.line1}</span>
                    </div>
                </div>
                
                <div class="right">
                    <div class="content">
                        <span class="spanSlow">{aboutMeData.line1}  </span>
                    </div>
                </div>
                </div>
                <div class="line">
                    <div class="left">
                        <div class="content">
                                <span class="spanSlow">{aboutMeData.line2}</span>
                        </div>
                </div>
                
                <div class="right">
                    <div class="content">
                        <span class="spanSlow">{aboutMeData.line2}</span>
                    </div>
                </div>
                </div>
                <div class="line">
                    <div class="left">
                        <div class="content">
                        <span class="spanFast">{aboutMeData.line3}</span>
                        </div>
                    </div><div class="right">
                        <div class="content">
                        <span class="spanFast">{aboutMeData.line3}</span>
                        </div>
                    </div>
                    </div>
                    <div class="line">
                        <div class="left">
                        <div class="content">
                            <span class="spanSlow">{aboutMeData.line4}</span>
                        </div>
                        </div><div class="right">
                        <div class="content">
                            <span class="spanSlow">{aboutMeData.line4}</span>
                        </div>
                        </div>
                    </div>  
                    <div class="line">
                        <div class="left">
                        <div class="content">
                            <span class="spanSlow">{aboutMeData.line5}</span>
                        </div>
                        </div><div class="right">
                        <div class="content">
                            <span class="spanSlow">{aboutMeData.line5}</span>
                        </div>
                        </div>
                    </div>
            </div>
             <Filler style={{ 'height':'50vh'}}/>
        </>
    )
}
export default About;