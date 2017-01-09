import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Filters from './Filters';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodoModal from './AddTodoModal';
import { VISIBILITY_FILTERS } from '../actions/constant';
import * as allActionCreators from '../actions/actionCreators';

class TodoApp extends Component {
  render() {
    // 下面几个属性都是通过 connect 方法注入的
    const { visibleTodos, visibilityFilter, showModal, dispatch } = this.props;
    // 经过 bindActionCreators 方法处理过的 action creator 直接使用就可以 dispatch
    const boundActionCreators = bindActionCreators(allActionCreators, dispatch);
    return (
      <div className="root">
        <Filters
          onSetVisibility={boundActionCreators.setVisibility}
          visibilityFilter={visibilityFilter} />
        <TodoList
          onRedoTodo={boundActionCreators.redo}
          onCompleteTodo={boundActionCreators.completeTodo}
          visibleTodos={visibleTodos} />
        <Footer
          onToggleModal={boundActionCreators.toggleModal} />
        <AddTodoModal
          showModal={showModal}
          onAddTodo={boundActionCreators.addTodo}
          onToggleModal={boundActionCreators.toggleModal} />
      </div>
    );
  }
}
TodoApp.propTypes = {
  visibleTodos: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};
function filterTodos(todos, filter) {
  const { ALL, COMPLETED, ACTIVE } = VISIBILITY_FILTERS;
  switch (filter) {
    case ALL:
      return todos;
    case COMPLETED:
      return todos.filter(todo => todo.completed);
    case ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}
/*
 * 返回一个对象
 * 对象里面的方法将被注入到 TodoApp 的 props 里面
 */
function mapStateToProps(state) {
  return {
    visibleTodos: filterTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    showModal: state.showModal
  };
}

// 包装 TodoApp
// 就像这个方法的名字一样，将组件和 redux 的 store connect 起来
// 让 TodoApp 可以使用到 dispatch 和 state
export default connect( mapStateToProps )(TodoApp);
