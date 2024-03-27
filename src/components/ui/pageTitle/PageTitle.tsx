import React, { FC } from 'react';
import s from './PageTitle.module.scss'

interface IPageTitle {
  title: string;
}

export const PageTitle: FC<IPageTitle> = ({title}) => {
  return (
    <div className={s.pagetitle__wrapper}>
      <h1 className={s.pagetitle__title}>{title}</h1>
    </div>
  );
}
