import React from 'react';
import './backgroundtext.scss';
import './particles.scss';
import {BackgroundContainer, BackGroundImg, ContentH1} from './BackgroundElements';
import Particles from 'react-particles-js';
import $ from "jquery";


$(window).scroll(function() {
    var $maxScroll=1000;
    var $maxScale=1;
    var $x=$(window).scrollTop()/400+1;
    var height = $(window).height();
    if($(window).scrollTop()>$maxScroll) $x=$maxScale;
//    $('#first .background').css({transform: 'scale('+$x+','+$x+')'});
    $('.dgKINQ').css({
        transform: 'scale('+$x+','+$x+')',
        'opacity': ((height - ($(window).scrollTop()*1.5)) / height)
    });

    $('.bULZRM').css({'opacity': ((height - ($(window).scrollTop()*2)) / height)});
    $('#tsparticles').css({'opacity': ((height - ($(window).scrollTop()*2)) / height)});
    //   $("#tsparticles").css({
    //     backgroundSize: (100 + scroll/5)  + "%",
    //     top: -(scroll/10)  + "%",
    // });
    // $(".bULZRM").css({
    //     top: -(scroll/10)  + "%",
    // });
  });

const BackgroundSection = () => {
    return (
        <>
        <BackgroundContainer>
            <BackGroundImg/>
             <Particles params={{
                            "particles": {
                                "number": {
                                "value": 50,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                                },
                                "color": {
                                "value": "#ffffff"
                                },
                                "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github",
                                    "width": 100,
                                    "height": 100
                                }
                                },
                                "opacity": {
                                "value": 0.3,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                                },
                                "size": {
                                "value": 5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                                },
                                "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                                },
                                "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                                },
                                "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                    "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                                }
                            },
                            "retina_detect": true,
                            "config_demo": {
                                "hide_card": false,
                                "background_color": "black",
                                "background_image": "",
                                "background_position": "50% 50%",
                                "background_repeat": "no-repeat",
                                "background_size": "cover"
                            }
                         }}/> 

        </BackgroundContainer>
        

            <ContentH1>
            <div class="glitch" data-text="Vaskar Dhakal">Vaskar Dhakal</div>
            <div class="glow">Vaskar Dhakal</div>
            <p class="subtitle">Engineer﹒Gamer﹒Developer</p>
            </ContentH1>
        </>
        
    )
}

export default BackgroundSection;
