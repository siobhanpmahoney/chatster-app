import React from 'react'
import Chat from './Chat'
import ActiveChat from './ActiveChat'
import { List } from 'semantic-ui-react'




const ChatList = (props) => {
  console.log("Chatlist", props)
  return(
    <div className="chatList">
      <List animated verticalAlign='middle'>

        {props.chats.map((chat) => {

          return <List.Item>
            <Chat chat={chat.chat}
              chatUser={chat.users.find((user) => {
                return user.id != props.user.user.id
              })}

               key={chat.chat.id} onClick={props.onClick} user={props.user} chats={props.chats} title={chat.chat.title} friends={props.friends} activeChatMessages={props.activeChatMessages} activeChatId={props.chatId} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit}  />
          </List.Item>

        })}

</List>
    </div>
  )
}

export default ChatList
