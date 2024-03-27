import React from 'react';
import s from './ProceduresPage.module.scss';
import { ProceduresItem } from './ProceduresItem';

export const ProceduresPage = () => {
  return (
    <div className={s.procpage__wrapper}>
      <div className={s.procpage__title_wrapper}>
        <h1>ProceduresPage</h1>
      </div>
      <ProceduresItem />
    </div>
  );
}
