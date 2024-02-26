import React, { useState } from 'react';
import s from './CreatePostInput.module.scss';
import { MyButton } from '../buttos/MyButton/MyButton';
import { useAppDispatch } from '../../hooks/Hooks';
import { addNewPost } from '../../store/createPostSlice/CreatePostSlice';
import { useNavigate } from 'react-router-dom';



export const CreatePostInput = () => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addPost = () => {
    if (title !== '' && text !== '') {
      dispatch(addNewPost({title, text}))
      setTitle('');
      setText('');
      navigate("/posts");
    } else {
      alert('You should fill all fields of form')
    }
  }

  return (
    <div className={s.createpost__wrapper}>
      <label className={s.input__wrapper}>
        <p className={s.input__title}>Title</p>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className={s.input__wrapper}>
        <p className={s.input__title}>Text</p>
        <textarea
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <MyButton name="Add post" onClick={addPost} />
    </div>
  );
}
