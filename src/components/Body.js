import React from 'react'
import Post from './Post'


const Body = () => {

  const reviewData = require('../reviews.json')


  return (
    <section className='review-container'>
      { reviewData.map((item, index) => 
        (<Post key={index} details={item} />
      ))}
    </section>
  )
}

export default Body;