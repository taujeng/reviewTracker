import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

const Post = ({ details }) => {
  // function newDate(details) {
  //   const oldDate = details['published_at'].slice(4, 15);
  //   return oldDate;
  // }

  // Reformat Date
  // date we receive: "Tue Feb 26 2008 20:52:20 GMT-0600 (Central Standard Time)"
  // date we want: 02/24/1986
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
    <Link className="post-container" to={'/comments'} state={{from:{details, updateDate}}} >
      <div className="post-title post">{details.place}</div>
      <div className="post-rating post">
        <StarRating score={details.rating} />
      </div>
      <div className="post-body post">{details.content}</div>
      <div className="post-footer">
        <div className="post-footer-name">{details.author}</div>
        <div className="post-footer-date">{updateDate}</div>
        <div className="post-footer-comments">ICON</div>
      </div>
    </Link>
  );
};

export default Post;
