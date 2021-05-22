/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import performSearch from '../../data/gifsData';

export default function TrendGifs() {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="trending"
        onClick={(e) => performSearch(e.target.dataset.action)}
      >
        Trending Gifs
      </a>
    </li>
  );
}
