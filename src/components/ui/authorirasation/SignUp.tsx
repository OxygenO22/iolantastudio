import React from "react";
import { useAppDispatch } from "../../hooks/Hooks";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthorisationForm } from "../../ui/authForm/AuthorisationForm";
import { setUser } from "../../store/authorisationSlice/authorisationSlice";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/createpost");
      })
      .catch(console.error);
  };
  return (
    <div>
      <h1>Register</h1>
      <AuthorisationForm title="Register" handleClick={handleRegister} />
    </div>
  );
}
