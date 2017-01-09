import React, { Component, PropTypes } from 'react';
import '../styles/footer.scss';
export default class Footer extends Component {
  handleBtnClick() {
    this.props.onToggleModal();
  }
  render() {
    return (
      <div
        onClick={() => this.handleBtnClick()}
        className="add-btn">
        <span className="btn todo-icon">&#xe601;</span>
      </div>
    );
  }
}
Footer.propTypes = {
  onToggleModal: PropTypes.func.isRequired
};
