var thunkMiddleware = function ({ dispatch, getState }) {
    // console.log('Enter thunkMiddleware');
    return function(next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            // console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}

import { createStore, combineReducers, applyMiddleware } from 'redux'

const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)

var actionCreactor=function(state={},action){
    console.log('speaker was called with state', state, 'and action', action)

    switch (action.type) {
      case "SAY":
        return {
          ...state,
          message:action.message
        }

      default:
        return state
    }
}

var reducer=combineReducers({speaker:actionCreactor})

const store_0=finalCreateStore(reducer)

var asyncSayActionCreacter_1=function(message){
   return function(dispatch){
     setTimeout(function(){
       console.log(new Date(),"dispatch now")
       dispatch({
         type:"SAY",message
       })
     })
   }
}

console.log("\n", new Date(), 'Running our async action creator:', "\n")

store_0.dispatch(asyncSayActionCreacter_1({id:11,name:"peter"}))


function logMiddleware ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            console.log('logMiddleware action received:', action)
            return next(action)
        }
    }
}

function discardMiddleware ({ dispatch, getState }) {
    return function(next) {
        return function (action) {
            console.log('discardMiddleware action received:', action)
        }
    }
}
