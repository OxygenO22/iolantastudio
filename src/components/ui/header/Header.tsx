import React from 'react'
import { RouteButton } from '../buttos/routeButton/RouteButton';
import { RouteButtonData } from '../buttos/routeButton/RouteButtonData';

export const Header = () => {
  return (
    <div>
      {RouteButtonData.map((data) => (
        <RouteButton key={data.id} path={data.path} name={data.name} />
      ))}
    </div>
  );
}
