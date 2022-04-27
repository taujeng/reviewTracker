import React, { useState, useEffect } from 'react';
import StarRating from '../StarRating/StarRating';
import { Link } from 'react-router-dom';
import { Forum } from '@mui/icons-material/';
import "./post.css"

const Post = ({ details }) => {


  // Reformat Date
  // date received: "Tue Feb 26 2008 20:52:20 GMT-0600 (Central Standard Time)"
  // date requirement: 02/24/1986
  const [updateDate, setUpdateDate] = useState(details.published_at);
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  useEffect(() => {
    const oldDate = details['published_at'].slice(4, 15).replaceAll(' ', '/');
    for (const [key, value] of Object.entries(months)) {
      if (oldDate.includes(key)) {
        const newDate = oldDate.replace(key, value);
        setUpdateDate(newDate);
      }
    }
  }, []);

  return (
    <Link
      className="post-container"
      to={'/comments'}
      state={{ from: { details, updateDate } }}
    >
      {/* Post Header */}
      <div className="post-title post">{details.place}</div>
      <div className="post-rating post">
        <StarRating score={details.rating} />
      </div>
      {/* Post Content */}
      <div className="post-body post">{details.content}</div>
      {/* Post Footer */}
      <div className="post-footer">
        <div className="post-footer-set">
          <div className="post-footer-name">{details.author}</div>
          <div className="post-footer-date">{updateDate}</div>
        </div>
        {/* If there is a response to the review, display Icon */}
        {details.response ? (
          <div className="post-footer-comments">
            <Forum className="forum-icon" fontSize="small" />
          </div>
        ) : null}
      </div>
    </Link>
  );
};

export default Post;
