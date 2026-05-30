import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function LandingPage() {
  return (
    <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    </div>
  )
}

export default LandingPage