/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';

export default function TrendGifs() {
  return (
    <li className={'nav-item'}>
      <a className={'nav-link'} href="#" data-action="trending">
        Trending Gifs
      </a>
    </li>
  );
}
