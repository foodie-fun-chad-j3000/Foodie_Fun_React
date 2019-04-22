import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
      <Link to='/protected'>My Places</Link>
      <Link to='/register'>Sign Up</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Header
