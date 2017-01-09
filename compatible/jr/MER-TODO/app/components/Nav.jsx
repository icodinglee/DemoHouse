import React, { Component } from 'react';
import store from '../store/store';
import { Link } from 'react-router';
import { clearCompleted } from '../actions/actionCreators';
import {
  Grid,
  Col,
  NavBar,
  OffCanvas,
  OffCanvasTrigger
} from 'amazeui-touch';
import '../styles/nav.scss';
import '../styles/sidebar.scss';

class BarsBtn extends Component {
  renderOc() {
    return (
      <OffCanvas className="sidebar">
        <div>
          <h4 className="title">MORE</h4>
          <ul className="list">
            <li><Link
              onClick={() => this.refs.offCanvas.close()}
              to="/">MER TODO</Link></li>
            <li><Link
              onClick={() => this.refs.offCanvas.close()}
              to="/aboutApp">About The App</Link></li>
            <li><a
              href="http://mertensming.github.io/"
              >About Me</a></li>
          </ul>
        </div>
      </OffCanvas>
    );
  }
  render() {
    return (
      <OffCanvasTrigger
        ref="offCanvas"
        offCanvas={this.renderOc()}>
        <span className="todo-icon">&#xe603;</span>
      </OffCanvasTrigger>
    );
  }
}
class ClearCompleted extends Component {
  render() {
    return (
      <span
        onClick={() => store.dispatch(clearCompleted()) }
        className="todo-icon clear-completed">&#xe608;</span>
    );
  }
}
export default class Nav extends Component {
  render() {
    return (
      <Grid collapse className="nav-wrap">
        <Col cols={6}>
          <NavBar
            title={'MER TODO'}
            leftNav={[{
              component: BarsBtn
            }]}
            rightNav={[{
              component: ClearCompleted
            }]}
            >
          </NavBar>
        </Col>
      </Grid>
    );
  }
}
