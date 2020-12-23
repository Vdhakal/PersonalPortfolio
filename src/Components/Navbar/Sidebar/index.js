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

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ="about">About</SidebarLink>
                    <SidebarLink to ="projects">Projects</SidebarLink>
                    <SidebarLink to ="work">Work</SidebarLink>
                    <SidebarLink to ="skills">Skills</SidebarLink>
                    <SidebarLink to ="skills">Contact</SidebarLink>
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
