import React, {useState} from 'react';
import './testimonials.sass';

import robert from './robert.png';
import christy from './christy.png';
import jou from './jou.png';

import Comment from './comment.jsx';
import Container from '../container/container.jsx';


const Testimonials = props => {
  
  const [current, setCurrent] = useState(2);
  function decreaseCurrent(){
    if (current === 1) return
    setCurrent(current - 1);
  }
  function increaseCurrent(){
    if (current === 3) return
    setCurrent(current + 1);
  }

  return <div className="testimonials" id='testimonials'>
    <h2 className="testimonials__title container">Trusted by Thousands of Happy Customer</h2>
    <p className="testimonials__subtitle container">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
    <div className="testimonials__comments" style={{left: `${(2 - current)*360}px`}}>
      <Comment active = {current === 1} avatar = {robert} username = 'Viezh Robert' location = 'Warsaw, Poland' mark = '4.5' text = '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'/>
      <Comment active = {current === 2} avatar = {christy} username = 'Yessica Christy' location = 'Shanxi, China' mark = '4.8' text = '“I like it because I like to travel far and still can connect with high speed.”.'/>
      <Comment active = {current === 3} avatar = {jou} username = 'Kim Young Jou' location = 'Seoul, South Korea' mark = '4.7' text = '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'/>
    </div>
    <Container content={
    <div className="testimonials__controls">
      <div>
        <button className={current === 1 ? "testimonials__marker testimonials__marker_active" : "testimonials__marker"} onClick = {() => setCurrent(1)}></button>
        <button className={current === 2 ? "testimonials__marker testimonials__marker_active" : "testimonials__marker"} onClick = {() => setCurrent(2)}></button>
        <button className={current === 3 ? "testimonials__marker testimonials__marker_active" : "testimonials__marker"} onClick = {() => setCurrent(3)}></button>
      </div>
      <div>
        <button className="testimonials__arrow" onClick = {decreaseCurrent}>🡠</button>
        <button className="testimonials__arrow" onClick = {increaseCurrent}>🡢</button>
      </div>
    </div>
      }/>
  </div>
};

export default Testimonials;