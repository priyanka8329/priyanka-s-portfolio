import './HeroImg.css';
import React from 'react';
import introImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
    <div className="mask">
    <img className="intro-img" src={introImg} alt="inot found" />
    </div>

    <div className="content">
        <p>Mern Stack Web Developer</p>
        <h1>React Developer</h1>
        <div>
            <Link to='/project' className='btn'>Project</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
    </div>
      
    </div>
  )
}

export default HeroImg
