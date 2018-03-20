import React from 'react';
import Chat from './Chat'

class Friend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        Friend
        <h4><span className="friendItem"> {this.props.friend.username}</span></h4>
      </div>
    )
  }
}

export default Friend
