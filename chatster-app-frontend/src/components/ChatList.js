import React from 'react'
import Chat from './Chat'
import ActiveChat from './ActiveChat'
import { List, Menu } from 'semantic-ui-react'




const ChatList = (props) => {

  console.log("Chatlist", props.chats)

  return(
    <div className="chatList">

        {props.chats.map((chat) => {

          return <div style={{fontFamily:"Nunito Sans", overflow:"auto", maxHeight: "200px"}}>

            <Chat chat={chat.chat}
              chatUser={chat.users.find((user) => {
                return user.id != props.user.user.id
              })}

               key={chat.chat.id} onClick={props.onClick} user={props.user} chats={props.chats} title={chat.chat.title} friends={props.friends} activeChatMessages={props.activeChatMessages} activeChatId={props.chatId} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit}  />

          </div>

        })}


    </div>
  )
}

export default ChatList
