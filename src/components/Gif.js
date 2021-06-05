/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect } from '../framework';
import { backgrounds, getRandomElement } from '../utils';
import s from './Gifs/GifsContainer.scss';

export default function Gif({ title, height, width, url }) {
  const gifContainerStyles = {
    height,
    width,
    backgroundColor: getRandomElement(backgrounds),
  };

  return (
    <div
      style={gifContainerStyles}
      className={`m-2 rounded ${s['masonry-item']}`}
    >
      <img src={url} alt={title} className={'rounded'} />
    </div>
  );
}
