import React from 'react';
import s from './ProceduresPage.module.scss';
import { ProceduresItem } from './ProceduresItem';
import { PageTitle } from '../../ui/pageTitle/PageTitle';

export const ProceduresPage = () => {
  return (
    <div className={s.procpage__wrapper}>
      <PageTitle title='Procedures' />
      <ProceduresItem />
    </div>
  );
}
