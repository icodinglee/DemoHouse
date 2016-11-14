function ageInfo(age=12,action){
  switch(action.type){
    case 'ADD_AGE':
    console.log("M+++")

      return age * action.addType

    case 'DEC_AGE':
    console.log("M---")
      return age / action.decType

    case 'ASY_AGE':
    console.log("M66")
      return age + action.asyType

    default:
      return age
  }
}

export default ageInfo
