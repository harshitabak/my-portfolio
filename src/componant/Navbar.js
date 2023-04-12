import React from 'react'
import "./Navbar.css"
import  {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'

const Navbar = () => {
    const [fabar , setfabar] = useState(false)
    const [colour, setcolour] = useState(false)
     const handleFabar= ()=>setfabar(!fabar)
     let changecolour = ()=>{
       if(window.scrollY >=1) {
         setcolour(true)
     }
     else {
      setcolour(false)
     }
    }
     window.addEventListener("scroll" , changecolour)
  return (
    <div className= {colour ?" header header-bg" :"header"} >
      <Link to="/">
        <h1> Portfolio</h1>
      </Link>
      <ul  className=  {fabar ? "nav-menu active" :"nav-menu"}>
        <li>
            <Link  to="/">Home</Link>
        </li>
        <li>
            <Link  to="/About">About</Link>
        </li>
        <li>
            <Link  to="/Project">Project</Link>
        </li>
        <li>
            <Link  to="/Contact">Contact</Link>
        </li>
        <li>
            <Link  to="/Resume">Resume</Link>
        </li>
      </ul>
      <div className='hamburger' onClick={handleFabar}>
      {fabar ?(
        <FaTimes  size={20} style={{color:"#fff"}} />)
        :<FaBars  size={20} style={{color:"#fff"}}/>
      }
      </div>
    </div>
  )
}

export default Navbar
