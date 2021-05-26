/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';

export default function RandomGif() {
  return (
    <li className={'nav-item'}>
      <a className={'nav-link'} href="#" data-action="random">
        Random
      </a>
    </li>
  );
}
