import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/Hooks';
import s from './Singlepage.module.scss';
import { JumpButton } from '../../ui/buttos/jumpButton/JumpButton';


export const Singlepage = () => {
  const user = useAppSelector((state) => state.users.list);
  const {id} = useParams();
  return (
    <>
      {user.map(
        (user) =>
          user.id === id && (
            <div className={s.singlepage__wrapper} key={user.id}>
              <JumpButton />
              <h2 className={s.singlepage__username}>
                {user.name + " " + user.username}
              </h2>
              <div className={s.singlepage__email_wrapper}>
                <p className={s.singlepage__email_text}>
                  <span className={s.singlepage__email_title}>Email:</span>
                  {user.email + ";"}
                </p>
              </div>
              <div className={s.singlepage__email_wrapper}>
                <p className={s.singlepage__email_text}>
                  <span className={s.singlepage__email_title}>Address:</span>
                  {user.address.city +
                    "; " +
                    user.address.street +
                    "; " +
                    user.address.suite +
                    ";"}
                </p>
              </div>
              <div className={s.singlepage__email_wrapper}>
                <p className={s.singlepage__email_text}>
                  <span className={s.singlepage__email_title}>ZipCode:</span>
                  {user.address.zipcode + ";"}
                </p>
              </div>
              <div className={s.singlepage__email_wrapper}>
                <p className={s.singlepage__email_text}>
                  <span className={s.singlepage__email_title}>Locacion:</span>
                  {"lat: " +
                    user.address.geo.lat +
                    ";" +
                    " lng: " +
                    user.address.geo.lng +
                    ";"
                  }
                </p>
              </div>
            </div>
          )
      )}
    </>
  );
}
