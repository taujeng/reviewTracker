import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import './body.css'


const Body = ({ data }) => {

  const [sortBody, setSortBody] = useState(data);

  // const sortedData = data.sort((a,b) => new Date(b['new_date']) - new Date(a['new_date']));
  // console.log(sortedData)

  // const sortByRating = data.sort((a,b) => b.rating - a.rating)
  // console.log("rating score", sortByRating)


  function by_Date() {
    setSortBody(prevValue => {
      return [...prevValue].sort((a,b) => new Date(b['new_date']) - new Date(a['new_date']));
    })
  }

  function by_Stars() {
    setSortBody(prevValue => {
      return [...prevValue].sort((a,b) => b.rating - a.rating)
    })
  }






  // state that keeps track of what the page is showing (by recent, by rating, ect)
  // on button click, change state to appropriate state.
  // depending on the state, pass in the appropriate const to map

  return (
    <section className='review-container'>
      <button  onClick={by_Date} style={{display:'block', width:'40px', height:'50px'}}>Recent</button>
      <button  onClick={by_Stars} style={{display:'block', width:'40px', height:'50px'}}>By Rating</button>
      {sortBody.map((item, index) => 
        (<Post key={index} details={item} />
      ))}
    </section>
  )
}

export default Body;

// problems. after clicking HELLO ME (works), then STARME (doesn't work), click into
// a post, then back -> works, BUT THEN if I click HELLO ME again the date is sorted correctly,
// but the STAR RATING remains the same as STARME. So Graham Hoover's 2 has 5 stars, tabitha's 1 has 5 stars