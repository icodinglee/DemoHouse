import React, { Component, PropTypes } from 'react';
import {
  Modal,
  Field,
  PopoverTrigger,
  Popover
} from 'amazeui-touch';
import '../styles/addTodoModal.scss';

export default class AddTodoModal extends Component {
  handleConfirm() {
    const node = this.refs.input.getFieldDOMNode();
    const text = node.value.trim();
    this.props.onAddTodo(text);
    node.value = '';
    this.handleClose();
  }
  handleClose() {
    this.props.onToggleModal();
  }
  render() {
    const { showModal, onToggleModal } = this.props;
    return (
      <Modal
        role="prompt"
        title="ADD TODO"
        confirmText="ADD"
        cancelText="CANCEL"
        isOpen={showModal}
        className='add-todo-modal'
        onAction={(data) => {
          switch(data) {
            case null:
              this.handleClose();
              break;
            case '':
              this.refs.popo.open();
              break;
            default:
              this.handleConfirm();
          }
        }}
        >
        <PopoverTrigger
          ref="popo"
          popover={<Popover><p>Please Enter The Content!</p></Popover>}>
          <div></div>
        </PopoverTrigger>
        <Field
          type="text"
          placeholder="What do you want to record?"
          ref="input"
          />
      </Modal>
    );
  }
}
AddTodoModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired
};