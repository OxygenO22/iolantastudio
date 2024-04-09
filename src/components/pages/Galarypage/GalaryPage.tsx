import React, { useEffect, useState } from 'react';
import s from './GalaryPage.module.scss';
import { PageTitle } from '../../ui/pageTitle/PageTitle';

const url = '';

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, []);
  return posts;
}

export const GalaryPage = () => {

  const gramz = useInstagram();
  return (
    <div className={s.galary__wrapper}>
      <PageTitle title="Galary" />
      <div>
        {gramz.map((gram: any) => (
          <a href={gram.url} key={gram.id}>
            <img src={gram.thumbnail} alt={gram.caption} />
          </a>
        ))}
      </div>
    </div>
  );
}
