/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import Gif from './Gif.js';
import { getImgUrls } from '../../data/giphyApi.js';
import dataStore from '../../data/dataStore';
import style from './GifsContainer.scss';

export default function GifsContainer() {
  const { error } = dataStore.uiState;
  const { state: cacheState, data } = dataStore.cache;
  let content = '';

  if (cacheState === 'processing') {
    content = 'Loading...';
  }
  if (cacheState === 'ready') {
    const urls = getImgUrls(data);
    content = urls.map(Gif);
  } else if (error) {
    content = error;
  }

  return (
    <div className={`d-flex justify-content-center`}>
      <div
        className={`d-flex flex-wrap justify-content-start align-content-start text-light ${style.gifContainer}`}
      >
        {content}
      </div>
    </div>
  );
}
