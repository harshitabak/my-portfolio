import React from 'react'
import Navbar from '../componant/Navbar'
import Projectimg from '../componant/projectimg.js'
import Footer from '../componant/Footer'
import  Form  from '../componant/Form'
const contact = () => {
  return (
    <div>
      <Navbar/>
      <Projectimg heading ="CONTACT." text="Lets have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default contact
