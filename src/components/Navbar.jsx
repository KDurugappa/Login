import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/About'><li>About</li></Link>
        <Link to='/Contact' ><li>Contact Us</li></Link>
        <Link to='/Form' ><li>LogIn</li></Link>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
