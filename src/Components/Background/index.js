import React from 'react';
import './backgroundtext.css';
import {BackgroundContainer, BackgroundBg, VideoBg, Content} from './BackgroundElements';

const BackgroundSection = () => {
    return (
        <BackgroundContainer>
            <BackgroundBg>
                {/* <VideoBg autoplay loop muted src={Video} type='video/mp4' />  */}
           </BackgroundBg>
               <h1 data-splitting>
                   Vaskar Dhakal
               </h1>
        </BackgroundContainer>
    )
}

export default BackgroundSection;
