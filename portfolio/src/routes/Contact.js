import React from 'react'
import Footer from '../compnents/Footer'
import HeroImg2 from '../compnents/HeroImg2'
import Form from '../compnents/Form'
import Navbar from '../compnents/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact" text="Let's have a chat.."/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contact
