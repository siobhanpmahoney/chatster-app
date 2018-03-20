import React from "react";
import FriendList from './FriendList';
import { Button, Menu } from 'semantic-ui-react'


class FriendsContainer extends React.Component {

  render() {
    return (

      <div className="friendsContainer">
        <Menu vertical>

        <FriendList friends={this.props.friends} chats={this.props.chats}/>
        </Menu>
      </div>
    )
  }
}
export default FriendsContainer
