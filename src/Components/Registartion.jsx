import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Registration() {

    const [name, setname] = useState("")
    const [emial, setemial] = useState("")
    const [number, setnumber] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    let navigate=useNavigate();

    async function handlesubmit(e){
        e.preventDefault();

        if(name === "" || emial === "" || number === "" || password === "" || confirmpassword === ""){
            alert("Please fill all fields")
            return;
        }
        if(number.length !== 10){
            alert("Phone number must contain 10 digits")
            return;
        }
        if(password.length < 3){
            alert("Password must contain minimum 6 characters")
            return;
        }
        if(password !== confirmpassword){
            alert("Passwords do not match")
            return;
        }

        let response = await axios.post("http://localhost:8080/api/user/register",{uname: name,
          uemail: emial,
          unumber: number,
          upassword: password})

        alert(response.data)
        if(response.data==="Registered successfully"){
          navigate("/login")
        }

        // let obj={
        //     name,emial,number,password
        // }
        // console.log(obj)
        // localStorage.setItem("user", JSON.stringify(obj))

        // alert("Registration successfull!!!!!!!")
   

        setname("")
        setemial("")
        setnumber("")
        setpassword("")
        setconfirmpassword("")
    }
    
  return (
    <div className="container">
    <form className="register-form" onSubmit={handlesubmit}>
      <h2>Registration Form</h2>
      <input type="text" placeholder="Enter Name" onChange={(e=>setname(e.target.value))} value={name}/>
      <input type="email" placeholder="Enter Email" onChange={(e=>setemial(e.target.value))} value={emial}/>
      <input type="number" placeholder="Enter Phone Number" onChange={(e=>setnumber(e.target.value))} value={number}/>
      <input type="password" placeholder="Enter Password" onChange={(e=>setpassword(e.target.value))} value={password}/>
      <input type="password" placeholder="Re-type Password" onChange={(e=>setconfirmpassword(e.target.value))} value={confirmpassword}/>
      <p>Already Registered? 
        <Link to='/login'>Login</Link>
      </p>


      <button>Register</button>

    </form>

  </div>
  )
}

export default Registration