import "./Footer.css"
import React from 'react'
import {FaFacebook, FaHome ,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
           <div className='location'  >
           <FaHome size={20} style={{colour :"#fff" ,marginRight :"2rem"}} />
           <div>
            <p> saibag coloney</p>
            <p> Ahemdabad</p>
           </div>
           </div>
           <div className='phone'>
             <h4> <FaPhone size={20} style={{colour :"#fff" ,marginRight :"2rem"}} /> 9039613449</h4>
           </div>
           <div className='email'>
             <h4> <FaMailBulk size={20} style={{colour :"#fff" ,marginRight :"2rem"}} /> sonih441@gmail.com</h4>
           </div>
        </div>
        <div className='right'>
            <h4>About me</h4>
            <p> I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines. </p>
            <div className='social'>
            <FaFacebook size={20} style={{colour :"#fff" ,marginRight :"2rem"}} />  
            <FaTwitter size={20} style={{colour :"#fff" ,marginRight :"2rem"}} />
            <FaLinkedin size={20} style={{colour :"#fff" ,marginRight :"2rem"}} />
            </div>
        </div>
        
    </div>
      
    </div>
  )
}

export default Footer
