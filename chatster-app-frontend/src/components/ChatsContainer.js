import React from "react";
import ChatList from './ChatList'
import ActiveChatContainer from './ActiveChatContainer'
import { Grid } from 'semantic-ui-react'


class ChatsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeChatMessages: [],
      activeChat: [],
    }
  }

  startNewChat = () => {

  }

//fetching chat archive from backend

// updateActiveChat = (selectChat) => {
//
//   this.fetchActiveChatInfo(selectChat)
// }

// fetchActiveChatInfo = (chat) => {
//   fetch(`http://localhost:3000/api/v1/chats/${chat.id}`)
//   .then(response => response.json())
//   .then(json => {
//     console.log(json)
//     this.setState({
//       activeChatMessages: json.messages,
//       activeChat: chat,
//     })
//   })
//
// }

//sending new message to backend and returning updated backend data
//
// handleNewMessageSubmit = (event, chat, message) => {
//   event.preventDefault()
//
//   let newMessage = {content: message, chat_id: chat.id, user_id: this.props.user.id, chat: chat}
//
//   const url = 'http://localhost:3000/api/v1/chats/' + this.state.activeChat.id +'/messages';
//
//   fetch(url,
//     {
//       method: 'post',
//       headers:{
//         'Content-Type': 'application/json',
//         'Accepts': 'application/json'
//     },
//     body: JSON.stringify({
//       messages: {
//         content: message,
//         chat_id: chat.id,
//         user_id: this.props.user.id,
//         chat: chat
//       }
//     })
//   })
//   .then((response) => response.json())
//   .then(json => {
//     this.addResponseToState(json)
//   })
// }

  // addResponseToState = (json) => {
  //   let currentMessageState = this.state.activeChatMessages.slice()
  //
  //   this.setState({
  //     activeChatMessages: [...currentMessageState, json[json.length-1]]
  //   })
  // }

  // handleCloseChat = (chat) => {
  //   let setChatState = []
  //   let messageState = this.state.activeChatMessages
  //
  //   messageState.splice(0)
  //
  //   this.setState({
  //     activeChatMessages: messageState,
  //     activeChat: setChatState
  //   })
  //
  // }

  render() {

    if (!this.props.user) {
      return<div>loading..</div>
    }


    return (
      <div className="chatsContainer">
        <Grid>

        <Grid.Column width={10} textAlign={"left"}>
          <div>
            <ActiveChatContainer user={this.props.user} user={this.props.user} chat={this.props.activeChat} messages={this.props.activeChatMessages}  handleNewMessageSubmit={this.props.handleNewMessageSubmit} updateChat={this.props.updateActiveChat} handleCloseChat={this.props.handleCloseChat}/>
          </div>
        </Grid.Column>

      <Grid.Column width={4} textAlign={"left"}>
        <div>
          <ChatList chats={this.props.chats} user={this.props.user} onClick={this.props.updateActiveChat}  activeChatMessages={this.props.activeChatMessages} activeChatId={this.props.chatId} messageDraftListener={this.messageDraftListener} handleNewMessageSubmit={this.props.handleNewMessageSubmit} />
        </div>
        </Grid.Column>

        </Grid>
      </div>
    )
  }


}
export default ChatsContainer
