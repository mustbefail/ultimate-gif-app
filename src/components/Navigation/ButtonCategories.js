import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ButtonCategories() {
  return (
    <li className={'nav-item'}>
      <NavLink activeClassName="active" className={'nav-link'} to="/categories">
        Categories
      </NavLink>
    </li>
  );
}
