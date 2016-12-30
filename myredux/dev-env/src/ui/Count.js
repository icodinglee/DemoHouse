import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNumber , subNumber } from '../redux/action/numberActions';
import RaisedButton from 'material-ui/RaisedButton';

class Count extends React.Component {
  constructor(props){
    super(props)
  }
  getStyles(){
   return {
     container: {
       width:"100%",
       margin:"0 auto",
       textAlign: 'center',
       lineHeight:"30px"
     },
     content:{
       width:"100%",
       margin:"0 auto",
       textAlign:"center"
     },
     btn:{
       margin:"10px",
       width:"40px"
     },
     font:{
       fontSize:"30px"
     }
   }
 }
 addHandleClick(number){
   this.props.addNumber(number)
 }
 subHandleClick(number){
   this.props.subNumber(number)
 }
  render () {
     let styles=this.getStyles();
     const { number } = this.props
      return <div>
                <div style={styles.container}>
                  Hello ,This is Count!
                </div>
                <div style={styles.content}>
                  <RaisedButton label="add" primary={true} style={styles.btn} onClick={this.addHandleClick.bind(this,number)}/>
                  <RaisedButton label="sub" primary={true} style={styles.btn} onClick={this.subHandleClick.bind(this,number)}/>
                  <div style={styles.font}>{number}</div>
                </div>
             </div>
  }
}


Count.propTypes = {
  number: React.PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  number: state.MyNumber.number
})


export default connect(mapStateToProps, {addNumber,subNumber})(Count);
