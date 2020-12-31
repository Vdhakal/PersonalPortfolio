import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'
import '../../App.css';
import {Filler} from './AboutElements';
import './about.css';


const About = () => {


    useEffect(() => {
        var text = document.getElementById('text');
        var newDom = '';
        var animationDelay = 6;

        for(let i = 0; i < text.innerText.length; i++)
        {
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        var length = text.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
         
    }, []);

    
    
    return (
        <>
<<<<<<< HEAD
        <Filler /> 
        {/* <div class="next" />  */}
    <AboutSection>
       Fuck About
    </AboutSection>
=======
            <Filler /> 
            {/* <div class="next" />  */}
            <section id="about">
                <div className="center">
                    
                <h1 className='aboutTitle'>
                            ABOUT ME
                        </h1> 
                    <p id="text">
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea,
                            adipisci ab porro.
                        </p>
                    </p>
                </div>
            </section>
>>>>>>> 63476d025b7564fdd451cba70181d56b502a8bdb
        </>
    )
}
export default About;