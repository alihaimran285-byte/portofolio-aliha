import React from 'react'
import './Navbar.css'
import logo from "../../assets/image/aliha-icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
<img src={logo} alt="" />
<ul className='nav-menu'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="./About">About</Link></li>
    <li><Link to="./Service">Service</Link></li>
    <li><Link to='./Project'>Project</Link></li>
    <li><Link to="./Skill">Skill</Link></li>
    <li><Link to="./Connect">Connect</Link></li>
</ul>
<div className="navbar-btn">
  <a 
    href="/alihaCV.pdf" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button>Download CV</button>
  </a>
</div>
</div>

    </>
  )
}

export default Navbar