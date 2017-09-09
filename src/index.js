import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { AppRoutes } from './routes';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <Router routes={AppRoutes} history={browserHistory} />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

