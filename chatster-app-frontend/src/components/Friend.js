import React from 'react';
import Chat from './Chat'
import { Menu, Dropdown } from 'semantic-ui-react'


class Friend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  

    return(
      <div>
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
    )
  }
}

export default Friend
