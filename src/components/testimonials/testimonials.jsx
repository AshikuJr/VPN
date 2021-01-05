import React from 'react';
import './testimonials.sass';

import robert from './robert.png';
import christy from './christy.png';
import jou from './jou.png';

import Comment from './comment.jsx';

const Testimonials = props => {
  return <div className="testimonials" id='testimonials'>
    <h2 className="testimonials__title">Trusted by Thousands of Happy Customer</h2>
    <p className="testimonials__subtitle">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
    <div className="testimonials__comments">
      <Comment avatar = {robert} username = 'Viezh Robert' location = 'Warsaw, Poland' mark = '4.5' text = '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'/>
      <Comment avatar = {christy} username = 'Yessica Christy' location = 'Shanxi, China' mark = '4.8' text = '“I like it because I like to travel far and still can connect with high speed.”.'/>
      <Comment avatar = {jou} username = 'Kim Young Jou' location = 'Seoul, South Korea' mark = '4.7' text = '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'/>
    </div>
    <div className="testimonials__controls">

    </div>
  </div>
};

export default Testimonials;