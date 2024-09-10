import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRout = ({children}) => {

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("Admin") === 'true';
//   useEffect(()=>{
//   if(!isAuthenticated){
//     return navigate("/login");
//   }
//   },[isAuthenticated])
  return children;
}

export default ProtectedRout