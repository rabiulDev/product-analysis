import React from 'react'
import mackbook from "../../assets/hero-image/mackbook.png"
import useReviews from '../../hooks/useReviews'
import "./Home.css"
const Home = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <main className='main-container'>
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

           {reviews.length}
        </main>
    )
}

export default Home