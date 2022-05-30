import React from 'react'
import "./Blogs.css"
const Blogs = () => {
  return (
    <div className='blogs-container'>
      <div className="blogs">
        <h3>1. What is context API?</h3>
        <p>Ans: Context API is a react hook. Which we can use for sharing data to the child components.
          Without context API if we want to share data maually in react it will be unnecessary props dilling,
          which can be cause of unmanageable code. So context API is very powerfull for using context API we have
          to wrap the child components by context provider.
        </p>

        <h3>2. What is semantic tags?</h3>
        <p>Ans: Semantic tags are those that clearly describe their meaning in a 
          human- and machine-readable way. Elements like header, footer, article, nav, section and aside are all 
          considered semantic tags because they accurately describe the purpose of the element and the type of content
            that is inside them.
          </p>
        </div>
        </div>
          )
}

          export default Blogs