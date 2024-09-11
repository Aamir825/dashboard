import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRout = ({children}) => {

  const navigate = useNavigate();
  
  useEffect(()=>{
    let userDetails = JSON.parse(localStorage.getItem("users")) ?? [];
    const loggedInUser = userDetails.find(user => user.email);
    if (!loggedInUser) {
      navigate("/signup");
    }
  })
  
  return children;
}

export default ProtectedRout