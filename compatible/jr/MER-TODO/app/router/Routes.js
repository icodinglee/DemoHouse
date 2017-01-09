import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import TodoApp from '../components/TodoApp';
import AboutApp from '../components/AboutApp';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoApp} />
    <Route path="/aboutApp" component={AboutApp} />
  </Route>
);
