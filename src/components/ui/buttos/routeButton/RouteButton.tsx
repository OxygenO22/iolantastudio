import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IRouteButton {
  path: string;
  name: string;
}

export const RouteButton: FC<IRouteButton> = (props) => {
  const { path, name } = props; 
  return <NavLink to={path}>{name}</NavLink>;
};
