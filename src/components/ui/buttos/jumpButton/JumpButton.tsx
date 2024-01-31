import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './JumpButton.module.scss';

export const JumpButton = () => {
  const nav = useNavigate();
  return (
    <div className={s.jumpbutton__wrapper}>
      <div className={s.jumpbutton} onClick={() => nav(-1)}>
        &larr;
      </div>
    </div>
  );
}
