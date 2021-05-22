/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import performSearch from '../../data/gifsData';
import dataStore from '../../data/dataStore';

export default function Categories() {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="categories"
        onClick={({ target }) => {
          dataStore.uiState.state = target.dataset.action;
          performSearch(target.dataset.action);
        }}
      >
        Categories
      </a>
    </li>
  );
}
