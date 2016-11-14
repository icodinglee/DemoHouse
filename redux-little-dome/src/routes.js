import React from 'react';
import { render } from 'react-dom';
import App from './App'
import newApp from './newApp'
import Home from './Home'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store';

export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Home}>
        <IndexRoute component={newApp} />
        <Route path='/app' component={App} />
      </Route>
    </Router>
  </Provider>
);
