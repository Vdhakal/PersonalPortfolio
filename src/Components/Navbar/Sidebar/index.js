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

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon  isOpen={isOpen} onClick={toggle}>
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
                    <SidebarBtn to='/resume'>
                        Resume
                    </SidebarBtn>
                </SidebarBtnWrap>
            
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
