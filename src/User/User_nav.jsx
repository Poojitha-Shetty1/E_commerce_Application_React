import React from 'react'
import { Link } from 'react-router-dom'

function User_nav() {
  return (
    <div >  
<nav className="dashboard-nav" >
    <span className="dashboard-brand">NavBar</span>
    <div className="dashboard-links">
      <Link to="/userDashboard">Home</Link>
      <Link to="/userDashboard/Cart" className='cart-link'>
        🛒 Cart </Link>
      <Link to="/login">Logout</Link>
    </div>
  </nav>
  </div>
  )
}

export default User_nav