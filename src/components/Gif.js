import React from 'react';
import { backgrounds, getRandomElement } from '../utils';

export default function Gif({
  title,
  url,
  height,
  width,
  id,
  isLoading,
  setApiEndpoint,
  setSingleGifID,
}) {
  const gifStyle = {
    height,
    width,
    borderRadius: 5,
    backgroundColor: getRandomElement(backgrounds),
  };
  const linkHandle = (e) => {
    e.preventDefault();
    setApiEndpoint('single');
    setSingleGifID(id);
  };
  return (
    <div style={gifStyle}>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <a onClick={linkHandle}>
          <img src={url} alt={title} className={'rounded'} />
        </a>
      )}
    </div>
  );
}
