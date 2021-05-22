import { getGiphyReqUrl } from './giphyApi.js';
import dataStore from '../data/dataStore.js';
import renderApp from '../framework/render.js';

function loadData(action, searchParams) {
  const url = getGiphyReqUrl(action, searchParams);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export default function performSearch(action, searchParams) {
  dataStore.cache.state = 'processing';
  renderApp();

  loadData(action, searchParams)
    .then(({ data }) => {
      dataStore.cache.state = 'ready';

      if (data) {
        dataStore.cache.data = data;
      }
    })
    .catch((e) => {
      dataStore.uiState.error = `Some error occurred: ${e}`;
    })
    .finally(renderApp);
}
