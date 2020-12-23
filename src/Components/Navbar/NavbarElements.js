import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: sticky;
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