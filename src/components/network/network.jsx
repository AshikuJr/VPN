import React from 'react';
import './network.sass';

import network from './network.svg';
import netflix from './netflix.svg';
import reddit from './reddit.svg';
import amazon from './amazon.svg';
import discord from './discord.svg';
import spotify from './spotify.svg';

const Network = props => {
  return <div className="network" id='network'>
    <h2 className="network__title">Huge Global Network of Fast VPN</h2>
    <p className="network__subtitle">See <span style={{fontFamily: 'Regular'}}>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
    <img src={network} alt="global map" className="network__pic"/>
    <div className="network__partners">
      <img src={netflix} alt="netflix"/>
      <img src={reddit} alt="reddit"/>
      <img src={amazon} alt="amazon"/>
      <img src={discord} alt="discord"/>
      <img src={spotify} alt="spotify"/>
    </div>
  </div>
};

export default Network;