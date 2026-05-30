import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import Registration from './Components/Registartion'
import LandingPage  from './Components/LandingPage'
import Home from './Components/Home'
import UserHome from './User/UserHome'
import './App.css'
import ProtectedRoute from './User/ProtectedRoute'
import ProductDetails from './User/ProductDetails'
import Cart from './User/Cart'
import UserDashboard from './User/UserDashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} >
       <Route index element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/reg' element={<Registration/>}></Route>
      </Route>

      <Route path='/userDashboard' element={
                      <ProtectedRoute>
                            <UserDashboard/>    
                      </ProtectedRoute>}>
        <Route index element={<UserHome/>}></Route>
        <Route path='productDetails/:id' element={<ProductDetails/>}></Route>
        <Route path='/userDashboard/Cart' element={<Cart></Cart>}></Route>
      </Route>

    </Routes>
</BrowserRouter>
  )
}

export default App