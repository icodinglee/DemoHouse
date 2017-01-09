import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import {
  Grid,
  Col,
  List
} from 'amazeui-touch';
import '../styles/todolist.scss';

export default class TodoList extends Component {
  render() {
    const { visibleTodos, onCompleteTodo, onRedoTodo } = this.props;
    return (
      <Grid className="list-wrap">
        <Col cols={6}>
          <List
            className="todo-lists"
            inset
            >
            {visibleTodos.map(todo => {
              return (
                <Todo
                  {...todo}
                  key={todo.id}
                  onCompleteTodo={onCompleteTodo}
                  onRedoTodo={onRedoTodo}
                />
              );
            })}
          </List>
        </Col>
      </Grid>
    );
  }
}
TodoList.propTypes = {
  onRedoTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  visibleTodos: PropTypes.array.isRequired
};
