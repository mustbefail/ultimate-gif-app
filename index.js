import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { getGiphyReqUrl, transformDataToImgTag } from './utils.js';

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
  const actions = ['random', 'trending'];
  const navButtons = actions
    .map(
      (action) =>
        `
      <li class="nav-item">
          <a class="nav-link" href="#" data-action="${action}" onclick="window.performSearch(this.dataset.action)">${action}</a>
      </li>
      `,
    )
    .join('');
  return `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
      ${navButtons}
      </ul>
      ${SearchGif()}
    </div>
  </div>
</nav>
  `;
}

function SearchGif() {
  return `
    <form class="d-flex mb-0">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onchange="window.performSearch(this.type, { q: this.value, limit: 50 })"
      >
      <button
        class="btn btn-outline-success"
        type="button"
      >
      Search
      </button>
    </form>
    `;
}

function GifsContainer() {
  const { state, error } = window.uGifApp.uiState;
  const { gifs } = window.uGifApp.cache;
  let content = '';

  if (state === 'processing') content = 'Loading...';
  if (gifs) {
    content = transformDataToImgTag(gifs);
  } else if (error) {
    content = error;
  }
  return `<div class="container bg-light">
    ${content}
    </div>`;
}
