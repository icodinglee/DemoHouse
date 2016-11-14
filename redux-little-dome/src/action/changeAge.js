export function addAge(formType,type) {
  return function(dispatch) {
       console.log(formType)
        dispatch({type:'ADD_AGE',addType:2})
  }
}


export function decAge(formType,type) {
  return function(dispatch) {
       console.log(formType)
        dispatch({type:'DEC_AGE',decType:type})
  }
}

//异步
export function setTime(formType,type) {
  return function(dispatch) {
       console.log(formType)
       setTimeout(function(){
         dispatch({type:'ASY_AGE',asyType:type})
       },1000)

  }
}
