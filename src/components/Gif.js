/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, useEffect } from '../../framework';
import { getRandomElement } from '../../utils';
import s from './GifsContainer.scss';

export default function SearchedGif({ title, height, width, url }) {
  const backgrounds = ['#eb4d4b', '#6ab04c', '#f0932b', '#f9ca24'];
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
