import React from 'react';
import { NavLink } from 'react-router-dom';
const thing = localStorage.getItem('token');
// const thing = null
console.log("token", localStorage.getItem('token'));

const Header = () => {
  return (
    <div className='header'>
      {console.log(localStorage.getItem('token'))}
      <div className='logo'>
        <h3>Foodie Fun</h3>
      </div>

      <div className='links'>
        <NavLink to='/protected'>My Meals</NavLink>
        <NavLink to='/register'>{thing == true ? "Sign Up" : "Welcome"}</NavLink>
        <NavLink to='/login'>{thing == true ? "Login" : ""}</NavLink>
      </div>


    </div>
  )
}

export default Header
