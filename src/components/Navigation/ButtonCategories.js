/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';

export default function Categories({ setAction }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="categories"
        onClick={(e) => {
          setAction(e.target.dataset.action);
        }}
      >
        Categories
      </a>
    </li>
  );
}
