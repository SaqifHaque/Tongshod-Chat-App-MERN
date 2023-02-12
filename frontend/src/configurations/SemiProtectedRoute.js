import React from 'react'
import { useNavigate } from 'react-router-dom'

const SemiProtectedRoute = ({children, ...rest}) => {
    const isAuth = true;
    const user = { activated: false }
    const navigate = useNavigate();
  
    if(!isAuth) {
      navigate('/');
    } else if(isAuth && !user.activated){
      return (
        <>
            {children}
        </>
      )
    } else {
        navigate('/rooms')
    }
}

export default SemiProtectedRoute