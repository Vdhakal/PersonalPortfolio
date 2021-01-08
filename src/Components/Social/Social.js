import React from 'react';
import './social.scss'

const Social = () => {
    return (
        <>
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
            <nav className="social" >
                <ul>
                    <li><a href="https://www.linkedin.com/in/vaskar-dhakal-150b2a130/" target="_blank">LinkedIn <i class="fa fa-linkedin" style={{background: "hsl(30, 65%, 60%)"}}></i></a></li>
                    <li><a href="https://github.com/Vdhakal" target="_blank">Github <i class="fa fa-github" style={{background: " hsl(135, 35%, 45%)"}}></i></a></li>
                    <li><a href="https://www.instagram.com/apewithanapp/" target="_blank">Instagram <i class="fa fa-instagram" style={{background: "hsl(155, 35%, 60%)"}}></i></a></li>
                    <li ><a href="https://facebook.com/vdhakal10" target="_blank" >Facebook <i class="fa fa-facebook" style={{background: "hsl(50, 75%, 55%)"}}></i></a></li>
                    </ul>
            </nav>
       </>
    )
}

export default Social;
