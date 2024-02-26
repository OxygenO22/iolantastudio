import React from 'react'
import { Link } from 'react-router-dom';
import { MyButton } from '../MyButton/MyButton';
import { useAuth } from '../../../hooks/use-auth';
import { useAppDispatch } from '../../../hooks/Hooks';
import { removeUser } from '../../../store/authorisationSlice/authorisationSlice';

export const AuthButtons = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  return (
    <>
      {!isAuth ?
      <Link to="/login">
        <MyButton name={"Log In"} />
      </Link>
      :
      <MyButton name={`Log Out`} onClick={() => dispatch(removeUser())} />
      }
    </>
  );
}
