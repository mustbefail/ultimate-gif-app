import React from 'react';

export default function ButtonCategories({ setApiEndpoint }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="categories"
        onClick={({ target }) => {
          const { dataset } = target;
          setApiEndpoint(dataset.action);
        }}
      >
        Categories
      </a>
    </li>
  );
}
