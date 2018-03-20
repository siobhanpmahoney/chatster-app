import React from 'react'
import ActiveChat from './ActiveChat.js'
import { List } from 'semantic-ui-react'



const Chat = (props) => {

  if (!props.chatUser) {
    return <div>Loading...</div>
  }
  return (

    <div>

      <div className="chat">

        <List.Content style={{fontFamily:"Avenir", alignment:"left"}}>
          <h4 onClick={()=>props.onClick(props.chat)} data-id={props.key}>
          <List.Header>{props.title}</List.Header>
      </h4>
    {props.chatUser["username"]}
        </List.Content>
    </div>

    </div>
  )

}
export default Chat
