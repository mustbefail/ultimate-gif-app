/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework';
import RandomGif from './RandomGif.js';
import TrendGifs from './TrendGifs.js';
import Categories from './Categories.js';

export default function Navigation() {
  return (
    <nav className={'navbar navbar-expand-lg navbar-light bg-light mb-3'}>
      <div className={'container-fluid'}>
        <a className={'navbar-brand'} href="#">
          Ultimate Gif
        </a>
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
            <RandomGif />
            <TrendGifs />
            <Categories />
          </ul>
        </div>
      </div>
    </nav>
  );
}
