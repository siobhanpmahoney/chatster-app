import React from 'react'
import ActiveChat from './ActiveChat.js'

const Chat = (props) => {
  return (

    <div>

      <div className="chat">
      <h4 onClick={()=>props.onClick(props.chat)} data-id={props.chat.id}>
        {props.chat.title}
      </h4>
    </div>

    </div>
  )
}
export default Chat
