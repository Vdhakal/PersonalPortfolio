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
    NavLinks,
    NavBtnLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'
import './Button.css';
import { NavLink } from 'react-router-dom';

const goUp=()=>{
    scroll.scrollToTop()
}
const goAbout=()=>{
    scroll.scrollTo(1200);
}
const goProject=()=>{
    scroll.scrollTo(2650);
}

const goWork=()=>{
    scroll.scrollTo(3650);
}
const goSkill=()=>{
    scroll.scrollTo(5000);
}

const goContact=()=>{
    scroll.scrollToBottom();
}


const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={goUp}>VD</NavLogo>
                <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                <NavMenu>
                    <Navitem>
                        <NavLinks to ="about" spy={true} smooth={true} offset={50} duration={500} >About</NavLinks>
                    </Navitem>
                    
                    <Navitem>
                        <NavLinks to ="project" spy={true} smooth={true} offset={50} duration={500} >Projects</NavLinks>
                    </Navitem>
                     
                    {/* <Navitem>
                        <NavLinks to ="work" spy={true} smooth={true} offset={50} duration={500} >Work </NavLinks>
                    </Navitem>  */}
                    
                    <Navitem>
                        <NavLinks to ="Skills_title" spy={true} smooth={true} offset={50} duration={500} >Skills</NavLinks>
                    </Navitem>
                    
                    <Navitem>
                        <NavLinks to ="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</NavLinks>
                    </Navitem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink class = "button" to ="/resume">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar;
