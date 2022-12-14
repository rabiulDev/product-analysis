import React from 'react'
import { useNavigate } from 'react-router-dom'
import mackbook from "../../assets/hero-image/mackbook.png"
import useReviews from '../../hooks/useReviews'
import Review from "../Review/Review"
import "./Home.css"
const Home = () => {
    const [reviews] = useReviews()
    const showThree = reviews.slice(0, 3)

    // HANDLE SEE ALL REVIEW BUTTON
    const navigate = useNavigate()
    const handleSeeAllRevBtn = () => {
        navigate("/reviews")
    }

    return (
        <main>
            {/* HERO SECTION START */}
            <div className='main-container'>
                <div className="hero">
                    <div className="hero-info">
                        <h1>The best Laptop on the planet</h1>
                        <h1 className='color-purple'>Get your Laptop by order now</h1>
                        <p>
                            The most powerfull laptop for complete your any task.
                            You can use it in your daily work. You can do graphics design, video editing,
                            gaming, coding, programming etc on this laptop very smoothly. So don't late to get it ORDER now.

                        </p>
                        <div className="hero-btn">
                            <button>Live Demo</button>
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={mackbook} alt="" />
                </div>
            </div>
            {/* HERO SECTION END */}


            {/* REVIEW SRCTION START  */}
            <article className='review-section'>
                <h1 className='review-title'>Customer Reviews(3)</h1>
                <div className="reviews">
                    {showThree.map(revi => <Review key={revi.id} revi={revi} />)}

                </div>

                <div className="all-rev-btn">
                    <button onClick={handleSeeAllRevBtn}>See All Reviews</button>
                </div>
            </article>
            {/* REVIEW SECTION END  */}
        </main>
    )
}

export default Home