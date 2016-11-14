function bioInfo(bio="闯关东",action){
  switch(action.type){
    case 'FIND_BIO':
    console.log("FIND")
       bio=action.id
      return bio

    default:
      return bio
  }
}

export default bioInfo
