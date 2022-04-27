import React from 'react'
import Post from './Post'


const Body = ({ data }) => {

  return (
    <section className='review-container'>
      { data.map((item, index) => 
        (<Post key={index} details={item} />
      ))}
    </section>
  )
}

export default Body;