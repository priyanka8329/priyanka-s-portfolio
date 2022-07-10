import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
// import react1 from '../assets/react1.jpg';
import react1 from '../assets/mine.jpeg';
import react2 from '../assets/react1.jpg';

const AboutContent = () => {
  return (
    <div className='about'>
    <div className="left">
    <h1>Who Am I ?</h1>
        <p>My name is Priyanka Shaw. I am a Student of Lovely Professional University. I am pursuing my B.Tech in the CSE. I am Mern-Stack web developer. I am skilled in C, DSA, HTML, CSS, JavaScript, Bootstrap and React. I am an adaptable person. I can adopt myself in any situation. I have a leadership qualities.</p>
        <Link to='/contact'>
            <button className='btn'>Contact</button>
        </Link>

    </div>
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
        <img src={react1} className="img" alt="true" />
        
        </div>
        <div className="img-stack bottom">
       
        <img src={react2} className="img" alt="true" />
        </div>
    </div>
        
    </div>

      
    </div>
  )
}

export default AboutContent
