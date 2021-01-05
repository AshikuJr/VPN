import React from 'react';
import './hero.sass';
import pic from './pic.svg';

const Hero = props => {
  return <div className="hero">
    <h1 className="hero__title">Want anything to be easy with <span style={{fontFamily: 'Bold'}}>LaslesVPN</span></h1>
    <p className="hero__subtitle">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
    <button className="hero__button">Get Started</button>
    <img src={pic} alt="fancy guy with a laptop" className="hero__pic"/>
  </div>
};

export default Hero;