import React from 'react';
import './statblock.sass';

const Statblock = props => {
  return <div className="statblock">
    <img src={props.src} alt={props.item} className="statblock__icon"/>
    <div>
      <span className="statblock__count">{props.count}+</span>
      <br/>
      <span className="statblock__item">{props.item}</span>
    </div>
  </div>
}

export default Statblock