import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
      return <div>
               <h4>HEADER</h4>
               {this.props.children}
              </div>
  }
}

export default Home;
