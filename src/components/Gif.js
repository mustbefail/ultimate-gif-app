import React from 'react';
import { backgrounds, getRandomElement } from '../utils';

export default function Gif({ title, url, height, width }) {
  const gifStyle = {
    height,
    width,
    borderRadius: 5,
    backgroundColor: getRandomElement(backgrounds),
  };
  return (
    <div style={gifStyle}>
      <img src={url} alt={title} className={'rounded'} />
    </div>
  );
}
