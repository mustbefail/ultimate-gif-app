/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';

export default function TrendGifs({ setAction }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="trending"
        onClick={(event) => {
          setAction(event.target.dataset.action);
        }}
      >
        Trending Gifs
      </a>
    </li>
  );
}
