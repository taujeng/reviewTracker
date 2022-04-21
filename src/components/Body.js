import React from 'react'
import Post from './Post'


const Body = () => {

  const reviewData = require('../reviews.json')
  console.log(reviewData)

  console.log(reviewData.map(item=> item.author))



  

  return (
    <section className='review-container'>
      { reviewData.map((item, index) => 
        (<Post key={index} author={item.author} />
      ))}
    </section>
  )
}

export default Body;