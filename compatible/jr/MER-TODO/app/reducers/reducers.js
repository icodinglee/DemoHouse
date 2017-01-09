import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  REDO_TODO,
  SET_VISIBILITY,
  CLEAR_COMPLETED,
  TOGGLE_MODAL,
  VISIBILITY_FILTERS
} from '../actions/constant';
import {
  saveData,
  getNextTodoId,
  setNextTodoId
} from '../utils/utils';

function visibilityFilter(state = VISIBILITY_FILTERS.ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY:
      saveData('visibilityFilter', action.payload.filter);
      return action.payload.filter;
    default:
      return state;
  }
}
function todos(state = [], action) {
  let newTodos;
  let id;
  switch(action.type) {
    case ADD_TODO:
      newTodos = [
        ...state,
        {
          text: action.payload.text,
          id: getNextTodoId(),
          completed: false
        }
      ];
      saveData('todos', newTodos);
      setNextTodoId(getNextTodoId() + 1);
      return newTodos;
    case COMPLETE_TODO:
      id = action.payload.id;
      newTodos = state.map(todo => {
        if (todo.id === id) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo;
      });
      saveData('todos', newTodos);
      return newTodos;
    case REDO_TODO:
      id = action.payload.id;
      newTodos = state.map(todo => {
        if (todo.id === id) {
          return Object.assign({}, todo, {
            completed: false
          });
        }
        return todo;
      });
      saveData('todos', newTodos);
      return newTodos;
    case CLEAR_COMPLETED:
      newTodos = state.filter(todo => !todo.completed);
      saveData('todos', newTodos);
      return newTodos;
    default:
      return state;
  }
}
function showModal(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      saveData('showModal', !state);
      return !state;
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  visibilityFilter,
  todos,
  showModal,
  routing
});

export default rootReducer;
