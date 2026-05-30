import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'
import User_nav from './User_nav'

function UserDashboard() {

  
  return (
    <div>
      <User_nav ></User_nav>    
      <Outlet></Outlet>
    </div>
  )
}

export default UserDashboard