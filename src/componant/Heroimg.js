
import "./Heroimg.css"

import {Link} from  "react-router-dom"
import React from 'react'

let Heroimg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
    </div>
    <div className="content">
        <p> HI, I'M HARSHITA SONI</p>
        <h2> Full stack Developer </h2>
    
    <Link  to="/Project" className="btn">Project</Link>
    <Link  to="/Contact" className="btn btn-light">Contact</Link>
    </div>
    </div>
  )
}

export default Heroimg
