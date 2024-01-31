import React from 'react'
import { useAppSelector } from '../../hooks/Hooks';
import s from './Aboutpage.module.scss';
import { Link } from 'react-router-dom';

export const Aboutpage = () => {
  const users = useAppSelector((state) => state.users.list);
  return (
    <ul>
      {users.map((user) => (
        <Link
          className={s.user__wrapper}
          key={user.id}
          to={`/about/${user.id}`}
        >
          <li className={s.users}>{user.name}</li>
        </Link>
      ))}
    </ul>
  );
}
