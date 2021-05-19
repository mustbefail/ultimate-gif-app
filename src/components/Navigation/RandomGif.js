/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
export default function RandomGif() {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="random"
        onclick={(e) => window.performSearch(e.target.dataset.action)}
      >
        Random
      </a>
    </li>
  );
}
