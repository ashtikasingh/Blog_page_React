import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
        <div className='navbar'>
        <NavLink to="/Home" className={"nav"}>Home</NavLink>
        <NavLink to="/Bollywood" className={"nav"}>Bollywood</NavLink>
        <NavLink to="/Technology" className={"nav"}>Technology</NavLink>
        <NavLink to="/Hollywood" className={"nav"}>Hollywood</NavLink>
        <NavLink to="/Fitness" className={"nav"}>Fitness</NavLink>
        <NavLink to="/Food" className={"nav"}>Food</NavLink>
        </div>

        <hr className='line'/>

    </>
  )
}

export default Navbar