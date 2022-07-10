import React from 'react';
import Footer from '../compnents/Footer'
import HeroImg2 from '../compnents/HeroImg2';
import Navbar from '../compnents/Navbar'
import Work from '../compnents/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Projects" text="Some of my recent projects..."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
