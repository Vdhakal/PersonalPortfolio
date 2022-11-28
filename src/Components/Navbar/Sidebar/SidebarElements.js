import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import { keyframes } from 'styled-components';




export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background: rgb(10 8 5 /100%);
    display: grid;
    align-tems:center;
    font-family: "Kaushan Script", cursive;
    src: url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
    top:0; 
    left: 0;	
    transition: 0.6s cubic-bezier(0.83, 0, 0.17, 1);   
    overflow: hidden;
    opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
    top: ${({isOpen}) => (isOpen ? '0': '-100%')};

`;


export const Icon = styled.div`
    position:absolute;
    top:0;
    right:0;
    transform: translate(-80%,50%);
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: white;
`;
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding-top: 50px;

    @media screen and (max-width: 480 px){
        grid-templeate-rows: repeat(6, 60px);
    }
`;
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;
export const SidebarBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SidebarBtn = styled(LinkR)`
    padding:16px 64px;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
  font-family: "Kaushan Script", cursive;
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