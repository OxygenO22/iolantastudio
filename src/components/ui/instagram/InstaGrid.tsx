import React from 'react';
import s from './InstaGrid.module.scss';
import { InstaItem } from './InstaFeed';

interface InstaGridProps {
  items: InstaItem[];
}

export const InstaGrid = ({items}: InstaGridProps) => {

  if(items.length === 0) {
    return (
      <div>
        <p>No data</p>
      </div>
    )
  }
  return (
    <div>
      {items.map(item => (
        <img src={item.mediaUrl} alt="pocture" />
      ))}
    </div>
  )
}
