import React from 'react';
import './footer.sass';

import logo from './brand.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';

const List = props => {
  return <ul className="list">
    <li className="list__title">{props.title}</li>
    {props.links.map(item => <li className="list__link"><a href={item.source}>{item.text}</a></li>)}
  </ul>
}

const Footer = props => {
  return <footer className="footer">
    <div className="footer__brand">
      <span className='footer__title'><img src={logo} alt="logo" style={{marginRight: 5, paddingBottom: 5}} id='footer'/>Lasles<span style={{fontFamily : 'Bold'}}>VPN</span></span>
      <p className="footer__subtitle"><span style={{fontFamily: 'Regular'}}>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
      <div className="footer__socials">
        <a href="ashikujr.github.io/resume/" target='_blank'><img src={facebook} alt="facebook"/></a>
        <a href="ashikujr.github.io/resume/" target='_blank'><img src={twitter} alt="facebook"/></a>
        <a href="ashikujr.github.io/resume/" target='_blank'><img src={instagram} alt="facebook"/></a>
      </div>
      <span>design — dribbble.com/didikurniawan<br/>layout — Mikhail Kozlov</span>
    </div>
    <List title='Product' links={[
      {source: '#footer', text: 'Download'},
      {source: '#footer', text: 'Pricing'},
      {source: '#footer', text: 'Locations'},
      {source: '#footer', text: 'Server'},
      {source: '#footer', text: 'Countries'},
      {source: '#footer', text: 'Blog'},
    ]} />
    <List title='Engage' links={[
      {source: '#footer', text: 'LaslesVPN ?'},
      {source: '#footer', text: 'FAQ'},
      {source: '#footer', text: 'Tutorials'},
      {source: '#footer', text: 'About Us'},
      {source: '#footer', text: 'Privacy Policy'},
      {source: '#footer', text: 'Terms of Service'},
    ]} />
    <List title='Earn Money' links={[
      {source: '#footer', text: 'Affiliate'},
      {source: '#footer', text: 'Become Partner'},
    ]} />
  </footer>
};

export default Footer;