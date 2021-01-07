import React from 'react';
import './features.sass';

import pic from './features-pic.svg';
import check from './check.svg';

const ListItem = ({text}) => {
  return <div className="list-item">
    <img src={check} alt="check"/>
    <span>{text}</span>
  </div>
};

const Features = props => {
  return <div className="features" id='features'>
    <img src={pic} alt="another fancy guy" className="features__pic"/>
      <h2 className="features__title">We Provide Many Features You Can Use</h2>
      <div className="features__subtitle">You can explore the features that we provide with fun and have their own functions each feature.
      <ListItem text='Powerfull online protection.'/>
      <ListItem text='Internet without borders.'/>
      <ListItem text='Supercharged VPN'/>
      <ListItem text='No specific time limits.'/>
      </div>
  </div>
};

export default Features;