import React from 'react'
import { useAuth } from '../../hooks/use-auth'

export const LogInIcon = () => {
  const { isAuth, email } = useAuth();
  return <div>{isAuth ? email : "Guest"}</div>;
}
