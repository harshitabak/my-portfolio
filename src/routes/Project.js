import React from 'react'
import Navbar from '../componant/Navbar'
import Projectimg from '../componant/projectimg.js'
import Footer from '../componant/Footer'
import Workcard from '../componant/Workcard'
import Work from '../componant/Work'
function Project() {
  return (
    <div>
      <Navbar/>
      <Projectimg heading ="PROJECTS."  text="This is my projects" />
      <Work/>
       
      <Footer/>
    </div>
  )
}

export default Project
