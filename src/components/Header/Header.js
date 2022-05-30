import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav-container'>
        <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/reviews">REVIEWS</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/about">ABOUT</Link>
        </div>
    </nav>
  )
}

export default Header