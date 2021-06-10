import React from 'react';
export default function ButtonTrendGifs({ setApiEndpoint }) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="trending"
        onClick={({ target }) => {
          const { dataset } = target;
          setApiEndpoint(dataset.action);
        }}
      >
        Trending Gifs
      </a>
    </li>
  );
}
