import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtn,
    SidebarBtnWrap
} from './SidebarElements';

const openResume=()=>{
    window.open('https://vdhakal.github.io/Resume/');
}

function reset_animation() {
    var el = document.getElementById('sidebar');
    el.style.animation = 'none';
    el.focus(); /* trigger reflow */
    el.style.animation = null;
}

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer id="sidebar" isOpen={isOpen} onClick={toggle} >
            <Icon  isOpen={isOpen} onClick={toggle, reset_animation}>
                <CloseIcon/>
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to ="project" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to ="skill" onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to ="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                
                <SidebarBtnWrap>
                    <SidebarBtn to='/Resume' onClick = {openResume} target="_blank">
                        Resume
                    </SidebarBtn>
                </SidebarBtnWrap>
            
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
