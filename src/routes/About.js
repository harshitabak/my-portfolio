import React from 'react'
import Navbar from '../componant/Navbar'
import Projectimg from '../componant/projectimg.js'
import Footer from '../componant/Footer'
import AboutContent from '../componant/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Projectimg heading ="ABOUT."  text="I'm Full stack Developer" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
