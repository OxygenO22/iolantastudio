import React from 'react';
import s from './GalaryPage.module.scss';
import { PageTitle } from '../../ui/pageTitle/PageTitle';

export const GalaryPage = () => {
  return (
    <div className={s.galary__wrapper}>
      <PageTitle title="Galary" />
    </div>
  );
}
