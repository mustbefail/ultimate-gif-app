import Gif from './Gif.js';
import { getUrls } from '../../data/giphyApi';

export default function GifsContainer() {
  const { state, error } = window.dataStore.uiState;
  const { gifs } = window.dataStore.cache;
  let content = '';

  if (state === 'processing') {
    content = 'Loading...';
  }
  if (state === 'ready') {
    const urls = getUrls(gifs);
    content = urls.map(Gif).join('');
  } else if (error) {
    content = error;
  }

  return `
    <div class="d-flex flex-wrap justify-content-center text-light">
    ${content}
    </div>`;
}
