import React from 'react'
import ActiveChat from './ActiveChat.js'
import { List, Menu } from 'semantic-ui-react'



const Chat = (props) => {

  if (!props.chatUser) {
    return <div>Loading...</div>
  }
  return (

    <div style={{fontFamily:"Nunito Sans"}}>




          <Menu.Item size='large' onClick={()=>props.onClick(props.chat)} data-id={props.key} style={{fontFamily:"Nunito Sans"}}>
            <b>{props.title}</b><br />
            {props.chatUser.username}
          </Menu.Item>




    </div>
  )

}
export default Chat
