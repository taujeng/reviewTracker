import React from 'react';
import Post from './Post';
import { useLocation } from 'react-router-dom';

const Comments = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  console.log(from.details);
  console.log(from.updateDate);
  return (
    <div className="comments-container">
      <div className="comments-box original-review">{from.details.author}</div>
      <div className="comments-box comments-response">Response</div>
    </div>
  );
};

export default Comments;
