import axios from 'axios'

//异步获取github数据，更新组件state
export function findBio(formType,page) {
  return function(dispatch) {
       console.log("find")
       axios.get('https://api.github.com/users/icodinglee')
         .then(function (res) {
           console.log(res.data.bio);
           dispatch({type:'FIND_BIO',id:res.data.bio})
         })
       .catch(function (error) {
         console.log(error);
       });

  }
}
