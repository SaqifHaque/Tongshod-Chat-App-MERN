import React from 'react'
import { useNavigate } from 'react-router-dom'
import { selectIsAuth, selectUser } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({children}) => {
  const isAuth = useSelector(selectIsAuth);
  const { activated } = useSelector(selectUser);
  const navigate = useNavigate();
  
  if(isAuth && activated) {
    return (
      <>
          {children}
      </>
    )
  } else if (isAuth && !activated) {
    navigate('/activate')
  } else {
      navigate('/');
  }
}

export default ProtectedRoute;