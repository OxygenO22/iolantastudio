import React, { FC, useState } from "react";
import { MyButton } from "../buttos/MyButton/MyButton";

interface IAuthorisationForm {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

export const AuthorisationForm: FC<IAuthorisationForm> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <MyButton name={title} onClick={() => handleClick(email, pass)} />
    </div>
  );
};
