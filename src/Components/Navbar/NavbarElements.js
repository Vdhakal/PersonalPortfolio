import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  /* margin-top: --80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 0% 0% 20% 20%;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  backdrop-filter: blur(2.5px);

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;  
  background: transparent;



  text-align: center;
  color: #fff;
//   font-size: 5em;
  letter-spacing: 8px;
  font-family: 'Press Start 2P';
  font-weight: 400;
  /*Create overlap*/
  
  margin: 0;
  line-height: 0;
  /*Animation*/
  
  animation: glitch1 2.5s infinite;
}

NavbarContainer:nth-child(2) {
  color: #67f3da;
  animation: glitch2 2.5s infinite;
}

NavbarContainer:nth-child(3) {
  color: #f16f6f;
  animation: glitch3 2.5s infinite;
}
/*Keyframes*/

@keyframes glitch1 {
  0% {
    transform: none;
    opacity: 1;
  }
  7% {
    transform: skew(-0.5deg, -0.9deg);
    opacity: 0.75;
  }
  10% {
    transform: none;
    opacity: 1;
  }
  27% {
    transform: none;
    opacity: 1;
  }
  30% {
    transform: skew(0.8deg, -0.1deg);
    opacity: 0.75;
  }
  35% {
    transform: none;
    opacity: 1;
  }
  52% {
    transform: none;
    opacity: 1;
  }
  55% {
    transform: skew(-1deg, 0.2deg);
    opacity: 0.75;
  }
  50% {
    transform: none;
    opacity: 1;
  }
  72% {
    transform: none;
    opacity: 1;
  }
  75% {
    transform: skew(0.4deg, 1deg);
    opacity: 0.75;
  }
  80% {
    transform: none;
    opacity: 1;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}

@keyframes glitch2 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(-2px, -3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(-5px, -2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(-5px, -1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(-2px, -6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }
}

@keyframes glitch3 {
  0% {
    transform: none;
    opacity: 0.25;
  }
  7% {
    transform: translate(2px, 3px);
    opacity: 0.5;
  }
  10% {
    transform: none;
    opacity: 0.25;
  }
  27% {
    transform: none;
    opacity: 0.25;
  }
  30% {
    transform: translate(5px, 2px);
    opacity: 0.5;
  }
  35% {
    transform: none;
    opacity: 0.25;
  }
  52% {
    transform: none;
    opacity: 0.25;
  }
  55% {
    transform: translate(5px, 1px);
    opacity: 0.5;
  }
  50% {
    transform: none;
    opacity: 0.25;
  }
  72% {
    transform: none;
    opacity: 0.25;
  }
  75% {
    transform: translate(2px, 6px);
    opacity: 0.5;
  }
  80% {
    transform: none;
    opacity: 0.25;
  }
  100% {
    transform: none;
    opacity: 0.25;
  }


  }
`;
export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;  
  background: transparent;
  }
`;
export const MobileIcon = styled.div`
  display: none;  
  background: transparent;


  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,130%);
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  background: transparent;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Navitem = styled.li`
  height: 30px;
  color: white;
  margin-right: 22px;
  background: transparent;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  heoght: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #01bf71;
  }

`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  background: transparent;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavBtnLink = styled.nav`
  border-radius: 50px;
  width: 70px;
  height: 20px;
  background:#01bf71;
  white-space: 10px 22px;
  color: #010606;
  font-size:1rem;
  text-align: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;