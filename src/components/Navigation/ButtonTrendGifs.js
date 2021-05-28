/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework';

export default function ButtonTrendGifs({ setAction, setRoute }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="trending"
        onClick={({ target }) => {
          const { dataset } = target;
          setAction(dataset.action);
          setRoute(dataset.action);
        }}
      >
        Trending Gifs
      </a>
    </li>
  );
}
