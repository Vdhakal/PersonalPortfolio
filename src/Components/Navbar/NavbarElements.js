import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  position: fixed;
  width:100%;
  top: 0;
  z-index: 10;
  border-radius: 0% 0% 20% 20%;
  box-shadow: 0px 5px 5px rgba(68, 68, 68, 0.6);
  backdrop-filter: blur(2.0px);

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
  font-family: 'Goldman', cursive;
  src: url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Goldman:wght@400;700&family=Varela+Round&display=swap');

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
    transform: translate(-100%,120%);
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
  font-family: 'Goldman', cursive;
  cursor: pointer;
  src: url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Goldman:wght@400;700&family=Varela+Round&display=swap');

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
  padding:5px 20px;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family: 'Goldman', cursive;
  src: url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Goldman:wght@400;700&family=Varela+Round&display=swap');
  font-weight:300;
  font-size: 1rem;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s ease-in-out;
  &:hover{
      transition: all 0.2s ease-in-out;
      color: #000000;
      background-color:#FFFFFF;
  }
`;