import React from 'react';
import Chat from './Chat'
import { Menu, Dropdown } from 'semantic-ui-react'


class Friend extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return(
      <div>
        <Dropdown item text={this.props.friend.username} name='friend'>
          <Dropdown.Menu>
            {this.props.chats.map((chat) => {
              return <Dropdown.Item>
                <Chat />
              </Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default Friend
