import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store/store';
import Root from './containers/Root';
import './styles/icon.scss';
import './styles/main.scss';

const history = syncHistoryWithStore(hashHistory, store);

render(
  <AppContainer className="root">
    <Root history={history} store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (message) => { // eslint-disable-line no-console
      if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
        // Log the error as normally
        orgError.apply(console, [message]);
      }
    };
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot history={history} store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
