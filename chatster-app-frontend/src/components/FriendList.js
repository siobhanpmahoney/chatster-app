import React from 'react'
import Friend from './Friend'
import { Sidebar, Segment, Button, Menu, Icon, Accordian } from 'semantic-ui-react'




const FriendList = (props) => {

  return(
    <div className="friendList" style={{fontFamily:"Nunito Sans"}}>


        {props.friends.map((b) => {
          return <Friend friend={b} chats={props.chats.filter((chat) => chat.users.find((user) => user.id == b.id))} key={b.id} user={props.user} friends={props.friends} addResponseToState={props.addResponseToState} handleCloseChat={props.handleCloseChat} handleNewMessageSubmit={props.handleNewMessageSubmit} fetchActiveChatInfo={props.fetchActiveChatInfo} updateActiveChat={props.updateActiveChat} activeChatMessages={props.activeChatMessages} activeChat={props.activeChat}/>
        })}

    </div>
  )
}

export default FriendList
