import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
