export function addNumber(formType,page) {
  return function(dispatch) {
       console.log("+++")
        dispatch({type:'ADD_NUMBER',id:page})
  }
}


export function decNumber(formType,page) {
  return function(dispatch) {
       console.log("---")
        dispatch({type:'DEC_NUMBER',id:page})
  }
}
