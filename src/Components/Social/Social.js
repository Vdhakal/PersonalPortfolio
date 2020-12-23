import React from 'react';
import './social.css'

const Social = () => {
    return (
        <>
            <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
            <nav className="social" >
                <ul>
                    <li><a href="https://twitter.com/gian_michelle">Twitter <i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://facebook.com/">Facebook <i class="fa fa-facebook"></i></a></li>
                    <li><a href="http://dribbble.com/gian_michelle">LinkedIn <i class="fa fa-linkedin"></i></a></li>
                    <li><a href="http://behance.net/gianm">Instagram <i class="fa fa-instagram"></i></a></li>
                </ul>
            </nav>
       </>
    )
}

export default Social;
