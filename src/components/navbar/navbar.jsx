import React, {useEffect, useState} from 'react';
import './navbar.sass';
import logo from './logo.svg';


const Navbar__link = props => {
  return <a href={props.src} className="navbar__link">{props.text}</a>
};

function bgChange(){
  let nav = document.querySelector('.nav');
  nav.style.backgroundColor = (window.scrollY < 70 && !document.querySelector('.navbar__hamburger_active')) ? 'transparent' : '#FFECEC';
};

function toggleHamburger(event){
  let hamburger = event.target.closest('button');
  hamburger.classList.toggle('navbar__hamburger_active');
  let menu = document.querySelector('.navbar__menu');
  menu.classList.toggle('navbar__menu_active');
  let signing = document.querySelector('.navbar__signing');
  signing.classList.toggle('navbar__signing_active');
  let nav = document.querySelector('.nav');
  nav.style.backgroundColor = '#FFECEC';
}

const Menu = props => {
  return <div className="navbar__menu">
    <Navbar__link text="Features" src="#features"/>
    <Navbar__link text="Pricing" src="#price"/>
    <Navbar__link text="Network" src="#network"/>
    <Navbar__link text="Testimonials" src="#testimonials"/>
    <Navbar__link text="Help" src="#footer"/>
  </div>
};

const Signing = props => {
  return <div className="navbar__signing">
    <a href="#" className="navbar__signIn">Sign In</a>
    <button className="navbar__signUp">Sign Up</button>
  </div>
};

const Navbar = props => {
  let [l, setL] = useState((window.innerWidth <= 1200));
  let [s, setS] = useState((window.innerWidth <= 600));

  useEffect(() => {
    document.addEventListener('scroll', bgChange);
    return () => {
      document.removeEventListener('scroll', bgChange);
    }
  });
  return <nav className="navbar">

    <a href="#" className="navbar__brand"><img src={logo} alt="logo" className="navbar__logo"/> Lasles <span style={{fontFamily: 'Bold'}}>VPN</span></a>

    <Menu/>

    <Signing/>
    
    <button className="navbar__hamburger" onClick = {toggleHamburger}>
      <span></span>
      <span></span>
      <span></span>
    </button>

  </nav>
};

export default Navbar;