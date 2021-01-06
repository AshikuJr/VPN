import React, {useEffect} from 'react';
import './navbar.sass';
import logo from './logo.svg';


const Navbar__link = props => {
  return <a href={props.src} className="navbar__link">{props.text}</a>
};

function bgChange(){
  let nav = document.querySelector('.nav');
  nav.style.backgroundColor = window.scrollY < 70 ? 'transparent' : '#FFECEC';
};

const Navbar = props => {
  useEffect(() => {
    document.addEventListener('scroll', bgChange);
    return () => {
      document.removeEventListener('scroll', bgChange);
    }
  });

  return <nav className="navbar">
    <img src={logo} alt="logo" className="navbar__logo"/>
    <a href="#" className="navbar__brand">Lasles <span style={{fontFamily: 'Bold'}}>VPN</span></a>
    <Navbar__link text="Features" src="#features"/>
    <Navbar__link text="Pricing" src="#price"/>
    <Navbar__link text="Network" src="#network"/>
    <Navbar__link text="Testimonials" src="#testimonials"/>
    <Navbar__link text="Help" src="#footer"/>
    <a href="#" className="navbar__signIn">Sign In</a>
    <button className="navbar__signUp">Sign Up</button>
  </nav>
};

export default Navbar;