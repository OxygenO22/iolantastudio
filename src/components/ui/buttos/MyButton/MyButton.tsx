import React, { FC } from 'react';
import s from './MyButton.module.scss';

interface IMyButton {
  name: string;
  buttonType?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export const MyButton: FC<IMyButton> = ({ name, buttonType, onClick }) => {
  return (
    <button className={s.mybutton__wrapper} type={buttonType} onClick={onClick}>
      <p>{name}</p>
    </button>
  );
};
