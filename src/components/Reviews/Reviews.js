import React from 'react'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review'
import "./Reviews.css"
const Reviews = () => {
  const [reviews] = useReviews()
  return (
    <div className="reviews-container">
      <h1 className='review-title'>All Customer Reviews</h1>
      <div className="reviews">
      
        {reviews.map(revi => <Review key={revi.id} revi={revi} />)}
      </div>
    </div>
  )
}

export default Reviews