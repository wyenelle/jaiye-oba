import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom' 


const Navbar = () => {
  return (
      <div className='nav-links'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/github'>Github</Link>
        <Link className='link' to='/testing'>Testing</Link>
      </div>
  )
}

export default Navbar