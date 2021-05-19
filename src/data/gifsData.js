import { getGiphyReqUrl } from './giphyApi.js';

function loadData(action, searchParams) {
  const url = getGiphyReqUrl(action, searchParams);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export default function performSearch(action, searchParams) {
  window.dataStore.uiState.state = 'processing';
  window.renderApp();

  loadData(action, searchParams)
    .then(({ data }) => {
      window.dataStore.uiState.state = 'ready';

      if (data) {
        window.dataStore.cache.gifs = data;
      }
    })
    .catch((e) => {
      window.dataStore.uiState.error = `Some error occurred: ${e}`;
    })
    .finally(window.renderApp);
}
