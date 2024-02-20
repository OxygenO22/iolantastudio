import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from '../../ui/authorirasation/Login';

export const LoginPage = () => {
  return (
    <div>
      <Login />
      <p>
        Or <Link to='/register'>register</Link> 
      </p>
    </div>
  );
}
