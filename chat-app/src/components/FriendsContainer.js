import React from "react";
import FriendList from './FriendList';
import { Button, Menu } from 'semantic-ui-react'


class FriendsContainer extends React.Component {

  render() {
    return (

      <div className="friendsContainer">
        <Menu vertical>

        <FriendList friends={this.props.friends} chats={this.props.chats} user={this.props.user} addResponseToState={this.props.addResponseToState} handleCloseChat={this.props.handleCloseChat} handleNewMessageSubmit={this.props.handleNewMessageSubmit} fetchActiveChatInfo={this.props.fetchActiveChatInfo} updateActiveChat={this.props.updateActiveChat} activeChatMessages={this.props.activeChatMessages} activeChat={this.props.activeChat}/>
        </Menu>
      </div>
    )
  }
}
export default FriendsContainer
