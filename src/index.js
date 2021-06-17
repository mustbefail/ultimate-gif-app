import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';

ReactDOM.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
  document.getElementById('app'),
);
