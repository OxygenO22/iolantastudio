import React from 'react';
import { congrats } from './HomepageDate';
import s from './Homepage.module.scss';
import { EmailContactForm } from '../../ui/emailContactForm/EmailContactForm';


export const Homepage = () => {
  return (
    <div className={s.homepage__wrapper}>
      <h1 className={s.homepage__title}>Homepage</h1>
      <div>
        {congrats.map((date) => (
          <p key={date.id}>{date.text}</p>
        ))}
      </div>
      <div>
        <h2>To connect with me you can fill the form</h2>
        <EmailContactForm />
      </div>
    </div>
  );
}
