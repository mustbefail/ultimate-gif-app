import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import dataStore from './data/dataStore.js';
import renderApp from './framework/render.js';
import performSearch from './data/gifsData.js';
import App from './components/App.js';

window.dataStore = dataStore;

window.renderApp = renderApp;
window.performSearch = performSearch;

renderApp(App, 'app');
