import React from 'react'
import { MyButton } from '../../ui/buttos/MyButton/MyButton';
import { Link } from 'react-router-dom';

export const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Link to='/login'>
        <MyButton name={"Create post"} />
      </Link>
    </div>
  );
}
