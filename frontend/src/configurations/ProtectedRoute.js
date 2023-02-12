import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const isAuth = false;
    const navigate = useNavigate();
  
    if(isAuth) {
      
      return (
        <>
            {children}
        </>
      )
    } else {
        navigate('/');
    }
}

export default ProtectedRoute;