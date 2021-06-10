import React from 'react';
export default function ButtonRandomGif({
  setApiEndpoint,
  setNewLoad,
  newLoad,
}) {
  return (
    <li className={'nav-item'}>
      <a
        className={'nav-link'}
        href="#"
        data-action="random"
        onClick={({ target }) => {
          const { dataset } = target;
          setApiEndpoint(dataset.action);
          setNewLoad(!newLoad);
        }}
      >
        Random
      </a>
    </li>
  );
}
