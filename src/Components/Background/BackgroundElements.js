import styled from 'styled-components';
import backImage from '../../thor.png'

export const BackgroundContainer = styled.div`
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
margin: 0;
padding: 0;
`
export const BackGroundImg =styled.div.attrs(props => ({
  class: props.class,
}))`
position: absolute;
width: 100%;
height: 100vh;
top: 0;
left: 0;
margin: 0;
padding: 0;
z-index:-10;
background-image: url(${backImage});
background-position: bottom center;
background-repeat: no-repeat;
background-attachment: ablsolute;
background-size: cover;
background-color: #000000;

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


export const ContentH1 = styled.div`
position:absolute;
width:54%;
height:20%;
top:60%;
left:30%;
color: white;
z-index:-1;	
@media screen and (max-width: 960px) {
    top:70%;
    left:10%;
    width:90%;
  }
`
