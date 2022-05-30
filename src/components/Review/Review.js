import React from 'react'
import "./Review.css"
const Review = ({revi}) => {
    const {name, review, ratings } = revi;
  return (
    <div className='review-cart-container'>
         <h2>Name: {name}</h2>
         <p>Comment: {review}</p>
         <p><small>Ratings: {ratings} *</small></p>
    </div>
  )
}

export default Review