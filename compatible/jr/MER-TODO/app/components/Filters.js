import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Col
} from 'amazeui-touch';
export default class Filters extends Component {
  handleVisilityClick(filter) {
    this.props.onSetVisibility(filter);
  }
  render() {
    const { visibilityFilter } = this.props;
    return (
      <Grid>
        <Col cols={6}>
          <ul className="filter-title">
            <li>
              <span
                className={ (visibilityFilter === 'ALL') ? 'active' : null }
                onClick={() => this.handleVisilityClick('ALL')}
                >ALL</span>
            </li>
            <li>
              <span
                className={ (visibilityFilter === 'COMPLETED') ? 'active' : null }
                onClick={() => this.handleVisilityClick('COMPLETED')}
                >COMPLETED</span>
            </li>
            <li>
              <span
                className={ (visibilityFilter === 'ACTIVE') ? 'active' : null }
                onClick={() => this.handleVisilityClick('ACTIVE')}
                >ACTIVE</span>
            </li>
          </ul>
        </Col>
      </Grid>
    );
  }
}
Filters.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  onSetVisibility: PropTypes.func.isRequired
};
