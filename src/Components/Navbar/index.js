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
import {animateScroll as scroll} from 'react-scroll'
import './Button.css';

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
                    <Navitem to ="about"
                        onClick={goAbout}>About</Navitem>
                    <Navitem to ="projects" onClick={goProject}>Projects</Navitem>
                    <Navitem to ="skills" onClick={goSkill}>Skills</Navitem>
                    <Navitem to ="contact" onClick={goContact}>Contact</Navitem>
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
