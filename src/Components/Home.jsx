import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Home</h1>
      <p>Discover the best products across beauty, fragrance, furniture and more.</p>
      <Link to="/login">Shop Now →</Link>
    </div>
  )
}

export default Home