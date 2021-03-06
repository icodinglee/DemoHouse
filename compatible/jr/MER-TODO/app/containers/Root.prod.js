import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../router/routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router routes={routes} history={history} />
      </Provider>
    );
  }
}
Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
};
