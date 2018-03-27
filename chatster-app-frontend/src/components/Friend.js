import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'
import Chat from './Chat'
import { Menu, Dropdown } from 'semantic-ui-react'


class Friend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.chats.length > 0) {
    return(
      <div style={{fontFamily:"Nunito Sans"}}>
        <Dropdown item text={this.props.friend.username} name='friend'>
          <Dropdown.Menu>
            {this.props.chats.map((chat) => {
              return <Dropdown.Item onClick={()=>this.props.updateActiveChat(chat.chat)} data-id={chat.chat.id}>
              {chat.chat.title}
              </Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )} else {
      return <div>Loading..</div>
    }
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.user.user,
    friends: state.user.friends,
    chats: state.user.chats,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Friend));
