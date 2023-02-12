import React from 'react'
import { useNavigate } from 'react-router-dom'

const GuestRoute = ({children}) => {
    const isAuth = false;
    const navigate = useNavigate();
  
    if(isAuth) {
      navigate('/rooms');
    } else {
      return (
        <>
            {children}
        </>
      )
    }
}

export default GuestRoute;