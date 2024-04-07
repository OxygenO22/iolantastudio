import React, { FC, useState } from "react";
import { MyButton } from "../buttos/MyButton/MyButton";
import { MyInput } from "../input/MyInput";
import s from './AuthorisationForm.module.scss';

interface IAuthorisationForm {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

export const AuthorisationForm: FC<IAuthorisationForm> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={s.form__wrapper}>
      <MyInput
        title={"Your Email:"}
        classNameLabel={s.label}
        classNameSpan={s.title}
        classNameInput={s.form__input}
        value={email}
        type={"email"}
        placeholder={"Enter your email"}
        onChange={(prop) => setEmail(prop)}
        isTextarea={false}
      />
      <MyInput
        title={"Your Password:"}
        classNameLabel={s.label}
        classNameSpan={s.title}
        classNameInput={s.form__input}
        value={pass}
        type={"password"}
        placeholder={"Enter your password"}
        onChange={(prop) => setPass(prop)}
        isTextarea={false}
      />
      <MyButton name={title} onClick={() => handleClick(email, pass)} />
    </div>
  );
};
