import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { getGiphyReqUrl, getUrls } from './utils.js';
import styles from './src/scss/main.scss';

window.uGifApp = {
  cache: {
    searchedGifs: null,
  },
  uiState: {
    /*
     * processing
     * ready
     *
     * */
    state: null,
    error: null,
  },
};

window.renderApp = renderApp;
window.loadData = loadData;
window.performSearch = performSearch;

renderApp();

function renderApp() {
  document.getElementById('app').innerHTML = `${App()}`;
}

function App() {
  return `
    <div class="container">
      ${Navigation()}
      ${GifsContainer()}
    </div>
    `;
}

function loadData(action, searchParams) {
  const url = getGiphyReqUrl(action, searchParams);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

function performSearch(action, searchParams) {
  window.uGifApp.uiState.state = 'processing';

  window
    .loadData(action, searchParams)
    .then(({ error, data }) => {
      window.uGifApp.uiState.state = 'ready';

      if (error) {
        window.uGifApp.uiState.error = error;
      } else if (data) {
        window.uGifApp.cache.gifs = data;
      }
    })
    .catch(() => {
      window.uGifApp.uiState.error = 'Some error occurred.';
    })
    .finally(window.renderApp);
}

function Navigation() {
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

function RandomGif() {
  return `
      <li class="nav-item">
          <a class="nav-link" href="#" data-action="random" onclick="window.performSearch(this.dataset.action)">Random</a>
      </li>
      `;
}
function TrendGifs() {
  return `
      <li class="nav-item">
          <a class="nav-link" href="#" data-action="trending" onclick="window.performSearch(this.dataset.action)">Trending Gifs</a>
      </li>
      `;
}

function SearchGif() {
  return `
    <div class="d-flex mb-0">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onchange="window.performSearch(this.type, { q: this.value })"
      >
      <button
        class="btn btn-outline-success"
        type="button"
      >
      Search
      </button>
    </div>
    `;
}

function Gif(url) {
  return `<img class="m-1" src="${url}" />`;
}

function GifsContainer() {
  const { state, error } = window.uGifApp.uiState;
  const { gifs } = window.uGifApp.cache;
  let content = '';

  if (state === 'processing') content = 'Loading...';
  if (gifs) {
    const urls = getUrls(gifs);
    content = urls.map(Gif).join('');
  } else if (error) {
    content = error;
  }

  return `
    <div class="d-flex flex-wrap justify-content-center ${styles.gifContainer}">
    ${content}
    </div>`;
}
