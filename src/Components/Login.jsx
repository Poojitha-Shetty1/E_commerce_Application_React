import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let navigate=useNavigate();

   async function handlelogin(e){

        e.preventDefault()
        // let storedData = JSON.parse(localStorage.getItem("user"))
        // console.log(storedData.emial )
        // console.log(storedData.password)

        // if(!storedData){
        //     alert("No user found")
        //     navigate("/reg")
        //     return
        // }

        let response = await axios.post("http://localhost:8080/api/user/login",{uemail: email , upassword: password});
      console.log(response.data)
        // let token="awesdrctfvgybhnjim";

        if(response.data && response.data.uid){   
            // localStorage.setItem("token",token)
            localStorage.setItem("uid", response.data.uid);
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