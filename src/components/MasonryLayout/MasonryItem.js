import React from 'react';
import s from './MasonryContainer.scss';
import { backgrounds, getRandomElement } from '../../utils';

export default function MasonryItem({ height, width, children }) {
  const gifStyles = {
    height,
    width,
    backgroundColor: getRandomElement(backgrounds),
  };
  return (
    <div className={`m-2 rounded ${s['masonry-item']}`} style={gifStyles}>
      {children}
    </div>
  );
}
s;
