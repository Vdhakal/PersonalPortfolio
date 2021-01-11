import React from 'react';
import './social.scss'
import $ from 'jquery'

$(window).ready(function(){
    $('.menu i').click(function(){
      $('.menu a i').toggleClass('hidden show') ;
    })
  })

const Social = () => {
    return (
        <>
        <div className="socialContainerBig">
            <nav className="social" >
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
                <ul>
                    <li><a href="https://www.linkedin.com/in/vaskar-dhakal-150b2a130/" target="_blank">LinkedIn <i class="fa fa-linkedin" style={{background: "hsl(30, 65%, 60%)"}}></i></a></li>
                    <li><a href="https://github.com/Vdhakal" target="_blank">Github <i class="fa fa-github" style={{background: " hsl(135, 35%, 45%)"}}></i></a></li>
                    <li><a href="https://www.instagram.com/apewithanapp/" target="_blank">Instagram <i class="fa fa-instagram" style={{background: "hsl(155, 35%, 60%)"}}></i></a></li>
                    <li ><a href="https://facebook.com/vdhakal10" target="_blank" >Facebook <i class="fa fa-facebook" style={{background: "hsl(50, 75%, 55%)"}}></i></a></li>
                    </ul>
            </nav>
       </div>
       <div className="socialContainerSmall">
            <div class="menu">
                <a href="https://www.linkedin.com/in/vaskar-dhakal-150b2a130/" target="_blank"><i class="fa fa-linkedin hidden" style={{background: "rgb(219 153 87 / 80%)"}} ></i></a>
                <a href="https://github.com/Vdhakal" target="_blank"><i class="fa fa-github hidden" style={{background: " rgb(75 155 95 / 80%)"}}></i></a>
                <a href="https://www.instagram.com/apewithanapp/" target="_blank"><i class="fa fa-instagram hidden" style={{background: "rgb(117 189 159 / 80%)"}}></i></a>
                <a href="https://facebook.com/vdhakal10" target="_blank"><i class="fa fa-facebook hidden" style={{background: "rgb(226 198 54 / 80%)"}}></i></a>
                <i class="fa fa-bars" style={{background: "rgb(53 124 165 / 53%)"}}></i>
            </div>
       </div>
       </>
    )
}

export default Social;
