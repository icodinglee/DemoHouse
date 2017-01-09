import React, { Component, PropTypes } from 'react';
import Nav from '../components/Nav';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="root">
        <Nav />
        { children }
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object
};
