import React from 'react'
import { useNavigate } from 'react-router-dom'
import { selectIsAuth } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';

const GuestRoute = ({children}) => {
    const isAuth = useSelector(selectIsAuth);
    const navigate = useNavigate();
  
    if(isAuth) {
      navigate('/activate');
    } else {
      return (
        <>
            {children}
        </>
      )
    }
}

export default GuestRoute;