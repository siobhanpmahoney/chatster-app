import React from 'react'
import Chat from './Chat'
import ActiveChat from './ActiveChat'
import { List, Menu } from 'semantic-ui-react'




const ChatList = (props) => {
  console.log("Chatlist", props)

  return(
    <div className="chatList">
      <Menu fluid vertical tabular='right'>

        {props.chats.map((chat) => {

          return <div style={{fontFamily:"Nunito Sans", overflow:"auto"}}>

            <Chat chat={chat.chat}
              chatUser={chat.users.find((user) => {
                return user.id != props.user.user.id
              })}

               key={chat.chat.id} onClick={props.onClick} user={props.user} chats={props.chats} title={chat.chat.title} friends={props.friends} activeChatMessages={props.activeChatMessages} activeChatId={props.chatId} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit}  />

          </div>

        })}

</Menu>
    </div>
  )
}

export default ChatList
