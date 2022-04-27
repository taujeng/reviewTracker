import React from 'react'
import Post from '../Post/Post'
import './body.css'


const Body = ({ data }) => {

  return (
    <section className='review-container'>
      {data.map((item, index) => 
        (<Post key={index} details={item} />
      ))}
    </section>
  )
}

export default Body;