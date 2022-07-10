import React from 'react'
import AboutContent from '../compnents/AboutContent'
import Footer from '../compnents/Footer'
import HeroImg2 from '../compnents/HeroImg2'
import Navbar from '../compnents/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About" text="I am a Mern-Stack Developer"/>
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About
