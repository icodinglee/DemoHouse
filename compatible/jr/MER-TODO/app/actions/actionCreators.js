import {
  ADD_TODO,
  COMPLETE_TODO,
  REDO_TODO,
  SET_VISIBILITY,
  CLEAR_COMPLETED,
  TOGGLE_MODAL
} from './constant';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
}
export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: {
      id
    }
  };
}
export function redo(id) {
  return {
    type: REDO_TODO,
    payload: {
      id
    }
  };
}
export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED
  };
}
export function setVisibility(filter) {
  return {
    type: SET_VISIBILITY,
    payload: {
      filter
    }
  };
}
export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}
