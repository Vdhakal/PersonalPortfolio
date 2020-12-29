import React from 'react';
import './social.scss'

const Social = () => {
    return (
        <>
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
            <nav className="social" >
                <ul>
                    <li><a href="https://twitter.com/" target="_blank">Twitter <i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://facebook.com/" target="_blank">Facebook <i class="fa fa-facebook"></i></a></li>
                    <li><a href="http://linkedin.com/" target="_blank">LinkedIn <i class="fa fa-linkedin"></i></a></li>
                    <li><a href="http://instagram.com/" target="_blank">Instagram <i class="fa fa-instagram"></i></a></li>
                </ul>
            </nav>
       </>
    )
}

export default Social;
