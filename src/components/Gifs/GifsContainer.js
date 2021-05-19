/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Gif from './Gif.js';
import { getUrls } from '../../data/giphyApi.js';
import styles from './GifsContainer.scss';

export default function GifsContainer() {
  const { state, error } = window.dataStore.uiState;
  const { gifs } = window.dataStore.cache;
  let content = '';

  if (state === 'processing') {
    content = 'Loading...';
  }
  if (state === 'ready') {
    const urls = getUrls(gifs);
    content = urls.map(Gif);
  } else if (error) {
    content = error;
  }

  return (
    <div
      className={
        'd-flex flex-wrap justify-content-start align-content-start text-light ' +
        styles.gifContainer
      }
    >
      {content}
    </div>
  );
}
