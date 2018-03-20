import React from 'react'
import Friend from './Friend'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'




const FriendList = (props) => {

  return(
    <div className="friendList">


        {props.friends.map((b) => {
          return <Friend friend={b} chats={props.chats.filter((chat) => chat.users.find((user) => user.id == b.id))} key={b.id} />
        })}

    </div>
  )
}

export default FriendList
