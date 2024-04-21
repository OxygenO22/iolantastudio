import React, { useEffect, useState } from 'react';
import s from './GalaryPage.module.scss';
import { PageTitle } from '../../ui/pageTitle/PageTitle';
import { InstaFeed } from '../../ui/instagram/InstaFeed';



export const GalaryPage = () => {
  return (
    <div className={s.galary__wrapper}>
      <PageTitle title="Galary" />
      <div>
        <InstaFeed />
      </div>
    </div>
  );
}
