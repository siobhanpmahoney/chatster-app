import React from 'react'
import Chat from './Chat'
import ActiveChat from './ActiveChat'



const ChatList = (props) => {

  return(
    <div className="chatList">

        <div>
        {props.chats.map((chat) => {
          return <Chat chat={chat} key={chat.id} onClick={props.onClick} user={props.user} chats={props.chats} friends={props.friends} activeChatMessages={props.activeChatMessages} activeChatId={props.chatId} messageDraftListener={props.messageDraftListener} handleNewMessageSubmit={props.handleNewMessageSubmit}  />

        })}
                </div>

    </div>
  )
}

export default ChatList
