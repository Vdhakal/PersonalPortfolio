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

const goUp=()=>{
    scroll.scrollToTop()
}

const openResume=()=>{
    window.open('https://vdhakal.github.io/Resume/');
}
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={goUp}>VD</NavLogo>
                <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                <NavMenu>
                    <Navitem class = "navItem">
                        <NavLinks to ="about" spy={true} smooth={true} offset={50} duration={500} >About</NavLinks>
                    </Navitem>
                    
                    <Navitem>
                        <NavLinks to ="project" spy={true} smooth={true} offset={50} duration={500} >Projects</NavLinks>
                    </Navitem>
                     
                    {/* <Navitem>
                        <NavLinks to ="work" spy={true} smooth={true} offset={50} duration={500} >Work </NavLinks>
                    </Navitem>  */}
                    
                    <Navitem>
                        <NavLinks to ="skill" spy={true} smooth={true} offset={50} duration={500} >Skills</NavLinks>
                    </Navitem>
                    
                    <Navitem>
                        <NavLinks to ="contact" spy={true} smooth={true} offset={50} duration={500} >Contact</NavLinks>
                    </Navitem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink class = "button" to ="/Resume" onClick = {openResume} target="_blank">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar;
