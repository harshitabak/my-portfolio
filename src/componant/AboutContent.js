import "./AboutContent.css"
import React from 'react'
import {Link} from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2> Who Am  I</h2>
        <p></p>
        <Link to="/Contact">
            <button className="btn">Contact</button>
        </Link>

      </div>
      <div className=" right">
      <div className="img-container">
        <div className="image-stack top">
         <img src=" https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutContent
