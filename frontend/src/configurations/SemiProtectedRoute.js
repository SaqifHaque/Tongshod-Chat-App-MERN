import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectIsAuth, selectUser } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';

const SemiProtectedRoute = ({children, ...rest}) => {
    const isAuth = useSelector(selectIsAuth);
    const { activated } = useSelector(selectUser);
    const navigate = useNavigate();
    
    if(!isAuth) {
      navigate('/');
    } else if(isAuth && !activated){
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