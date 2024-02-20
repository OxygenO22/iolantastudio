import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks/Hooks';
import { removeUser } from '../../store/authorisationSlice/authorisationSlice';
import { MyButton } from '../../ui/buttos/MyButton/MyButton';

export const CreatePostPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>CreatePostPage</h1>
      <MyButton
        name={`Log out from ${email}`}
        onClick={() => dispatch(removeUser())}
      />
    </div>
  ) : (
    <>
      {
        navigate("/posts")
      }
    </>
  );
}
