export function setCurrentNumberAdd(number) {
  return {
    type:"ADD_NUMBER",
    number
  }
}

function setCurrentNumberSub(number) {
  return {
    type:"SUB_NUMBER",
    number
  }
}

export function addNumber(number) {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(setCurrentNumberAdd(number));
    }, 1000);
  };
}

export function subNumber(number) {
  return dispatch => {
    　//这里的区块可以执行一些异步的操作
      dispatch(setCurrentNumberSub(number));
  };
}
