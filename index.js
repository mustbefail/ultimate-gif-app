import { search } from './fixtures/searchUrls.js';
import { kittens } from './fixtures/kitten.js';
import { trends } from './fixtures/trendUrls.js';
import { randomNumber } from './utils.js';

window.uGifApp = {
  cache: {
    serchedGifs: null,
  },
  uiState: {
    /*
     * search
     * trends
     * random
     * */
    state: null,
  },
};

window.renderApp = renderApp;
renderApp();

function renderApp() {
  document.getElementById('app').innerHTML = `${App()}`;
}

function App() {
  return `
    ${Navigation()}
    ${RandomGif()}
    ${SearchGif()}
    ${TrendsGif()}
    ${SearchContent()}
  `;
}

function Navigation() {
  const actions = ['random', 'trends', 'search'];
  const navButtons = actions
    .map(
      (action) =>
        `<button
          onclick="(window.uGifApp.uiState.state = this.value); window.renderApp();"
          value="${action}"
        >
        ${action}
        </button>`,
    )
    .join('');
  return `<div class="navigation">
    ${navButtons}
    </div>`;
}

function TrendsGif() {
  if (window.uGifApp.uiState.state !== 'trends') return '';
  return `
    <div>
      ${getGifs(trends)}
    </div>
  `;
}

function getGifs(gifsCol) {
  const content = gifsCol.map((gif) => `<img src="${gif}">`).join('');
  return content;
}

function SearchGif() {
  if (window.uGifApp.uiState.state !== 'search') return '';

  return `
    <div>
      <input type="text">
      <button> Search </button>
    </div>
  `;
}

function SearchContent() {
  return `
    <div>
    </div>
  `;
}

function RandomGif() {
  if (window.uGifApp.uiState.state !== 'random') return '';
  return `
    <div>
      <img src="${getRandomGif()}">
    </div>
  `;
}

function getRandomGif() {
  const randomIdx = randomNumber(trends.length);
  return trends[randomIdx];
}
