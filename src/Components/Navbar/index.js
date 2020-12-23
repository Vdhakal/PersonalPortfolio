import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    Navitem,
    NavBtn,
    NavBtnLink} from './NavbarElements';
import './Button.css';
const Navbar = () => {
    return (
        
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>VD</NavLogo>
                
                <MobileIcon><FaBars /></MobileIcon>
                
                <NavMenu>
                    <Navitem to ="about">About</Navitem>
                    <Navitem to ="projects">Projects</Navitem>
                    <Navitem to ="work">Work</Navitem>
                    <Navitem to ="skills">Skills</Navitem>
                    <Navitem to ="skills">Contact</Navitem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink class = "button" to ="/resume">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
       
    )
}

export default Navbar;
