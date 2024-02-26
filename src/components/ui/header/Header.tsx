import React from 'react'
import { RouteButton } from '../buttos/routeButton/RouteButton';
import { RouteButtonData } from '../buttos/routeButton/RouteButtonData';
import { LogInIcon } from '../logInIcon/LogInIcon';
import s from './Header.module.scss'
import { Link } from 'react-router-dom';
import { MyButton } from '../buttos/MyButton/MyButton';
import { AuthButtons } from '../buttos/authButtons/AuthButtons';

export const Header = () => {
  return (
    <div className={s.header__wrapper}>
      <div className={s.icon__wrapper}>ICON</div>
      <div className={s.routebutton__wrapper}>
        {RouteButtonData.map((data) => (
          <RouteButton key={data.id} path={data.path} name={data.name} />
        ))}
      </div>
      <div className={s.loginicon__wrapper}>
        <LogInIcon />
      </div>
      <div className={s.loginbutton__wrapper}>
        <AuthButtons />
      </div>
    </div>
  );
}
