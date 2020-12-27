import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    // background: transparent;
    // display: flex;
    // justify-content: center;
    // align-items:center;
    // padding: 0 30px;
    // height: 800px;
    // position: relative;
    // z-index:1;
    // margin-left: 50px;
    // margin-top: 120px;
    position:fixed;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    margin: 0 auto;
`
// export const BackgroundBg = styled.div`
//     position: absolute;
//     top:0;
//     right:0;
//     bottom:0;
//     left:0;
//     width: 100%;
//     height: 100%;
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
position:fixed;
width:100%;
height:100%;
top:50%;
left:25%;
color: white;
z-index:-1;	
@media screen and (max-width: 480px) {
    top:60%;
    div span:last-of-type {
        display: block;
        left:20%;
        color: #f00;
    }
  }
`
