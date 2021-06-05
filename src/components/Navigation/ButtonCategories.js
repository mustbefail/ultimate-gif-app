/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';

export default function ButtonCategories({ setAction, setRoute }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="categories"
        onClick={({ target }) => {
          const { dataset } = target;
          setAction(dataset.action);
          setRoute(dataset.action);
        }}
      >
        Categories
      </a>
    </li>
  );
}
