import React, {useEffect} from 'react';
import './price.sass';

import free from './free-plan.svg';
import standard from './standard-plan.svg';
import premium from './premium-plan.svg';

import PriceBlock from './price-block.jsx';


const Price = props => {
  return <div className="price" id='price'>
    <h2 className="price__title">Choose Your Plan</h2>
    <p className="price__subtitle">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    <div className="price__plans">
      <PriceBlock pic = {free} title = 'Free Plan' features = {['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']} price = 'Free'/>
      <PriceBlock pic = {standard} title = 'Standard Plan' features = {['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware']} price = '9'/>
      <PriceBlock pic = {premium} title = 'Premium Plan' features = {['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features']} price = '12'/>
    </div>
  </div>
};

export default Price;