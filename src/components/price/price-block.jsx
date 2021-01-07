import React from 'react';
import './price-block.sass';

import check from './price-check.svg';

const Feature = ({text}) => {
  return <div className="feature">
    <img src={check} alt="check"/>
    <span>{text}</span>
  </div>
}

function onClick(event){
  let block = event.target.parentNode;
  block.classList.toggle('price-block_active');
  let features = block.querySelectorAll('.feature');
  features.forEach(feature => {
    feature.classList.toggle('feature_active');
  });
}

const PriceBlock = props => {
  return <div className="price-block">
    <img src={props.pic} alt={props.title}/>
    <h4 className='price-block__title'>{props.title}</h4>
    <div style={{height: '230px'}}>{props.features.map((feature, index) => <Feature text={feature} key={index}/>)}</div>
    <h3 className='price-block__price'>{props.price == 'Free' ? 'Free' : `\$${+props.price} / mo`}</h3>
    <button className="price-block__button" onClick = {onClick}>Select</button>
  </div>
};

export default PriceBlock;