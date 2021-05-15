import RandomGif from './RandomGif.js';
import TrendGifs from './TrendGifs.js';
import SearchGif from './SearchGif.js';

export default function Navigation() {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ultimate Gif</a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          ${RandomGif()}
          ${TrendGifs()}
          </ul>
          ${SearchGif()}
        </div>
      </div>
    </nav>
  `;
}
