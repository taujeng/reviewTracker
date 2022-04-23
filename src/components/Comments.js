import React from 'react';
import StarRating from './StarRating';
import { useLocation } from 'react-router-dom';

const Comments = () => {
  const location = useLocation();
  const { from } = location.state;
  // from.details = data, from.updateDate = updated Date from data

  return (
    <div className="comments-container">
      <div className="comments-box comments-review">
        <div className="comments-post-title">{from.details.place}</div>
        <div className="comments-post-rating">
          <StarRating score={from.details.rating} />
        </div>
        <div className="comments-post-body">{from.details.content}</div>
        <div className="comments-footer">
          <div className="comments-footer-name">Tau</div>
          <div className="comments-footer-date">4/23/2022</div>
        </div>
      </div>
      <div className="comments-box comments-response">Response</div>
    </div>
  );
};

export default Comments;
