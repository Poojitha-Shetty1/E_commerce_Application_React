import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {

    let navigate = useNavigate();

    useEffect(()=>{
        let token=localStorage.getItem("token");
        if(!token){
          navigate("/login");
          return;
        }

    },[])

  return (
    <div>
        {props.children}

    </div>
  )
}

export default ProtectedRoute