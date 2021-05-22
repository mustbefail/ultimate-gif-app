/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import performSearch from '../../data/gifsData';

export default function RandomGif() {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="random"
        onClick={(e) => performSearch(e.target.dataset.action)}
      >
        Random
      </a>
    </li>
  );
}
