import React from 'react';
import './comment.sass';

import star from './star.svg'

const Comment = props => {
  return <div className="comment">
    <div className="comment__header">
      <img src={props.avatar} alt="avatar" className="comment__avatar"/>
      <div>
        <span className="comment__username">{props.username}</span>
        <br></br>
        <span className="comment__location">{props.location}</span>
      </div>
      <span className="comment__mark">{props.mark}</span>
      <img src={star} alt="star" className="comment__star"/>
    </div>
    <p className="comment__content">{props.text}</p>
  </div>
};

export default Comment;