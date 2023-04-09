import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../api/authAPI';
import logo from '../../logo.svg';
import { SET_AUTH } from '../../redux/features/auth/authSlice';
import Button from '../UIControls/Button';

const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);

  const logoutUser = async () => {
    try{
      const { data } = await logout();
      dispatch(SET_AUTH(data))
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <nav className="container py-0">
      <div className="flex flex-wrap items-center justify-between p-2">
        <Link className="flex items-center">
            <img className="w-12" src={logo} alt="logo"/>
            <span>Tongshod</span>
        </Link>
          <div className="float-right flex item-center gap-x-2 px-4">
            <h1>{user.name} user</h1>
            <Link to="/">
              {user.avatar ? 
                <img src={user.avatar} width="40" height="40" alt="avatar"/> : 
                <img src="../../assets/avatar.png" width="40" height="40" alt="avatar"/>
              }
            </Link>
          </div>
          {/* <div className="float-right">
            {isAuth && <Button title="Logout"/>}
          </div> */}
        </div>
    </nav>
  )
}

export default Navigation