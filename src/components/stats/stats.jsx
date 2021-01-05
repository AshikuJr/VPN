import React from 'react';
import './stats.sass';

import Statblock from './statblock.jsx';

import users from './users.svg';
import locations from './locations.svg';
import servers from './servers.svg';

const Stats = props => {
  return <div className="stats">
    <Statblock src = {users} count = '90' item = 'Users'/>
    <div className="stats__border"></div>
    <Statblock src = {locations} count = '30' item = 'Locations'/>
    <div className="stats__border"></div>
    <Statblock src = {servers} count = '50' item = 'Servers'/>
  </div>
};

export default Stats