function numberInfo(num=0,action){
  switch(action.type){
    case 'ADD_NUMBER':
    console.log("n+++")
    console.log(num)
      return num + action.id

    case 'DEC_NUMBER':
    console.log("n---")
      return num - action.id

    default:
      return num
  }
}

export default numberInfo
