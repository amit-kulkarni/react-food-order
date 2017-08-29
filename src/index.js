import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();

