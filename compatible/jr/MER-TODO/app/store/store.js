import { getMerTodoState } from '../utils/utils';
import rootReducer from '../reducers/reducers';
import { createStore } from 'redux';

let initialState;
if (localStorage.getItem('MER_TODO_STATE')) {
  initialState = getMerTodoState();
} else {
  initialState = {
    todos: [],
    visibilityFilter: 'ALL',
    showModal: false
  };
  localStorage.setItem('MER_TODO_STATE', JSON.stringify(initialState));
  localStorage.setItem('MER_NEXT_TODO_ID', 0);
}

const store = createStore(
  rootReducer,
  initialState
);

export default store;
