/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';

export default function RandomGif({ setAction }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="random"
        onClick={(e) => setAction(e.target.dataset.action)}
      >
        Random
      </a>
    </li>
  );
}
