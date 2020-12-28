import React from 'react';
// import {FaBars} from 'react-icons/fa';
import {
    // Nav, 
    // NavbarContainer, 
    // NavLogo, 
    // MobileIcon, 
    // NavMenu, 
    // Navitem,
    NavBtn,
    NavBtnLink} from './NavbarElements';
// import './Button.css';
import './nav.css'
import $ from 'jquery';


var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});





const Navbar = ({toggle}) => {
    return (
        <div class="wrapper">
       
            <nav class="tabs">
                <div class="selector"></div>
                <a href="#" class="active">ABOUT</a>
                <a href="#">PROJECTS</a>
                <a href="#">WORK</a> 
                <a href="#">SKILLS</a>
            
            </nav>
       
      </div>
  
    )
}

export default Navbar;
