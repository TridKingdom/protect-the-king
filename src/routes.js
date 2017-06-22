import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import HomePage from './containers/HomePage/HomePage';
import VillagesPage from './containers/VillagesPage/VillagesPage';
import ScoresPage from './containers/ScoresPage/ScoresPage';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="villages" component={VillagesPage}></Route>
      <Route path="scores" component={ScoresPage}></Route>
  </Route>
);