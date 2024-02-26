import React, { FC } from 'react'

interface INewPost {
  id: string;
  title: string;
  text: string;
}

export const PostItem: FC<INewPost> = ({id, title, text}) => {
  return ( 
    <li key={id}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </li>
  );
}
