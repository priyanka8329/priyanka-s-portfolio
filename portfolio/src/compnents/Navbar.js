import './NavbarStyles.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import logoImg from '../assets/lpulogo.png';



const Navbar=()=> {
    const[click,setClick]=useState(false);
    const handleClick = ()=> setClick(!click);

   
  return (
    <div className="header">
      <Link to='/'>
        
        <img className="logo-img" src={logoImg} alt="inot found" />
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to='/'>Home</Link>
        </li>

        <li>
            <Link to='/about'>About</Link>
        </li>

        <li>
            <Link to='/project'>Project</Link>
        </li>

        <li>
            <Link to='/contact'>Contact</Link>
        </li>

        
      </ul>

      <div className="hamburger" onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>)}
        
        
      </div>
    </div>
  )
}

export default Navbar
