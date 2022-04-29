import React from 'react'
import Post from '../Post/Post'
import './body.css'


const Body = ({ data }) => {

  const sortData = data.sort((a,b) => b['new_date'] - a['new_date'])
  console.log(sortData)


  return (
    <section className='review-container'>
      {data.map((item, index) => 
        (<Post key={index} details={item} />
      ))}
    </section>
  )
}

export default Body;