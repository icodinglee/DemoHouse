import React, { Component, PropTypes } from 'react';
import { List } from 'amazeui-touch';

export default class Todo extends Component {
  handleCompleted() {
    this.props.onCompleteTodo(this.props.id);
  }
  handleRedo() {
    this.props.onRedoTodo(this.props.id);
  }
  render() {
    return (
      <List.Item
        title={this.props.text}
        className={this.props.completed ? 'completed' : ''}
        after={
          this.props.completed ? 
          (<span
            onClick={() => this.handleRedo()}
            className="todo-icon">&#xe600;</span>) :
          (<span
            onClick={() => this.handleCompleted()}
            className="todo-icon"
          >&#xe602;</span>)
        }>
      </List.Item>
    );
  }
}
Todo.propTypes = {
  onRedoTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired
};
