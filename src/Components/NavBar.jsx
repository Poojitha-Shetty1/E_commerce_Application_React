import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='landing-nav'>
        <Link to='/'>Home</Link>
        <Link to='/login'>login</Link>
        <Link to='/reg'>Registration</Link>
    </nav>
  )
}

export default Navbar