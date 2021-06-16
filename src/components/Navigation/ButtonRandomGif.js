import React from 'react';
import { NavLink } from 'react-router-dom';
export default function ButtonRandomGif() {
  return (
    <li className={'nav-item'}>
      <NavLink to="/random" activeClassName="active" className={'nav-link'}>
        Random
      </NavLink>
    </li>
  );
}
