import React from 'react';
import { backgrounds, getRandomElement } from '../utils';

export default function Gif({ title, url, height, width, isLoading }) {
  const gifStyle = {
    height,
    width,
    borderRadius: 5,
    backgroundColor: getRandomElement(backgrounds),
  };

  return (
    <div style={gifStyle}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={url} alt={title} className={'rounded'} />
      )}
    </div>
  );
}
