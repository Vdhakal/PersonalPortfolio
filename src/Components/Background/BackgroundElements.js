import styled from 'styled-components';
import {backImage} from '../../flower.jpg'

export const BackgroundContainer = styled.div`
position: fixed;
top:0;
   
`
// export const BackgroundBg = styled.div`
//     position: absolute;
//     top:0;
//     right:0;
//     bottom:0;
//     left:0;
//     width: 100%;
//     height: 100%;    

// background: transparent;
    // display: flex;
    // justify-content: center;
    // align-items:center;
    // padding: 0 30px;
    // height: 800px;
    // position: relative;
    // z-index:1;
    // margin-left: 50px;
    // // margin-top: 120px;

    //  position: absolute;
    // width: 100%;
    // height: 100%;
    // z-index: -10;
    // top: 0;
    // left: 0;
    // margin: 0;
    // padding: 0;
    // background-image: url(${backImage});
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-size: cover;
    // background-color: #000000;
// `
export const BackgroundBg = styled.div`
    z-index: 3;
    max-width: 1200px;
    position:absolute;
    padding: 8px 24px;
    display:flex;
    flex-direction: column;
    align-items:center;
    z-index:1;
    
`

export const ContentH1 = styled.div`
position:absolute;
width:100%;
height:20%;
top:60%;
left:25%;
color: white;
z-index:-1;	
@media screen and (max-width: 960px) {
    top:70%;
    left:10%;
  }
`
