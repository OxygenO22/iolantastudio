import React from 'react';
import { congrats } from './HomepageDate';
import s from './Homepage.module.scss';
import { EmailContactForm } from '../../ui/emailContactForm/EmailContactForm';
import Me from '../../../pictures/me/me.jpg';


export const Homepage = () => {
  return (
    <div className={s.homepage__wrapper}>
      <h1 className={s.homepage__title}>Homepage</h1>
      <div className={s.homepage__inner}>
        <div className={s.homepage__picture_wrapper}>
          <img className={s.homepage__picture} src={Me} alt="Me" />
        </div>

        <div className={s.homepage__text_wrapper}>
          {congrats.map((date) => (
            <p className={s.homepage__text} key={date.id}>
              {date.text}
            </p>
          ))}
        </div>
        <div className={s.homepage__form_wrapper}>
          <div className={s.homepage__form_title}>
            <h2>To connect with me you can fill the form</h2>
          </div>
          <div className={s.homepage__form}>
            <EmailContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
