import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

window.renderApp = renderApp;
window.loadData = loadData;
window.performSearch = performSearch;

renderApp();

function renderApp() {
  document.getElementById('app').innerHTML = `${App()}`;
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





