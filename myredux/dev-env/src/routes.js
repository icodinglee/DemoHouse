import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { Provider } from "react-redux";
import store from './redux/store';

import App from './ui/App';
import Home from './ui/Home';
import Count from './ui/Count';


export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/count' component={Count} />
      </Route>
    </Router>
  </Provider>
);
