import styled from 'styled-components';

export const Filler = styled.div`
color:red;
background:transparent;
height:100vh;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
z-index:-100;
`

// export const Flashlight = styled.div`
// cursor: none;
// --cursorx: 50vw;
// --cursory: 50vh;
// background: radial-gradient( circle 30vmax at var(--cursorX) var(--cursorY), rgba(156,147,0,0) 0%, rgba(0,593,0,.5) 80%, rgba(0,0,589,.95) 100% );

// &:before {
//     color:red;
//     content: '';
//     display: block;
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     pointer-events: none;
//     background: radial-gradient( circle 30vmax at var(--cursorX) var(--cursorY), rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 80%, rgba(0,0,0,.95) 100% );
// }
// `