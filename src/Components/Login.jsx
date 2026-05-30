import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let navigate=useNavigate();

    function handlelogin(e){

        e.preventDefault()
        let storedData = JSON.parse(localStorage.getItem("user"))
        // console.log(storedData.emial )
        // console.log(storedData.password)

        if(!storedData){
            alert("No user found")
            navigate("/reg")
            return
        }
        let token="awesdrctfvgybhnjim";

        if(
            email === storedData.emial &&
            password === storedData.password
        ){   
            localStorage.setItem("token",token)
            alert("Login Successful")
            navigate("/userDashboard")
        }
        else{
            alert("Invalid Email or Password")
        }


        setemail("");
        setpassword("");
    }


  return (
    <div className="container">
    <form className="register-form" onSubmit={handlelogin}>
      <h2>Login Form</h2>
      <input type="email" placeholder="Enter Email" value={email}
        onChange={(e)=>setemail(e.target.value)}/>

      <input  type="password" placeholder="Enter Password" value={password}
        onChange={(e)=>setpassword(e.target.value)}/>

      <button>Login</button>

      <p>Not Registered? 
        <Link to='/reg'>Register here</Link>
      </p>

    </form>
    </div>
  )
}

export default Login