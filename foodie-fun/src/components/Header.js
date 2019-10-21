import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
    
      {console.log(localStorage.getItem('token'))}

      <div className='logo'>
        <h3>Foodie Fun</h3>
      </div>

      <div className='links'>
        <NavLink to='/protected'>My Meals</NavLink>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </div>
  )
}

export default Header
