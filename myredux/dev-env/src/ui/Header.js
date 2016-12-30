import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Radium from 'radium';

class Hello extends React.Component {
  getStyles(){
   return {
     title: {
       textAlign: 'center',
       lineHeight:"30px"
     },
     nav:{
       padding:"15px",
       fontSize:"16px",
       ':hover':{
         color:"green"
       },
       content:{
         textAlign: 'center'
       }
     }
   }
 }
  render () {
      let styles = this.getStyles();
      const RadiumLink = Radium(Link);
      return <div style={styles.title}>
        <h1 >Hello World,This is Header!</h1>
        <RadiumLink to="/" style={styles.nav}>home</RadiumLink>
        <Link to="/count" style={styles.nav}>count</Link>
      </div>
  }
}

export default Radium(Hello);
