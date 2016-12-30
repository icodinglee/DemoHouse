import React, { PropTypes } from 'react';

class Home extends React.Component {
  getStyles(){
   return {
     content: {
       textAlign: 'center',
       lineHeight:"30px"
     }
   }
 }
  render () {
     let styles=this.getStyles();
      return <div>
                <div style={styles.content}>
                  Hello ,This is Home!
                </div>
             </div>
  }
}

export default Home;
