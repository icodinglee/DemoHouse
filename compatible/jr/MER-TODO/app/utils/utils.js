export function getMerTodoState() {
  return JSON.parse(localStorage.getItem('MER_TODO_STATE'));
}
export function setMerTodoState(newState) {
  localStorage.setItem('MER_TODO_STATE', JSON.stringify(newState));
}
export function saveData(key, value) {
  const rootState = getMerTodoState();
  rootState[key] = value;
  setMerTodoState(rootState);
}
export function getNextTodoId() {
  return Number(localStorage.getItem('MER_NEXT_TODO_ID'));
}
export function setNextTodoId(number) {
  return localStorage.setItem('MER_NEXT_TODO_ID', number);
}
