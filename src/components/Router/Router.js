import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Home/Home"
import Reviews from "../Reviews/Reviews"
import Dashboard from "../Dashboard/Dashboard"
import Blogs from "../Blogs/Blogs"
import About from "../About/About"

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default Router