import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../api/authAPI';
import logo from '../../logo.svg';
import { SET_AUTH } from '../../redux/features/auth/authSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const logoutUser = async () => {
    try{
      const { data } = await logout();
      dispatch(SET_AUTH(data))
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <nav className="container px-20 py-0">
        <Link className="flex flex-row items-center">
            <img className="w-12" src={logo} alt=""/>
            <span>Tongshod</span>
        </Link>
        <button onClick={logoutUser}>Logout</button>
    </nav>
  )
}

export default Navigation