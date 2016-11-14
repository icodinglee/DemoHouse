import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import { addNumber,decNumber} from './action/changeNumber'
import { addAge, decAge ,setTime} from './action/changeAge'
import { findBio } from './action/findBio'
import { browserHistory } from 'react-router';


class App extends React.Component {
  constructor(props){
     super(props);
   }

  addMumber(){
    let { addNumber }=this.props
    addNumber("待用值",10)
  }
  decMumber(){
    let { decNumber }=this.props
    decNumber("待用值",10)
  }
  decAge(){
    let { decAge }=this.props
    decAge("待用值",10)
  }
  setTime(){
    let { setTime }=this.props
    setTime("1",5)
  }
  skip(){
    browserHistory.push('/')
  }
  findMovie(){
    let { findBio }=this.props
    findBio()
  }
  render () {
  let { num , age ,bio}=this.props
  let { addAge }=this.props  //如果在render 里面直接用props里的方法，不能变量赋值，不然会报错
  return  <div>
              { num  } <br />
              <input  type="button" value="+" onClick={this.addMumber.bind(this) }></input>
              <input  type="button" value="-" onClick={this.decMumber.bind(this) }></input><br />
              { age }  <br />
             <input  type="button" value="*" onClick={addAge}></input>
             <input  type="button" value="/" onClick={this.decAge.bind(this)}></input>
             <input  type="button" value="ASY" onClick={this.setTime.bind(this)}></input>
             <input  type="button" value="跳转" onClick={this.skip.bind(this)}></input> <br/>
             { bio }<br/>
           <input  type="button" value="findBio" onClick={this.findMovie.bind(this)}></input>
         </div>
  }
}


const mapStateToProps = (state) => ({
  num:state.num,
  age:state.age,
  bio:state.bio
})

export default connect((mapStateToProps),{
  addNumber,decNumber,addAge,decAge,setTime,findBio
})(App)
