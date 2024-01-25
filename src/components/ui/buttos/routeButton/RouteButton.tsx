import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./RouteButton.module.scss";

interface IRouteButton {
  path: string;
  name: string;
}

export const RouteButton: FC<IRouteButton> = (props) => {
  const { path, name } = props; 
  return <NavLink className={s.navlink} to={path}>{name}</NavLink>;
};
