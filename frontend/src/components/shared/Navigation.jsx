import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

const Navigation = () => {
  return (
    <nav className="container px-20 py-0">
        <Link className="flex flex-row items-center">
            <img className="w-12" src={logo} alt=""/>
            <span>Tongshod</span>
        </Link>
    </nav>
  )
}

export default Navigation