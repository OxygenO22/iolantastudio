import React from 'react'
import { Link } from 'react-router-dom';
import { SignUp } from '../../ui/authorirasation/SignUp';

export const RegisterPage = () => {
  return (
    <div>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
