import React from 'react';
import { NavLink } from 'react-router-dom';
export default function ButtonTrendGifs() {
  return (
    <li className={'nav-item'}>
      <NavLink activeClassName="active" className={'nav-link'} to="/trending">
        Trending Gifs
      </NavLink>
    </li>
  );
}
