import React from 'react';
import s from './ProceduresItem.module.scss';
import { ProceduresItemData } from './ProceduresItemData';

export const ProceduresItem = () => {
  return (
    <div className={s.procitem__wrapper}>
      {ProceduresItemData.map((data) => (
        <div key={data.id} className={s.procitem__item}>
          <div className={s.procitem__pic_wrapper}>
            <img className={s.procitem__pic} src={data.src} alt={data.alt} />
          </div>
          <div className={s.procitem__inner}>
            <div className={s.procitem__title_wrapper}>
                <h3 className={s.procitem__title}>{data.title}</h3>
            </div>
            <div className={s.procitem__text_wrapper}>
              <p className={s.procitem__text}>{data.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
