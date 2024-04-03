import React from 'react'
import { RouteButton } from '../buttos/routeButton/RouteButton';
import { RouteButtonData } from '../buttos/routeButton/RouteButtonData';
import { LogInIcon } from '../logInIcon/LogInIcon';
import s from './Header.module.scss'
import { AuthButtons } from '../buttos/authButtons/AuthButtons';
import Icon from '../../../pictures/icon/icon_3.jpg';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const nav = useNavigate();
  return (
    <div className={s.header__wrapper}>
      <div className={s.icon__wrapper}>
        <div className={s.icon__picture_wrapper} onClick={() => nav('/')}>
          <img className={s.icon__picture} src={Icon} alt="Icon" />
        </div>
      </div>
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
