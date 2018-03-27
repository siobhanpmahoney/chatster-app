import React from "react";
import FriendList from './FriendList';
import { Button, Menu, Header, Icon } from 'semantic-ui-react'


class FriendsContainer extends React.Component {

  render() {
    return (

      <div className="friendsContainer">
        <Menu fluid vertical tabular="left">

          <Header
            as='h3'
            dividing
            style={{margin: "0.5em", padding:"0.25em", fontFamily:"Gill Sans", fontWeight:"575", color:"#718CA1"}}
            icon='users'
            content='Friends'
            />

        <FriendList friends={this.props.friends} chats={this.props.chats} user={this.props.user} addResponseToState={this.props.addResponseToState} handleCloseChat={this.props.handleCloseChat} handleNewMessageSubmit={this.props.handleNewMessageSubmit} fetchActiveChatInfo={this.props.fetchActiveChatInfo} updateActiveChat={this.props.updateActiveChat} activeChatMessages={this.props.activeChatMessages} activeChat={this.props.activeChat}/>
        </Menu>
      </div>
    )
  }
}
export default FriendsContainer
