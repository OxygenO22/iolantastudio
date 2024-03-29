import React from 'react';
import s from './Blogpage.module.scss';
import { PageTitle } from '../../ui/pageTitle/PageTitle';

export const Blogpage = () => {
  return (
    <div className={s.blogpage__wrapper}>
      <PageTitle title='Blogpage' />
    </div>
  );
}
