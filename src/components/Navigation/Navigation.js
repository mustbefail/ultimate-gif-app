import React from 'react';
import { Link } from 'react-router-dom';
import ButtonRandomGif from './ButtonRandomGif.js';
import ButtonTrendGifs from './ButtonTrendGifs.js';
import ButtonCategories from './ButtonCategories.js';

export default function Navigation() {
  return (
    <nav className={'navbar navbar-expand-lg navbar-light bg-light mb-3'}>
      <div className={'container-fluid'}>
        <Link to="/" className={'navbar-brand'}>
          Ultimate Gif
        </Link>
        <button
          className={'navbar-toggler'}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={'navbar-toggler-icon'} />
        </button>
        <div className={'collapse navbar-collapse'} id="navbarTogglerDemo01">
          <ul className={'navbar-nav me-auto mb-2 mb-lg-0'}>
            <ButtonRandomGif />
            <ButtonTrendGifs />
            <ButtonCategories />
          </ul>
        </div>
      </div>
    </nav>
  );
}
