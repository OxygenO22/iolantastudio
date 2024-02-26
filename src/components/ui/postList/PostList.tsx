import React from 'react'
import { useAppSelector } from '../../hooks/Hooks'
import { PostItem } from '../postItem/PostItem';

export const PostList = () => {
  const posts = useAppSelector(state => state.posts.list);
  return (
    <ul>
      {
        posts.map(post => 
          <PostItem
            key={post.id}
            {...post}
          />  
        )
      }
    </ul>
  )
}
