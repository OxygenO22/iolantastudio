import React, { FC } from 'react';
import s from './PostItem.module.scss';
import { useAppDispatch } from '../../hooks/Hooks';
import { deletePost } from '../../store/createPostSlice/CreatePostSlice';
import { useAuth } from '../../hooks/use-auth';

interface INewPost {
  id: string;
  title: string;
  text: string;
}

export const PostItem: FC<INewPost> = ({id, title, text}) => {
  const auth = useAuth();
  const dispatch = useAppDispatch()
  return (
    <li key={id} className={s.postitem__wrapper}>
      <div className={s.postitem__content}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.postitem__delete_wrapper}>
        {auth.isAuth && <div
          className={s.postitem__delete_inner}
          onClick={() => dispatch(deletePost(id))}
        >
          &#10006;
        </div>}
      </div>
    </li>
  );
}
