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

function toggleHamburger(event){
  let hamburger = event.target.closest('button');
  hamburger.classList.toggle('navbar__hamburger_active');
}

const Navbar = props => {
  useEffect(() => {
    document.addEventListener('scroll', bgChange);
    return () => {
      document.removeEventListener('scroll', bgChange);
    }
  });

  return <nav className="navbar">
    
    <a href="#" className="navbar__brand"><img src={logo} alt="logo" className="navbar__logo"/> Lasles <span style={{fontFamily: 'Bold'}}>VPN</span></a>
    <Navbar__link text="Features" src="#features"/>
    <Navbar__link text="Pricing" src="#price"/>
    <Navbar__link text="Network" src="#network"/>
    <Navbar__link text="Testimonials" src="#testimonials"/>
    <Navbar__link text="Help" src="#footer"/>
    <a href="#" className="navbar__signIn">Sign In</a>
    <button className="navbar__signUp">Sign Up</button>
    <button className="navbar__hamburger" onClick = {toggleHamburger}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="navbar__dropdown">
      
    </div>
  </nav>
};

export default Navbar;