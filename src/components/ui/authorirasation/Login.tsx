import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/Hooks";
import { setUser } from "../../store/authorisationSlice/authorisationSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthorisationForm } from "../../ui/authForm/AuthorisationForm";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    if (email !== '' && password !== '' ) {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(-1);
      })
      .catch(() => alert('Invalid user'));
    } else {
      alert('Fill all fields!')
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <AuthorisationForm title="Sign In" handleClick={handleLogin} />
    </div>
  );
}
