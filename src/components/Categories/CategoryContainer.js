/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../../framework/element';
import CategoryGif from './CategoryGif';
import dataStore from '../../data/dataStore';

export default function CategoryContainer() {
  const { error } = dataStore.uiState;
  const { state: cacheState, data } = dataStore.cache;
  let content = '';

  if (cacheState === 'processing') {
    content = 'Loading...';
  }
  if (cacheState === 'ready') {
    content = data.map(({ name, gif }) => (
      <CategoryGif name={name} gif={gif} />
    ));
  } else if (error) {
    content = error;
  }

  return (
    <div
      className={`d-flex flex-wrap justify-content-center align-content-center text-light`}
    >
      {content}
    </div>
  );
}
