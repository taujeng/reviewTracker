import React, { useEffect, useState } from 'react';
import {
  StarBorderRounded,
  StarRounded,
  StarHalfRounded,
} from '@mui/icons-material';

const StarRating = ({ score }) => {
  // const [useScore, setUseScore] = useState(true);

  // useEffect(()=> {
  //   if (score > 5 || score < 0) {
  //     setUseScore(false);
  //   } else {
  //     setUseScore(true);
  //   }
  // }, [])


  // Rounds Number to nearest 0.5
  function roundHalf(num) {
    return Math.round(num * 2) / 2;
  }

  const newScore = roundHalf(score);

  return (
    <div>
      {[...Array(newScore)].map(() => {
        return <StarRounded className="star-inner" />;
      })}
      {/* {useScore
        ? [...Array(newScore)].map(() => {
            return <StarRounded className="star-inner" />;
          })
        : [...Array(5)].map(() => {
            return <StarBorderRounded />;
          })} */}
    </div>
  );
};

export default StarRating;
