import React from 'react';
import StarRating from './StarRating';
import { useLocation } from 'react-router-dom';
import { Reply, MoreHoriz } from '@mui/icons-material';

const Comments = () => {
  // Data passed in
  const location = useLocation();
  const { from } = location.state;
  // from.details = data, from.updateDate = updated Date from data

  // Review commentator/user info
  const USER_NAME = 'Tau Jeng';
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayDate = month + '/' + day + '/' + year;

  return (
    <div className="comments-container">
      {/* Review Box */}
      <div className="comments-box comments-review">
        <div className="comments-post-title">{from.details.place}</div>
        <div className="comments-post-rating">
          <StarRating score={from.details.rating} />
        </div>
        <div className="comments-post-body">{from.details.content}</div>
        <div className="comments-footer">
          <div className="comments-footer-name">{from.details.author}</div>
          <div className="comments-footer-date">{from.updateDate}</div>
        </div>
      </div>

      {/* Response Box  */}
      <div className="comments-box comments-response-container">
        <div className="response-top">
          <div className="response-comments">
            <div className="response-arrow">
              <Reply />
            </div>
            Glad you Liked It!
          </div>
          <div className="response-edit">
            <MoreHoriz fontSize="large" />
          </div>
        </div>
        <div className="response-footer">
          <div className="response-footer-name">{USER_NAME}</div>
          <div className="response-footer-date">{todayDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
