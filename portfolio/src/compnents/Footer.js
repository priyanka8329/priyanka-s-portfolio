import './Footer.css';
import React from 'react'
import { FaFacebook, FaHome, FaTwitter, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                <div>
                    <p>2/1, Manmatha Nath Ganguli Road</p>
                    <p>Kolkata</p>
                </div>
            </div>

            <div className="phone">
                <h4><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                +91 7003734830
                </h4>
            </div>

            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                priyankashaw39034@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>My name is Priyanka Shaw. I am a Student of Lovely Professional University. I am pursuing my B.Tech in the CSE. I am Mern-Stack web developer. I am skilled in C, DSA, HTML, CSS, JavaScript, Bootstrap and React. I am an adaptable person. I can adopt myself in any situation. I have a leadership qualities.</p>
            <div className="social">
                <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"white", marginRight:"1rem"}}/>
            </div>
        </div>
    </div> 
      
    </div>
  )
}

export default Footer
