import React, { FC } from 'react';
import s from './MyButton.module.scss';

interface IMyButton {
  name: string;
  onClick?: () => void;
}

export const MyButton: FC<IMyButton> = ({name, onClick}) => {
  return (
    <div className={s.mybutton__wrapper} onClick={onClick}>
      <p>{name}</p>
    </div>
  );
}
