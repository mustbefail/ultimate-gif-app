/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
export default function TrendGifs() {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="trending"
        onclick={(e) => window.performSearch(e.target.dataset.action)}
      >
        Trending Gifs
      </a>
    </li>
  );
}
