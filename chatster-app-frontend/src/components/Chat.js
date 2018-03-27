import React from 'react'
import ActiveChat from './ActiveChat.js'
import { List, Menu } from 'semantic-ui-react'

  class Chat extends React.Component {
    constructor(props) {
      super(props)
    }

    style = () => {
      if (this.props.chat.id == this.props.activeChat.id) {
        return {fontSize:"1em", color:'#2C3A51', background:"#CDF1F7"}
      } else {
        return {color:'#2C3A51', fontSize:"1em"}
      }
    }

    render() {
      if (!this.props.chatUser) {
        return <div>Loading...</div>
      }

      return (

        <div style={{fontFamily:"Avenir"}}>
          <Menu.Item size='large' style={this.style()} onClick={()=>this.props.onClick(this.props.chat)} data-id={this.props.key}>
            <img src={this.props.chatUser.avatar} style={{width:"25px", borderRadius:"12px", display:"inline", float:"left"}}/>

          <span style={{display:"inlineBlock"}}>

            <span style={{fontFamily:"Gill Sans", fontWeight:"550", margin:"0.5em 0.25em 0.15em 0.5em", padding:"0.5em", display:"inline", display:"inline"}}>{this.props.title}</span><br />
            <span style={{fontFamily:"Avenir", margin:"0.5em 0.25em 0.15em 0.5em", padding:"0.5em", display:"inline"}}>{this.props.chatUser.username}</span>
          </span>
          </Menu.Item>




    </div>
  )
}
}
export default Chat
