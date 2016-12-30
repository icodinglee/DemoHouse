const initialState={
  number:100
}

export default (state = initialState, action = {} ) => {
  switch(action.type){
    case 'ADD_NUMBER':
    return {
      number:action.number+1
    }
    case 'SUB_NUMBER':
    return {
      number:action.number-1
    }
    default:
    return state
  }
}
