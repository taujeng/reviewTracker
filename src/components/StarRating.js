import React, { useEffect, useState } from 'react';
import {
  StarBorderRounded,
  StarRounded,
  StarHalfRounded,
} from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const StarRating = ({ score }) => {
  const [stars, setStars] = useState([]);
  // const [useScore, setUseScore] = useState(true);

  // Rounds Number to nearest 0.5
  function roundHalf(num) {
    return Math.round(num * 2) / 2;
  }
  const newScore = roundHalf(score);

  useEffect(() => {
    // If score is invalid, return 5 star outlines.
    if (newScore > 5 || newScore <= 0) {
      setStars(
        [...Array(5)].map(() => {
          return <StarBorderRounded key={uuidv4()} />;
        })
      );
    } else {
      // If valid score, return number of stars according to rating.
      setStars(
        [...Array(newScore)].map(() => {
          return <StarRounded className="star-inner" key={uuidv4()} />;
        })
      );
    }
  }, []);

  return <div>{stars}</div>;
};

export default StarRating;

// else if (!parseInt(newScore, 10)) {
//   const newStarList = [...Array(Math.round(newScore))].map(() => {
//     return <StarRounded className="star-inner" />;
//   });
//   const superNew = [...newStarList, <StarHalfRounded />];
// }

//
// else if (!parseInt(newScore, 10)) {
//       const lele = Math.floor(newScore);
//       const newStarList = [...Array(lele)].map(() => {
//         return <StarRounded className="star-inner" />;
//       });
//       const superNew = newStarList.push(<StarHalfRounded />);
//       setStars(superNew);
//     }
