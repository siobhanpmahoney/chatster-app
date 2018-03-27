import React from 'react'
import Friend from './Friend'
import { Sidebar, Segment, Button, Menu, Icon, Accordian } from 'semantic-ui-react'




const FriendList = (props) => {
  console.log(props.chats)
  return(
    <div className="friendList" style={{fontFamily:"Avenir"}}>


        {props.friends.map((b) => {
          console.log(b.id)
          return <Friend friend={b}
            chats={props.chats.filter((chat) => {
              return chat.users.find((u) => {
                return u.id == b.id
              })})}
            key={b.id} user={props.user} friends={props.friends} addResponseToState={props.addResponseToState} handleCloseChat={props.handleCloseChat} handleNewMessageSubmit={props.handleNewMessageSubmit} fetchActiveChatInfo={props.fetchActiveChatInfo} updateActiveChat={props.updateActiveChat} activeChatMessages={props.activeChatMessages} activeChat={props.activeChat}/>
        })}

    </div>
  )
}

export default FriendList
