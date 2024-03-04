import React from 'react';
import { congrats } from './HomepageDate';
import s from './Homepage.module.scss';


export const Homepage = () => {
  return (
    <div className={s.homepage__wrapper}>
      <h1 className={s.homepage__title}>Homepage</h1>
      <p>
        {congrats.map((date) => (
          <p key={date.id}>{date.text}</p>
        ))}
      </p>
    </div>
  );
}
