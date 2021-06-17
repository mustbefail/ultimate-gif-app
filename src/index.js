import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';

ReactDOM.render(
  <BrowserRouter basename="/ultimate-gif-app">
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
