import React, { useEffect } from 'react'
import { MyButton } from '../../ui/buttos/MyButton/MyButton';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks';
import { fetchPosts } from '../../store/createPostSlice/CreatePostSlice';
import { PostList } from '../../ui/postList/PostList';

export const PostsPage = () => {
  const auth = useAuth();
  const {loading, error} = useAppSelector(state => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  return (
    <div>
      <h1>Posts</h1>
      
      <PostList />

      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error} </h2>}


      {auth.isAuth &&
        <Link to="/createpost">
          <MyButton name={"Create post"} />
        </Link>
      }
    </div>
  );
}
